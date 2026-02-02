const categories = [
  {
    id: "salud-fisica",
    label: "Vitalidad y Salud Física",
    low: "Sientes agotamiento constante y tu cuerpo se siente pesado. Tus hábitos de sueño y alimentación están descuidados. Sientes que tu salud te limita en lugar de impulsarte.",
    high: "Te sientes con energía desbordante y fuerza. Duermes reparadoramente y nutres tu cuerpo con consciencia. Tu salud es el motor que te permite disfrutar de cada día al máximo.",
    color: "#8b1538",
  },
  {
    id: "salud-mental",
    label: "Paz Mental y Equilibrio",
    shortLabel: "Paz Mental",
    initials: "PM",
    low: "Vives en un estado de estrés constante o ruido mental. Te cuesta gestionar tus emociones y sientes que las preocupaciones dominan tu día a día.",
    high: "Disfrutas de una mente clara y en calma. Gestionas los retos con resiliencia y mantienes una relación amable y compasiva contigo mismo.",
    color: "#0e5b8f",
  },
  {
    id: "espiritualidad",
    label: "Propósito y Sentido de Vida",
    shortLabel: "Propósito",
    initials: "PV",
    low: "Sientes un vacío o falta de dirección. Te cuesta encontrar significado a tus acciones y te sientes desconectado de tus valores esenciales.",
    high: "Sientes que tu vida tiene un porqué claro. Vives alineado con tus valores, sintiendo gratitud y una conexión profunda con algo más grande que tú.",
    color: "#2aa8c7",
  },
  {
    id: "pareja",
    label: "Amor y Relación de Pareja",
    shortLabel: "Amor",
    initials: "A",
    low: "Si tienes pareja: Sientes desconexión, conflicto o falta de apoyo. Si estás soltero: Te sientes cerrado al amor o repites patrones que no te nutren.",
    high: "Si tienes pareja: Disfrutas de complicidad, comunicación sana y apoyo mutuo. Si estás soltero: Te sientes pleno contigo mismo y abierto a un amor consciente y sano.",
    color: "#63c7c2",
  },
  {
    id: "familia",
    label: "Vínculos Familiares",
    shortLabel: "Familia",
    initials: "F",
    low: "Existen tensiones frecuentes, distancia emocional o falta de comunicación. El entorno familiar se siente como una carga o fuente de estrés.",
    high: "Disfrutas de relaciones basadas en el respeto, el apoyo y la comunicación honesta. Tu familia es un refugio seguro donde puedes ser tú mismo.",
    color: "#6cc1a3",
  },
  {
    id: "amigos",
    label: "Amistad y Comunidad",
    shortLabel: "Amigos",
    initials: "A",
    low: "Te sientes solo o rodeado de relaciones superficiales. Sientes que no tienes a quién recurrir en momentos importantes.",
    high: "Cuentas con un círculo de apoyo sólido y nutritivo. Inviertes tiempo de calidad en amistades que te inspiran y te hacen sentir parte de algo.",
    color: "#f3c04f",
  },
  {
    id: "trabajo",
    label: "Realización Profesional",
    low: "Tu trabajo te drena y no ves propósito en lo que haces. Te sientes estancado, infravalorado o atrapado en una rutina sin sentido.",
    high: "Te sientes realizado y motivado. Usas tus talentos para contribuir de forma significativa y sientes que tu trabajo está alineado con tu misión.",
    color: "#f1952e",
  },
  {
    id: "dinero",
    label: "Libertad y Estabilidad Financiera",
    shortLabel: "Finanzas",
    initials: "EF",
    low: "El dinero es una fuente constante de estrés o preocupación. Vives con desorden financiero o sientes que tus finanzas limitan tus sueños.",
    high: "Manejas tus recursos con maestría y tranquilidad. Tus finanzas te brindan seguridad y son la base para construir el estilo de vida que deseas.",
    color: "#e65461",
  },
  {
    id: "crecimiento",
    label: "Evolución y Crecimiento Personal",
    shortLabel: "Evolución",
    initials: "EP",
    low: "Sientes estancamiento y falta de nuevos desafíos. Te cuesta salir de tu zona de confort o dedicar tiempo a tu propio desarrollo.",
    high: "Estás en constante aprendizaje y expansión. Te desafías a crecer, superas miedos y construyes activamente la mejor versión de ti mismo.",
    color: "#b24a74",
  },
  {
    id: "diversion",
    label: "Disfrute y Recreación",
    low: "La vida se siente como una lista interminable de deberes. Casi no hay espacio para la risa, el juego o el descanso genuino.",
    high: "Priorizas momentos de alegría, ocio y aventura. Sabes desconectar para recargar energías y disfrutas plenamente de los placeres de la vida.",
    color: "#f07f4a",
  },
];











const introSection = document.querySelector("#intro");

const surveySection = document.querySelector("#survey");

const resultsSection = document.querySelector("#results");

const startBtn = document.querySelector("#start-btn");

const userNameInput = document.querySelector("#user-name");

const welcomeText = document.querySelector("#welcome");

