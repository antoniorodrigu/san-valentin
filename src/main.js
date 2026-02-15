import "./style.css";
import * as THREE from "three";
import { gsap } from "gsap";

const app = document.querySelector("#app");
const baseUrl = (import.meta.env.BASE_URL || "/").replace(/\/?$/, "/");
const assetPath = (file) => `${baseUrl}${String(file).replace(/^\/+/, "")}`;

app.innerHTML = `
  <canvas id="scene" aria-label="Detalle romantico 3D para Britney"></canvas>
  <div class="nebula-layer"></div>
  <div class="bg-glow"></div>
  <div id="floatingHearts" class="floating-hearts" aria-hidden="true"></div>
  <div id="sparkDust" class="spark-dust" aria-hidden="true"></div>
  <div id="shootingStars" class="shooting-stars" aria-hidden="true"></div>
  <section class="hud">
    <p class="tag">14 de febrero</p>
    <h1> Mi osita Britney, Eres mi estrella más brillante </h1>
    <p class="lead">Osita, desde que llegaste a mi vida, todo tiene sentido… porque tú eres el latido que le da vida a mi corazón</p>
    <button id="revealButton" type="button">te amo osita</button>
  </section>
  <section id="messagePanel" class="message-panel" aria-live="polite">
    <h2>para mi Britney hermosa...</h2>
    <div id="letterViewport" class="letter-viewport">
      <p id="letterContent" class="letter-content">Mi amor, nuestra historia comenzo en un momento y en un lugar tan extrano que jamas imagine que ese dia iba a marcar el inicio de lo mas hermoso que me ha pasado en la vida; poco a poco nos fuimos conociendo, entre risas, conversaciones sinceras y sentimientos que crecian sin que nos dieramos cuenta, hasta que el carino se transformo en un amor profundo y verdadero. No fue facil al principio, tuvimos problemas y momentos que nos pusieron a prueba, pero en lugar de rendirnos decidimos luchar, cambiar, madurar y aprender a apoyarnos, convirtiendo cada dificultad en una razon mas para quedarnos. Hoy seguimos de pie, mas fuertes, mas unidos y mas conscientes de lo que valemos juntos, demostrando que el amor real no es perfecto, pero si valiente y decidido; gracias por existir, por creer en nosotros y por caminar a mi lado, porque si pudiera volver a ese primer dia tan inesperado, te elegiria una y mil veces mas, ya que eres la historia mas bonita que he escrito con el corazon.</p>
    </div>
    <p class="signature">tu osito</p>
    <button id="openTimelineButton" class="timeline-open-btn" type="button">click mi amor</button>
  </section>
  <section id="timelinePanel" class="timeline-panel" aria-hidden="true">
    <article class="timeline-card">
      <div class="timeline-backdrop" aria-hidden="true"></div>
      <header class="timeline-head">
        <h3>Te amo mi Britney...</h3>
        <button id="closeTimelineButton" class="timeline-close-btn" type="button">Volver a la carta</button>
      </header>
      <div class="timeline-nav">
        <button id="timelinePrevButton" class="timeline-scroll-btn" type="button" aria-label="Capitulo anterior">
          Anterior
        </button>
        <div id="timelineDots" class="timeline-dots" aria-hidden="true"></div>
        <button id="timelineNextButton" class="timeline-scroll-btn" type="button" aria-label="Capitulo siguiente">
          Siguiente
        </button>
      </div>
      <div id="timelineTrack" class="timeline-track">
        <span id="timelineProgress" class="timeline-progress" aria-hidden="true"></span>
        <div class="timeline-item" data-step="01">
          <figure class="timeline-media">
            <img class="timeline-photo" data-photo="timeline-1" src="${assetPath("timeline-1.jpg")}" alt="Antes de nosotros">
          </figure>
          <div class="timeline-copy">
            <p class="timeline-kicker">Capitulo 1</p>
            <h4>Antes de nosotros</h4>
            <p>Eramos dos personas viviendo nuestras vidas sin imaginar que el destino ya estaba preparando nuestro encuentro.</p>
          </div>
        </div>
        <div class="timeline-item" data-step="02">
          <figure class="timeline-media">
            <img class="timeline-photo" data-photo="timeline-2" src="${assetPath("timeline-2.jpg")}" alt="El dia inesperado">
          </figure>
          <div class="timeline-copy">
            <p class="timeline-kicker">Capitulo 2</p>
            <h4>El dia inesperado</h4>
            <p>En un momento extrano, cuando menos lo esperaba, apareciste tu y desde ese instante algo dentro de mi cambio.</p>
          </div>
        </div>
        <div class="timeline-item" data-step="03">
          <figure class="timeline-media">
            <img class="timeline-photo" data-photo="timeline-3" src="${assetPath("timeline-3.jpg")}" alt="Las primeras palabras">
          </figure>
          <div class="timeline-copy">
            <p class="timeline-kicker">Capitulo 3</p>
            <h4>Las primeras palabras</h4>
            <p>Conversaciones simples que poco a poco se volvieron necesarias, risas que se transformaron en costumbre y miradas que empezaron a decir mas que cualquier frase.</p>
          </div>
        </div>
        <div class="timeline-item" data-step="04">
          <figure class="timeline-media">
            <img class="timeline-photo" data-photo="timeline-4" src="${assetPath("timeline-4.jpg")}" alt="Cuando entendimos que era amor">
          </figure>
          <div class="timeline-copy">
            <p class="timeline-kicker">Capitulo 4</p>
            <h4>Cuando entendimos que era amor</h4>
            <p>Sin darnos cuenta ya no era solo carino, era sentir paz al hablar contigo, era pensarte todo el dia, era querer construir algo real.</p>
          </div>
        </div>
        <div class="timeline-item" data-step="05">
          <figure class="timeline-media">
            <img class="timeline-photo" data-photo="timeline-5" src="${assetPath("timeline-5.jpg")}" alt="Las pruebas">
          </figure>
          <div class="timeline-copy">
            <p class="timeline-kicker">Capitulo 5</p>
            <h4>Las pruebas</h4>
            <p>Tuvimos dificultades, diferencias y momentos duros, pero nunca soltamos nuestras manos; aprendimos a cambiar, a crecer y a luchar por lo que sentiamos.</p>
          </div>
        </div>
        <div class="timeline-item" data-step="06">
          <figure class="timeline-media">
            <img class="timeline-photo" data-photo="timeline-6" src="${assetPath("timeline-6.jpg")}" alt="Hoy y siempre">
          </figure>
          <div class="timeline-copy">
            <p class="timeline-kicker">Capitulo 6</p>
            <h4>Hoy y siempre</h4>
            <p>No somos perfectos, pero somos fuertes. Nos apoyamos, seguimos adelante y elegimos amarnos todos los dias. Y si volviera atras, volveria a elegirte sin dudar.</p>
          </div>
        </div>
      </div>
    </article>
  </section>
`;

