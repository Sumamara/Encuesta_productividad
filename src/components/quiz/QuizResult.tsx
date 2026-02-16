import { sections, getEvaluation } from "./quizData";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, ChevronDown, ChevronUp, Info, Trophy, Zap, Target, Layout, ScanEye, Hourglass, Rocket } from "lucide-react";
import { useState } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip } from 'recharts';


interface QuizResultProps {
    scores: Record<string, number>;
    onRetake: () => void;
    userName?: string;
}

// Configuration for the "Wheel of Life" style
const SECTION_CONFIG: Record<string, { color: string; icon: any; textColor: string }> = {
    agotado: { color: "#f59e0b", icon: Zap, textColor: "#000" },          // Amber (Energy) - Black text
    saturado: { color: "#ef4444", icon: Target, textColor: "#fff" },   // Red (Target/Priority) - White text
    improvisador: { color: "#3b82f6", icon: Layout, textColor: "#fff" },     // Blue (Systems) - White text
    distraido: { color: "#14b8a6", icon: ScanEye, textColor: "#fff" },       // Teal (Focus) - White text
    procrastinador: { color: "#8b5cf6", icon: Hourglass, textColor: "#fff" }, // Purple (Discipline/Time) - White text
    evitador: { color: "#10b981", icon: Rocket, textColor: "#fff" },      // Emerald (Action) - White text
};

const BASE_OUTER_RADIUS = 105;

const renderActiveShape = (props: any) => {
    const { cx, cy, innerRadius, startAngle, endAngle, fill, payload } = props;
    // Safe access to score with fallback
    const score = (payload && typeof payload.realScore === 'number') ? payload.realScore : 0;
    const maxScore = 24;



    // Dynamic radius based on score
    // Use BASE_OUTER_RADIUS to calculate the actual radius
    // The props.outerRadius might be expanded by Recharts on hover, so we ignore it here
    // and strictly calculate radius based on score.
    const actualRadius = innerRadius + (BASE_OUTER_RADIUS - innerRadius) * (score / maxScore);

    return (
        <g>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={actualRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
                stroke="#fff"
                strokeWidth={2}
                cornerRadius={4}
            />
        </g>
    );
};

// Custom Label for Selected Slice (Score %) - Displayed in Center
const renderScoreLabel = (props: any, expandedSection: string | null) => {
    const { cx, cy, payload } = props;
    if (payload.sectionId !== expandedSection) return null;

    const score = Math.round((payload.realScore / 24) * 100);

    // Color based on evaluation status
    const evalColor = payload.realScore >= 18 ? '#dc2626'   // red - Bloqueo Crítico
        : payload.realScore >= 11 ? '#f59e0b'   // amber - Zona de Fricción
            : '#059669';                             // emerald - Control Saludable

    return (
        <g style={{ pointerEvents: 'none' }}>
            <circle
                cx={cx}
                cy={cy}
                r={24}
                fill="white"
                stroke={evalColor}
                strokeWidth={3}
                style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))' }}
            />
            <text
                x={cx}
                y={cy}
                dy={1}
                fill={evalColor}
                textAnchor="middle"
                dominantBaseline="middle"
                fontWeight="800"
                fontSize={14}
            >
                {score}%
            </text>
        </g>
    );
};

