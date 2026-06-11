const SITE_CONFIG = {
  contactEmail: "tihomir27402@gmail.com",
  formEndpoint: "https://formsubmit.co/ajax/tihomir27402@gmail.com",
};

const TOPIC_PRICE = 12;

const topics = [
  ["Administración y Gestión", "Organización sanitaria, liderazgo, calidad y gestión de cuidados.", 8, "clipboard", "./assets/covers/administracion-y-gestion.png"],
  ["Cardiología", "ECG, insuficiencia cardiaca, patología cardiovascular y cuidados.", 28, "pulse", "./assets/covers/cardiologia.png"],
  ["Dermatología", "Lesiones cutáneas, heridas, prevención y cuidados dermatológicos.", 20, "sparkle", "./assets/covers/dermatologia.png"],
  ["Endocrinología", "Diabetes, hormonas y cuidados específicos de enfermería.", 21, "activity", "./assets/covers/endocrinologia.png"],
  ["Enfermería Comunitaria", "Promoción de la salud, prevención, vacunas y salud pública.", 14, "home", "./assets/covers/enfermeria-comunitaria.png"],
  ["Enfermería Psicosocial", "Apoyo psicosocial, comunicación terapéutica y relación de ayuda.", 9, "users", "./assets/covers/enfermeria-psicosocial.png"],
  ["Farmacología", "Fármacos clave, seguridad, indicaciones y administración.", 16, "pill", "./assets/covers/farmacologia.png"],
  ["Fundamentos de Enfermería", "Técnicas básicas, seguridad del paciente y cuidados esenciales.", 14, "cross", "./assets/covers/fundamentos-de-enfermeria.png"],
  ["Geriatría", "Cuidados del paciente mayor, fragilidad y valoración integral.", 14, "user", "./assets/covers/geriatria.png"],
  ["Ginecología", "Salud sexual, embarazo, cuidados ginecológicos y atención integral.", 13, "venus", "./assets/covers/ginecologia.png"],
  ["Investigación y Estadística", "Metodología, lectura crítica, variables y resultados.", 12, "chart", "./assets/covers/investigacion-y-estadistica.png"],
  ["Nefro-Urología", "Función renal, urología, procedimientos y cuidados frecuentes.", 11, "kidney", "./assets/covers/nefro-urologia.png"],
  ["Neurología", "Valoración neurológica, patologías frecuentes y cuidados.", 13, "brain", "./assets/covers/neurologia.png"],
  ["Nutrición y Dietética", "Dietas, necesidades nutricionales y educación sanitaria.", 14, "apple", "./assets/covers/nutricion-y-dietetica.png"],
  ["Pediatría", "Cuidados pediátricos, vacunas, desarrollo y atención familiar.", 10, "baby", "./assets/covers/pediatria.png"],
  ["Respiratorio", "Oxigenoterapia, ventilación, patología respiratoria y cuidados.", 5, "lungs", "./assets/covers/respiratorio.png"],
  ["Salud Mental", "Trastornos, comunicación terapéutica y cuidados psicosociales.", 11, "heart", "./assets/covers/salud-mental.png"],
  ["Traumatología", "Lesiones, inmovilización, valoración y cuidados prácticos.", 12, "bone", "./assets/covers/traumatologia.png"],
].map(([title, description, pages, icon, image], index) => {
  const previewBase = image.replace("/covers/", "/previews/").replace(".png", "");

  return {
    id: `tema-${index + 1}`,
    title,
    description,
    pages,
    icon,
    image,
    previewPages: [`${previewBase}-page-2.png`, `${previewBase}-page-3.png`],
    price: TOPIC_PRICE,
  };
});

const state = {
  cart: new Set(JSON.parse(localStorage.getItem("apuntes-cart") || "[]")),
  pack: "",
};