const questionsWrap = document.querySelector("#questions");

const resultsBody = document.querySelector("#results-body");
const detailedResults = document.querySelector(".detailed-results");
const reflectionSection = document.querySelector("#reflection");
const resultsMessage = document.querySelector("#results-message");
const showResultsBtn = document.querySelector("#show-results");
const downloadBtn = document.querySelector("#download-btn");
const saveReflectionBtn = document.querySelector("#save-reflection");
const saveReflectionMsg = document.querySelector("#save-reflection-msg");
const avgNow = document.querySelector("#avg-now");
const avgFuture = document.querySelector("#avg-future");

const lowNow = document.querySelector("#low-now");

const gapTop = document.querySelector("#gap-top");

const surveyProgress = document.querySelector("#survey-progress");
const progressText = document.querySelector("#progress-text");

const toggleNowBtn = document.querySelector("#toggle-now");

const toggleFutureBtn = document.querySelector("#toggle-future");
const wheelCanvas = document.querySelector("#wheel");
const ctx = wheelCanvas.getContext("2d");

const improvementReasons = {
  dinero:
    "Al dominar tus finanzas, no solo compras tranquilidad, sino que adquieres la libertad de elegir cómo quieres vivir sin que el dinero sea un obstáculo.",
  trabajo:
    "Encontrar propósito en tu labor transforma cada lunes en una oportunidad de impacto, elevando no solo tu productividad, sino tu felicidad diaria.",
  "salud-fisica":
    "Invertir en tu vitalidad es asegurar que tu cuerpo sea el mejor aliado para alcanzar todos tus otros sueños con la energía necesaria.",
  diversion:
    "El disfrute no es un lujo, es el combustible que mantiene tu creatividad y entusiasmo vivos. Una vida divertida es una vida que vale la pena ser vivida.",
  "salud-mental":
    "Una mente en paz es tu mayor superpoder. Te permite navegar las tormentas con calma y disfrutar de los días soleados con total presencia.",
  espiritualidad:
    "Conectar con tu propósito te da una brújula interna inquebrantable, permitiéndote vivir una vida con significado y paz profunda.",
  amigos:
    "Tener una tribu que te sostenga y te inspire multiplica tus alegrías y divide tus penas, creando un sentido de pertenencia vital.",
  familia:
    "Sanar y fortalecer tus raíces familiares te da la estabilidad emocional necesaria para volar alto y alcanzar tus metas personales.",
  pareja:
    "Un amor consciente y sano es un refugio de crecimiento mutuo, donde ambos se convierten en la mejor versión de sí mismos.",
  crecimiento:
    "Tu compromiso con tu evolución personal garantiza que nunca te conformes con menos de lo que eres capaz de ser y lograr.",
};

const SUPABASE_URL = "https://guifmmxlfjpitoeuodwl.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd1aWZtbXhsZmpwaXRvZXVvZHdsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkxOTM0MzYsImV4cCI6MjA4NDc2OTQzNn0.q5xynLU_IDUf7NhD8gC_1HpdchfFdxsDhfVmESixP8k";
const SUPABASE_TABLE = "Rueda_vida";
const supabaseClient =
  typeof window !== "undefined" && window.supabase && SUPABASE_URL && SUPABASE_ANON_KEY
    ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
    : null;
const state = {
  showNow: true,
  showFutureSolid: false,
  showProjection: false,
  selectedIndex: null,
  resultsUnlocked: false,
  saveId: null,
  saveCreatedAt: null,
};

const buildScale = (namePrefix, category, valueId) => {
  const scale = document.createElement("div");
  scale.className = "scale-slider";
  scale.style.setProperty("--slider-accent", category.color);

  const input = document.createElement("input");
  input.type = "range";
  input.min = "0";
  input.max = "10";
  input.step = "1";
  input.value = "0";
  input.name = `${namePrefix}-${category.id}`;
  input.id = `${namePrefix}-${category.id}`;
  input.dataset.valueTarget = valueId;
  input.setAttribute(
    "aria-label",
    `${namePrefix === "now" ? "\u00bfC\u00f3mo te sientes ahora?" : "\u00bfC\u00f3mo te gustar\u00eda sentirte en 1 a\u00f1o?"} para ${
      category.label
    }`
  );

  scale.appendChild(input);

  return scale;
};


