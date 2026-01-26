const categories = [

  {

    id: "salud-fisica",

    label: "Salud física y vitalidad",

    low:

      "Te sientes sin energía la mayor parte del tiempo, poca fuerza o resistencia. Hábitos muy desordenados (duermes mal, comes mal, casi no te mueves). Tu cuerpo te limita y afecta tu calidad de vida.",

    high:

      "Te sientes fuerte, con alta energía y buena vitalidad. Duermes y comes bien la mayor parte del tiempo, te mueves con constancia. Tu cuerpo te acompaña para hacer lo que quieres con vitalidad. No es un cuerpo perfecto, es tu máximo saludable ideal.",

    color: "#8b1538",

  },

  {

    id: "salud-mental",

    label: "Salud mental",

    shortLabel: "Salud mental",

    initials: "SM",

    low:

      "Vives con estrés/ansiedad/tristeza o irritación constante. Te tratas muy mal por dentro. Te cuesta regular emociones y concentrarte. Te sientes en el fondo emocional la mayor parte del tiempo.",

    high:

      "Te sientes en paz la mayor parte del tiempo. Emocionalmente estable, con buena autoestima y autocompasión. Manejas el estrés y recuperas rápido el equilibrio. Tienes claridad mental y presencia.",

    color: "#0e5b8f",

  },

  {

    id: "espiritualidad",

    label: "Sentido de vida y espiritualidad",

    shortLabel: "Sentido vida",

    initials: "SV",

    low:

      "Sientes vacío, desconexión o falta de propósito. Hay poca paz interna y casi nada te nutre por dentro. Te cuesta conectar con significado o valores.",

    high:

      "Sientes un propósito claro o una dirección que te guía. Conectas con significado, gratitud y paz interna con frecuencia. Tienes prácticas (espirituales o personales) que te nutren y te alinean.",

    color: "#2aa8c7",

  },

  {

    id: "pareja",

    label: "Pareja y amor",

    shortLabel: "Pareja",

    initials: "P",

    low:

      "Si tienes pareja. Relación dolorosa o inexistente con mucha insatisfacción. Poco apoyo, mala comunicación, inseguridad fuerte, falta de respeto/intimidad o sensación de que estarías mejor solo.\n\nSi estás soltero. Te sientes \"cerrado\" al amor. Eliges mal constantemente o te quedas en vínculos no disponibles. Sientes que \"necesitas\" pareja para estar bien o te convenciste de que \"no puedes\" amar.",

    high:

      "Si tienes pareja. Te sientes amado y apoyado. Hay buena comunicación, confianza, intimidad y tiempo de calidad. Se alinean en valores y futuro, y la relación suma a tu vida.\n\nSi estás soltero: Estás bien contigo mismo y abierto a una relación. Tienes claridad de lo que buscas, límites sanos. Tomas acciones reales para conocer a alguien compatible. Te sientes capaz de amar y dejarte amar.",

    color: "#63c7c2",

  },

  {

    id: "familia",

    label: "Familia",

    shortLabel: "Familia",

    initials: "F",

    low:

      "Te sientes poco apoyado, incomprendido o en conflicto constante. No puedes hablar con honestidad o hay distancia/resentimiento. Te pesa o te drena.",

    high:

      "Hay apoyo y respeto. Puedes comunicarte y ser tú mismo. Te sientes valorado y aportas desde un lugar sano (con límites cuando hace falta).",

    color: "#6cc1a3",

  },

  {

    id: "amigos",

    label: "Amigos - Comunidad",

    shortLabel: "Amigos",

    initials: "A",

    low:

      "Te sientes solo o rodeado de relaciones superficiales/tóxicas. No tienes con quién contar o casi no inviertes tiempo en vínculos. Poco sentido de comunidad.",

    high:

      "Tienes amigos cercanos y confiables, te nutren y tú nutres. Hay tiempo de calidad y apoyo mutuo. Te sientes parte de una comunidad.",

    color: "#f3c04f",

  },

  {

    id: "trabajo",

    label: "Trabajo - Misión",

    low:

      "Odias tu trabajo o te drena profundamente. No usas tus habilidades, no ves futuro, te sientes atrapado o desconectado. No hay crecimiento.",

    high:

      "Te encanta lo que haces o lo sientes alineado con tu misión. Usas tus talentos, disfrutas el ambiente y las personas. Creces, y sientes propósito en tu contribución.",

    color: "#f1952e",

  },

  {

    id: "dinero",

    label: "Dinero y estilo de vida",

    shortLabel: "Dinero",

    initials: "D",

    low:

      "Vives con preocupación constante por dinero, desorden financiero, deudas/estrés. No sabes en qué se va tu plata o no cubres lo básico. Tu futuro se siente frágil.",

    high:

      "Manejas bien tus finanzas. Te alcanza para lo importante, tienes tranquilidad y seguridad presente/futura. Tu estilo de vida es sostenible y coherente con tus prioridades.",

    color: "#e65461",

  },

  {

    id: "crecimiento",

    label: "Crecimiento personal y aprendizaje",

    shortLabel: "Crecimiento",

    initials: "C",

    low:

      "Sientes estancamiento. Casi no aprendes ni avanzas en metas personales. Poca disciplina o dirección para crecer.",

    high:

      "Aprendes y te desarrollas constantemente, tienes metas claras y avanzas. Te sientes expandiéndote y construyendo la versión de ti que quieres.",

    color: "#b24a74",

  },

  {

    id: "diversion",

    label: "Diversión",

    low:

      "Casi no hay diversión ni descanso. Todo se siente obligación/estrés. No te das tiempo para ocio o disfrute y la vida se siente pesada.",

    high:

      "Creas tiempo frecuente para diversión, risa y hobbies. Descansas bien, disfrutas momentos cotidianos y también espacios tipo vacaciones. Sientes que estás viviendo una vida que te gusta.",

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
const saveReflectionBtn = document.querySelector("#save-reflection");
const saveReflectionMsg = document.querySelector("#save-reflection-msg");
const avgNow = document.querySelector("#avg-now");
const avgFuture = document.querySelector("#avg-future");

const lowNow = document.querySelector("#low-now");

const gapTop = document.querySelector("#gap-top");

const toggleNowBtn = document.querySelector("#toggle-now");

const toggleFutureBtn = document.querySelector("#toggle-future");
const wheelCanvas = document.querySelector("#wheel");
const ctx = wheelCanvas.getContext("2d");

const improvementReasons = {
  dinero:
    "Al mejorar esta área, ganas tranquilidad y seguridad financiera. Te sientes más en control de tus recursos, puedes tomar mejores decisiones económicas y reducir el estrés relacionado con el dinero, lo que te permite disfrutar más de la vida y planificar con confianza tu futuro.",
  trabajo:
    "Cuando fortaleces esta categoría, ganas mayor sentido de propósito en tu trabajo. Aprovechas mejor tus talentos, te sientes más motivado en tu día a día y experimentas mayor satisfacción profesional, lo que impacta positivamente en tu bienestar general.",
  "salud-fisica":
    "Mejorar esta área te aporta más energía, vitalidad y bienestar físico. Te sientes más fuerte, saludable y equilibrado, lo que te permite rendir mejor, prevenir enfermedades y disfrutar plenamente de tu vida diaria.",
  diversion:
    "Al desarrollar esta categoría, ganas más momentos de felicidad genuina. Aprendes a priorizar lo que te entusiasma, a gestionar mejor tu energía y a vivir con mayor ligereza, creando una vida llena de experiencias que te recargan y te hacen sentir bien.",
  "salud-mental":
    "Cuando mejoras tu salud mental, ganas claridad, enfoque y resiliencia. Manejas mejor el estrés, tomas decisiones con mayor consciencia y fortaleces tu equilibrio emocional, lo que te permite afrontar los retos con mayor calma y eficacia.",
  espiritualidad:
    "Al fortalecer esta área, ganas una conexión más profunda contigo mismo y con lo que da sentido a tu vida. Experimentas mayor paz interior, autenticidad y propósito, lo que te ayuda a vivir de forma alineada con tus valores.",
  amigos:
    "Mejorar esta categoría te permite construir relaciones más sólidas y significativas. Ganas apoyo emocional, confianza y un mayor sentido de pertenencia, elementos clave para una vida social enriquecedora y satisfactoria.",
  familia:
    "Al trabajar en esta área, ganas relaciones familiares más sanas y equilibradas. Mejora la comunicación, el entendimiento mutuo y el apoyo emocional, creando un entorno familiar más estable y armonioso.",
  pareja:
    "Cuando fortaleces esta categoría, ganas relaciones románticas más plenas y conscientes. Disfrutas de mayor conexión emocional, confianza y complicidad, construyendo vínculos afectivos alineados con tus necesidades y valores.",
  crecimiento:
    "Al mejorar esta área, ganas una sensación constante de progreso y evolución. Desarrollas nuevos conocimientos y habilidades, estableces metas claras y refuerzas tu confianza para crear la vida que deseas.",
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

  const lowestAreas = categories

    .filter((category, index) => nowScores[index] === minNow)

    .map((category) => category.label);

  lowNow.textContent = minNow ? `${lowestAreas.join(", ")} (${minNow})` : "--";



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














