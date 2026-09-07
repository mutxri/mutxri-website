<template>
  <section
    id="contact"
    class="bg-forest-900 py-20 sm:py-28 lg:py-36 relative overflow-hidden"
  >
    <!-- Decorative gradient blob -->
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-forest-700/20 rounded-full blur-3xl pointer-events-none"
    />

    <div class="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Left: CTA content -->
        <div>
          <div class="flex items-center gap-3 mb-6" data-aos="fade-right">
            <div class="w-8 h-px bg-gold-500" />
            <span
              class="text-gold-400 text-xs font-medium tracking-[0.3em] uppercase font-sans"
              >Financial Review</span
            >
          </div>

          <h2
            class="font-serif text-4xl md:text-5xl font-bold text-white leading-tight mb-6"
            data-aos="fade-right"
            data-aos-delay="80"
          >
            Financial Health<br />
            <em class="not-italic text-forest-400">Review</em>
          </h2>

          <p
            class="text-white/50 text-base font-sans font-light leading-relaxed mb-8"
            data-aos="fade-right"
            data-aos-delay="140"
          >
            We review your P&L, balance sheet, and cash flow statement, quantify
            where margin is leaking, and map the highest-priority fixes to net
            profit.
          </p>

          <!-- Audit image -->
          <div
            class="relative overflow-hidden mb-10"
            data-aos="fade-right"
            data-aos-delay="170"
          >
            <img
              src="/book-free-audit.jpeg"
              alt="Financial health review"
              class="w-full h-48 sm:h-56 object-cover object-center"
            />
            <div class="absolute inset-0 bg-forest-950/45" />
            <div
              class="absolute inset-0 flex flex-col items-start justify-end p-5"
            >
              <div
                class="text-white font-serif text-lg font-semibold leading-snug mb-1"
              >
                No obligation.
              </div>
              <div class="text-white/60 text-xs font-sans tracking-wide">
                P&L, balance sheet, and cash flow analysis
              </div>
            </div>
            <div class="absolute top-0 left-0 w-1 h-full bg-gold-500" />
          </div>

          <!-- Contact details -->
          <div class="space-y-5" data-aos="fade-right" data-aos-delay="200">
            <NuxtLink to="tel:+15515500720" class="flex items-center gap-4 group">
              <div
                class="w-12 h-12 rounded-full bg-forest-800 group-hover:bg-gold-500 flex items-center justify-center transition-colors duration-300 shrink-0"
              >
                <Icon
                  name="mdi:phone"
                  size="20"
                  class="text-gold-400 group-hover:text-forest-950 transition-colors duration-300"
                />
              </div>
              <div>
                <div
                  class="text-white/40 text-xs tracking-[0.2em] uppercase font-sans mb-0.5"
                >
                  Call Us
                </div>
                <div
                  class="text-white font-semibold text-lg font-sans tracking-wide group-hover:text-gold-400 transition-colors duration-300"
                >
                  +1 (551) 550-0720
                </div>
              </div>
            </NuxtLink>

            <NuxtLink to="mailto:jimmy@mutxri.com" class="flex items-center gap-4 group">
              <div
                class="w-12 h-12 rounded-full bg-forest-800 group-hover:bg-gold-500 flex items-center justify-center transition-colors duration-300 shrink-0"
              >
                <Icon
                  name="mdi:email-outline"
                  size="20"
                  class="text-gold-400 group-hover:text-forest-950 transition-colors duration-300"
                />
              </div>
              <div>
                <div
                  class="text-white/40 text-xs tracking-[0.2em] uppercase font-sans mb-0.5"
                >
                  Email Us
                </div>
                <div
                  class="text-white font-medium text-sm font-sans group-hover:text-gold-400 transition-colors duration-300"
                >
                  jimmy@mutxri.com
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>

        <!-- Right: Contact card -->
        <div
          class="bg-forest-800/60 border border-forest-700/60 p-10 lg:p-12 backdrop-blur-sm"
          data-aos="fade-left"
          data-aos-delay="100"
        >
          <div class="w-10 h-1 bg-gold-500 mb-8" />
          <h3 class="font-serif text-2xl font-semibold text-white mb-2">
            Request Your Review
          </h3>
          <p class="text-white/40 text-sm font-sans mb-8 leading-relaxed">
            Tell us about your business and we'll reach out to schedule your
            financial health review.
          </p>

          <form class="space-y-4" @submit.prevent="submitForm">
            <!-- Honeypot: web3forms server-side spam trap. Real visitors never
                 see this field; if a bot fills it, the submission is dropped. -->
            <input type="hidden" name="botcheck" v-model="form.botcheck" />

            <div>
              <label
                class="block text-white/50 text-xs tracking-[0.15em] uppercase font-sans mb-2"
              >
                Full Name
              </label>
              <input
                v-model="form.name"
                required
                type="text"
                placeholder="Your full name"
                class="w-full bg-forest-900/80 border border-forest-700/60 text-white px-4 py-3 text-sm placeholder:text-white/20 focus:outline-none focus:border-gold-500/50 transition-colors"
              />
            </div>

            <div>
              <label
                class="block text-white/50 text-xs tracking-[0.15em] uppercase font-sans mb-2"
              >
                Company Name
              </label>
              <input
                v-model="form.company"
                required
                type="text"
                placeholder="Your company name"
                class="w-full bg-forest-900/80 border border-forest-700/60 text-white px-4 py-3 text-sm placeholder:text-white/20 focus:outline-none focus:border-gold-500/50 transition-colors"
              />
            </div>

            <div>
              <label
                class="block text-white/50 text-xs tracking-[0.15em] uppercase font-sans mb-2"
              >
                Email / Phone Number
              </label>
              <input
                v-model="form.contact"
                required
                type="text"
                placeholder="Best way to reach you"
                class="w-full bg-forest-900/80 border border-forest-700/60 text-white px-4 py-3 text-sm placeholder:text-white/20 focus:outline-none focus:border-gold-500/50 transition-colors"
              />
            </div>

            <div>
              <label
                class="block text-white/50 text-xs tracking-[0.15em] uppercase font-sans mb-2"
              >
                Short Message
              </label>
              <textarea
                v-model="form.message"
                required
                rows="4"
                placeholder="Tell us briefly about your business and what you'd like help with..."
                class="w-full bg-forest-900/80 border border-forest-700/60 text-white px-4 py-3 text-sm placeholder:text-white/20 focus:outline-none focus:border-gold-500/50 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              :disabled="loading"
              class="w-full bg-gold-500 text-forest-950 font-semibold text-sm px-8 py-4 flex items-center justify-center gap-3 hover:bg-gold-400 transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <span v-if="!loading">Request Your Review →</span>
              <span v-else>Submitting...</span>
            </button>

            <!-- Success -->
            <div
              v-if="success"
              class="flex items-start gap-3 bg-green-950/60 border border-green-700/50 p-4"
            >
              <span class="text-green-400 text-lg shrink-0">✓</span>
              <div>
                <p class="text-green-400 text-sm font-semibold mb-0.5">
                  We have received your message!
                </p>
                <p class="text-green-400/70 text-xs leading-relaxed">
                  We shall get back to you within 24 hours. If urgent, call our helpline:
                  <NuxtLink to="tel:+15515500720" class="text-gold-400 font-semibold hover:underline">+1 (551) 550-0720</NuxtLink>
                </p>
              </div>
            </div>

            <!-- Error -->
            <div
              v-if="error"
              class="flex items-start gap-3 bg-red-950/60 border border-red-700/50 p-4"
            >
              <span class="text-red-400 text-lg shrink-0">✕</span>
              <div>
                <p class="text-red-400 text-sm font-semibold mb-0.5">
                  Something went wrong.
                </p>
                <p class="text-red-400/70 text-xs leading-relaxed">
                  Please try again or reach us directly at
                  <NuxtLink to="mailto:jimmy@mutxri.com" class="text-gold-400 font-semibold hover:underline">jimmy@mutxri.com</NuxtLink>
                </p>
              </div>
            </div>
          </form>

          <p
            class="text-white/25 text-xs font-sans text-center mt-4 leading-relaxed"
          >
            No spam. No sales pitch. Just an honest look at your numbers.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref, watch } from "vue";