const buildQuestion = (category, index) => {

  const card = document.createElement("div");
  card.className = "question";
  card.style.setProperty("--card-accent", category.color);
  card.style.animationDelay = `${index * 0.1}s`;


  const header = document.createElement("div");

  header.className = "question-header";



  const title = document.createElement("div");

  title.className = "question-title";

  title.textContent = `${index + 1}. ${category.label}`;



  const buttons = document.createElement("div");

  buttons.className = "help-buttons";



  const oneBtn = document.createElement("button");

  oneBtn.type = "button";

  oneBtn.textContent = "Qu\u00e9 es 1";



  const tenBtn = document.createElement("button");

  tenBtn.type = "button";

  tenBtn.textContent = "Qu\u00e9 es 10";



  buttons.appendChild(oneBtn);

  buttons.appendChild(tenBtn);

  header.appendChild(title);

  header.appendChild(buttons);



  const help = document.createElement("div");

  help.className = "help-text";

  let lastHelpText = "";



  const toggleHelp = (title, text) => {
    const isSame = lastHelpText === text;
    lastHelpText = text;
    const items = text
      .split("\n")
      .flatMap((line) => line.split(/(?<=[.!?])\s+/))
      .map((line) => line.trim())
      .filter(Boolean);
    help.innerHTML = `
      <h4>${title}</h4>
      <ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>
    `;
    help.classList.toggle("active", !help.classList.contains("active") || !isSame);
  };


  oneBtn.addEventListener("click", () => {
    toggleHelp("1 → Muy bajo", category.low);
  });


  tenBtn.addEventListener("click", () => {
    toggleHelp("10 → Ideal", category.high);
  });


  const nowGroup = document.createElement("div");

  nowGroup.className = "scale-group";

  const nowValueId = `now-${category.id}-value`;
  nowGroup.innerHTML = `
    <div class="scale-head">
      <div class="scale-title">\u00bfC\u00f3mo te sientes ahora?</div>
      <div class="scale-value" id="${nowValueId}">--</div>
    </div>
    <div class="scale-labels">
      <span>Muy bajo</span>
      <span>Excelente</span>
    </div>
  `;
  nowGroup.insertBefore(buildScale("now", category, nowValueId), nowGroup.querySelector(".scale-labels"));

  const futureGroup = document.createElement("div");
  futureGroup.className = "scale-group";
  const futureValueId = `future-${category.id}-value`;
  futureGroup.innerHTML = `
    <div class="scale-head">
      <div class="scale-title">\u00bfC\u00f3mo te gustar\u00eda sentirte en 1 a\u00f1o?</div>
      <div class="scale-value" id="${futureValueId}">--</div>
    </div>
    <div class="scale-labels">
      <span>Muy bajo</span>
      <span>Excelente</span>
    </div>
  `;
  futureGroup.insertBefore(
    buildScale("future", category, futureValueId),
    futureGroup.querySelector(".scale-labels")
  );


  card.appendChild(header);

  card.appendChild(help);

  card.appendChild(nowGroup);

  card.appendChild(futureGroup);



  return card;

};



const renderQuestions = () => {

  questionsWrap.innerHTML = "";

  categories.forEach((category, index) => {

    questionsWrap.appendChild(buildQuestion(category, index));

  });

};



const getScores = (prefix) =>
  categories.map((category) => {
    const selected = document.querySelector(`input[name="${prefix}-${category.id}"]`);
    return selected ? Number(selected.value) : 0;
  });


const updateSliderUI = (input) => {
  const min = Number(input.min || 0);
  const max = Number(input.max || 10);
  const value = Number(input.value);
  const percent = max === min ? 0 : ((value - min) / (max - min)) * 100;
  input.style.setProperty("--percent", `${percent}%`);
  const targetId = input.dataset.valueTarget;
  if (targetId) {
    const valueEl = document.getElementById(targetId);
    if (valueEl) {
      valueEl.textContent = value > 0 ? value : "--";
    }
  }
};


const average = (values) => {

  const valid = values.filter((value) => value > 0);

  if (valid.length === 0) return 0;

  return valid.reduce((sum, value) => sum + value, 0) / valid.length;

};



const updateSummary = (nowScores, futureScores) => {

  const avgNowValue = average(nowScores);

  const avgFutureValue = average(futureScores);

  avgNow.textContent = avgNowValue ? avgNowValue.toFixed(1) : "--";

  avgFuture.textContent = avgFutureValue ? avgFutureValue.toFixed(1) : "--";



  const validNow = nowScores.filter((value) => value > 0);

  const minNow = validNow.length ? Math.min(...validNow) : 0;

  const lowestAreasRaw = categories
    .filter((category, index) => nowScores[index] === minNow)
    .map((category) => category.label);

  let lowestAreasText = "";
  if (lowestAreasRaw.length > 3) {
    lowestAreasText = `Varias áreas (incl. ${lowestAreasRaw[0]})`;
  } else {
    lowestAreasText = lowestAreasRaw.join(", ");
  }

  lowNow.textContent = minNow ? `${lowestAreasText} (${minNow})` : "--";



  const gaps = categories.map((category, index) => {

    const gap = (futureScores[index] || 0) - (nowScores[index] || 0);

    return { label: category.label, gap };

  });

  gaps.sort((a, b) => b.gap - a.gap);

  const topGap = gaps[0];

  gapTop.textContent = topGap && topGap.gap > 0 ? `${topGap.label} (+${topGap.gap})` : "--";

};



