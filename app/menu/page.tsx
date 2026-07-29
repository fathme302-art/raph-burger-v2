"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ShoppingBag,
  ArrowLeft,
  ArrowRight,
  Plus,
  X,
  Minus,
  Trash2,
  MessageCircle,
} from "lucide-react";
import { MENU, WHATSAPP_NUMBER, type MenuItem, type Category } from "@/lib/menu";

const ACCENT = "#C64A22";

interface CartLine {
  id: number;
  nom: string;
  prix: string;
  image: string;
  qty: number;
}

export default function MenuPage() {
  const [category, setCategory] = useState<Category>("Plats");
  const [index, setIndex] = useState(0);
  const [cart, setCart] = useState<CartLine[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  const categories: Category[] = ["Plats", "Boissons", "Desserts"];

  const items = useMemo(
    () => MENU.filter((m) => m.categorie === category),
    [category]
  );
  const current = items[index] || items[0];

  function switchCategory(cat: Category) {
    setCategory(cat);
    setIndex(0);
  }

  function prev() {
    setIndex((i) => (i - 1 + items.length) % items.length);
  }
  function next() {
    setIndex((i) => (i + 1) % items.length);
  }

  function addToCart(item: MenuItem) {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === item.id);
      if (existing) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, qty: p.qty + 1 } : p
        );
      }
      return [
        ...prev,
        { id: item.id, nom: item.nom, prix: item.prix, image: item.image, qty: 1 },
      ];
    });
  }

  function updateQty(id: number, delta: number) {
    setCart((prev) =>
      prev
        .map((p) => (p.id === id ? { ...p, qty: p.qty + delta } : p))
        .filter((p) => p.qty > 0)
    );
  }

  function removeItem(id: number) {
    setCart((prev) => prev.filter((p) => p.id !== id));
  }

  const cartCount = cart.reduce((s, p) => s + p.qty, 0);
  const estimatedTotal = cart.reduce((sum, p) => {
    const n = parseInt(String(p.prix).replace(/\s/g, "").match(/\d+/)?.[0] || "0", 10);
    return sum + n * p.qty;
  }, 0);

  function sendWhatsAppOrder() {
    if (cart.length === 0) return;
    const lines = cart.map((p) => `• ${p.qty}× ${p.nom} — ${p.prix}`).join("\n");
    const msg = `Bonjour Raph Burger 👋\n\nJe souhaite passer commande :\n\n${lines}\n\nTotal estimé : ${estimatedTotal.toLocaleString("fr-FR")} FCFA\n\nMerci !`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  }

  if (!current) return null;

  return (
    <div
      className="relative min-h-screen w-full overflow-hidden transition-all duration-700 ease-out"
      style={{
        background: `radial-gradient(120% 90% at 50% 8%, color-mix(in srgb, ${ACCENT} 26%, white) 0%, color-mix(in srgb, ${ACCENT} 15%, white) 55%, #ffffff 100%)`,
      }}
    >
      <header className="relative z-30 flex items-center justify-between px-5 py-5 md:px-10">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 rounded-full bg-black/5 px-3.5 py-2 text-sm font-medium text-black/70 transition-colors hover:bg-black/10"
        >
          <ChevronLeft size={16} />
          Accueil
        </Link>
        <span className="font-display text-lg tracking-tight text-black md:text-xl">
          RAPH BURGER
        </span>
        <button
          type="button"
          onClick={() => setCartOpen(true)}
          aria-label="Voir le panier"
          className="relative inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-semibold text-white transition-transform hover:scale-105 active:scale-95"
        >
          <ShoppingBag size={16} />
          <span className="hidden sm:inline">Panier</span>
          {cartCount > 0 && (
            <span
              className="absolute -top-1 -right-1 inline-flex items-center justify-center min-w-5 h-5 px-1 rounded-full text-[10px] font-bold text-white"
              style={{ backgroundColor: ACCENT }}
            >
              {cartCount}
            </span>
          )}
        </button>
      </header>

      <nav className="relative z-30 flex justify-center gap-2 px-4">
        {categories.map((cat) => {
          const active = category === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => switchCategory(cat)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                active
                  ? "bg-black text-white shadow-lg"
                  : "bg-black/5 text-black/60 hover:bg-black/10"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </nav>

      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
        <span
          key={current.id}
          className="font-display whitespace-nowrap px-4 text-center leading-none"
          style={{
            color: ACCENT,
            opacity: 0.14,
            fontSize: "clamp(4rem, 18vw, 20rem)",
            animation: "fadeIn 600ms ease-out",
          }}
          aria-hidden="true"
        >
          {current.nom.split(" ")[0]}
        </span>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col items-center px-6">
        <div className="relative mt-2 flex items-center justify-center md:mt-6">
          <button
            type="button"
            onClick={prev}
            aria-label="Précédent"
            className="absolute -left-2 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/70 text-black shadow-md backdrop-blur-sm transition-transform hover:scale-110 active:scale-90 md:-left-16 md:h-14 md:w-14"
          >
            <ArrowLeft size={20} />
          </button>

          <div
            key={current.id}
            className="relative"
            style={{ animation: "dishIn 500ms ease-out" }}
          >
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-[2.5rem] blur-3xl sm:h-96 sm:w-96 md:h-[30rem] md:w-[30rem]"
              style={{ backgroundColor: ACCENT + "66" }}
              aria-hidden="true"
            />
            <div
              className="relative h-64 w-64 overflow-hidden rounded-[2rem] p-3 shadow-2xl ring-1 ring-black/5 sm:h-80 sm:w-80 sm:rounded-[2.5rem] md:h-[26rem] md:w-[26rem] flex items-center justify-center"
              style={{
                boxShadow: `0 30px 70px -15px ${ACCENT}80`,
                backgroundColor: `color-mix(in srgb, ${ACCENT} 12%, white)`,
              }}
            >
              <span
                style={{ fontSize: "clamp(6rem, 20vw, 14rem)", lineHeight: 1 }}
                className="drop-shadow-xl select-none"
              >
                {current.image}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Suivant"
            className="absolute -right-2 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/70 text-black shadow-md backdrop-blur-sm transition-transform hover:scale-110 active:scale-90 md:-right-16 md:h-14 md:w-14"
          >
            <ArrowRight size={20} />
          </button>
        </div>

        <div
          key={"meta-" + current.id}
          className="mt-8 flex flex-col items-center text-center"
          style={{ animation: "fadeUp 500ms ease-out" }}
        >
          <h1 className="font-display max-w-2xl text-3xl leading-tight tracking-tight text-black sm:text-4xl md:text-5xl">
            {current.nom}
          </h1>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-black/60 md:text-base">
            {current.description}
          </p>
          <p className="mt-4 text-2xl font-bold text-black md:text-3xl">
            {current.prix}
          </p>
          <div className="mt-6 h-12">
            <button
              type="button"
              onClick={() => addToCart(current)}
              className="inline-flex items-center gap-2 rounded-full bg-black px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-105 active:scale-95"
            >
              <Plus size={16} />
              Ajouter au panier
            </button>
          </div>
        </div>

        <div className="mb-8 mt-6 flex items-center justify-center gap-2 flex-wrap max-w-md">
          {items.map((it, i) => {
            const active = i === index;
            return (
              <button
                key={it.id}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Aller à ${it.nom}`}
                className="h-2 rounded-full transition-all duration-300"
                style={{
                  width: active ? 28 : 8,
                  backgroundColor: active ? ACCENT : "rgba(0,0,0,0.18)",
                }}
              />
            );
          })}
        </div>
      </div>

      {cartOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-end"
          style={{ animation: "fadeIn 200ms ease-out" }}
        >
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setCartOpen(false)}
          />
          <div
            className="relative w-full max-w-md bg-white h-full flex flex-col shadow-2xl"
            style={{ animation: "slideIn 300ms ease-out" }}
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-black/5">
              <h2 className="font-display text-xl tracking-tight">MON PANIER</h2>
              <button
                onClick={() => setCartOpen(false)}
                className="w-9 h-9 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-4">
              {cart.length === 0 ? (
                <div className="text-center py-16">
                  <div
                    className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                    style={{ backgroundColor: ACCENT + "15" }}
                  >
                    <ShoppingBag size={24} style={{ color: ACCENT }} />
                  </div>
                  <p className="text-sm text-black/60">Votre panier est vide</p>
                  <p className="text-xs text-black/40 mt-1">
                    Ajoutez vos plats préférés !
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-3 p-3 rounded-2xl bg-black/[0.02] border border-black/5"
                    >
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 text-3xl"
                        style={{
                          backgroundColor: `color-mix(in srgb, ${ACCENT} 12%, white)`,
                        }}
                      >
                        {item.image}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-black truncate">
                          {item.nom}
                        </p>
                        <p className="text-xs text-black/60 mt-0.5">{item.prix}</p>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => updateQty(item.id, -1)}
                          className="w-7 h-7 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center transition-colors"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-sm font-bold w-6 text-center">
                          {item.qty}
                        </span>
                        <button
                          onClick={() => updateQty(item.id, 1)}
                          className="w-7 h-7 rounded-full bg-black text-white hover:bg-black/80 flex items-center justify-center transition-colors"
                        >
                          <Plus size={12} />
                        </button>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="ml-1 w-7 h-7 rounded-full text-black/40 hover:text-red-500 hover:bg-red-50 flex items-center justify-center transition-colors"
                        >
                          <Trash2 size={12} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="border-t border-black/5 px-6 py-5 space-y-3 bg-white">
                <div className="flex items-baseline justify-between">
                  <span className="text-sm text-black/60">Total estimé</span>
                  <span className="font-display text-2xl">
                    {estimatedTotal.toLocaleString("fr-FR")} FCFA
                  </span>
                </div>
                <button
                  onClick={sendWhatsAppOrder}
                  className="w-full flex items-center justify-center gap-2 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white px-6 py-3.5 text-sm font-bold transition-all hover:scale-[1.02] active:scale-95 shadow-lg"
                >
                  <MessageCircle size={18} />
                  Commander via WhatsApp
                </button>
                <p className="text-[11px] text-center text-black/40">
                  Vous serez redirigé vers WhatsApp pour finaliser
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="relative z-10 pb-6 text-center">
        <p className="text-[11px] text-black/40 tracking-widest uppercase">
          Abidjan · Côte d&apos;Ivoire · Cuisine ivoirienne authentique
        </p>
      </div>
    </div>
  );
}