const topicGrid = document.querySelector("[data-topics-grid]");
const cartCount = document.querySelector("[data-cart-count]");
const cartDrawer = document.querySelector("[data-cart-drawer]");
const cartItems = document.querySelector("[data-cart-items]");
const cartTotal = document.querySelector("[data-cart-total]");
const selectedSummary = document.querySelector("[data-selected-summary]");
const selectedTotal = document.querySelector("[data-selected-total]");
const form = document.querySelector("[data-contact-form]");
const formStatus = document.querySelector("[data-form-status]");
const contactEmailLinks = document.querySelectorAll("[data-contact-email]");
const previewModal = document.querySelector("[data-preview-modal]");
const previewTitle = document.querySelector("[data-preview-title]");
const previewSubtitle = document.querySelector("[data-preview-subtitle]");
const previewPages = document.querySelector("[data-preview-pages]");

contactEmailLinks.forEach((link) => {
  link.textContent = SITE_CONFIG.contactEmail;
  link.href = `mailto:${SITE_CONFIG.contactEmail}`;
});

function iconSvg(name) {
  const icons = {
    activity: `<path d="M22 12h-4l-3 8-6-16-3 8H2" />`,
    apple: `<path d="M12 6.5c1.9-2.3 4.5-1 5.3 1.2.9 2.5-.2 7.9-5.3 11.3C6.9 15.6 5.8 10.2 6.7 7.7 7.5 5.5 10.1 4.2 12 6.5Z" /><path d="M12 6.5c.1-1.9.9-3 2.5-3.8" />`,
    baby: `<path d="M9 12h.01" /><path d="M15 12h.01" /><path d="M10 16c1.2 1 2.8 1 4 0" /><path d="M12 4a8 8 0 1 0 8 8" /><path d="M16 5c1.3.4 2.4 1.4 3 2.6" />`,
    bone: `<path d="M7.5 9.5 14.5 16.5" /><path d="M5.2 7.2a2.2 2.2 0 1 1 3-3 2.2 2.2 0 0 1 3 3l-4 4a2.2 2.2 0 0 1-3-3Z" /><path d="M18.8 16.8a2.2 2.2 0 1 1-3 3 2.2 2.2 0 0 1-3-3l4-4a2.2 2.2 0 0 1 3 3Z" />`,
    brain: `<path d="M9 4.5a3 3 0 0 0-3 3v.5a3 3 0 0 0 0 6v.5a3 3 0 0 0 5 2.2V4.8A3 3 0 0 0 9 4.5Z" /><path d="M15 4.5a3 3 0 0 1 3 3v.5a3 3 0 0 1 0 6v.5a3 3 0 0 1-5 2.2V4.8a3 3 0 0 1 2-.3Z" />`,
    cells: `<circle cx="8" cy="9" r="3" /><circle cx="15.5" cy="14.5" r="3.5" /><circle cx="16.5" cy="6.5" r="1.8" />`,
    chart: `<path d="M4 19V5" /><path d="M4 19h16" /><path d="M8 16v-5" /><path d="M12 16V8" /><path d="M16 16v-3" />`,
    clipboard: `<path d="M9 4h6l1 2h3v14H5V6h3l1-2Z" /><path d="M9 10h6" /><path d="M9 14h6" />`,
    cross: `<path d="M12 5v14" /><path d="M5 12h14" />`,
    droplet: `<path d="M12 3s6 6.4 6 11a6 6 0 0 1-12 0c0-4.6 6-11 6-11Z" />`,
    heart: `<path d="M20.8 8.6c0 5.1-8.8 10.4-8.8 10.4S3.2 13.7 3.2 8.6A4.6 4.6 0 0 1 12 6.8a4.6 4.6 0 0 1 8.8 1.8Z" />`,
    home: `<path d="m3 11 9-7 9 7" /><path d="M5 10v10h14V10" /><path d="M9 20v-6h6v6" />`,
    kidney: `<path d="M9.5 4.5c-3 0-5 2.6-5 6.8 0 4.6 2.7 8.2 6 8.2 2 0 2.5-1.2 2.5-2.8V7.2c0-1.5-1.4-2.7-3.5-2.7Z" /><path d="M14.5 4.5c3 0 5 2.6 5 6.8 0 4.6-2.7 8.2-6 8.2" />`,
    leaf: `<path d="M20 4C11 4 6 9 6 18" /><path d="M20 4c0 9-5 14-14 14" /><path d="M6 18c3-4 7-7 12-9" />`,
    lungs: `<path d="M12 5v14" /><path d="M12 11c-2-4-5-5-7-4v10c0 2 2 3 4 2 2-.8 3-3.4 3-8Z" /><path d="M12 11c2-4 5-5 7-4v10c0 2-2 3-4 2-2-.8-3-3.4-3-8Z" />`,
    pill: `<path d="M10.5 20.5 3.5 13.5a4.2 4.2 0 0 1 6-6l7 7a4.2 4.2 0 0 1-6 6Z" /><path d="m8 8 8 8" />`,
    pulse: `<path d="M20.8 8.6c0 5.1-8.8 10.4-8.8 10.4S3.2 13.7 3.2 8.6A4.6 4.6 0 0 1 12 6.8a4.6 4.6 0 0 1 8.8 1.8Z" /><path d="M7 12h3l1.3-2.8 2.2 5.4L15 12h2" />`,
    scale: `<path d="M12 3v18" /><path d="M6 7h12" /><path d="m6 7-3 6h6L6 7Z" /><path d="m18 7-3 6h6l-3-6Z" />`,
    siren: `<path d="M7 18v-6a5 5 0 0 1 10 0v6" /><path d="M5 18h14" /><path d="M12 3v2" /><path d="m4 6 1.5 1.5" /><path d="m20 6-1.5 1.5" />`,
    sparkle: `<path d="M12 3 14 9l6 2-6 2-2 6-2-6-6-2 6-2 2-6Z" />`,
    stomach: `<path d="M12 3v6c0 2-2 2.5-2 5a5 5 0 0 0 10 0c0-4-3-6-6-6" /><path d="M8 4c2 2 2 4 1 7" />`,
    user: `<path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" /><path d="M4 21a8 8 0 0 1 16 0" />`,
    users: `<path d="M9 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" /><path d="M2 21a7 7 0 0 1 14 0" /><path d="M17 11a3 3 0 0 0 0-6" /><path d="M22 21a6 6 0 0 0-4-5.6" />`,
    venus: `<circle cx="12" cy="8" r="5" /><path d="M12 13v8" /><path d="M8 17h8" />`,
  };

  return `<svg viewBox="0 0 24 24" aria-hidden="true">${icons[name] || icons.cross}</svg>`;
}