const canvas = document.querySelector("#scene");
const revealButton = document.querySelector("#revealButton");
const messagePanel = document.querySelector("#messagePanel");
const letterViewport = document.querySelector("#letterViewport");
const signature = document.querySelector(".signature");
const openTimelineButton = document.querySelector("#openTimelineButton");
const timelinePanel = document.querySelector("#timelinePanel");
const closeTimelineButton = document.querySelector("#closeTimelineButton");
const timelinePrevButton = document.querySelector("#timelinePrevButton");
const timelineNextButton = document.querySelector("#timelineNextButton");
const timelineDots = document.querySelector("#timelineDots");
const timelineItems = [...document.querySelectorAll(".timeline-item")];
const timelineCard = document.querySelector(".timeline-card");
const timelineTrack = document.querySelector("#timelineTrack");
const timelineBackdrop = document.querySelector(".timeline-backdrop");
const timelinePhotos = [...document.querySelectorAll(".timeline-photo")];
const timelineProgress = document.querySelector("#timelineProgress");
const floatingHearts = document.querySelector("#floatingHearts");
const sparkDust = document.querySelector("#sparkDust");
const shootingStars = document.querySelector("#shootingStars");
const nebulaLayer = document.querySelector(".nebula-layer");

timelineItems.forEach((item, index) => {
  item.style.setProperty("--item-index", String(index));
  item.style.setProperty("--item-delay", `${120 + index * 85}ms`);
  item.style.setProperty("--item-tilt", `${(Math.random() * 1 - 0.5).toFixed(2)}deg`);
});

function spawnFloatingIcons(container, className, count, symbols, minSize, maxSize) {
  for (let i = 0; i < count; i += 1) {
    const icon = document.createElement("span");
    icon.className = className;
    icon.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    icon.style.left = `${(Math.random() * 100).toFixed(2)}%`;
    icon.style.fontSize = `${(minSize + Math.random() * (maxSize - minSize)).toFixed(1)}px`;
    icon.style.opacity = `${(0.18 + Math.random() * 0.7).toFixed(2)}`;
    icon.style.animationDuration = `${(9 + Math.random() * 14).toFixed(2)}s`;
    icon.style.animationDelay = `${(Math.random() * -20).toFixed(2)}s`;
    icon.style.setProperty("--drift", `${(-22 + Math.random() * 44).toFixed(2)}vw`);
    container.appendChild(icon);
  }
}

function spawnShootingStars(container, count) {
  for (let i = 0; i < count; i += 1) {
    const star = document.createElement("span");
    star.className = "shooting-star";
    star.style.top = `${(Math.random() * 65).toFixed(2)}%`;
    star.style.left = `${(70 + Math.random() * 35).toFixed(2)}%`;
    star.style.animationDelay = `${(Math.random() * -18).toFixed(2)}s`;
    star.style.animationDuration = `${(5 + Math.random() * 8).toFixed(2)}s`;
    container.appendChild(star);
  }
}

spawnFloatingIcons(floatingHearts, "floating-heart", 34, ["<3", "<3", "*"], 14, 26);
spawnFloatingIcons(sparkDust, "spark-dot", 48, [".", "*", "+"], 8, 16);
spawnShootingStars(shootingStars, 7);

function setupTimelineBackdrop() {
  if (!timelineBackdrop || timelineBackdrop.childElementCount > 0) {
    return;
  }

  for (let i = 0; i < 14; i += 1) {
    const orb = document.createElement("span");
    orb.className = "timeline-orb";
    orb.style.left = `${(Math.random() * 100).toFixed(2)}%`;
    orb.style.top = `${(Math.random() * 100).toFixed(2)}%`;
    orb.style.width = `${(90 + Math.random() * 200).toFixed(0)}px`;
    orb.style.height = orb.style.width;
    orb.style.animationDuration = `${(8 + Math.random() * 12).toFixed(2)}s`;
    orb.style.animationDelay = `${(Math.random() * -10).toFixed(2)}s`;
    timelineBackdrop.appendChild(orb);
  }

  for (let i = 0; i < 20; i += 1) {
    const glyph = document.createElement("span");
    glyph.className = "timeline-glyph";
    glyph.textContent = "<3";
    glyph.style.left = `${(Math.random() * 100).toFixed(2)}%`;
    glyph.style.top = `${(Math.random() * 100).toFixed(2)}%`;
    glyph.style.fontSize = `${(11 + Math.random() * 12).toFixed(0)}px`;
    glyph.style.animationDuration = `${(12 + Math.random() * 10).toFixed(2)}s`;
    glyph.style.animationDelay = `${(Math.random() * -18).toFixed(2)}s`;
    glyph.style.opacity = `${(0.08 + Math.random() * 0.24).toFixed(2)}`;
    timelineBackdrop.appendChild(glyph);
  }
}

