
export interface Section {
    id: string;
    title: string;
    tagline: string;
    advantage: string;
    focus: string;
    questions: string[];
    whyImportant: string;
    actionPlan: { title: string; desc: string }[];
}

export const sections: Section[] = [
    {
        id: "agotado",
        title: "Agotado",
        tagline: "Corre un maratón diario con el tanque vacío",
        advantage: "Alta energía",
        focus: "Combustible biológico y descanso.",
        questions: [
            "Me despierto cansado, sintiendo que el sueño no fue reparador, y me cuesta arrancar el día.",
            "Dependo de estimulantes externos (café, azúcar, bebidas energéticas) para mantener mi nivel de actividad.",
            "Al terminar el trabajo, estoy tan drenado que no tengo energía para mis hobbies, familia o proyectos personales.",
            "A media jornada pierdo claridad: leo la misma línea tres veces y sigo sin entenderla.",
        ],
        whyImportant: "No eres débil, eres un Motor Potente sin Combustible. Tu mente quiere rendir a tope, pero tu cuerpo te está pidiendo a gritos que pares y recargues. No necesitas más disciplina — necesitas más descanso real.",
        actionPlan: [
            { title: "Prioridad: Sueño", desc: "Tu día empieza la noche anterior. Asegura 7-8 horas de descanso real." },
            { title: "Gestión de Energía", desc: "Trabaja en ciclos de energía, no de tiempo. Haz lo difícil cuando tengas más energía." },
            { title: "Descanso Activo", desc: "Ver redes sociales no es descansar. Camina, respira o medita." }
        ]
    },
    {
        id: "saturado",
        title: "Abrumado",
        tagline: "Hace mucho, logra poco de lo que realmente importa",
        advantage: "Claridad de prioridades",
        focus: "Distinguir lo urgente de lo importante.",
        questions: [
            "Mi lista de pendientes crece más rápido de lo que puedo tachar. Solo verla me genera un nudo en el estómago.",
            "Digo \"sí\" a todo el mundo menos a mí mismo. Mi agenda la controlan los demás.",
            "Paso el día entero \"ocupado\", pero al acostarme me pregunto: ¿qué logré realmente hoy? Y la respuesta me frustra.",
            "Descansar me genera culpa. Si no estoy produciendo algo, siento que estoy fallando.",
        ],
        whyImportant: "No te falta compromiso, eres un Héroe Sobrecomprometido. Tu corazón quiere ayudar a todos y hacerlo todo, pero al decir sí a todo, le estás diciendo no a lo que realmente importa: TUS metas.",
        actionPlan: [
            { title: "Esencialismo", desc: "Pregúntate: '¿Es esto absolutamente necesario?'. Si no es un SÍ rotundo, es un NO." },
            { title: "Cómete la Rana", desc: "Haz lo más importante (y usualmente incómodo) a primera hora." },
            { title: "Bloques de Tiempo", desc: "Protege tiempo en tu calendario para TUS prioridades antes de que otros lo llenen." }
        ]
    },
    {
        id: "improvisador",
        title: "Improvisador",
        tagline: "Navega sin mapa y espera llegar a buen puerto",
        advantage: "Planificación efectiva",
        focus: "Organización y flujo de trabajo.",
        questions: [
            "No tengo un plan claro: cada día improviso según lo que surge y espero que las cosas se acomoden solas.",
            "Vivo apagando fuegos que yo mismo encendí por no anticiparme. Soy un bombero permanente de mi propia vida.",
            "No sé exactamente cómo llegar a donde quiero. Avanzo sin rumbo y un día me doy cuenta de que no estoy donde quería estar.",
            "Mis sueños grandes llevan meses (o años) esperando porque \"no es el momento\". Lo urgente siempre gana.",
        ],
        whyImportant: "No eres desorganizado, eres un Estratega sin Mapa. Tu capacidad de adaptarte es enorme, pero sin un sistema que capture y ordene tus ideas, tu genialidad se pierde en el caos del día a día.",
        actionPlan: [
            { title: "Descarga Mental", desc: "Saca TODO de tu cabeza y anótalo en un sistema confiable. Tu mente es para crear, no para almacenar." },
            { title: "Planificación Diaria", desc: "Jamás empieces el día sin un plan. 5 minutos de planificación ahorran 1 hora de ejecución." },
            { title: "Rutinas", desc: "Sistematiza lo repetitivo para no gastar energía decisional en ello." }
        ]
    },
    {
        id: "distraido",
        title: "Distraído",
        tagline: "Su atención está en todas partes menos donde debe",
        advantage: "Enfoque profundo",
        focus: "Capacidad de trabajo profundo.",
        questions: [
            "Mi mano agarra el celular sin que yo se lo pida. \"Solo un segundito\" se convierte en 30 minutos perdidos.",
            "Mi mente salta de un pensamiento a otro como una pelota de ping-pong. Concentrarme 20 minutos se siente como una eternidad.",
            "Hago todo al mismo tiempo y creo que estoy siendo productivo, pero en realidad no termino nada bien.",
            "Cualquier ruido, mensaje o pensamiento me saca del \"flow\". Siento que nunca logro entrar en la zona.",
        ],
        whyImportant: "No te falta inteligencia, eres un Genio Creativo sin Filtro. Tu mente explora mil posibilidades a la vez — eso es un superpoder. Pero sin control, ese superpoder se convierte en tu mayor obstáculo.",
        actionPlan: [
            { title: "Dieta Digital", desc: "Elimina notificaciones. Tu teléfono debe estar en otra habitación cuando trabajas." },
            { title: "Bloques de Enfoque", desc: "Usa la técnica Pomodoro: 25 min de trabajo intenso, 5 min de descanso total." },
            { title: "Monotarea", desc: "Comprométete a tener solo una pestaña del navegador abierta a la vez." }
        ]
    },
    {
        id: "procrastinador",
        title: "Procrastinador Habitual",
        tagline: "Sueña con las metas pero elige la comodidad",
        advantage: "Acción consistente",
        focus: "Velocidad de implementación.",
        questions: [
            "Postergar se volvió mi modo automático. Sé lo que debo hacer, pero siempre elijo lo cómodo: scrolling infinito, series, snacks, cualquier cosa que me dé satisfacción inmediata.",
            "Quiero los resultados, sueño con las metas... pero casi nunca doy los pasos para llegar ahí. Me quedo en la intención sin pasar a la acción.",
            "\"Mañana sí empiezo en serio\" — Me lo digo todas las noches. Y todas las mañanas la historia se repite.",
            "Solo reacciono cuando la presión es máxima y ya no hay tiempo. Mi único motor es la urgencia de última hora.",
        ],
        whyImportant: "No eres flojo, eres un Visionario Atrapado. Ves el resultado final tan claro que la distancia entre donde estás y donde quieres llegar te paraliza. No necesitas más motivación — necesitas empezar más pequeño.",
        actionPlan: [
            { title: "Acción Imperfecta", desc: "Date permiso para hacer un 'borrador basura'. Lo importante es empezar." },
            { title: "Regla de 2 Minutos", desc: "Si toma menos de 2 minutos, hazlo YA. Crea inercia positiva." },
            { title: "Fecha Límite Falsa", desc: "Ponte plazos más cortos para forzarte a terminar y entregar." }
        ]
    },
    {
        id: "evitador",
        title: "Evitador",
        tagline: "Un miedo invisible le impide avanzar aunque quiera con todo",
        advantage: "Seguridad",
        focus: "Saber qué hacer y por qué.",
        questions: [
            "Algo dentro de mí me frena y ni siquiera entiendo qué es. Me siento mal, paralizado, y no puedo explicar por qué. Solo sé que no puedo avanzar.",
            "Mi mente me sabotea con mil razones para no actuar: que no estoy listo, que va a salir mal, que mejor espero. Y sin darme cuenta, el tiempo pasa y sigo en el mismo lugar.",
            "Me importa TANTO hacerlo bien que prefiero no hacerlo. Mi mente me convence de que si no es perfecto, es mejor no intentarlo.",
            "Siento una fuerza invisible más grande que yo que me detiene. Quiero avanzar con todo mi ser, pero es como empujar una pared — me siento impotente y no entiendo por qué.",
        ],
        whyImportant: "No eres un perezoso, eres alguien que Siente Demasiado. Lo que te paraliza no es flojera — es un miedo tan profundo que ni siquiera lo reconoces como miedo. Tu sistema límbico activa un freno de emergencia (perfeccionismo, parálisis por análisis, bloqueo total) porque percibe el riesgo como una amenaza real. No necesitas más valentía — necesitas entender que ese bloqueo es tu mente protegiéndote de algo que en realidad no es peligroso.",
        actionPlan: [
            { title: "La Regla del 1", desc: "Define UNA gran cosa que debes lograr hoy antes de hacer nada más." },
            { title: "Claridad Radical", desc: "Nunca pongas 'Trabajar en proyecto X' en tu lista. Pon 'Escribir el primer párrafo del reporte'." },
            { title: "Micro-pasos", desc: "Si sientes resistencia, reduce la tarea a algo ridículamente pequeño (ej. 'Abrir el documento')." }
        ]
    }
];

export const getEvaluation = (score: number) => {
    // Score range: 4 questions * 6 max score = 24. Min score = 4 (1*4).
    // Zone Green: 4-10
    // Zone Yellow: 11-17
    // Zone Red: 18-24

    if (score >= 18) return { status: "BLOQUEO CRÍTICO", color: "text-red-600", bg: "bg-red-600/10", border: "border-red-600/20" };
    if (score >= 11) return { status: "Zona de Fricción", color: "text-yellow-500", bg: "bg-yellow-500/10", border: "border-yellow-500/20" };
    return { status: "Control Saludable", color: "text-emerald-600", bg: "bg-emerald-600/10", border: "border-emerald-600/20" };
};
