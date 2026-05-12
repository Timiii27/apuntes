const SITE_CONFIG = {
  contactEmail: "tihomir27402@gmail.com",
  formEndpoint: "https://formsubmit.co/ajax/tihomir27402@gmail.com",
};

const TOPIC_PRICE = 12;

const topics = [
  ["Oncologia y Hematologia", "Celulas, tratamientos y cuidados frecuentes.", 62, "cells", "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=900&q=78"],
  ["Equilibrio Hidroelectrolitico", "Bases para interpretar alteraciones y su manejo.", 38, "droplet", "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=900&q=78"],
  ["Administracion y Gestion", "Organizacion sanitaria, liderazgo y calidad.", 45, "clipboard", "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=900&q=78"],
  ["Urgencias y Emergencias", "Prioridades, triaje y actuacion rapida.", 58, "siren", "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=900&q=78"],
  ["Traumatologia", "Lesiones, inmovilizacion y cuidados practicos.", 42, "bone", "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=900&q=78"],
  ["Nutricion y Dietetica", "Dietas, necesidades y educacion sanitaria.", 36, "apple", "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=78"],
  ["Farmacologia", "Farmacos clave, seguridad y administracion.", 70, "pill", "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=900&q=78"],
  ["Neurologia", "Valoracion neurologica y patologias frecuentes.", 54, "brain", "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=900&q=78"],
  ["Investigacion y Estadistica", "Metodologia, lectura critica y resultados.", 44, "chart", "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=78"],
  ["Endocrinologia", "Diabetes, hormonas y cuidados especificos.", 41, "activity", "https://images.unsplash.com/photo-1606206873764-fd15e242df52?auto=format&fit=crop&w=900&q=78"],
  ["Nefro-Urologia", "Funcion renal, urologia y procedimientos.", 49, "kidney", "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=900&q=78"],
  ["Fundamentos de Enfermeria", "Tecnicas basicas, seguridad y cuidados.", 66, "cross", "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=78"],
  ["Dietas Terapeuticas", "Planes nutricionales aplicados a patologias.", 34, "leaf", "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=78"],
  ["Salud Mental", "Trastornos, comunicacion y cuidados.", 47, "heart", "https://images.unsplash.com/photo-1493836512294-502baa1986e2?auto=format&fit=crop&w=900&q=78"],
  ["Digestivo", "Patologia digestiva y cuidados enfermeros.", 52, "stomach", "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=900&q=78"],
  ["Respiratorio", "Oxigenoterapia, ventilacion y enfermedades.", 50, "lungs", "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=900&q=78"],
  ["Geriatria", "Cuidados del paciente mayor y fragilidad.", 39, "user", "https://images.unsplash.com/photo-1581579438747-104c53d7fbc4?auto=format&fit=crop&w=900&q=78"],
  ["Cardiologia", "ECG, insuficiencia cardiaca y cuidados.", 57, "pulse", "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=900&q=78"],
  ["Dermatologia", "Lesiones cutaneas, heridas y prevencion.", 31, "sparkle", "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=78"],
  ["Ginecologia", "Salud sexual, embarazo y cuidados.", 53, "venus", "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=78"],
  ["Pediatria", "Cuidados pediatricos, vacunas y desarrollo.", 61, "baby", "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=900&q=78"],
  ["Enfermeria Comunitaria", "Promocion, prevencion y salud publica.", 55, "home", "https://images.unsplash.com/photo-1576765607924-270e364dd862?auto=format&fit=crop&w=900&q=78"],
  ["Enfermeria Psicosocial", "Relacion terapeutica y contexto social.", 33, "users", "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=78"],
  ["Etica y Legislacion", "Marco legal, consentimiento y responsabilidad.", 40, "scale", "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=900&q=78"],
].map(([title, description, pages, icon, image], index) => ({
  id: `tema-${index + 1}`,
  title,
  description,
  pages,
  icon,
  image,
  price: TOPIC_PRICE,
}));

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
              <span>${topic.pages} paginas</span>
              <span>PDF organizado</span>
            </div>
            <div class="topic-buy">
              <span class="topic-price">${selected ? "Seleccionado" : "Disponible"}</span>
              <button class="${selected ? "is-selected" : ""}" type="button" data-topic-id="${topic.id}" aria-label="${selected ? "Quitar" : "Agregar"} ${topic.title}">
                ${cartIconSvg(selected)}
                <span>${selected ? "Quitar" : "Añadir"}</span>
              </button>
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
    `Paginas: ${state.pack ? "Segun pack seleccionado" : selectedTopics().map((topic) => `${topic.title}: ${topic.pages} paginas`).join(" | ") || "Pendiente de concretar"}`,
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
            <span>${topic.pages} paginas · ${topic.price}€</span>
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
  if (event.key === "Escape") closeCart();
});

sync();
