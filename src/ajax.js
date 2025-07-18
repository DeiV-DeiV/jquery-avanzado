//ajax.js

export async function get(template) {
  if (!template || typeof template !== "string") {
    console.error("❌ mi$.html(): Ruta inválida.");
    return this;
  }
  try {
    const res = await fetch(`./components${template}.html`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const html = await res.text();
    this._forEach((el) => (el.innerHTML += html));
  } catch (error) {
    console.error("❌ mi$.html(): Falló la carga del componente:", error);
  }
  return this;
}

export async function post(template, body = {}) {
  if (!template || typeof template !== "string") {
    console.error("❌ mi$.html(): Ruta inválida.");
    return this;
  }

  try {
    const opts = Object.freeze({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const res = await fetch(`./components${template}.html`, opts);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const html = await res.text();
    this._forEach((el) => (el.innerHTML += html));
  } catch (error) {
    console.error("❌ mi$.html(): Falló la carga del componente:", error);
  }
  return this;
}