const loading = ref(false);
const success = ref(false);
const error = ref(false);

watch(success, (val) => {
  if (val) setTimeout(() => (success.value = false), 10000);
});

watch(error, (val) => {
  if (val) setTimeout(() => (error.value = false), 10000);
});

const form = reactive({
  access_key: "9ed7b374-1a6c-4eda-9fd2-ca43baabc9ce",
  subject: "New Financial Health Review Request",
  name: "",
  company: "",
  contact: "",
  message: "",
  botcheck: "",
});

async function submitForm() {
  loading.value = true;
  success.value = false;
  error.value = false;

  try {
    // Look up the sender's public IP / location in the browser and attach it
    // to the submission, so every notification email shows who submitted and
    // from where. Falls back to "unknown" silently if the lookup fails.
    const meta = await getSenderMeta();
    const payload = {
      ...form,
      sender_ip: meta.ip,
      sender_location: meta.location,
      sender_browser: meta.ua,
      submitted_at: new Date().toISOString(),
    };

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (result.success) {
      success.value = true;
      if (window.fbq) window.fbq("track", "Lead");

      form.name = "";
      form.company = "";
      form.contact = "";
      form.message = "";
    } else {
      throw new Error("Submission failed");
    }
  } catch (err) {
    error.value = true;
  } finally {
    loading.value = false;
  }
}

// Best-effort sender fingerprint: public IP, rough location, and browser.
// ipapi.co returns all three in one call; ipify is the fallback if it fails.
async function getSenderMeta() {
  const ua = navigator.userAgent || "unknown";
  const fetchWithTimeout = (url) => {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 5000);
    return fetch(url, { signal: ctrl.signal }).finally(() => clearTimeout(timer));
  };

  try {
    const r = await fetchWithTimeout("https://ipapi.co/json/");
    if (r.ok) {
      const j = await r.json();
      if (j && j.ip) {
        const parts = [j.city, j.region, j.country_name].filter(Boolean);
        return { ip: j.ip, location: parts.join(", ") || "unknown", ua };
      }
    }
  } catch {
    // fall through to ipify
  }

  try {
    const r = await fetchWithTimeout("https://api.ipify.org?format=json");
    if (r.ok) {
      const j = await r.json();
      if (j && j.ip) return { ip: j.ip, location: "unknown", ua };
    }
  } catch {
    // fall through to unknown
  }

  return { ip: "unknown", location: "unknown", ua };
}
</script>