function setupTimelineParallax() {
  if (!timelineCard) {
    return;
  }

  const onMove = (event) => {
    const rect = timelineCard.getBoundingClientRect();
    const px = ((event.clientX - rect.left) / rect.width) * 100;
    const py = ((event.clientY - rect.top) / rect.height) * 100;
    timelineCard.style.setProperty("--mx", `${Math.max(0, Math.min(100, px)).toFixed(2)}%`);
    timelineCard.style.setProperty("--my", `${Math.max(0, Math.min(100, py)).toFixed(2)}%`);
  };

  timelineCard.addEventListener("pointermove", onMove);
  timelineCard.addEventListener("pointerleave", () => {
    timelineCard.style.setProperty("--mx", "50%");
    timelineCard.style.setProperty("--my", "45%");
  });
}

function createGlowTexture() {
  const size = 256;
  const glowCanvas = document.createElement("canvas");
  glowCanvas.width = size;
  glowCanvas.height = size;
  const context = glowCanvas.getContext("2d");
  const gradient = context.createRadialGradient(
    size * 0.5,
    size * 0.5,
    0,
    size * 0.5,
    size * 0.5,
    size * 0.5
  );
  gradient.addColorStop(0, "rgba(255, 211, 235, 0.96)");
  gradient.addColorStop(0.3, "rgba(255, 96, 166, 0.72)");
  gradient.addColorStop(1, "rgba(112, 16, 58, 0)");
  context.fillStyle = gradient;
  context.fillRect(0, 0, size, size);
  return new THREE.CanvasTexture(glowCanvas);
}

function createStarDotTexture() {
  const size = 64;
  const dotCanvas = document.createElement("canvas");
  dotCanvas.width = size;
  dotCanvas.height = size;
  const context = dotCanvas.getContext("2d");
  const gradient = context.createRadialGradient(
    size * 0.5,
    size * 0.5,
    0,
    size * 0.5,
    size * 0.5,
    size * 0.5
  );
  gradient.addColorStop(0, "rgba(255,255,255,1)");
  gradient.addColorStop(0.55, "rgba(255,255,255,0.95)");
  gradient.addColorStop(1, "rgba(255,255,255,0)");
  context.fillStyle = gradient;
  context.fillRect(0, 0, size, size);
  const texture = new THREE.CanvasTexture(dotCanvas);
  texture.needsUpdate = true;
  return texture;
}

function createHeartMaskTexture() {
  const size = 1024;
  const maskCanvas = document.createElement("canvas");
  maskCanvas.width = size;
  maskCanvas.height = size;
  const context = maskCanvas.getContext("2d");

  context.clearRect(0, 0, size, size);
  context.translate(size * 0.5, size * 0.56);
  const scale = size / 128;
  context.scale(scale, scale);
  context.beginPath();
  context.moveTo(0, 28);
  context.bezierCurveTo(44, 0, 35, -52, 0, -30);
  context.bezierCurveTo(-35, -52, -44, 0, 0, 28);
  context.closePath();
  context.fillStyle = "#ffffff";
  context.fill();
  context.setTransform(1, 0, 0, 1, 0, 0);

  const texture = new THREE.CanvasTexture(maskCanvas);
  texture.needsUpdate = true;
  return texture;
}

function createHeartTexture() {
  const size = 128;
  const textureCanvas = document.createElement("canvas");
  textureCanvas.width = size;
  textureCanvas.height = size;
  const context = textureCanvas.getContext("2d");

  context.clearRect(0, 0, size, size);
  context.translate(size * 0.5, size * 0.56);
  context.beginPath();
  context.moveTo(0, 26);
  context.bezierCurveTo(42, -2, 32, -50, 0, -28);
  context.bezierCurveTo(-32, -50, -42, -2, 0, 26);

  const fill = context.createRadialGradient(0, -14, 6, 0, -4, 48);
  fill.addColorStop(0, "rgba(255, 229, 241, 1)");
  fill.addColorStop(0.35, "rgba(255, 140, 194, 0.95)");
  fill.addColorStop(1, "rgba(180, 24, 86, 0)");
  context.fillStyle = fill;
  context.fill();
  context.setTransform(1, 0, 0, 1, 0, 0);

  const texture = new THREE.CanvasTexture(textureCanvas);
  texture.needsUpdate = true;
  return texture;
}

const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  alpha: true,
});
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputColorSpace = THREE.SRGBColorSpace;

const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x150014, 0.02);

const camera = new THREE.PerspectiveCamera(
  50,
  window.innerWidth / window.innerHeight,
  0.1,
  220
);
camera.position.set(0, 1.4, 7.8);

scene.add(new THREE.AmbientLight(0xffd3ec, 0.62));
const keyLight = new THREE.PointLight(0xff90cb, 30, 50, 2);
keyLight.position.set(4.6, 4, 2.6);
scene.add(keyLight);
const fillLight = new THREE.PointLight(0xff5a8d, 18, 46, 2);
fillLight.position.set(-4.2, -1.5, 3.8);
scene.add(fillLight);
const coolRim = new THREE.PointLight(0x738fff, 10, 65, 2);
coolRim.position.set(-6, 2.5, -4.8);
scene.add(coolRim);

const heartTexture = createHeartTexture();
const starDotTexture = createStarDotTexture();
const heartMaskTexture = createHeartMaskTexture();

const planetGroup = new THREE.Group();
planetGroup.position.set(0, -0.05, 0.55);
scene.add(planetGroup);

const planetMaterial = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  emissive: 0x2d0719,
  emissiveIntensity: 0.06,
  roughness: 0.75,
  metalness: 0.02,
  transparent: true,
  alphaMap: heartMaskTexture,
  alphaTest: 0.5,
  side: THREE.DoubleSide,
});

const planet = new THREE.Mesh(
  new THREE.PlaneGeometry(8.2, 7.55, 1, 1),
  planetMaterial
);
planetGroup.add(planet);