const updateTable = (nowScores, futureScores) => {
  resultsBody.innerHTML = "";
  categories.forEach((category, index) => {
    const nowValue = nowScores[index] || 0;
    const futureValue = futureScores[index] || 0;
    const diff = futureValue - nowValue;
    const nowPercent = nowValue ? (nowValue / 10) * 100 : 0;
    const futurePercent = futureValue ? (futureValue / 10) * 100 : 0;
    const diffPercent = Math.min((Math.abs(diff) / 10) * 100, 100);
    const diffLabel = diff !== 0 ? (diff > 0 ? `+${diff}` : diff) : "0";
    const diffColor = diff > 0 ? "#f4a261" : diff < 0 ? "#b24a74" : "#e3d8cc";
    const projectionFill = hexToRgba(category.color, 0.18);
    const projectionStroke = hexToRgba(category.color, 0.6);

    const row = document.createElement("tr");
    row.style.setProperty("--row-color", category.color);
    const reason = improvementReasons[category.id] || "";
    row.innerHTML = `
      <td data-label="Área">${category.label}</td>
      <td>
        <div class="value-bar single">
          <span class="bar-track">
            <span class="bar-fill" style="width:${nowPercent}%; background:${category.color};"></span>
            <span class="bar-projection" style="width:${futurePercent}%; background:${projectionFill}; border-color:${projectionStroke};"></span>
          </span>
          <div class="bar-values">
            <div class="bar-values__cell">
              <span>Hoy</span>
              <strong>${nowValue || "--"}</strong>
            </div>
            <div class="bar-values__cell">
              <span>1 año</span>
              <strong>${futureValue || "--"}</strong>
            </div>
            <div class="bar-values__cell">
              <span>Diferencia</span>
              <strong>${diffLabel}</strong>
            </div>
          </div>
        </div>
      </td>
      <td data-label="Motivación">
        <div class="reason-head">
          <button class="reason-toggle" type="button" aria-expanded="false" aria-label="Mostrar razones"></button>
        </div>
        <div class="reason-text">${reason}</div>
      </td>
    `;
    resultsBody.appendChild(row);
  });
};


const resizeCanvas = () => {

  const parentWidth = wheelCanvas.parentElement.clientWidth;

  const size = Math.min(parentWidth, 520);

  const safeSize = parentWidth < 420 ? Math.max(280, size) : Math.max(260, size - 32);

  const dpr = window.devicePixelRatio || 1;



  wheelCanvas.width = safeSize * dpr;

  wheelCanvas.height = safeSize * dpr;

  wheelCanvas.style.width = `${safeSize}px`;

  wheelCanvas.style.height = `${safeSize}px`;

  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

};



const hexToRgba = (hex, alpha) => {

  const value = hex.replace("#", "");

  const bigint = parseInt(value, 16);

  const r = (bigint >> 16) & 255;

  const g = (bigint >> 8) & 255;

  const b = bigint & 255;

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;

};



const splitLabel = (label) => {

  const words = label.split(" ");

  if (words.length <= 2) return [label];



  let bestSplit = 0;

  let bestDiff = Infinity;

  for (let i = 1; i < words.length; i += 1) {

    const left = words.slice(0, i).join(" ");

    const right = words.slice(i).join(" ");

    const diff = Math.abs(left.length - right.length);

    if (diff < bestDiff) {

      bestSplit = i;

      bestDiff = diff;

    }

  }

  return [words.slice(0, bestSplit).join(" "), words.slice(bestSplit).join(" ")];

};



