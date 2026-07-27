"use client";

import { useEffect, useRef, useState } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import {
  MessageSquare,
  X,
  Send,
  Loader2,
  AlertCircle,
  Sparkles,
} from "lucide-react";
import { siteConfig } from "@/data/site";

const SUGGESTIONS = [
  "What services do you offer?",
  "How much does a website cost?",
  "How long does a project take?",
];

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  const { messages, sendMessage, status, error } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  });

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, status]);

  const isBusy = status === "submitted" || status === "streaming";
  const notConfigured =
    !!error && /not (fully )?configured/i.test(error.message ?? "");

  function submit(text: string) {
    const trimmed = text.trim();
    if (!trimmed || isBusy) return;
    sendMessage({ text: trimmed });
    setInput("");
  }

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {open && (
        <div className="mb-4 w-[min(380px,calc(100vw-3rem))] h-[min(410px,calc(100vh-8rem))] rounded-3xl border border-navy-900/10 dark:border-paper-50/10 bg-white dark:bg-ink-900 shadow-2xl shadow-navy-900/20 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between gap-3 px-5 py-4 bg-navy-900 dark:bg-navy-950 text-white shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-sky-400/20 grid place-items-center">
                <Sparkles size={16} className="text-sky-300" />
              </div>
              <div>
                <div className="font-display font-semibold text-sm leading-tight">
                  {siteConfig.name} Assistant
                </div>
                <div className="text-[11px] text-paper-50/55">
                  Usually replies instantly
                </div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="w-8 h-8 grid place-items-center rounded-full hover:bg-white/10 transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-paper-50 dark:bg-ink-900"
          >
            {messages.length === 0 && (
              <div className="text-center py-6">
                <p className="text-sm text-navy-900/60 dark:text-paper-50/60 px-4">
                  Hi! Ask me about our services, pricing, or process — or
                  jump straight to a real conversation with the team.
                </p>
                <div className="mt-4 flex flex-col gap-2 px-2">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => submit(s)}
                      className="text-left text-sm px-3.5 py-2.5 rounded-xl border border-navy-900/10 dark:border-paper-50/10 text-navy-900/75 dark:text-paper-50/75 hover:border-blue-500 dark:hover:border-sky-400 transition-colors"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-6 whitespace-pre-wrap ${
                    message.role === "user"
                      ? "bg-navy-900 dark:bg-sky-400 text-white dark:text-navy-950"
                      : "bg-white dark:bg-ink-800 border border-navy-900/10 dark:border-paper-50/10 text-navy-900/85 dark:text-paper-50/85"
                  }`}
                >
                  {message.parts.map((part, i) =>
                    part.type === "text" ? (
                      <span key={i}>{part.text}</span>
                    ) : null
                  )}
                </div>
              </div>
            ))}

            {isBusy && (
              <div className="flex justify-start">
                <div className="rounded-2xl px-4 py-2.5 bg-white dark:bg-ink-800 border border-navy-900/10 dark:border-paper-50/10">
                  <Loader2
                    size={14}
                    className="animate-spin text-navy-900/40 dark:text-paper-50/40"
                  />
                </div>
              </div>
            )}

            {error && (
              <div className="flex items-start gap-2 rounded-xl bg-red-500/10 border border-red-400/30 px-3.5 py-2.5 text-xs text-red-500 dark:text-red-400">
                <AlertCircle size={14} className="mt-0.5 shrink-0" />
                <span>
                  {notConfigured
                    ? "The chat assistant isn't fully configured yet — please reach out via WhatsApp or the contact form instead."
                    : error.message || "Something went wrong. Please try again."}
                </span>
              </div>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              submit(input);
            }}
            className="shrink-0 flex items-center gap-2 p-3 border-t border-navy-900/10 dark:border-paper-50/10 bg-white dark:bg-ink-900"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              disabled={notConfigured}
              className="flex-1 min-w-0 rounded-full border border-navy-900/15 dark:border-paper-50/15 bg-transparent px-4 py-2.5 text-sm text-navy-900 dark:text-white placeholder:text-navy-900/40 dark:placeholder:text-paper-50/40 focus:outline-none focus:border-blue-500 dark:focus:border-sky-400 disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={isBusy || notConfigured || !input.trim()}
              aria-label="Send message"
              className="w-10 h-10 shrink-0 grid place-items-center rounded-full bg-navy-900 dark:bg-sky-400 text-white dark:text-navy-950 disabled:opacity-40 hover:bg-blue-600 dark:hover:bg-sky-300 transition-colors"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat assistant" : "Open chat assistant"}
        className="ml-auto flex items-center gap-2 rounded-full bg-navy-900 dark:bg-sky-400 pl-4 pr-5 py-3.5 text-white dark:text-navy-950 shadow-lg shadow-navy-900/25 hover:scale-[1.04] transition-transform"
      >
        {open ? <X size={20} /> : <MessageSquare size={20} />}
        <span className="hidden sm:inline text-sm font-semibold">
          {open ? "Close" : "Ask us"}
        </span>
      </button>
    </div>
  );
}