const textureLoader = new THREE.TextureLoader();
let photoTexture = null;
textureLoader.load(
  assetPath("foto1.png"),
  (texture) => {
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
    texture.wrapS = THREE.MirroredRepeatWrapping;
    texture.wrapT = THREE.MirroredRepeatWrapping;
    texture.generateMipmaps = true;
    texture.minFilter = THREE.LinearMipmapLinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.repeat.set(1.2, 1.2);
    texture.offset.set(-0.1, -0.1);
    texture.center.set(0.5, 0.5);
    photoTexture = texture;
    texture.needsUpdate = true;
    planetMaterial.map = texture;
    planetMaterial.alphaMap = heartMaskTexture;
    planetMaterial.color.set(0xffffff);
    planetMaterial.emissive.set(0x220513);
    planetMaterial.emissiveIntensity = 0.06;
    planetMaterial.roughness = 0.75;
    planetMaterial.metalness = 0.02;
    planetMaterial.needsUpdate = true;
  },
  undefined,
  () => {
    // If the photo is missing, keep the pink fallback material.
    planetMaterial.color.set(0xf06aa7);
    planetMaterial.emissive.set(0x5d0d34);
    planetMaterial.emissiveIntensity = 0.82;
    planetMaterial.metalness = 0.18;
    planetMaterial.roughness = 0.4;
    planetMaterial.needsUpdate = true;
  }
);

const ring = new THREE.Mesh(
  new THREE.TorusGeometry(4.05, 0.14, 24, 240),
  new THREE.MeshStandardMaterial({
    color: 0xffb3db,
    emissive: 0x6f1f4b,
    emissiveIntensity: 0.9,
    roughness: 0.24,
    metalness: 0.58,
    transparent: true,
    opacity: 0.7,
  })
);
ring.rotation.x = 1.34;
ring.rotation.z = 0.42;
ring.position.y = -1.95;
ring.position.z = -0.22;
planetGroup.add(ring);

const ringOrbit = {
  radiusX: 0.72,
  radiusZ: 0.52,
  baseY: -1.95,
  baseZ: -0.22,
  speed: 1.28,
};

const glowSprite = new THREE.Sprite(
  new THREE.SpriteMaterial({
    map: createGlowTexture(),
    color: 0xff9ed2,
    transparent: true,
    opacity: 0.32,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  })
);
glowSprite.scale.set(7.4, 7.4, 1);
planetGroup.add(glowSprite);