function cartIconSvg(selected) {
  if (selected) {
    return `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20 6 9 17l-5-5" />
      </svg>
    `;
  }

  return `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  `;
}

function removeIconSvg() {
  return `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m6 6 12 12" />
      <path d="m18 6-12 12" />
    </svg>
  `;
}

function renderTopics() {
  topicGrid.innerHTML = topics
    .map((topic) => {
      const selected = state.cart.has(topic.id);
      return `
        <article class="topic-card ${selected ? "is-selected" : ""}">
          <div class="topic-image">
            <img src="${topic.image}" alt="${topic.title}" loading="lazy" />
            <span class="topic-icon">${iconSvg(topic.icon)}</span>
          </div>
          <div class="topic-body">
            <div class="topic-topline">
              <span>Tema EIR</span>
              <span>${topic.price}€</span>
            </div>
            <h3>${topic.title}</h3>
            <p>${topic.description}</p>
            <div class="topic-meta">
              <span>${topic.pages} páginas</span>
              <span>PDF organizado</span>
            </div>
            <div class="topic-buy">
              <span class="topic-price">${selected ? "Seleccionado" : "Disponible"}</span>
              <div class="topic-actions">
                <button class="preview-button" type="button" data-preview-id="${topic.id}" aria-label="Previsualizar ${topic.title}">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                  <span>Previsualizar</span>
                </button>
                <button class="add-button ${selected ? "is-selected" : ""}" type="button" data-topic-id="${topic.id}" aria-label="${selected ? "Quitar" : "Agregar"} ${topic.title}">
                  ${cartIconSvg(selected)}
                  <span>${selected ? "Quitar" : "Añadir"}</span>
                </button>
              </div>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function selectedTopics() {
  return topics.filter((topic) => state.cart.has(topic.id));
}

function calculateTotal() {
  if (state.pack.includes("49")) return 49;
  if (state.pack.includes("149")) return 149;
  return selectedTopics().reduce((sum, topic) => sum + topic.price, 0);
}

function selectionLabel() {
  const items = selectedTopics();

  if (state.pack) return state.pack;
  if (!items.length) return "Pendiente de concretar";

  return items.map((topic) => topic.title).join(", ");
}

function buildOrderTemplate(formData) {
  const selected = selectionLabel();
  const total = `${calculateTotal()}€`;

  return [
    "SOLICITUD DE APUNTES EIR",
    "",
    "DATOS DEL CLIENTE",
    `Nombre: ${formData.get("name")}`,
    `Email: ${formData.get("email")}`,
    `Telefono/Bizum: ${formData.get("phone") || "No indicado"}`,
    "",
    "PEDIDO",
    `Seleccion: ${selected}`,
    `Páginas: ${state.pack ? "Según pack seleccionado" : selectedTopics().map((topic) => `${topic.title}: ${topic.pages} páginas`).join(" | ") || "Pendiente de concretar"}`,
    `Total estimado: ${total}`,
    "Metodo de pago: Bizum o metodo acordado por email",
    "",
    "MENSAJE DEL CLIENTE",
    formData.get("message") || "Sin mensaje adicional.",
    "",
    "SIGUIENTE PASO",
    "Responder al cliente con la confirmacion del pedido, datos de pago y plazo de entrega.",
  ].join("\n");
}

function persistCart() {
  localStorage.setItem("apuntes-cart", JSON.stringify([...state.cart]));
}

function renderCart() {
  const items = selectedTopics();
  const total = calculateTotal();

  const cartSize = state.pack ? 1 : items.length;
  cartCount.textContent = String(cartSize);
  cartCount.classList.toggle("has-items", cartSize > 0);
  cartTotal.textContent = `${total}€`;
  selectedTotal.textContent = `${total}€`;

  const summaryText = selectedSummary.querySelector("[data-selected-label]");
  if (state.pack) {
    summaryText.textContent = state.pack;
  } else if (items.length) {
    summaryText.textContent = `${items.length} tema${items.length === 1 ? "" : "s"} seleccionado${items.length === 1 ? "" : "s"}`;
  } else {
    summaryText.textContent = "Seleccion actual";
  }

  if (!items.length && !state.pack) {
    cartItems.innerHTML = `<p class="cart-empty">Todavia no has agregado temas.</p>`;
    return;
  }

  const packMarkup = state.pack
    ? `
      <div class="cart-item">
        <div>
          <p>${state.pack}</p>
          <span>Solicitud de pack</span>
        </div>
        <button type="button" data-clear-pack aria-label="Quitar pack">${removeIconSvg()}</button>
      </div>
    `
    : "";

  const itemsMarkup = items
    .map(
      (topic) => `
        <div class="cart-item">
          <div>
            <p>${topic.title}</p>
            <span>${topic.pages} páginas · ${topic.price}€</span>
          </div>
          <button type="button" data-remove-topic="${topic.id}" aria-label="Quitar ${topic.title}">${removeIconSvg()}</button>
        </div>
      `
    )
    .join("");

  cartItems.innerHTML = packMarkup + itemsMarkup;
}

function sync() {
  persistCart();
  renderTopics();
  renderCart();
}

function openCart() {
  cartDrawer.classList.add("is-open");
  cartDrawer.setAttribute("aria-hidden", "false");
}

function closeCart() {
  cartDrawer.classList.remove("is-open");
  cartDrawer.setAttribute("aria-hidden", "true");
}

function openPreview(topic) {
  previewTitle.textContent = topic.title;
  previewSubtitle.textContent = `Vista previa: 2 páginas interiores con marca de agua · ${topic.pages} páginas totales`;
  previewPages.innerHTML = topic.previewPages
    .map(
      (page, index) => `
        <figure class="preview-page">
          <img src="${page}" alt="Previsualización ${index + 1} de ${topic.title}" loading="lazy" draggable="false" />
          <figcaption>Página ${index + 2} · Muestra protegida</figcaption>
        </figure>
      `
    )
    .join("");
  previewModal.classList.add("is-open");
  previewModal.setAttribute("aria-hidden", "false");
}

function closePreview() {
  previewModal.classList.remove("is-open");
  previewModal.setAttribute("aria-hidden", "true");
  previewPages.innerHTML = "";
}

function buildEmailBody(formData) {
  const lines = buildOrderTemplate(formData).split("\n");

  return lines.filter(Boolean).join("\n");
}

function openMailtoWithOrder(formData, body) {
  const subject = encodeURIComponent("Solicitud de apuntes EIR");
  let encodedBody = encodeURIComponent(body);
  const hrefPrefix = `mailto:${SITE_CONFIG.contactEmail}?subject=${subject}&body=`;
  if (hrefPrefix.length + encodedBody.length > 1850) {
    encodedBody = encodeURIComponent(
      `${body.slice(0, 1200)}\n\n[Texto acortado por limite de mailto. Revisa la solicitud en la web o copia el resto manualmente.]`
    );
  }
  window.location.href = hrefPrefix + encodedBody;
}

async function submitForm(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const template = buildOrderTemplate(formData);
  const body = buildEmailBody(formData);

  formStatus.textContent = "Enviando solicitud...";

  if (!SITE_CONFIG.formEndpoint) {
    openMailtoWithOrder(formData, body);
    formStatus.textContent = "Se ha abierto tu correo con la solicitud preparada.";
    return;
  }

  const email = String(formData.get("email") || "").trim();
  const fd = new FormData();
  fd.append("_subject", "Solicitud de apuntes EIR");
  fd.append("_captcha", "false");
  fd.append("_replyto", email);
  fd.append("name", String(formData.get("name") || "").trim());
  fd.append("email", email);
  fd.append("phone", String(formData.get("phone") || "").trim() || "No indicado");
  fd.append("message", template);

  try {
    const response = await fetch(SITE_CONFIG.formEndpoint, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: fd,
    });

    let data = null;
    try {
      data = await response.json();
    } catch {
      /* respuesta no JSON */
    }

    const successFlag = data && (data.success === true || data.success === "true");
    if (response.ok && successFlag) {
      form.reset();
      state.cart.clear();
      state.pack = "";
      sync();
      formStatus.textContent = "Solicitud enviada. Te responderemos muy pronto.";
      return;
    }

    throw new Error((data && data.message) || `HTTP ${response.status}`);
  } catch {
    formStatus.textContent =
      "No se pudo enviar por la web (revisa conexion o activa el formulario en formsubmit.co la primera vez). Abriendo tu correo con el mismo texto.";
    openMailtoWithOrder(formData, body);
  }
}

topicGrid.addEventListener("click", (event) => {
  const previewButton = event.target.closest("[data-preview-id]");
  if (previewButton) {
    const topic = topics.find((item) => item.id === previewButton.dataset.previewId);
    if (topic) openPreview(topic);
    return;
  }

  const button = event.target.closest("[data-topic-id]");
  if (!button) return;

  const id = button.dataset.topicId;
  state.pack = "";

  if (state.cart.has(id)) {
    state.cart.delete(id);
  } else {
    state.cart.add(id);
  }

  sync();
});

document.querySelector("[data-cart-open]").addEventListener("click", openCart);
document.querySelector("[data-cart-close]").addEventListener("click", closeCart);
document.querySelector("[data-cart-contact]").addEventListener("click", closeCart);
document.querySelector("[data-preview-close]").addEventListener("click", closePreview);

cartDrawer.addEventListener("click", (event) => {
  if (event.target === cartDrawer) closeCart();

  const removeButton = event.target.closest("[data-remove-topic]");
  if (removeButton) {
    state.cart.delete(removeButton.dataset.removeTopic);
    sync();
  }

  if (event.target.closest("[data-clear-pack]")) {
    state.pack = "";
    sync();
  }
});

previewModal.addEventListener("click", (event) => {
  if (event.target === previewModal) closePreview();
});

previewPages.addEventListener("contextmenu", (event) => {
  event.preventDefault();
});

previewPages.addEventListener("dragstart", (event) => {
  event.preventDefault();
});

document.querySelectorAll("[data-select-pack]").forEach((button) => {
  button.addEventListener("click", () => {
    state.pack = button.dataset.selectPack;
    state.cart.clear();
    sync();
    document.querySelector("#contacto").scrollIntoView({ behavior: "smooth" });
  });
});

form.addEventListener("submit", submitForm);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeCart();
    closePreview();
  }
});

sync();
