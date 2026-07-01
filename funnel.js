/* ══════════════════════════════════════════════
   FUNNEL DE CONVERSION — RusStudy
   Étape 1 : popup vidéo + email (premier scroll)
   Étape 2 : popup guide PDF gratuit
   Étape 3 : prise de rendez-vous (calendrier custom)
══════════════════════════════════════════════ */

(function () {
  const STORAGE_KEY = 'rs_funnel_seen';
  const PDF_PATH = 'assets/pdf/guide-gratuit-etudes-russie.pdf';
  const VIDEO_PATH = 'assets/video/presentation-russtudy.mp4'; // placeholder — remplacer par la vraie vidéo marketing
  const POSTER_PATH = 'assets/img/og-cover.jpg';

  /* ─── Styles ─── */
  const style = document.createElement('style');
  style.textContent = `
  .fn-overlay{position:fixed;inset:0;z-index:850;background:rgba(0,0,0,0);display:flex;align-items:center;justify-content:center;padding:16px;pointer-events:none;transition:background .35s}
  .fn-overlay.open{background:rgba(0,0,0,.65);pointer-events:all}
  .fn-sheet{width:min(480px,100%);max-height:92svh;background:#F0EBE3;border-radius:24px;transform:scale(.94) translateY(20px);opacity:0;transition:transform .35s cubic-bezier(.23,1,.32,1),opacity .35s;overflow:hidden;display:flex;flex-direction:column}
  .fn-overlay.open .fn-sheet{transform:scale(1) translateY(0);opacity:1}
  .fn-close{position:absolute;top:14px;right:14px;width:36px;height:36px;border-radius:50%;background:rgba(0,0,0,.45);border:none;cursor:pointer;display:grid;place-items:center;z-index:2}
  .fn-close svg{stroke:#fff;fill:none;width:15px;height:15px;stroke-width:2.5}
  .fn-video-wrap{position:relative;aspect-ratio:16/9;background:#000}
  .fn-video-wrap video,.fn-video-wrap canvas{width:100%;height:100%;display:block;object-fit:cover}
  .fn-anim-badge{position:absolute;left:12px;bottom:12px;background:rgba(0,0,0,.55);color:#fff;font-size:.66rem;font-weight:600;letter-spacing:.02em;padding:6px 12px;border-radius:50px;z-index:1}
  .fn-body{padding:22px 24px 26px;overflow-y:auto}
  .fn-tag{display:inline-block;background:var(--purple);color:#000;border-radius:50px;padding:5px 14px;font-size:.7rem;font-weight:700;letter-spacing:.04em;text-transform:uppercase;margin-bottom:12px}
  .fn-body h3{font-size:1.3rem;font-weight:700;letter-spacing:-.03em;line-height:1.2;margin-bottom:8px;color:#0A0A0A}
  .fn-body p.fn-desc{font-size:.85rem;opacity:.6;line-height:1.55;margin-bottom:16px;color:#0A0A0A}
  .fn-input{width:100%;background:#fff;border:1.5px solid rgba(0,0,0,.1);border-radius:50px;padding:13px 18px;font-family:'Space Grotesk',sans-serif;font-size:.9rem;color:#0A0A0A;outline:none;margin-bottom:10px;transition:border-color .2s}
  .fn-input:focus{border-color:var(--purple)}
  .fn-btn{width:100%;background:#0A0A0A;color:#fff;border:none;border-radius:50px;padding:15px;font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:.92rem;cursor:pointer;transition:filter .15s,transform .15s}
  .fn-btn:hover{filter:brightness(1.2);transform:scale(1.01)}
  .fn-btn.purple{background:var(--purple);color:#000}
  .fn-btn:disabled{opacity:.5;cursor:wait}
  .fn-btn-secondary{width:100%;background:transparent;border:1.5px solid rgba(0,0,0,.15);border-radius:50px;padding:13px;font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:.85rem;color:#0A0A0A;cursor:pointer;margin-top:8px}
  .fn-err{color:#EF4444;font-size:.78rem;margin-top:4px;display:none}
  .fn-trust{display:flex;flex-wrap:wrap;gap:10px;margin-top:14px}
  .fn-trust span{font-size:.7rem;opacity:.4;display:flex;align-items:center;gap:4px;color:#0A0A0A}
  .fn-trust span::before{content:'✓';color:var(--green);font-weight:700;opacity:1}
  .fn-pdf-icon{width:60px;height:74px;background:#EF4444;border-radius:8px;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:.65rem;margin:6px auto 18px;box-shadow:0 10px 30px rgba(0,0,0,.18)}
  .fn-pdf-icon span{font-size:1rem;margin-top:2px}
  .fn-services{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:14px}
  .fn-svc{border-radius:50px;padding:9px 16px;border:1.5px solid rgba(0,0,0,.12);background:#fff;cursor:pointer;font-family:'Space Grotesk',sans-serif;font-size:.8rem;font-weight:600;color:#0A0A0A;transition:all .18s}
  .fn-svc.sel{background:#0A0A0A;color:#fff;border-color:#0A0A0A}
  .fn-label{font-size:.72rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;opacity:.45;margin:14px 0 8px;display:block;color:#0A0A0A}
  .fn-days{display:flex;gap:8px;overflow-x:auto;padding-bottom:4px;margin-bottom:6px}
  .fn-day{flex-shrink:0;width:58px;border-radius:16px;border:1.5px solid rgba(0,0,0,.1);background:#fff;cursor:pointer;padding:10px 4px;text-align:center;font-family:'Space Grotesk',sans-serif}
  .fn-day .d-name{font-size:.65rem;opacity:.5;text-transform:uppercase;font-weight:600}
  .fn-day .d-num{font-size:1.1rem;font-weight:700;margin-top:2px}
  .fn-day.sel{background:#0A0A0A;border-color:#0A0A0A;color:#fff}
  .fn-day.sel .d-name{opacity:.6;color:#fff}
  .fn-slots{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:6px}
  .fn-slot{border-radius:50px;padding:9px 18px;border:1.5px solid rgba(0,0,0,.1);background:#fff;cursor:pointer;font-family:'Space Grotesk',sans-serif;font-size:.82rem;font-weight:600;color:#0A0A0A}
  .fn-slot.sel{background:var(--purple);color:#000;border-color:var(--purple)}
  .fn-success{text-align:center;padding:6px 0}
  .fn-success .ico{font-size:3rem;margin-bottom:10px}
  .fn-success h3{margin-bottom:6px}
  .fn-success .fn-recap{background:#fff;border:1.5px solid rgba(0,0,0,.1);border-radius:14px;padding:14px;text-align:left;font-size:.82rem;margin:14px 0;color:#0A0A0A}
  .fn-tab{position:fixed;left:16px;bottom:16px;z-index:600;background:#0A0A0A;color:#fff;border:none;border-radius:50px;padding:13px 20px;font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:.82rem;cursor:pointer;box-shadow:0 10px 30px rgba(0,0,0,.25);display:none;align-items:center;gap:8px}
  .fn-tab.show{display:flex}
  @media(max-width:480px){.fn-sheet{border-radius:20px}}
  `;
  document.head.appendChild(style);

  /* ─── Markup ─── */
  const wrap = document.createElement('div');
  wrap.innerHTML = `
  <div class="fn-overlay" id="fnOverlay">
    <div class="fn-sheet" id="fnSheet">
      <button class="fn-close" id="fnClose" aria-label="Fermer"><svg viewBox="0 0 24 24"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg></button>

      <!-- STEP 1 : VIDEO + EMAIL -->
      <div id="fnStep1">
        <div class="fn-video-wrap">
          <video id="fnVideo" poster="${POSTER_PATH}" muted autoplay loop playsinline controls>
            <source src="${VIDEO_PATH}" type="video/mp4"/>
          </video>
          <canvas id="fnAnim" style="display:none"></canvas>
          <div class="fn-anim-badge" id="fnAnimBadge" style="display:none">Aperçu animé · vraie vidéo bientôt disponible</div>
        </div>
        <div class="fn-body">
          <span class="fn-tag">2 minutes pour comprendre</span>
          <h3>Découvre comment étudier en Russie, étape par étape.</h3>
          <p class="fn-desc">Laisse ton email pour recevoir gratuitement notre guide complet (universités, coûts, bourses, démarches) directement après cette vidéo.</p>
          <input class="fn-input" type="email" id="fnEmail" placeholder="ton@email.com" autocomplete="email"/>
          <div class="fn-err" id="fnErr1">Merci d'indiquer une adresse email valide.</div>
          <button class="fn-btn purple" id="fnBtn1">Recevoir mon guide gratuit →</button>
          <div class="fn-trust"><span>100% gratuit</span><span>Zéro spam</span><span>Désinscription à tout moment</span></div>
        </div>
      </div>

      <!-- STEP 2 : PDF -->
      <div id="fnStep2" style="display:none">
        <div class="fn-body" style="padding-top:46px">
          <div class="fn-pdf-icon">PDF<span>📘</span></div>
          <span class="fn-tag" style="display:block;text-align:center;width:fit-content;margin:0 auto 12px">Ton guide est prêt</span>
          <h3 style="text-align:center">Le Guide RusStudy pour étudier en Russie</h3>
          <p class="fn-desc" style="text-align:center">Programmes, coûts réels, bourses d'État et les 5 étapes du dossier — tout est dedans. Avec en bonus un code de <strong>-25% sur nos frais de service</strong> à l'intérieur.</p>
          <a class="fn-btn purple" id="fnDownload" href="${PDF_PATH}" download style="display:block;text-align:center;text-decoration:none;box-sizing:border-box">Télécharger le PDF gratuit ⬇</a>
          <button class="fn-btn-secondary" id="fnSkipPdf">Continuer sans télécharger</button>
        </div>
      </div>

      <!-- STEP 3 : CALENDAR -->
      <div id="fnStep3" style="display:none">
        <div class="fn-body" style="padding-top:46px">
          <span class="fn-tag">Dernière étape</span>
          <h3>Réserve un appel gratuit de 15 min</h3>
          <p class="fn-desc">Un conseiller revient sur ton guide avec toi et répond à tes questions.</p>

          <span class="fn-label">Filière qui t'intéresse</span>
          <div class="fn-services" id="fnServices">
            <button class="fn-svc" data-v="Médecine Générale">🩺 Médecine</button>
            <button class="fn-svc" data-v="Pharmacie / Dentaire">💊 Pharmacie / Dentaire</button>
            <button class="fn-svc" data-v="Ingénierie">⚙️ Ingénierie</button>
            <button class="fn-svc" data-v="Économie / Management">💼 Économie</button>
            <button class="fn-svc" data-v="Je ne sais pas encore">🤔 Pas encore décidé</button>
          </div>

          <span class="fn-label">Format du rendez-vous</span>
          <div class="fn-services" id="fnModes">
            <button class="fn-svc sel" data-v="whatsapp">💬 Appel WhatsApp</button>
            <button class="fn-svc" data-v="zoom">🎥 Visio Zoom</button>
          </div>

          <span class="fn-label">Choisis un jour</span>
          <div class="fn-days" id="fnDays"></div>

          <span class="fn-label">Choisis un créneau</span>
          <div class="fn-slots" id="fnSlots">
            <button class="fn-slot" data-v="09:00">09:00</button>
            <button class="fn-slot" data-v="11:00">11:00</button>
            <button class="fn-slot" data-v="14:00">14:00</button>
            <button class="fn-slot" data-v="16:00">16:00</button>
            <button class="fn-slot" data-v="18:00">18:00</button>
          </div>

          <span class="fn-label">Tes coordonnées</span>
          <input class="fn-input" type="text" id="fnName" placeholder="Prénom et nom"/>
          <input class="fn-input" type="tel" id="fnPhone" placeholder="Numéro WhatsApp"/>
          <div class="fn-err" id="fnErr3">Merci de choisir un jour, un créneau et de remplir tes coordonnées.</div>
          <button class="fn-btn purple" id="fnBtn3">Confirmer le rendez-vous →</button>
        </div>
      </div>

      <!-- STEP 4 : SUCCESS -->
      <div id="fnStep4" style="display:none">
        <div class="fn-body fn-success" style="padding-top:46px">
          <div class="ico">🎉</div>
          <h3>Rendez-vous confirmé !</h3>
          <p class="fn-desc" id="fnSuccessDesc">Un conseiller RusStudy te contacte sur WhatsApp pour confirmer le créneau.</p>
          <div class="fn-recap" id="fnRecap"></div>
          <a class="fn-btn" id="fnWaBtn" target="_blank" rel="noopener" style="display:block;text-align:center;text-decoration:none;box-sizing:border-box;background:#25D366">💬 Confirmer sur WhatsApp</a>
        </div>
      </div>
    </div>
  </div>
  <button class="fn-tab" id="fnTab">🎁 Guide gratuit</button>
  `;
  document.body.appendChild(wrap);

  /* ─── State ─── */
  const overlay = document.getElementById('fnOverlay');
  const tab = document.getElementById('fnTab');
  const WHATSAPP_NUMBER = '79964334489';
  const API_BASE = '';
  let leadEmail = '';
  let selectedDay = null;
  let selectedSlot = null;
  let selectedService = '';
  let selectedMode = 'whatsapp';

  /* ─── Vraie vidéo absente/indisponible → animation de remplacement (canvas) ───
     Dès qu'un vrai fichier vidéo sera déposé à VIDEO_PATH, il se chargera normalement
     et l'animation ne sera jamais déclenchée — aucune modif de code nécessaire. */
  const fnVideo = document.getElementById('fnVideo');
  const fnAnim = document.getElementById('fnAnim');
  const fnAnimBadge = document.getElementById('fnAnimBadge');
  let videoFailed = false;
  let fnAnimId = null;

  function startFunnelAnim() {
    if (fnAnimId) return;
    const ctx = fnAnim.getContext('2d');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    function resize() {
      fnAnim.width = fnAnim.clientWidth * dpr;
      fnAnim.height = fnAnim.clientHeight * dpr;
    }
    resize();
    window.addEventListener('resize', resize);

    const stars = Array.from({ length: 70 }, () => ({ x: Math.random(), y: Math.random() * .5, r: Math.random() * 1.1 + .4, ph: Math.random() * 6 }));
    const backline = Array.from({ length: 14 }, (_, i) => ({ x: i / 14, w: (1 / 14) * (0.8 + Math.random() * 0.4), h: 0.13 + Math.random() * 0.16 }));
    const frontline = Array.from({ length: 8 }, (_, i) => ({ x: i / 8, w: (1 / 8) * (0.7 + Math.random() * 0.5), h: 0.2 + Math.random() * 0.3, spire: Math.random() > .6 }));
    const windows = frontline.map(() => Array.from({ length: 10 }, () => ({ x: Math.random(), y: Math.random(), on: Math.random() > .3, ph: Math.random() * 6 })));
    const snow = Array.from({ length: 110 }, () => {
      const depth = Math.ceil(Math.random() * 3);
      return { x: Math.random(), y: Math.random(), d: depth, ph: Math.random() * 6 };
    });

    // Légendes issues des faits déjà présents sur le site (aucun chiffre inventé)
    const CAPTIONS = [
      ['Étudie en Russie.', 'Ton avenir commence ici'],
      ['40+ universités partenaires', 'De Moscou à Saint-Pétersbourg'],
      ['1 200+ étudiants accompagnés', "Plus de 10 ans d'expérience"],
      ['Des diplômes reconnus', 'En Europe, au Moyen-Orient et en Afrique'],
    ];
    const CAP_DUR = 3.8;

    const start = performance.now();
    let prev = start;
    function frame(t) {
      fnAnimId = requestAnimationFrame(frame);
      const elapsed = (t - start) / 1000;
      const delta = Math.min((t - prev) / 1000, .05);
      prev = t;
      const w = fnAnim.width, h = fnAnim.height;

      // ciel nocturne
      const sky = ctx.createLinearGradient(0, 0, 0, h);
      sky.addColorStop(0, '#12081f');
      sky.addColorStop(.45, '#1b2a6b');
      sky.addColorStop(.8, '#2460E8');
      sky.addColorStop(1, '#0A0A0A');
      ctx.fillStyle = sky;
      ctx.fillRect(0, 0, w, h);

      // étoiles scintillantes
      stars.forEach((s) => {
        ctx.globalAlpha = .35 + Math.sin(elapsed * 1.8 + s.ph) * .3;
        ctx.fillStyle = '#fff';
        ctx.beginPath();
        ctx.arc(s.x * w, s.y * h, s.r * dpr * .7, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1;

      // lune + halo
      const mx = w * .82, my = h * .2, mr = h * .07;
      const halo = ctx.createRadialGradient(mx, my, 0, mx, my, mr * 4);
      halo.addColorStop(0, 'rgba(240,235,227,.35)');
      halo.addColorStop(1, 'rgba(240,235,227,0)');
      ctx.fillStyle = halo;
      ctx.fillRect(mx - mr * 4, my - mr * 4, mr * 8, mr * 8);
      ctx.fillStyle = '#F0EBE3';
      ctx.beginPath();
      ctx.arc(mx, my, mr, 0, Math.PI * 2);
      ctx.fill();

      // aurores boréales (rubans ondulants)
      [['168,85,247', .16, .05], ['34,197,94', .24, .04], ['36,96,232', .32, .045]].forEach(([rgb, base, amp], k) => {
        ctx.beginPath();
        ctx.moveTo(0, h);
        for (let x = 0; x <= w; x += w / 40) {
          const y = h * base + Math.sin(x / w * 4 + elapsed * (.5 + k * .2) + k * 2) * h * amp;
          ctx.lineTo(x, y);
        }
        ctx.lineTo(w, 0);
        ctx.lineTo(0, 0);
        ctx.closePath();
        const grad = ctx.createLinearGradient(0, 0, 0, h * .5);
        grad.addColorStop(0, `rgba(${rgb},0)`);
        grad.addColorStop(1, `rgba(${rgb},.14)`);
        ctx.fillStyle = grad;
        ctx.fill();
      });

      // skyline arrière (plan de profondeur)
      backline.forEach((b) => {
        ctx.fillStyle = 'rgba(20,25,55,.9)';
        ctx.fillRect(b.x * w, h - b.h * h - h * .12, b.w * w, b.h * h + h * .12);
      });

      // skyline avant + fenêtres + flèches
      frontline.forEach((b, i) => {
        const bw = b.w * w, bh = b.h * h, bx = b.x * w, by = h - bh;
        ctx.fillStyle = '#04040a';
        ctx.fillRect(bx, by, bw, bh);
        if (b.spire) {
          ctx.beginPath();
          ctx.moveTo(bx + bw * .5 - w * .004, by);
          ctx.lineTo(bx + bw * .5, by - h * .07);
          ctx.lineTo(bx + bw * .5 + w * .004, by);
          ctx.closePath();
          ctx.fill();
        }
        windows[i].forEach((win) => {
          const on = win.on && Math.sin(elapsed * 1.2 + win.ph) > -.4;
          ctx.fillStyle = on ? 'rgba(251,187,33,.9)' : 'rgba(255,255,255,.05)';
          ctx.fillRect(bx + win.x * bw * .8 + bw * .1, by + win.y * bh * .7 + bh * .18, w * .005, h * .011);
        });
      });

      // neige en 3 couches de profondeur
      snow.forEach((p) => {
        p.y += (p.d * .1 + .06) * delta;
        if (p.y > 1) { p.y = -.02; p.x = Math.random(); }
        const drift = Math.sin(elapsed * .8 + p.ph) * .008 * p.d;
        ctx.globalAlpha = .25 + p.d * .22;
        ctx.fillStyle = '#fff';
        ctx.beginPath();
        ctx.arc((p.x + drift) * w, p.y * h, (p.d * .55 + .3) * dpr, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1;

      // légendes marketing en fondu enchaîné
      const cyc = elapsed % (CAPTIONS.length * CAP_DUR);
      const idx = Math.floor(cyc / CAP_DUR);
      const local = (cyc % CAP_DUR) / CAP_DUR;
      const fade = Math.min(local / .18, 1, (1 - local) / .18);
      const [line1, line2] = CAPTIONS[idx];
      ctx.globalAlpha = Math.max(fade, 0);
      ctx.textAlign = 'center';
      ctx.shadowColor = 'rgba(0,0,0,.6)';
      ctx.shadowBlur = 12 * dpr;
      ctx.fillStyle = '#fff';
      ctx.font = `700 ${Math.round(w * .052)}px 'Space Grotesk',sans-serif`;
      ctx.fillText(line1, w * .5, h * .52);
      ctx.fillStyle = '#FBBB21';
      ctx.font = `600 ${Math.round(w * .03)}px 'Space Grotesk',sans-serif`;
      ctx.fillText(line2, w * .5, h * .52 + w * .05);
      ctx.shadowBlur = 0;
      ctx.globalAlpha = 1;
    }
    fnAnimId = requestAnimationFrame(frame);
    fnAnim._fnCleanup = () => window.removeEventListener('resize', resize);
  }
  function stopFunnelAnim() {
    if (fnAnimId) cancelAnimationFrame(fnAnimId);
    fnAnimId = null;
    if (fnAnim._fnCleanup) fnAnim._fnCleanup();
  }
  function showAnimFallback() {
    if (videoFailed) return;
    videoFailed = true;
    fnVideo.style.display = 'none';
    fnAnim.style.display = 'block';
    fnAnimBadge.style.display = 'block';
    startFunnelAnim();
  }
  fnVideo.addEventListener('error', showAnimFallback);

  function open() {
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    if (videoFailed) {
      startFunnelAnim();
    } else {
      fnVideo.play().catch(() => {});
      setTimeout(() => {
        if (!videoFailed && fnVideo.readyState === 0) showAnimFallback();
      }, 1500);
    }
  }
  function close() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    tab.classList.add('show');
    stopFunnelAnim();
  }
  function showStep(n) {
    [1, 2, 3, 4].forEach((i) => {
      document.getElementById('fnStep' + i).style.display = i === n ? '' : 'none';
    });
    document.getElementById('fnSheet').scrollTop = 0;
  }

  document.getElementById('fnClose').onclick = close;
  tab.onclick = () => {
    tab.classList.remove('show');
    open();
  };

  /* ─── Trigger on first scroll ─── */
  function maybeTrigger() {
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    sessionStorage.setItem(STORAGE_KEY, '1');
    open();
    window.removeEventListener('scroll', onScroll);
  }
  function onScroll() {
    if (window.scrollY > 120) maybeTrigger();
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ─── API helpers (mêmes conventions que modal.js : fallback local si pas de backend) ─── */
  async function postJSON(path, data, prefix) {
    try {
      const r = await fetch(API_BASE + path, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!r.ok) throw new Error('API error');
      return await r.json();
    } catch (e) {
      console.warn('Backend indisponible, mode local', e);
      return { id: prefix + '-' + new Date().getFullYear() + '-' + Math.floor(Math.random() * 900 + 100), local: true };
    }
  }

  /* ─── STEP 1 : email ─── */
  function isValidEmail(v) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  }
  document.getElementById('fnBtn1').onclick = async () => {
    const email = document.getElementById('fnEmail').value.trim();
    const err = document.getElementById('fnErr1');
    if (!isValidEmail(email)) {
      err.style.display = 'block';
      return;
    }
    err.style.display = 'none';
    leadEmail = email;
    const btn = document.getElementById('fnBtn1');
    btn.disabled = true;
    btn.textContent = 'Envoi en cours...';
    await postJSON('/api/leads', { email, source: 'Popup vidéo premier scroll' }, 'LEAD');
    btn.disabled = false;
    btn.textContent = 'Recevoir mon guide gratuit →';
    showStep(2);
  };

  /* ─── STEP 2 : PDF ─── */
  document.getElementById('fnDownload').onclick = () => {
    postJSON('/api/leads/pdf', { email: leadEmail, pdf: 'guide-gratuit-etudes-russie' }, 'DL');
    setTimeout(() => showStep(3), 600);
  };
  document.getElementById('fnSkipPdf').onclick = () => showStep(3);

  /* ─── STEP 3 : calendar ─── */
  document.querySelectorAll('#fnServices .fn-svc').forEach((btn) => {
    btn.onclick = () => {
      document.querySelectorAll('#fnServices .fn-svc').forEach((b) => b.classList.remove('sel'));
      btn.classList.add('sel');
      selectedService = btn.dataset.v;
    };
  });
  document.querySelectorAll('#fnModes .fn-svc').forEach((btn) => {
    btn.onclick = () => {
      document.querySelectorAll('#fnModes .fn-svc').forEach((b) => b.classList.remove('sel'));
      btn.classList.add('sel');
      selectedMode = btn.dataset.v;
    };
  });
  document.querySelectorAll('.fn-slot').forEach((btn) => {
    btn.onclick = () => {
      document.querySelectorAll('.fn-slot').forEach((b) => b.classList.remove('sel'));
      btn.classList.add('sel');
      selectedSlot = btn.dataset.v;
    };
  });

  const DAY_NAMES = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
  const daysWrap = document.getElementById('fnDays');
  const today = new Date();
  for (let i = 1; i <= 10; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    const btn = document.createElement('button');
    btn.className = 'fn-day';
    btn.innerHTML = `<div class="d-name">${DAY_NAMES[d.getDay()]}</div><div class="d-num">${d.getDate()}</div>`;
    btn.dataset.v = d.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    btn.onclick = () => {
      document.querySelectorAll('.fn-day').forEach((b) => b.classList.remove('sel'));
      btn.classList.add('sel');
      selectedDay = btn.dataset.v;
    };
    daysWrap.appendChild(btn);
  }

  document.getElementById('fnBtn3').onclick = async () => {
    const name = document.getElementById('fnName').value.trim();
    const phone = document.getElementById('fnPhone').value.trim();
    const err = document.getElementById('fnErr3');
    if (!name || !phone || !selectedDay || !selectedSlot) {
      err.style.display = 'block';
      return;
    }
    err.style.display = 'none';
    const btn = document.getElementById('fnBtn3');
    btn.disabled = true;
    btn.textContent = 'Confirmation...';
    const data = {
      name,
      phone,
      email: leadEmail,
      filiere: selectedService || 'À définir',
      date: selectedDay,
      heure: selectedSlot,
      mode: selectedMode,
      source: 'Funnel guide gratuit',
    };
    const res = await postJSON('/api/rendezvous', data, 'RDV');
    btn.disabled = false;
    btn.textContent = 'Confirmer le rendez-vous →';

    const modeLabel = selectedMode === 'zoom' ? 'Visio Zoom (lien envoyé sur WhatsApp)' : 'Appel WhatsApp';
    document.getElementById('fnRecap').innerHTML =
      `<strong>${name}</strong><br>${selectedDay} à ${selectedSlot}<br>${selectedService || 'Filière à définir'}<br>${modeLabel}<br><span style="opacity:.5">Réf. ${res.id}</span>`;

    document.getElementById('fnSuccessDesc').textContent =
      selectedMode === 'zoom'
        ? 'Un conseiller RusStudy t\'envoie le lien de connexion Zoom sur WhatsApp avant le rendez-vous.'
        : 'Un conseiller RusStudy te contacte sur WhatsApp pour confirmer le créneau.';

    const waMsg = encodeURIComponent(
      selectedMode === 'zoom'
        ? `Bonjour RusStudy, je viens de réserver un appel en visio Zoom le ${selectedDay} à ${selectedSlot} (réf. ${res.id}) concernant : ${selectedService || 'à définir'}. Merci de m'envoyer le lien de connexion.`
        : `Bonjour RusStudy, je viens de réserver un appel le ${selectedDay} à ${selectedSlot} (réf. ${res.id}) concernant : ${selectedService || 'à définir'}.`
    );
    const waBtn = document.getElementById('fnWaBtn');
    waBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${waMsg}`;
    waBtn.textContent = selectedMode === 'zoom' ? '💬 Recevoir mon lien Zoom sur WhatsApp' : '💬 Confirmer sur WhatsApp';
    showStep(4);
  };
})();