const pulseRings = [];
for (let i = 0; i < 4; i += 1) {
  const pulse = new THREE.Mesh(
    new THREE.RingGeometry(0.4, 0.5, 64),
    new THREE.MeshBasicMaterial({
      color: 0xff95ce,
      transparent: true,
      opacity: 0,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
  );
  pulse.rotation.x = -Math.PI * 0.5;
  pulse.position.y = -0.18;
  pulse.userData.offset = i * 0.23;
  pulseRings.push(pulse);
  planetGroup.add(pulse);
}

const orbitHeartSprites = [];
for (let i = 0; i < 16; i += 1) {
  const sprite = new THREE.Sprite(
    new THREE.SpriteMaterial({
      map: heartTexture,
      color: 0xff8fc8,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
  );
  sprite.scale.set(0.2, 0.2, 0.2);
  sprite.userData.angle = (i / 16) * Math.PI * 2;
  sprite.userData.radius = 2.8 + Math.random() * 1.2;
  sprite.userData.speed = 0.32 + Math.random() * 0.28;
  sprite.userData.wave = Math.random() * Math.PI * 2;
  orbitHeartSprites.push(sprite);
  scene.add(sprite);
}

const STAR_COUNT = 5400;
const basePositions = new Float32Array(STAR_COUNT * 3);
const currentPositions = new Float32Array(STAR_COUNT * 3);
const noisePhase = new Float32Array(STAR_COUNT);

for (let i = 0; i < STAR_COUNT; i += 1) {
  const radius = 6 + Math.pow(Math.random(), 0.44) * 27;
  const theta = Math.random() * Math.PI * 2;
  const phi = Math.acos(2 * Math.random() - 1);
  const x = radius * Math.sin(phi) * Math.cos(theta);
  const y = radius * Math.cos(phi);
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const index = i * 3;
  basePositions[index] = x;
  basePositions[index + 1] = y;
  basePositions[index + 2] = z;
  currentPositions[index] = x;
  currentPositions[index + 1] = y;
  currentPositions[index + 2] = z;
  noisePhase[i] = Math.random() * Math.PI * 2;
}

const starsGeometry = new THREE.BufferGeometry();
starsGeometry.setAttribute(
  "position",
  new THREE.BufferAttribute(currentPositions, 3).setUsage(THREE.DynamicDrawUsage)
);

const starsMaterial = new THREE.PointsMaterial({
  map: starDotTexture,
  color: 0xffdcf1,
  size: 0.04,
  transparent: true,
  opacity: 0.86,
  depthWrite: false,
  blending: THREE.AdditiveBlending,
  alphaTest: 0.04,
});

const stars = new THREE.Points(starsGeometry, starsMaterial);
scene.add(stars);

const heartFieldCount = 420;
const heartFieldPositions = new Float32Array(heartFieldCount * 3);
const heartFieldVelocities = new Float32Array(heartFieldCount);
const heartFieldPhase = new Float32Array(heartFieldCount);

for (let i = 0; i < heartFieldCount; i += 1) {
  const index = i * 3;
  heartFieldPositions[index] = (Math.random() - 0.5) * 18;
  heartFieldPositions[index + 1] = (Math.random() - 0.5) * 12;
  heartFieldPositions[index + 2] = (Math.random() - 0.5) * 14;
  heartFieldVelocities[i] = 0.24 + Math.random() * 0.42;
  heartFieldPhase[i] = Math.random() * Math.PI * 2;
}

const heartFieldGeometry = new THREE.BufferGeometry();
heartFieldGeometry.setAttribute(
  "position",
  new THREE.BufferAttribute(heartFieldPositions, 3).setUsage(THREE.DynamicDrawUsage)
);

const heartFieldMaterial = new THREE.PointsMaterial({
  map: heartTexture,
  color: 0xff95cb,
  size: 0.22,
  transparent: true,
  opacity: 0.46,
  depthWrite: false,
  blending: THREE.AdditiveBlending,
});

const heartField = new THREE.Points(heartFieldGeometry, heartFieldMaterial);
scene.add(heartField);

function buildTextTargets(label, config = {}) {
  const {
    width = 1400,
    height = 420,
    fontSize = 220,
    fontFamily = "Arial Black, Arial, sans-serif",
    pixelStep = 3,
    pointRatio = 0.97,
    pixelScale = 0.009,
    yOffset = 1.6,
    zOffset = -0.95,
    depthJitter = 0.03,
  } = config;

  const targets = new Float32Array(STAR_COUNT * 3);
  const textCanvas = document.createElement("canvas");
  textCanvas.width = width;
  textCanvas.height = height;
  const context = textCanvas.getContext("2d");

  context.clearRect(0, 0, width, height);
  context.fillStyle = "#ffffff";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.font = `900 ${fontSize}px ${fontFamily}`;
  context.fillText(label, width * 0.5, height * 0.52);

  const imageData = context.getImageData(0, 0, width, height).data;
  const points = [];
  for (let y = 0; y < height; y += pixelStep) {
    for (let x = 0; x < width; x += pixelStep) {
      const alpha = imageData[(y * width + x) * 4 + 3];
      if (alpha > 20) {
        points.push([x, y]);
      }
    }
  }

  const textPointLimit = Math.max(1, Math.floor(STAR_COUNT * pointRatio));

  for (let i = 0; i < STAR_COUNT; i += 1) {
    const index = i * 3;
    if (i < textPointLimit && points.length > 0) {
      const mapped = Math.floor((i / textPointLimit) * points.length) % points.length;
      const [px, py] = points[mapped];
      targets[index] = (px - width * 0.5) * pixelScale;
      targets[index + 1] = (height * 0.5 - py) * pixelScale + yOffset;
      targets[index + 2] = zOffset + (Math.random() - 0.5) * depthJitter;
    } else {
      const angle = Math.random() * Math.PI * 2;
      const radius = 8 + Math.random() * 10;
      targets[index] = Math.cos(angle) * radius;
      targets[index + 1] = -2.4 + (Math.random() - 0.5) * 2.2;
      targets[index + 2] = -2 + Math.sin(angle) * radius;
    }
  }

  return targets;
}

const nameTargets = buildTextTargets("BRITNEY", {
  fontSize: 205,
  pixelScale: 0.0094,
  yOffset: 1.55,
  zOffset: -0.96,
  pointRatio: 0.97,
});

const loveTargets = buildTextTargets("TE AMO", {
  fontSize: 238,
  pixelScale: 0.011,
  yOffset: 1.55,
  zOffset: -0.96,
  pointRatio: 0.97,
});

const burstCount = 420;
const burstPositions = new Float32Array(burstCount * 3);
const burstVelocities = new Float32Array(burstCount * 3);

const burstGeometry = new THREE.BufferGeometry();
burstGeometry.setAttribute(
  "position",
  new THREE.BufferAttribute(burstPositions, 3).setUsage(THREE.DynamicDrawUsage)
);

const burstMaterial = new THREE.PointsMaterial({
  map: heartTexture,
  color: 0xff98cc,
  size: 0.17,
  transparent: true,
  opacity: 0,
  depthWrite: false,
  blending: THREE.AdditiveBlending,
});

const burst = new THREE.Points(burstGeometry, burstMaterial);
scene.add(burst);

let burstLife = 0;

function triggerBurst() {
  burstLife = 1;
  for (let i = 0; i < burstCount; i += 1) {
    const index = i * 3;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const speed = 1.8 + Math.random() * 3.2;

    burstPositions[index] = planetGroup.position.x + Math.cos(theta) * 0.18;
    burstPositions[index + 1] = planetGroup.position.y + (Math.random() - 0.5) * 0.24;
    burstPositions[index + 2] = planetGroup.position.z + Math.sin(theta) * 0.18;

    burstVelocities[index] = Math.sin(phi) * Math.cos(theta) * speed;
    burstVelocities[index + 1] = Math.cos(phi) * speed + 0.7;
    burstVelocities[index + 2] = Math.sin(phi) * Math.sin(theta) * speed;
  }

  burstMaterial.opacity = 1;
  burstGeometry.attributes.position.needsUpdate = true;
}

const state = {
  morph: 0,
  glow: 0,
  wordMix: 0,
};

let started = false;
let messagesShown = false;
let timelineObserver = null;
let timelineCurrentIndex = -1;
let timelineDotButtons = [];
const timelineAssetVersion = String(Date.now());

function withAssetVersion(path) {
  const resolvedPath = assetPath(path);
  const separator = resolvedPath.includes("?") ? "&" : "?";
  return `${resolvedPath}${separator}v=${timelineAssetVersion}`;
}

function setupTimelinePhotos() {
  timelinePhotos.forEach((photo, index) => {
    const media = photo.closest(".timeline-media");
    const baseName = photo.dataset.photo || `timeline-${index + 1}`;
    const candidatePaths = [
      `${baseName}.jpg`,
      `${baseName}.jpeg`,
      `${baseName}.png`,
      `${baseName}.webp`,
      `${baseName}.avif`,
      "foto1.png",
    ];
    let candidateIndex = 0;

    const loadNextCandidate = () => {
      if (candidateIndex >= candidatePaths.length) {
        media?.classList.add("is-empty");
        return;
      }
      const nextPath = candidatePaths[candidateIndex];
      candidateIndex += 1;
      photo.src = withAssetVersion(nextPath);
    };

    photo.loading = "lazy";
    photo.decoding = "async";
    photo.addEventListener("load", () => {
      media?.classList.remove("is-empty");
    });
    photo.addEventListener("error", loadNextCandidate);
    loadNextCandidate();
  });
}

function setupTimelineDots() {
  if (!timelineDots || timelineItems.length === 0) {
    return;
  }

  timelineDots.innerHTML = "";
  timelineDotButtons = timelineItems.map((_, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "timeline-dot";
    dot.setAttribute("aria-label", `Ir al capitulo ${index + 1}`);
    dot.addEventListener("click", () => {
      scrollToTimelineIndex(index);
    });
    timelineDots.appendChild(dot);
    return dot;
  });
}

function scrollToTimelineIndex(index, behavior = "smooth") {
  if (!timelineTrack || timelineItems.length === 0) {
    return;
  }

  const clamped = Math.max(0, Math.min(timelineItems.length - 1, index));
  timelineItems[clamped].scrollIntoView({
    behavior,
    block: "nearest",
    inline: "center",
  });
}

function updateTimelineControls(ratio = 0, canScroll = true) {
  if (!canScroll) {
    if (timelinePrevButton) {
      timelinePrevButton.disabled = true;
    }
    if (timelineNextButton) {
      timelineNextButton.disabled = true;
    }
    return;
  }
  if (timelinePrevButton) {
    timelinePrevButton.disabled = ratio <= 0.01;
  }
  if (timelineNextButton) {
    timelineNextButton.disabled = ratio >= 0.99;
  }
}

function setupTimelineWheelScroll() {
  if (!timelineTrack) {
    return;
  }

  timelineTrack.addEventListener(
    "wheel",
    (event) => {
      const absY = Math.abs(event.deltaY);
      const absX = Math.abs(event.deltaX);
      if (absY <= absX) {
        return;
      }
      event.preventDefault();
      timelineTrack.scrollLeft += event.deltaY * 0.95;
    },
    { passive: false }
  );
}

function setupTimelineDragScroll() {
  if (!timelineTrack || !window.matchMedia("(pointer: fine)").matches) {
    return;
  }

  let dragging = false;
  let activePointerId = -1;
  let startX = 0;
  let startScrollLeft = 0;

  const stopDragging = () => {
    if (!dragging) {
      return;
    }
    dragging = false;
    activePointerId = -1;
    timelineTrack.classList.remove("is-dragging");
  };

  timelineTrack.addEventListener("pointerdown", (event) => {
    if (event.button !== 0 || event.pointerType === "touch") {
      return;
    }
    dragging = true;
    activePointerId = event.pointerId;
    startX = event.clientX;
    startScrollLeft = timelineTrack.scrollLeft;
    timelineTrack.classList.add("is-dragging");
    timelineTrack.setPointerCapture(activePointerId);
    event.preventDefault();
  });

  timelineTrack.addEventListener("pointermove", (event) => {
    if (!dragging || event.pointerId !== activePointerId) {
      return;
    }
    const deltaX = event.clientX - startX;
    timelineTrack.scrollLeft = startScrollLeft - deltaX * 1.08;
  });

  const releaseDragging = (event) => {
    if (!dragging || event.pointerId !== activePointerId) {
      return;
    }
    if (timelineTrack.hasPointerCapture(activePointerId)) {
      timelineTrack.releasePointerCapture(activePointerId);
    }
    stopDragging();
  };

  timelineTrack.addEventListener("pointerup", releaseDragging);
  timelineTrack.addEventListener("pointercancel", releaseDragging);
  timelineTrack.addEventListener("pointerleave", (event) => {
    if (!dragging || event.pointerId !== activePointerId || event.buttons !== 0) {
      return;
    }
    stopDragging();
  });
}

function updateCurrentTimelineItem() {
  if (!timelineTrack || timelineItems.length === 0) {
    return;
  }

  const trackRect = timelineTrack.getBoundingClientRect();
  const focusX = trackRect.left + trackRect.width * 0.5;
  const depthBase = Math.max(trackRect.width * 0.48, 1);
  let closestIndex = 0;
  let closestDistance = Number.POSITIVE_INFINITY;

  timelineItems.forEach((item, index) => {
    const rect = item.getBoundingClientRect();
    const itemCenter = rect.left + rect.width * 0.5;
    const distance = Math.abs(itemCenter - focusX);
    const normalized = Math.min(1, distance / depthBase);
    const emphasis = 1 - normalized;
    item.style.setProperty("--distance", normalized.toFixed(3));
    item.style.setProperty("--depth-scale", (0.82 + emphasis * 0.22).toFixed(3));
    item.style.setProperty("--depth-y", `${(normalized * 16 - emphasis * 6).toFixed(2)}px`);
    item.style.setProperty("--depth-opacity", (0.46 + emphasis * 0.54).toFixed(3));
    item.style.setProperty("--depth-blur", `${(normalized * 1.5).toFixed(2)}px`);

    if (distance < closestDistance) {
      closestDistance = distance;
      closestIndex = index;
    }
  });

  if (closestIndex !== timelineCurrentIndex) {
    timelineCurrentIndex = closestIndex;
    timelineItems.forEach((item, index) => {
      item.classList.toggle("is-current", index === closestIndex);
    });
    timelineDotButtons.forEach((dot, index) => {
      const active = index === closestIndex;
      dot.classList.toggle("is-active", active);
      dot.setAttribute("aria-current", active ? "true" : "false");
    });
  }
}

function updateTimelineProgress() {
  if (!timelineTrack || !timelineProgress) {
    return;
  }

  const max = timelineTrack.scrollWidth - timelineTrack.clientWidth;
  const ratio = max <= 0 ? 0 : Math.min(1, Math.max(0, timelineTrack.scrollLeft / max));
  timelineProgress.style.transform = `scaleX(${0.08 + ratio * 0.92})`;
  timelineTrack.style.setProperty("--scroll-ratio", ratio.toFixed(4));
  updateCurrentTimelineItem();
  updateTimelineControls(ratio, max > 0);
}

function setupTimelineObserver() {
  if (!timelineTrack || timelineItems.length === 0) {
    return;
  }

  if (!("IntersectionObserver" in window)) {
    timelineItems.forEach((item) => {
      item.classList.remove("is-animated");
      item.classList.add("is-inview");
    });
    return;
  }

  if (timelineObserver) {
    timelineObserver.disconnect();
    timelineObserver = null;
  }

  timelineObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("is-animated");
          entry.target.classList.add("is-inview");
          timelineObserver?.unobserve(entry.target);
        }
      });
    },
    {
      root: timelineTrack,
      threshold: 0.5,
      rootMargin: "0px -14% 0px -14%",
    }
  );

  timelineItems.forEach((item) => timelineObserver?.observe(item));
}