const drawWheel = (nowScores, futureScores) => {

  const width = wheelCanvas.width / (window.devicePixelRatio || 1);

  const height = wheelCanvas.height / (window.devicePixelRatio || 1);

  const isCompact = Math.min(width, height) < 360;

  const centerX = width / 2;

  const centerY = height / 2;

  const outerRadius = Math.min(width, height) / 2 - 12;

  const labelRingOuter = outerRadius;

  const labelRingInner = outerRadius - (isCompact ? 30 : 40);

  const radius = labelRingInner - 6;

  const rings = 10;

  const baseLabelFontSize = isCompact

    ? Math.max(6, Math.min(9, Math.floor(radius / 16)))

    : Math.max(8, Math.min(11, Math.floor(radius / 15)));

  const labelRadius = (labelRingOuter + labelRingInner) / 2;



  ctx.clearRect(0, 0, width, height);

  ctx.save();

  ctx.translate(centerX, centerY);



  const sliceGap = Math.PI / (categories.length * 12);

  const halfGap = sliceGap / 2;



  categories.forEach((category, index) => {

    const startAngle = (Math.PI * 2 * index) / categories.length - Math.PI / 2;

    const endAngle = (Math.PI * 2 * (index + 1)) / categories.length - Math.PI / 2;



    ctx.beginPath();

    ctx.moveTo(0, 0);

    ctx.arc(0, 0, radius, startAngle + halfGap, endAngle - halfGap);

    ctx.closePath();

    ctx.fillStyle = hexToRgba(category.color, 0.18);

    ctx.fill();



    ctx.beginPath();

    ctx.arc(0, 0, labelRingOuter, startAngle + halfGap, endAngle - halfGap);

    ctx.arc(0, 0, labelRingInner, endAngle - halfGap, startAngle + halfGap, true);

    ctx.closePath();

    ctx.fillStyle = category.color;

    ctx.fill();

    ctx.strokeStyle = "rgba(255, 255, 255, 0.9)";

    ctx.lineWidth = 2;

    ctx.stroke();

  });



  ctx.strokeStyle = "rgba(93, 85, 75, 0.2)";

  ctx.lineWidth = 1;



  // Intentional: no perpendicular tick marks for a cleaner wheel.

  const drawSolidSlice = (value, index) => {
    if (!value) return;
    const category = categories[index];
    const startAngle = (Math.PI * 2 * index) / categories.length - Math.PI / 2;
    const endAngle = (Math.PI * 2 * (index + 1)) / categories.length - Math.PI / 2;
    const scaled = (value / 10) * radius;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.arc(0, 0, scaled, startAngle + halfGap, endAngle - halfGap);
    ctx.closePath();
    ctx.fillStyle = hexToRgba(category.color, 0.88);
    ctx.fill();
  };

  const drawFutureLine = (value, index) => {
    if (!value) return;
    const category = categories[index];
    const startAngle = (Math.PI * 2 * index) / categories.length - Math.PI / 2;
    const endAngle = (Math.PI * 2 * (index + 1)) / categories.length - Math.PI / 2;
    const scaled = (value / 10) * radius;
    ctx.save();
    ctx.beginPath();
    ctx.arc(0, 0, scaled, startAngle + halfGap, endAngle - halfGap);
    ctx.setLineDash([6, 6]);
    ctx.strokeStyle = hexToRgba(category.color, 0.6);
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.restore();
  };

  const drawNowOutline = (value, index) => {
    if (!value) return;
    const category = categories[index];
    const startAngle = (Math.PI * 2 * index) / categories.length - Math.PI / 2;
    const endAngle = (Math.PI * 2 * (index + 1)) / categories.length - Math.PI / 2;
    const scaled = (value / 10) * radius;
    ctx.save();
    ctx.beginPath();
    ctx.arc(0, 0, scaled, startAngle + halfGap, endAngle - halfGap);
    ctx.strokeStyle = hexToRgba(category.color, 0.7);
    ctx.lineWidth = 1.6;
    ctx.stroke();
    ctx.restore();
  };

  const drawHatchSlice = (innerValue, outerValue, index) => {
    if (!innerValue || !outerValue) return;
    const inner = Math.min(innerValue, outerValue);
    const outer = Math.max(innerValue, outerValue);
    if (outer === inner) return;
    const category = categories[index];
    const startAngle = (Math.PI * 2 * index) / categories.length - Math.PI / 2;
    const endAngle = (Math.PI * 2 * (index + 1)) / categories.length - Math.PI / 2;
    const innerRadius = (inner / 10) * radius;
    const outerRadius = (outer / 10) * radius;
    ctx.save();
    ctx.beginPath();
    ctx.arc(0, 0, outerRadius, startAngle + halfGap, endAngle - halfGap);
    ctx.arc(0, 0, innerRadius, endAngle - halfGap, startAngle + halfGap, true);
    ctx.closePath();
    ctx.clip();

    ctx.rotate(Math.PI / 4);
    const hatchSize = radius * 2;
    ctx.strokeStyle = hexToRgba(category.color, 0.18);
    ctx.lineWidth = 1;
    const step = 6;
    for (let x = -hatchSize; x <= hatchSize; x += step) {
      ctx.beginPath();
      ctx.moveTo(x, -hatchSize);
      ctx.lineTo(x, hatchSize);
      ctx.stroke();
    }
    ctx.restore();
  };

  const showNowSolid = state.showNow;
  const showFutureSolid = state.showFutureSolid;
  const showFutureLine = state.showNow && state.showProjection;
  const showHatch = state.showNow && state.showProjection;

  if (showNowSolid) {
    nowScores.forEach((value, index) => {
      drawSolidSlice(value, index);
    });
  }

  if (showFutureSolid) {
    futureScores.forEach((value, index) => {
      drawSolidSlice(value, index);
    });
  }

  if (showHatch) {
    nowScores.forEach((value, index) => {
      drawNowOutline(value, index);
      drawHatchSlice(value, futureScores[index] || 0, index);
    });
  }

  ctx.strokeStyle = "rgba(255, 255, 255, 0.65)";

  ctx.lineWidth = 1;



  for (let i = 1; i <= rings; i += 1) {

    ctx.beginPath();

    ctx.arc(0, 0, (radius / rings) * i, 0, Math.PI * 2);

    ctx.stroke();

  }



  ctx.strokeStyle = "rgba(255, 255, 255, 0.85)";

  ctx.lineWidth = 3;



  categories.forEach((category, index) => {

    const angle = (Math.PI * 2 * index) / categories.length - Math.PI / 2;

    ctx.beginPath();

    ctx.moveTo(0, 0);

    ctx.lineTo(Math.cos(angle) * labelRingOuter, Math.sin(angle) * labelRingOuter);

    ctx.stroke();

  });

  if (showFutureLine) {
    futureScores.forEach((value, index) => {
      drawFutureLine(value, index);
    });
  }


  categories.forEach((category, index) => {

    const angle = (Math.PI * 2 * (index + 0.5)) / categories.length - Math.PI / 2;

    const x = Math.cos(angle) * labelRadius;

    const y = Math.sin(angle) * labelRadius;

    ctx.save();

    ctx.translate(x, y);

    ctx.rotate(angle + Math.PI / 2);

    const sourceLabel = category.shortLabel || category.label;

    const labelText = sourceLabel.replace(/\s+y\s+/gi, " ");

    const lines = splitLabel(labelText.toUpperCase());

    const longest = lines.reduce((max, line) => Math.max(max, line.length), 0);

    const labelFontSize = longest > 18 ? baseLabelFontSize - 1 : baseLabelFontSize;

    ctx.font = `${labelFontSize}px 'Sora', sans-serif`;
    ctx.fillStyle = "#ffffff";

    ctx.textAlign = "center";

    ctx.textBaseline = "middle";



    if (lines.length === 1) {

      ctx.fillText(lines[0], 0, 0);

    } else {

      ctx.fillText(lines[0], 0, -labelFontSize * 0.55);

      ctx.fillText(lines[1], 0, labelFontSize * 0.55);

    }

    ctx.restore();

  });

  if (state.selectedIndex === null) {
    const hintFontSize = isCompact ? 9 : 11;
    const hintLines = ["Toca para ver", "los valores"];
    ctx.font = `${hintFontSize}px 'Sora', sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    const lineHeight = hintFontSize * 1.2;
    const blockHeight = lineHeight * hintLines.length;
    const blockWidth = Math.max(...hintLines.map((line) => ctx.measureText(line).width));
    const paddingX = 10;
    const paddingY = 6;
    const boxWidth = blockWidth + paddingX * 2;
    const boxHeight = blockHeight + paddingY * 2;
    const boxX = -boxWidth / 2;
    const boxY = -labelRingOuter + 10;

    ctx.fillStyle = "#eaf6ff";
    ctx.strokeStyle = "rgba(37, 99, 235, 0.2)";
    ctx.lineWidth = 1;
    const radius = 8;
    ctx.beginPath();
    ctx.moveTo(boxX + radius, boxY);
    ctx.lineTo(boxX + boxWidth - radius, boxY);
    ctx.quadraticCurveTo(boxX + boxWidth, boxY, boxX + boxWidth, boxY + radius);
    ctx.lineTo(boxX + boxWidth, boxY + boxHeight - radius);
    ctx.quadraticCurveTo(
      boxX + boxWidth,
      boxY + boxHeight,
      boxX + boxWidth - radius,
      boxY + boxHeight
    );
    ctx.lineTo(boxX + radius, boxY + boxHeight);
    ctx.quadraticCurveTo(boxX, boxY + boxHeight, boxX, boxY + boxHeight - radius);
    ctx.lineTo(boxX, boxY + radius);
    ctx.quadraticCurveTo(boxX, boxY, boxX + radius, boxY);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "#101827";
    hintLines.forEach((line, index) => {
      const y = boxY + paddingY + lineHeight * (index + 0.5);
      ctx.fillText(line, 0, y);
    });
  }



  const drawPointLabel = (value, index, color, offset) => {

    if (!value) return;

    const angle = (Math.PI * 2 * (index + 0.5)) / categories.length - Math.PI / 2;

    const scaled = (value / 10) * radius;

    const x = Math.cos(angle) * scaled + Math.cos(angle) * offset;

    const y = Math.sin(angle) * scaled + Math.sin(angle) * offset;



    ctx.beginPath();

    ctx.fillStyle = "rgba(255, 255, 255, 0.85)";

    ctx.arc(x, y, isCompact ? 8 : 9, 0, Math.PI * 2);

    ctx.fill();



    ctx.fillStyle = color;

    ctx.font = `${isCompact ? 9 : 10}px 'Sora', sans-serif`;
    ctx.textAlign = "center";

    ctx.textBaseline = "middle";

    ctx.fillText(value, x, y);

  };



  if (state.selectedIndex !== null) {

    categories.forEach((category, index) => {

      if (index !== state.selectedIndex) return;

      const nowValue = nowScores[index];

      const futureValue = futureScores[index];

      const hasNow = state.showNow && nowValue;
      const hasFuture = (state.showFutureSolid || (state.showNow && state.showProjection)) && futureValue;



      const nowLabelColor = category.color;
      const futureLabelColor = hexToRgba(category.color, 0.7);

      if (hasNow && hasFuture && nowValue === futureValue) {
        drawPointLabel(nowValue, index, nowLabelColor, 12);
        return;
      }

      if (hasNow) {
        drawPointLabel(nowValue, index, nowLabelColor, 8);
      }
      if (hasFuture) {
        drawPointLabel(futureValue, index, futureLabelColor, 16);
      }

    });

  }



  ctx.restore();

};



const updateAll = () => {

  const nowScores = getScores("now");

  const futureScores = getScores("future");

  updateSummary(nowScores, futureScores);



  const answered = Array.from(document.querySelectorAll(".scale-slider input[type=range]")).filter(
    (input) => Number(input.value) > 0
  ).length;
  const total = categories.length * 2;

  const percent = Math.round((answered / total) * 100);
  if (surveyProgress) surveyProgress.style.width = `${percent}%`;
  if (progressText) progressText.textContent = `${percent}% completado`;

  const completed = answered >= total;
  if (!completed) {
    state.resultsUnlocked = false;
  }
  if (showResultsBtn) {
    showResultsBtn.disabled = !completed;
    showResultsBtn.hidden = false;
  }
  resultsSection.hidden = !(completed && state.resultsUnlocked);
  if (detailedResults) {
    detailedResults.hidden = resultsSection.hidden;
  }
  if (reflectionSection) {
    reflectionSection.hidden = !state.resultsUnlocked;
  }
  if (resultsMessage) {
    resultsMessage.hidden = resultsSection.hidden;
    if (resultsSection.hidden) {
      resultsMessage.classList.remove("show");
    }
  }

  if (!resultsSection.hidden) {
    resizeCanvas();
    drawWheel(nowScores, futureScores);
  }
};


const saveAnswers = async () => {
  if (!supabaseClient || SUPABASE_URL.includes("YOUR_PROJECT") || SUPABASE_ANON_KEY === "YOUR_ANON_KEY") {
    console.warn("Supabase not configured; skipping save.");
    return;
  }
  const nowScores = getScores("now");
  const futureScores = getScores("future");
  const name = userNameInput.value.trim();
  if (!state.saveId) {
    state.saveId =
      typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}`;
  }
  if (!state.saveCreatedAt) {
    state.saveCreatedAt = new Date().toISOString();
  }
  const createdAt = state.saveCreatedAt;
  const reflectionAnswers = Array.from(document.querySelectorAll(".reflection-input")).map((input) =>
    input.value.trim()
  );
  const payload = {
    id: state.saveId,
    name: name || null,
    created_at: createdAt,
  };
  categories.forEach((category, index) => {
    const key = category.id.replace(/-/g, "_");
    payload[`${key}_now`] = nowScores[index] || 0;
    payload[`${key}_future`] = futureScores[index] || 0;
  });
  reflectionAnswers.forEach((answer, index) => {
    payload[`ref_q${index + 1}`] = answer || null;
  });
  const { error } = await supabaseClient.from(SUPABASE_TABLE).upsert(payload, { onConflict: "id" });
  if (error) {
    console.error("Supabase insert failed:", error);
  }
};