const QuizResult = ({ scores, onRetake, userName }: QuizResultProps) => {
    const [expandedSection, setExpandedSection] = useState<string | null>(null);

    // Prepare data for Rose Chart
    const roseData = [
        { name: 'El Agotado', realScore: scores['agotado'] || 0, sectionId: 'agotado' },
        { name: 'El Saturado', realScore: scores['saturado'] || 0, sectionId: 'saturado' },
        { name: 'El Improvisador', realScore: scores['improvisador'] || 0, sectionId: 'improvisador' },
        { name: 'El Distraído', realScore: scores['distraido'] || 0, sectionId: 'distraido' },
        { name: 'El Procrastinador', realScore: scores['procrastinador'] || 0, sectionId: 'procrastinador' },
        { name: 'El Evitador', realScore: scores['evitador'] || 0, sectionId: 'evitador' },
    ].map(item => {
        const config = SECTION_CONFIG[item.sectionId];
        // Calculate radius in data to let Recharts handle the shape naturally

        return {
            ...item,
            value: 1, // Equal angles
            fill: config.color,
            icon: config.icon,
            textColor: config.textColor
        };
    });

    // Emoji icons for each section (rendered as text, no SVG icon needed)
    const SECTION_EMOJI: Record<string, string> = {
        agotado: '⚡',
        saturado: '🎯',
        improvisador: '📋',
        distraido: '👁',
        procrastinador: '⏳',
        evitador: '🚀',
    };

    // Custom Label for Outer Ring (Emoji + Text)
    const renderOuterLabel = (props: any) => {
        const { cx, cy, midAngle, innerRadius, outerRadius, index } = props;
        const RADIAN = Math.PI / 180;
        const labelRadius = (innerRadius + outerRadius) / 2;

        const x = cx + labelRadius * Math.cos(-midAngle * RADIAN);
        const y = cy + labelRadius * Math.sin(-midAngle * RADIAN);
        const rotateAngle = -midAngle + 90;

        const item = roseData[index];
        const label = item.name.replace('El ', '');
        const emoji = SECTION_EMOJI[item.sectionId] || '';

        return (
            <g transform={`translate(${x}, ${y}) rotate(${rotateAngle})`} style={{ pointerEvents: 'none' }}>
                {/* Emoji + Text label - centered in outer ring */}
                <text
                    x={0}
                    y={0}
                    dy="0.35em"
                    textAnchor="middle"
                    dominantBaseline="central"
                    fill="#ffffff"
                    fontSize={11}
                    fontWeight="900"
                    style={{ textTransform: 'uppercase', letterSpacing: '0.5px', textShadow: '0 1px 2px rgba(0,0,0,0.35)' }}
                >
                    {emoji} {label}
                </text>
            </g>
        );
    };

    // Handle click on Rose Chart slice
    const handleSliceClick = (data: any) => {
        if (!data || !data.sectionId) return;
        // Toggle selection: if already selected, clear it; otherwise set it.
        setExpandedSection(prev => prev === data.sectionId ? null : data.sectionId);
    };


    // 1. Sort sections by score (DESCENDING) - Highest first
    const sortedSections = [...sections].sort((a, b) => {
        return (scores[b.id] || 0) - (scores[a.id] || 0);
    });

    const weakestSection = sortedSections[0];
    const weakestScore = scores[weakestSection.id];
    const weakestEvaluation = getEvaluation(weakestScore);
    const strongestSection = sortedSections[sortedSections.length - 1];
    const strongestScore = scores[strongestSection.id];

    return (
        <div className="w-full max-w-5xl animate-fade-in text-center space-y-12 pb-20">

            {/* 0. RADAR CHART (Wheel of Life Style) */}
            <div className="space-y-4 pt-4 border-b">
                <p className="text-sm font-bold uppercase tracking-widest text-primary/80">
                    {userName ? `Hola ${userName}, ` : ""}estos son tus resultados:
                </p>
                <div className="space-y-1">
                    <h2 className="text-2xl font-bold">Tu Mapa de Bloqueos</h2>
                    <p className="text-muted-foreground text-sm">Mientras más grande el área, más fuerte es el bloqueo</p>
                </div>

                <div className="h-[380px] w-full flex justify-center relative">
                    {/* Hint overlay - shows when no section is selected */}
                    {!expandedSection && (
                        <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
                            <p className="text-sm text-muted-foreground font-medium bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-border/50 animate-pulse">
                                👆 Toca para ver el porcentaje
                            </p>
                        </div>
                    )}
                    <div className="relative z-20 w-full h-full" style={{ outline: 'none' }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                {/* 1. Grid Lines (Concentric Dashed Circles) */}
                                {[26, 52, 78, 104].map((radius, i) => (
                                    <Pie
                                        key={`grid-${i}`}
                                        data={[{ value: 1 }]}
                                        dataKey="value"
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={radius - 1}
                                        outerRadius={radius}
                                        fill="none"
                                        stroke="#cbd5e1"
                                        strokeWidth={1}
                                        strokeDasharray="4 4"
                                        isAnimationActive={false}
                                    />
                                ))}

                                {/* 2. Background Tracks (Full Capacity) */}
                                <Pie
                                    data={roseData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={0}
                                    outerRadius={BASE_OUTER_RADIUS}
                                    dataKey="value"
                                    isAnimationActive={false}
                                    stroke="#fff"
                                    strokeWidth={2}
                                    onClick={handleSliceClick}
                                    style={{ cursor: 'pointer' }}
                                    cursor="none"
                                >
                                    {roseData.map((entry, index) => (
                                        <Cell key={`bg-cell-${index}`} fill={entry.fill} fillOpacity={0.15} style={{ cursor: 'pointer' }} />
                                    ))}
                                </Pie>

                                {/* 3. Data Slices (Actual Score - Variable Radius Always) */}
                                {/* Click logic enables/disables expansion in list */}
                                <Pie
                                    data={roseData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={0}
                                    dataKey="value"
                                    activeIndex={roseData.map((_, i) => i)}
                                    activeShape={renderActiveShape}
                                    isAnimationActive={true}
                                    stroke="#fff"
                                    strokeWidth={2}
                                    onClick={handleSliceClick}
                                    style={{ cursor: 'pointer', outline: 'none' }}
                                    label={(props) => renderScoreLabel(props, expandedSection)}
                                    labelLine={false}
                                    cursor="none"
                                >
                                    {roseData.map((entry, index) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={entry.fill}
                                            fillOpacity={0.9}
                                            style={{ cursor: 'pointer', outline: 'none' }}
                                        />
                                    ))}
                                </Pie>

                                {/* 4. Outer Ring (Label Tabs) */}
                                <Pie
                                    data={roseData}
                                    dataKey="value"
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={115}
                                    outerRadius={155}
                                    paddingAngle={3}
                                    cornerRadius={5}
                                    labelLine={false}
                                    label={renderOuterLabel}
                                    isAnimationActive={true}
                                    onClick={handleSliceClick}
                                    style={{ cursor: 'pointer' }}
                                    cursor="none"
                                >
                                    {roseData.map((entry, index) => (
                                        <Cell key={`ring-${index}`} fill={entry.fill} stroke={entry.fill} strokeWidth={1} style={{ cursor: 'pointer' }} />
                                    ))}
                                </Pie>


                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            {/* Hero Result - WEAKEST Area (Focus for Improvement) */}
            <div className="space-y-6">
                <div className="space-y-4">
                    <p className="text-sm font-bold uppercase tracking-widest text-primary/80">Tu mayor bloqueo tiene nombre, eres un</p>
                    <h1 className="text-4xl md:text-6xl font-black text-foreground tracking-tight">
                        {weakestSection.title}
                    </h1>
                    <p className="text-lg text-muted-foreground italic">
                        {weakestSection.tagline}
                    </p>
                </div>

                <div className="flex justify-center items-center">
                    <div className={`px-5 py-1.5 rounded-full border-2 text-base font-bold ${weakestEvaluation.color} ${weakestEvaluation.bg} ${weakestEvaluation.border}`}>
                        Puntuación: {Math.round((weakestScore / 24) * 100)}%
                    </div>
                </div>

                {/* Details ONLY for Weakest Area */}
                <div className="max-w-4xl mx-auto p-6 md:p-10 bg-card border rounded-3xl shadow-sm text-left grid gap-8 md:gap-12 md:grid-cols-2">
                    {/* Why Important */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-sm">
                            <Info className="h-4 w-4" />
                            ¿Por qué es importante?
                        </div>
                        <p className="text-muted-foreground leading-relaxed text-lg">
                            {weakestSection.whyImportant}
                        </p>
                    </div>

                    {/* Action Plan */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-sm">
                            <CheckCircle2 className="h-4 w-4" />
                            Plan de Acción
                        </div>
                        <ul className="space-y-4">
                            {weakestSection.actionPlan.map((action, idx) => (
                                <li key={idx} className="flex gap-4">
                                    <div className="h-8 w-8 shrink-0 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                                        {idx + 1}
                                    </div>
                                    <span>
                                        <strong className="text-foreground block mb-1">{action.title}</strong>
                                        <span className="text-muted-foreground leading-snug">{action.desc}</span>
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Strongest Area Banner */}
            <div className="space-y-4">
                <h3 className="text-center font-bold uppercase tracking-widest text-primary/80 text-sm">
                    Tu mayor fortaleza es
                </h3>
                <div className="w-full bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-3xl p-8 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-6 opacity-10">
                        <Trophy className="w-32 h-32 text-green-600" />
                    </div>

                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                        <div className="p-4 bg-green-100/80 rounded-full text-green-700 shrink-0">
                            <Trophy className="h-8 w-8" />
                        </div>
                        <div className="space-y-2">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase">
                                <span>Puntuación: {Math.round((strongestScore / 24) * 100)}%</span>
                            </div>
                            <h3 className="text-3xl font-black text-green-900 leading-tight">
                                {strongestSection.advantage}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>

            {/* Full Breakdown - List (Ascending) */}
            <div id="full-breakdown" className="space-y-6 text-left max-w-4xl mx-auto">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 border-b pb-4">
                    <h2 className="text-xl font-bold">Tu Perfil Completo</h2>
                    <span className="text-sm text-muted-foreground">De mayor a menor puntuación</span>
                </div>

                <div className="grid gap-4">
                    {sortedSections.map((section) => {
                        const score = scores[section.id];
                        const evaluation = getEvaluation(score);
                        const isExpanded = expandedSection === section.id;

                        return (
                            <div
                                key={section.id}
                                id={`section-${section.id}`}
                                className="bg-muted/20 rounded-xl overflow-hidden transition-all duration-300"
                            >
                                <button
                                    onClick={() => setExpandedSection(isExpanded ? null : section.id)}
                                    className="w-full flex items-center justify-between p-3 sm:p-4 gap-3 sm:gap-4 hover:bg-muted/30 text-left transition-colors"
                                >
                                    <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                                        <div className={`h-10 px-2 sm:px-3 shrink-0 rounded-lg flex items-center justify-center font-bold text-xs sm:text-sm border ${evaluation.bg} ${evaluation.color} ${evaluation.border}`}>
                                            {Math.round((score / 24) * 100)}%
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider font-semibold">{section.advantage}</p>
                                            <h3 className="font-bold text-base sm:text-lg leading-tight line-clamp-2 pr-1">{section.title}</h3>
                                            <p className="text-xs text-muted-foreground line-clamp-2 leading-tight mt-0.5">{section.focus}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 shrink-0">
                                        <div className={`text-[10px] sm:text-xs font-bold uppercase px-2 py-1 sm:px-3 sm:py-1 rounded-full whitespace-nowrap ${evaluation.bg} ${evaluation.color}`}>
                                            {evaluation.status}
                                        </div>
                                        {isExpanded ? (
                                            <ChevronUp className="h-5 w-5 text-muted-foreground" />
                                        ) : (
                                            <ChevronDown className="h-5 w-5 text-muted-foreground" />
                                        )}
                                    </div>
                                </button>

                                {isExpanded && (
                                    <div className="px-4 pb-4 pt-0 animate-in slide-in-from-top-2 fade-in duration-200">
                                        <div className="p-4 bg-background/50 rounded-lg border border-border/50 text-sm space-y-2">
                                            <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-xs">
                                                <Info className="h-3 w-3" />
                                                ¿Por qué es importante?
                                            </div>
                                            <p className="text-muted-foreground leading-relaxed">
                                                {section.whyImportant}
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Final CTA */}
            <div className="flex justify-center">
                <Button
                    variant="outline"
                    size="lg"
                    onClick={onRetake}
                    className="text-muted-foreground hover:text-foreground"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Volver a empezar
                </Button>
            </div>
        </div>
    );
};

export default QuizResult;