function openTimeline() {
  if (!timelinePanel) {
    return;
  }
  timelineCurrentIndex = -1;
  timelineDotButtons.forEach((dot) => dot.classList.remove("is-active"));
  timelineItems.forEach((item) => {
    item.classList.remove("is-inview");
    item.classList.remove("is-current");
    item.classList.add("is-animated");
  });
  if (timelineTrack) {
    timelineTrack.scrollLeft = 0;
  }
  if (timelineCard) {
    timelineCard.classList.add("is-open");
  }
  updateTimelineProgress();
  timelinePanel.classList.add("is-visible");
  timelinePanel.setAttribute("aria-hidden", "false");
  gsap.fromTo(
    timelinePanel,
    { autoAlpha: 0 },
    { autoAlpha: 1, duration: 0.38, ease: "power2.out" }
  );
  gsap.fromTo(
    timelineCard,
    { autoAlpha: 0, y: 26, scale: 0.975, rotateX: -2 },
    { autoAlpha: 1, y: 0, scale: 1, rotateX: 0, duration: 0.52, ease: "power2.out" }
  );
  setupTimelineObserver();
  requestAnimationFrame(() => {
    scrollToTimelineIndex(0, "auto");
    updateTimelineProgress();
  });
}

function closeTimeline() {
  if (!timelinePanel || !timelinePanel.classList.contains("is-visible")) {
    return;
  }
  if (timelineObserver) {
    timelineObserver.disconnect();
    timelineObserver = null;
  }
  timelineCard?.classList.remove("is-open");
  timelineItems.forEach((item) => item.classList.remove("is-current"));
  timelineDotButtons.forEach((dot) => dot.classList.remove("is-active"));
  gsap.to(timelinePanel, {
    autoAlpha: 0,
    duration: 0.25,
    ease: "power2.inOut",
    onComplete: () => {
      timelinePanel.classList.remove("is-visible");
      timelinePanel.setAttribute("aria-hidden", "true");
    },
  });
}