startBtn.addEventListener("click", () => {
  introSection.classList.add("intro--compact");
  surveySection.hidden = false;
  resultsSection.hidden = true;

  const name = userNameInput.value.trim();
  welcomeText.textContent = name
    ? `Hola ${name}, aquí comienza el viaje`
    : "Aquí comienza el viaje";

  const offset = 24;
  const surveyTop = surveySection.getBoundingClientRect().top + window.scrollY;
  const introBottom = introSection.getBoundingClientRect().bottom + window.scrollY;
  const minScroll = introBottom + 8;
  const top = Math.max(surveyTop - offset, minScroll);
  window.scrollTo({ top, behavior: "smooth" });
});
if (showResultsBtn) {
  showResultsBtn.addEventListener("click", () => {
    if (showResultsBtn.disabled) return;
    state.resultsUnlocked = true;
    showResultsBtn.classList.remove("pressed");
    void showResultsBtn.offsetWidth;
    showResultsBtn.classList.add("pressed");
    updateAll();
    const nowScores = getScores("now");
    const futureScores = getScores("future");
    updateTable(nowScores, futureScores);
    saveAnswers();
    if (resultsMessage) {
      resultsMessage.classList.add("show");
    }
    surveySection.hidden = true;
    window.scrollTo({ top: 0, behavior: "auto" });

    const animateCards = () => {
      if (resultsMessage) {
        resultsMessage.classList.remove("results-rise");
        void resultsMessage.offsetWidth;
        resultsMessage.classList.add("results-rise");
      }
      resultsSection.classList.remove("results-rise");
      void resultsSection.offsetWidth;
      resultsSection.classList.add("results-rise");
    };

    requestAnimationFrame(animateCards);
  });
}