function stepTimeline(direction) {
  const baseIndex = timelineCurrentIndex < 0 ? 0 : timelineCurrentIndex;
  scrollToTimelineIndex(baseIndex + direction);
}

function showMessages() {
  if (messagesShown) {
    return;
  }
  messagesShown = true;
  if (letterViewport) {
    letterViewport.scrollTop = 0;
  }

  gsap.to(messagePanel, {
    autoAlpha: 1,
    y: 0,
    duration: 1.15,
    ease: "power2.out",
  });

  gsap.fromTo(letterViewport, { autoAlpha: 0, y: 16 }, {
    autoAlpha: 1,
    y: 0,
    duration: 1.1,
    ease: "power2.out",
    delay: 0.2,
  });

  gsap.fromTo(
    signature,
    { autoAlpha: 0, y: 16 },
    {
      autoAlpha: 1,
      y: 0,
      duration: 1.1,
      ease: "power2.out",
      delay: 1.2,
    }
  );

  gsap.fromTo(
    openTimelineButton,
    { autoAlpha: 0, y: 12 },
    {
      autoAlpha: 1,
      y: 0,
      duration: 0.8,
      delay: 1.35,
      ease: "power2.out",
    }
  );
}

function startReveal() {
  if (started) {
    return;
  }

  started = true;
  revealButton.disabled = true;
  revealButton.textContent = "Eres mi osita bonita";
  revealButton.classList.add("is-active");
  triggerBurst();

  const timeline = gsap.timeline();
  timeline.to(state, { glow: 1, duration: 1.1, ease: "power2.out" }, 0);
  timeline.to(
    state,
    {
      morph: 1,
      duration: 4.5,
      ease: "power3.inOut",
    },
    0.4
  );
  timeline.to(
    state,
    {
      wordMix: 1,
      duration: 2.8,
      ease: "sine.inOut",
    },
    4.7
  );
  timeline.to(
    camera.position,
    {
      z: 6.2,
      y: 2.05,
      duration: 4.2,
      ease: "sine.inOut",
    },
    0.52
  );
  timeline.to(heartFieldMaterial, { opacity: 0.82, duration: 2.2, ease: "power2.out" }, 0.4);
  timeline.to(".hud", { autoAlpha: 0, duration: 1.25, ease: "power2.out" }, 2.3);
  timeline.to(nebulaLayer, { opacity: 0.95, duration: 1.7, ease: "sine.out" }, 0.35);
  timeline.call(showMessages, null, 3.1);
}

revealButton.addEventListener("click", startReveal);
canvas.addEventListener("dblclick", startReveal);
canvas.addEventListener("touchstart", startReveal, { passive: true, once: true });
openTimelineButton?.addEventListener("click", openTimeline);
closeTimelineButton?.addEventListener("click", closeTimeline);
timelinePrevButton?.addEventListener("click", () => stepTimeline(-1));
timelineNextButton?.addEventListener("click", () => stepTimeline(1));
timelinePanel?.addEventListener("click", (event) => {
  if (event.target === timelinePanel) {
    closeTimeline();
  }
});
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeTimeline();
  }
  if (!timelinePanel?.classList.contains("is-visible")) {
    return;
  }
  if (event.key === "ArrowRight") {
    event.preventDefault();
    stepTimeline(1);
  }
  if (event.key === "ArrowLeft") {
    event.preventDefault();
    stepTimeline(-1);
  }
});
timelineTrack?.addEventListener("scroll", updateTimelineProgress);
setupTimelinePhotos();
setupTimelineDots();
setupTimelineBackdrop();
setupTimelineParallax();
setupTimelineWheelScroll();
setupTimelineDragScroll();
updateTimelineProgress();

const pointer = new THREE.Vector2(0, 0);
window.addEventListener("pointermove", (event) => {
  pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
  pointer.y = (event.clientY / window.innerHeight) * 2 - 1;
});

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  updateTimelineProgress();
});

const clock = new THREE.Clock();
const focusPoint = new THREE.Vector3();
planetGroup.scale.set(1.18, 1.18, 1.18);

function animate() {
  const delta = Math.min(clock.getDelta(), 0.06);
  const elapsed = clock.elapsedTime;

  if (photoTexture) {
    photoTexture.offset.x = -0.1 + Math.sin(elapsed * 0.75) * 0.055;
    photoTexture.offset.y = -0.1 + Math.cos(elapsed * 0.62) * 0.045;
    photoTexture.rotation = Math.sin(elapsed * 0.4) * 0.04;
  }

  ring.position.x = Math.cos(elapsed * ringOrbit.speed) * ringOrbit.radiusX;
  ring.position.z = ringOrbit.baseZ + Math.sin(elapsed * ringOrbit.speed * 1.05) * ringOrbit.radiusZ;
  ring.position.y = ringOrbit.baseY + Math.sin(elapsed * ringOrbit.speed * 0.9) * 0.08;
  ring.rotation.z += delta * 0.5;
  ring.rotation.y = Math.sin(elapsed * ringOrbit.speed * 0.95) * 0.28;
  ring.rotation.x = 1.3 + Math.sin(elapsed * ringOrbit.speed * 0.8) * 0.08;

  glowSprite.material.opacity = 0.32 + state.glow * 0.16;
  const glowScale = 7.4 + state.glow * 1.1;
  glowSprite.scale.set(glowScale, glowScale, 1);

  for (let i = 0; i < orbitHeartSprites.length; i += 1) {
    const heart = orbitHeartSprites[i];
    heart.userData.angle += delta * heart.userData.speed;
    const angle = heart.userData.angle;
    const radius = heart.userData.radius + Math.sin(elapsed * 0.8 + heart.userData.wave) * 0.18;
    heart.position.set(
      Math.cos(angle) * radius,
      0.18 + Math.sin(elapsed * 1.2 + heart.userData.wave) * 0.4,
      Math.sin(angle) * radius
    );
    const s = 0.16 + Math.sin(elapsed * 1.7 + heart.userData.wave) * 0.05 + state.glow * 0.08;
    heart.scale.set(s, s, s);
  }

  const starPos = starsGeometry.attributes.position.array;
  const jitter = Math.pow(Math.max(0, 1 - state.morph), 2);

  for (let i = 0; i < STAR_COUNT; i += 1) {
    const index = i * 3;
    const targetX = THREE.MathUtils.lerp(nameTargets[index], loveTargets[index], state.wordMix);
    const targetY = THREE.MathUtils.lerp(nameTargets[index + 1], loveTargets[index + 1], state.wordMix);
    const targetZ = THREE.MathUtils.lerp(nameTargets[index + 2], loveTargets[index + 2], state.wordMix);

    starPos[index] =
      THREE.MathUtils.lerp(basePositions[index], targetX, state.morph) +
      Math.sin(elapsed * 0.62 + noisePhase[i]) * 0.01 * jitter;
    starPos[index + 1] =
      THREE.MathUtils.lerp(basePositions[index + 1], targetY, state.morph) +
      Math.cos(elapsed * 0.56 + noisePhase[i] * 1.35) * 0.01 * jitter;
    starPos[index + 2] =
      THREE.MathUtils.lerp(basePositions[index + 2], targetZ, state.morph) +
      Math.sin(elapsed * 0.52 + noisePhase[i] * 1.75) * 0.008 * jitter;
  }

  starsGeometry.attributes.position.needsUpdate = true;
  stars.rotation.y += delta * (0.005 * (1 - state.morph));
  stars.rotation.x = Math.sin(elapsed * 0.1) * (0.01 * (1 - state.morph));
  starsMaterial.size = 0.036 + state.morph * 0.017 + Math.sin(elapsed * 2.3) * 0.0012;
  starsMaterial.opacity = 0.82 + state.morph * 0.15;

  const heartPos = heartFieldGeometry.attributes.position.array;
  for (let i = 0; i < heartFieldCount; i += 1) {
    const index = i * 3;
    heartPos[index] += Math.sin(elapsed * 0.7 + heartFieldPhase[i]) * delta * 0.2;
    heartPos[index + 1] += heartFieldVelocities[i] * delta;
    heartPos[index + 2] += Math.cos(elapsed * 0.6 + heartFieldPhase[i]) * delta * 0.09;

    if (heartPos[index + 1] > 8) {
      heartPos[index + 1] = -8;
      heartPos[index] = (Math.random() - 0.5) * 18;
      heartPos[index + 2] = (Math.random() - 0.5) * 14;
    }
  }
  heartFieldGeometry.attributes.position.needsUpdate = true;
  heartField.rotation.y += delta * 0.02;
  heartFieldMaterial.size = 0.2 + state.glow * 0.08 + Math.sin(elapsed * 1.2) * 0.008;

  if (burstLife > 0) {
    burstLife = Math.max(0, burstLife - delta * 0.48);
    for (let i = 0; i < burstCount; i += 1) {
      const index = i * 3;
      burstPositions[index] += burstVelocities[index] * delta;
      burstPositions[index + 1] += burstVelocities[index + 1] * delta;
      burstPositions[index + 2] += burstVelocities[index + 2] * delta;
      burstVelocities[index] *= 0.992;
      burstVelocities[index + 1] = burstVelocities[index + 1] * 0.992 - delta * 0.24;
      burstVelocities[index + 2] *= 0.992;
    }

    burstGeometry.attributes.position.needsUpdate = true;
    burstMaterial.opacity = burstLife;
  }

  focusPoint.set(pointer.x * 0.44, 0.23 - pointer.y * 0.18, 0);
  camera.lookAt(focusPoint);

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

animate();