const downloadWheel = () => {
  const link = document.createElement("a");
  const name = userNameInput.value.trim() || "mi";
  link.download = `rueda-de-la-vida-${name}.png`;

  // Create a temporary canvas to add a background (since the main one might be transparent)
  const tempCanvas = document.createElement("canvas");
  tempCanvas.width = wheelCanvas.width;
  tempCanvas.height = wheelCanvas.height;
  const tempCtx = tempCanvas.getContext("2d");

  // Fill background
  tempCtx.fillStyle = "#ffffff";
  tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);

  // Draw the original wheel onto the temp canvas
  tempCtx.drawImage(wheelCanvas, 0, 0);

  link.href = tempCanvas.toDataURL("image/png");
  link.click();
};

if (downloadBtn) {
  downloadBtn.addEventListener("click", downloadWheel);
}

if (saveReflectionBtn) {
  saveReflectionBtn.addEventListener("click", () => {
    saveAnswers();
    if (saveReflectionMsg) {
      saveReflectionMsg.textContent = "Respuestas salvadas";
      saveReflectionMsg.classList.remove("show");
      void saveReflectionMsg.offsetWidth;
      saveReflectionMsg.classList.add("show");
    }
  });
}

toggleNowBtn.addEventListener("click", () => {
  state.showFutureSolid = !state.showFutureSolid;
  state.showNow = !state.showFutureSolid;
  toggleNowBtn.textContent = state.showFutureSolid ? "Mostrar hoy" : "Mostrar 1 a\u00f1o";
  updateAll();
});



toggleFutureBtn.addEventListener("click", () => {
  state.showProjection = !state.showProjection;
  toggleFutureBtn.textContent = state.showProjection ? "Ocultar proyecci\u00f3n" : "Mostrar proyecci\u00f3n";
  updateAll();
});



window.addEventListener("resize", () => {

  resizeCanvas();

  const nowScores = getScores("now");
  const futureScores = getScores("future");
  updateSummary(nowScores, futureScores);
  if (!resultsSection.hidden) {
    drawWheel(nowScores, futureScores);
  }

});



wheelCanvas.addEventListener("click", (event) => {

  const rect = wheelCanvas.getBoundingClientRect();

  const dpr = window.devicePixelRatio || 1;

  const scaleX = wheelCanvas.width / rect.width;

  const scaleY = wheelCanvas.height / rect.height;

  const x = ((event.clientX - rect.left) * scaleX) / dpr;

  const y = ((event.clientY - rect.top) * scaleY) / dpr;

  const width = wheelCanvas.width / dpr;

  const height = wheelCanvas.height / dpr;

  const centerX = width / 2;

  const centerY = height / 2;

  const dx = x - centerX;

  const dy = y - centerY;

  const distance = Math.hypot(dx, dy);

  const outerRadius = Math.min(width, height) / 2 - 12;



  if (distance > outerRadius) {

    state.selectedIndex = null;

    updateAll();

    return;

  }



  let angle = Math.atan2(dy, dx);

  angle = (angle + Math.PI / 2 + Math.PI * 2) % (Math.PI * 2);

  const slice = Math.floor((angle / (Math.PI * 2)) * categories.length);

  state.selectedIndex = state.selectedIndex === slice ? null : slice;

  updateAll();

});



questionsWrap.addEventListener("input", (event) => {
  if (event.target.matches("input[type=range]")) {
    updateSliderUI(event.target);
    updateAll();
  }
});

questionsWrap.addEventListener("change", (event) => {
  if (event.target.matches("input[type=range]")) {
    updateSliderUI(event.target);
    updateAll();
  }
});

document.addEventListener("click", (event) => {
  const toggle = event.target.closest(".hint-toggle");
  if (!toggle) return;
  const id = toggle.getAttribute("aria-controls");
  if (!id) return;
  const hint = document.getElementById(id);
  if (!hint) return;
  const isOpen = !hint.hasAttribute("hidden");
  if (isOpen) {
    hint.setAttribute("hidden", "");
  } else {
    hint.removeAttribute("hidden");
  }
  toggle.setAttribute("aria-expanded", String(!isOpen));
});


/*
const markResultsScrolling = () => {
  resultsBody.dataset.scrolling = "true";
  clearTimeout(resultsBody._scrollTimer);
  resultsBody._scrollTimer = setTimeout(() => {
    resultsBody.dataset.scrolling = "false";
  }, 180);
};

resultsBody.addEventListener("scroll", markResultsScrolling, { passive: true });
*/

resultsBody.addEventListener("pointerup", (event) => {
  if (event.pointerType === "touch" && resultsBody.dataset.dragging === "true") {
    resultsBody.dataset.dragging = "false";
    return;
  }
  const toggle = event.target.closest("button.reason-toggle");
  if (!toggle || event.target !== toggle) return;
  const text = toggle.parentElement?.nextElementSibling;
  if (!text) return;
  const isOpen = text.classList.toggle("active");
  toggle.setAttribute("aria-expanded", String(isOpen));
  toggle.setAttribute("aria-label", isOpen ? "Ocultar razones" : "Mostrar razones");
});

resultsBody.addEventListener("touchstart", (event) => {
  const touch = event.touches[0];
  if (!touch) return;
  resultsBody.dataset.dragging = "false";
  resultsBody.dataset.touchStartY = `${touch.clientY}`;
});

resultsBody.addEventListener("touchmove", (event) => {
  const touch = event.touches[0];
  const startY = Number(resultsBody.dataset.touchStartY || "0");
  if (!touch) return;
  if (Math.abs(touch.clientY - startY) > 14) {
    resultsBody.dataset.dragging = "true";
  }
});

renderQuestions();
document.querySelectorAll(".scale-slider input[type=range]").forEach((input) => {
  updateSliderUI(input);
});
resizeCanvas();
updateAll();














