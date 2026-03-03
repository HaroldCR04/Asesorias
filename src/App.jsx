import { useState, useEffect } from "react";

const LOGO = "data:image/png;base64,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";

// ── Storage (localStorage) ────────────────────────────────────────────────────
function loadTeacherName() {
  try { return localStorage.getItem("yorkin:teacher") || null; } catch { return null; }
}
function saveTeacherName(name) {
  try { localStorage.setItem("yorkin:teacher", name); } catch {}
}
function loadData(teacher) {
  try {
    const r = localStorage.getItem(`yorkin:data:${teacher}`);
    return r ? JSON.parse(r) : { students: [], advisings: [] };
  } catch { return { students: [], advisings: [] }; }
}
function saveData(teacher, data) {
  try { localStorage.setItem(`yorkin:data:${teacher}`, JSON.stringify(data)); } catch {}
}

const fmt = (d) => new Date(d).toLocaleDateString("es-CO", { day: "2-digit", month: "short", year: "numeric" });
const fmtTime = (d) => new Date(d).toLocaleTimeString("es-CO", { hour: "2-digit", minute: "2-digit" });
const pct = (a, b) => (b === 0 ? 0 : Math.round((a / b) * 100));

export default function App() {
  const [phase, setPhase] = useState("loading");
  const [teacherName, setTeacherName] = useState("");
  const [inputName, setInputName] = useState("");
  const [data, setData] = useState({ students: [], advisings: [] });
  const [modal, setModal] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [form, setForm] = useState({});
  const [toast, setToast] = useState(null);

  useEffect(() => {
    const name = loadTeacherName();
    if (name) {
      setTeacherName(name);
      setData(loadData(name));
      setPhase("home");
    } else {
      setPhase("setup");
    }
  }, []);

  const showToast = (msg) => { setToast(msg); setTimeout(() => setToast(null), 2500); };
  const persist = (nd) => { setData(nd); saveData(teacherName, nd); };

  const confirmSetup = () => {
    if (!inputName.trim()) return;
    const name = inputName.trim();
    saveTeacherName(name);
    setTeacherName(name);
    setData(loadData(name));
    setPhase("home");
  };

  const addStudent = () => {
    if (!form.name?.trim()) return;
    persist({ ...data, students: [...data.students, { id: Date.now(), name: form.name.trim(), grade: form.grade || "" }] });
    setModal(null); setForm({});
    showToast("Estudiante agregado ✓");
  };

  const deleteStudent = (id) => {
    persist({ students: data.students.filter(s => s.id !== id), advisings: data.advisings.filter(a => a.studentId !== id) });
    setModal(null);
    showToast("Estudiante eliminado");
  };

  const addAdvising = () => {
    persist({ ...data, advisings: [...data.advisings, { id: Date.now(), studentId: selectedStudent.id, date: new Date().toISOString(), notes: form.notes || "" }] });
    setModal(null); setForm({});
    showToast("Asesoría registrada ✓");
  };

  const studentAdvisings = (id) => data.advisings.filter(a => a.studentId === id);
  const daysSince = (id) => {
    const sorted = studentAdvisings(id).sort((a, b) => new Date(b.date) - new Date(a.date));
    if (!sorted.length) return null;
    return Math.floor((Date.now() - new Date(sorted[0].date)) / 86400000);
  };

  const studentsWithAdv = new Set(data.advisings.map(a => a.studentId)).size;
  const pendingStudents = data.students.filter(s => { const d = daysSince(s.id); return d === null || d >= 15; });

  if (phase === "loading") return <div style={S.center}><div style={S.spinner} /></div>;

  if (phase === "setup") return (
    <div style={S.setupBg}>
      <div style={S.setupCard}>
        <div style={S.logoWrapper}>
          <img src={LOGO} alt="Escudo Yorkín" style={S.setupLogo} />
        </div>
        <h1 style={S.setupTitle}>Colegio Yorkín</h1>
        <div style={S.redBar} />
        <p style={S.setupSub}>Control de Asesorías</p>
        <p style={S.setupInstr}>Ingresa tu nombre para configurar este dispositivo:</p>
        <input style={S.input} placeholder="Nombre del profesor" value={inputName}
          onChange={e => setInputName(e.target.value)} onKeyDown={e => e.key === "Enter" && confirmSetup()} autoFocus />
        <button style={S.btnPrimary} onClick={confirmSetup}>Comenzar →</button>
      </div>
    </div>
  );

  if (phase === "home") return (
    <div style={S.appBg}>
      <header style={S.header}>
        <div style={S.headerLogoBox}>
          <img src={LOGO} alt="Escudo" style={S.headerLogo} />
        </div>
        <div>
          <div style={S.headerTitle}>Colegio Yorkín</div>
          <div style={S.headerSub}>Control de Asesorías</div>
        </div>
      </header>
      <div style={S.teacherBanner}>
        <span>👤</span><span style={{ marginLeft: 6, fontWeight: 600 }}>{teacherName}</span>
      </div>
      <div style={S.container}>
        <div style={S.statsRow}>
          <Stat icon="👥" value={data.students.length} label="Estudiantes" />
          <Stat icon="📋" value={data.advisings.length} label="Asesorías" />
          <Stat icon="📊" value={`${pct(studentsWithAdv, data.students.length)}%`} label="Cobertura" />
        </div>
        <div style={S.quickRow}>
          <QuickBtn icon="👥" label="Estudiantes" sub={`${data.students.length} registrados`} color={AZUL} onClick={() => setPhase("students")} />
          <QuickBtn icon="⚠️" label="Pendientes" sub={`${pendingStudents.length} sin asesoría`} color={ROJO} onClick={() => setPhase("pending")} />
        </div>
        <h2 style={S.sectionTitle}>Asesorías recientes</h2>
        {data.advisings.length === 0
          ? <div style={S.emptyBox}><span style={{ fontSize: 32 }}>📭</span><p>Aún no hay asesorías registradas</p></div>
          : [...data.advisings].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 6).map(adv => {
              const st = data.students.find(s => s.id === adv.studentId);
              return (
                <div key={adv.id} style={S.advRow}>
                  <div style={S.advDot} />
                  <div style={{ flex: 1 }}>
                    <div style={S.advName}>{st?.name || "—"}</div>
                    <div style={S.advMeta}>{fmt(adv.date)} · {fmtTime(adv.date)}</div>
                    {adv.notes && <div style={S.advNotes}>"{adv.notes}"</div>}
                  </div>
                </div>
              );
            })}
      </div>
      {toast && <Toast msg={toast} />}
    </div>
  );

  if (phase === "students") return (
    <div style={S.appBg}>
      <TopBar title="Estudiantes" onBack={() => setPhase("home")} />
      <div style={S.container}>
        <button style={{ ...S.btnPrimary, width: "100%", marginBottom: 16 }} onClick={() => { setForm({}); setModal("addStudent"); }}>
          + Agregar estudiante
        </button>
        {data.students.length === 0
          ? <div style={S.emptyBox}><span style={{ fontSize: 36 }}>👤</span><p>Agrega tu primer estudiante</p></div>
          : data.students.map(s => {
              const count = studentAdvisings(s.id).length;
              const days = daysSince(s.id);
              const urgent = days === null || days >= 15;
              return (
                <div key={s.id} style={{ ...S.studentCard, borderLeft: `4px solid ${urgent ? ROJO : "#27ae60"}` }}
                  onClick={() => { setSelectedStudent(s); setModal("studentDetail"); }}>
                  <div style={{ ...S.avatar, background: urgent ? ROJO : AZUL }}>{s.name[0]}</div>
                  <div style={{ flex: 1 }}>
                    <div style={S.studentName}>{s.name}</div>
                    <div style={S.studentMeta}>
                      {s.grade && <span>{s.grade} · </span>}
                      <span>{count} asesoría{count !== 1 ? "s" : ""}</span>
                      {days !== null && <span> · hace {days}d</span>}
                    </div>
                  </div>
                  <span style={{ fontSize: 18 }}>{urgent ? "⚠️" : "✅"}</span>
                </div>
              );
            })}
      </div>

      {modal === "addStudent" && (
        <Modal onClose={() => setModal(null)} title="Nuevo Estudiante">
          <input style={S.input} placeholder="Nombre completo" value={form.name || ""} onChange={e => setForm({ ...form, name: e.target.value })} autoFocus />
          <input style={S.input} placeholder="Grado (ej: 10°A)" value={form.grade || ""} onChange={e => setForm({ ...form, grade: e.target.value })} />
          <button style={S.btnPrimary} onClick={addStudent}>Agregar</button>
        </Modal>
      )}

      {modal === "studentDetail" && selectedStudent && (() => {
        const advs = studentAdvisings(selectedStudent.id).sort((a, b) => new Date(b.date) - new Date(a.date));
        const days = daysSince(selectedStudent.id);
        return (
          <Modal onClose={() => setModal(null)} title={selectedStudent.name}>
            <div style={S.statsRow}>
              <Stat icon="📋" value={advs.length} label="Asesorías" small />
              <Stat icon="📅" value={days !== null ? `${days}d` : "—"} label="Último" small />
            </div>
            <button style={{ ...S.btnPrimary, width: "100%", marginBottom: 12 }} onClick={() => { setForm({}); setModal("addAdvising"); }}>
              + Registrar asesoría
            </button>
            <div style={{ maxHeight: 200, overflowY: "auto" }}>
              {advs.length === 0
                ? <p style={{ color: "#aaa", textAlign: "center", fontSize: 14 }}>Sin asesorías aún</p>
                : advs.map(adv => (
                    <div key={adv.id} style={{ ...S.advRow, marginBottom: 8 }}>
                      <div style={S.advDot} />
                      <div>
                        <div style={S.advMeta}>{fmt(adv.date)} · {fmtTime(adv.date)}</div>
                        {adv.notes && <div style={S.advNotes}>"{adv.notes}"</div>}
                      </div>
                    </div>
                  ))}
            </div>
            <button style={S.btnDanger} onClick={() => { if (window.confirm("¿Eliminar este estudiante y sus asesorías?")) deleteStudent(selectedStudent.id); }}>
              🗑 Eliminar estudiante
            </button>
          </Modal>
        );
      })()}

      {modal === "addAdvising" && selectedStudent && (
        <Modal onClose={() => setModal("studentDetail")} title="Nueva Asesoría">
          <p style={{ color: "#555", marginBottom: 4 }}>Estudiante: <strong>{selectedStudent.name}</strong></p>
          <p style={{ color: "#aaa", fontSize: 13, marginBottom: 10 }}>📅 {fmt(new Date())} · {fmtTime(new Date())}</p>
          <textarea style={{ ...S.input, height: 90, resize: "vertical" }} placeholder="Notas / observaciones (opcional)"
            value={form.notes || ""} onChange={e => setForm({ ...form, notes: e.target.value })} />
          <button style={S.btnPrimary} onClick={addAdvising}>Guardar</button>
        </Modal>
      )}

      {toast && <Toast msg={toast} />}
    </div>
  );

  if (phase === "pending") return (
    <div style={S.appBg}>
      <TopBar title="Pendientes (+15 días)" onBack={() => setPhase("home")} />
      <div style={S.container}>
        {pendingStudents.length === 0
          ? <div style={S.emptyBox}><span style={{ fontSize: 40 }}>🎉</span><p>¡Todos al día!</p></div>
          : pendingStudents.map(s => {
              const days = daysSince(s.id);
              return (
                <div key={s.id} style={{ ...S.studentCard, borderLeft: `4px solid ${ROJO}` }}
                  onClick={() => { setSelectedStudent(s); setPhase("students"); setModal("studentDetail"); }}>
                  <div style={{ ...S.avatar, background: ROJO }}>{s.name[0]}</div>
                  <div style={{ flex: 1 }}>
                    <div style={S.studentName}>{s.name}</div>
                    <div style={{ ...S.studentMeta, color: ROJO }}>
                      {days === null ? "Sin asesorías registradas" : `Hace ${days} días`}
                    </div>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
}

function TopBar({ title, onBack }) {
  return (
    <header style={S.topBar}>
      <button style={S.backBtn} onClick={onBack}>‹</button>
      <span style={S.topBarTitle}>{title}</span>
    </header>
  );
}

function Stat({ icon, value, label, small }) {
  return (
    <div style={{ ...S.statCard, ...(small ? { padding: "10px 8px" } : {}) }}>
      <div style={{ fontSize: small ? 18 : 22 }}>{icon}</div>
      <div style={{ fontWeight: 800, color: AZUL, fontSize: small ? 20 : 24 }}>{value}</div>
      <div style={S.statLabel}>{label}</div>
    </div>
  );
}

function QuickBtn({ icon, label, sub, color, onClick }) {
  return (
    <button style={{ ...S.quickBtn, borderTop: `4px solid ${color}` }} onClick={onClick}>
      <span style={{ fontSize: 28 }}>{icon}</span>
      <div style={{ fontWeight: 700, fontSize: 14, color: "#1a1a2e", marginTop: 6 }}>{label}</div>
      <div style={{ fontSize: 12, color: "#999", marginTop: 2 }}>{sub}</div>
    </button>
  );
}

function Modal({ children, onClose, title }) {
  return (
    <div style={S.overlay} onClick={onClose}>
      <div style={S.modal} onClick={e => e.stopPropagation()}>
        <button style={S.closeBtn} onClick={onClose}>✕</button>
        {title && <h2 style={S.modalTitle}>{title}</h2>}
        {children}
      </div>
    </div>
  );
}

function Toast({ msg }) {
  return <div style={S.toast}>{msg}</div>;
}

const AZUL = "#1a4a8a";
const ROJO = "#c0392b";
const S = {
  center: { display: "flex", height: "100vh", alignItems: "center", justifyContent: "center" },
  spinner: { width: 40, height: 40, border: "4px solid #eee", borderTop: `4px solid ${AZUL}`, borderRadius: "50%", animation: "spin 0.8s linear infinite" },
  setupBg: { minHeight: "100vh", background: `linear-gradient(160deg, #0d2959 0%, ${AZUL} 55%, ${ROJO} 100%)`, display: "flex", alignItems: "center", justifyContent: "center", padding: 20, fontFamily: "'Georgia', serif" },
  setupCard: { background: "#fff", borderRadius: 20, padding: "36px 28px", width: "100%", maxWidth: 360, boxShadow: "0 24px 64px rgba(0,0,0,0.4)", display: "flex", flexDirection: "column", alignItems: "center" },
  logoWrapper: { width: 110, height: 110, borderRadius: "50%", background: "#f0f4fa", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14, boxShadow: "0 4px 16px rgba(26,74,138,0.15)" },
  setupLogo: { width: 90, height: 90, objectFit: "contain" },
  setupTitle: { fontSize: 22, fontWeight: 800, color: AZUL, margin: "0 0 8px", textAlign: "center" },
  redBar: { width: 60, height: 3, background: ROJO, borderRadius: 2, marginBottom: 8 },
  setupSub: { fontSize: 13, color: ROJO, fontWeight: 700, marginBottom: 20, letterSpacing: 1, textTransform: "uppercase" },
  setupInstr: { fontSize: 14, color: "#555", marginBottom: 12, textAlign: "center" },
  appBg: { minHeight: "100vh", background: "#f0f2f7", fontFamily: "'Trebuchet MS', sans-serif" },
  header: { background: `linear-gradient(135deg, #0d2959 0%, ${AZUL} 100%)`, padding: "14px 18px", display: "flex", alignItems: "center", gap: 14 },
  headerLogoBox: { width: 46, height: 46, borderRadius: 8, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", padding: 4, flexShrink: 0 },
  headerLogo: { width: 38, height: 38, objectFit: "contain" },
  headerTitle: { color: "#fff", fontSize: 16, fontWeight: 800, fontFamily: "'Georgia', serif" },
  headerSub: { color: "rgba(255,255,255,0.65)", fontSize: 11, letterSpacing: 0.5, marginTop: 2 },
  teacherBanner: { background: ROJO, padding: "7px 18px", display: "flex", alignItems: "center", color: "#fff", fontSize: 13 },
  topBar: { background: `linear-gradient(135deg, #0d2959, ${AZUL})`, padding: "13px 16px", display: "flex", alignItems: "center", gap: 10 },
  backBtn: { background: "none", border: "none", color: "#fff", fontSize: 28, cursor: "pointer", lineHeight: 1, padding: 0 },
  topBarTitle: { color: "#fff", fontSize: 16, fontWeight: 700 },
  container: { padding: 16, maxWidth: 520, margin: "0 auto" },
  statsRow: { display: "flex", gap: 10, margin: "16px 0" },
  statCard: { flex: 1, background: "#fff", borderRadius: 14, padding: "14px 10px", textAlign: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.07)" },
  statLabel: { fontSize: 11, color: "#aaa", marginTop: 2 },
  quickRow: { display: "flex", gap: 12, marginBottom: 20 },
  quickBtn: { flex: 1, background: "#fff", borderRadius: 14, padding: "18px 10px", textAlign: "center", border: "none", cursor: "pointer", boxShadow: "0 2px 8px rgba(0,0,0,0.07)" },
  sectionTitle: { fontSize: 12, fontWeight: 700, color: "#aaa", marginBottom: 10, textTransform: "uppercase", letterSpacing: 1 },
  emptyBox: { background: "#fff", borderRadius: 14, padding: 32, textAlign: "center", color: "#bbb", display: "flex", flexDirection: "column", alignItems: "center", gap: 8 },
  advRow: { display: "flex", alignItems: "flex-start", gap: 10, background: "#fff", borderRadius: 12, padding: "12px 14px", marginBottom: 8, boxShadow: "0 1px 4px rgba(0,0,0,0.05)" },
  advDot: { width: 10, height: 10, borderRadius: "50%", background: AZUL, marginTop: 5, flexShrink: 0 },
  advName: { fontSize: 15, fontWeight: 600, color: "#1a1a2e" },
  advMeta: { fontSize: 12, color: "#aaa", marginTop: 2 },
  advNotes: { fontSize: 13, color: "#666", marginTop: 4, fontStyle: "italic" },
  studentCard: { display: "flex", alignItems: "center", gap: 12, background: "#fff", borderRadius: 12, padding: 14, marginBottom: 10, boxShadow: "0 1px 6px rgba(0,0,0,0.07)", cursor: "pointer" },
  studentName: { fontSize: 15, fontWeight: 600, color: "#1a1a2e" },
  studentMeta: { fontSize: 12, color: "#aaa", marginTop: 2 },
  avatar: { width: 42, height: 42, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontSize: 18, flexShrink: 0 },
  overlay: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "flex-end", justifyContent: "center", zIndex: 100 },
  modal: { background: "#fff", borderRadius: "20px 20px 0 0", padding: 24, width: "100%", maxWidth: 500, maxHeight: "85vh", overflowY: "auto", position: "relative" },
  modalTitle: { fontSize: 18, fontWeight: 800, color: AZUL, marginBottom: 14 },
  closeBtn: { position: "absolute", top: 14, right: 16, background: "none", border: "none", fontSize: 18, cursor: "pointer", color: "#aaa" },
  input: { width: "100%", padding: "12px 14px", borderRadius: 10, border: "1.5px solid #ddd", fontSize: 15, marginBottom: 12, boxSizing: "border-box", outline: "none", fontFamily: "inherit" },
  btnPrimary: { width: "100%", padding: 14, background: AZUL, color: "#fff", border: "none", borderRadius: 12, fontSize: 15, fontWeight: 700, cursor: "pointer" },
  btnDanger: { width: "100%", padding: 12, background: "#fff", color: ROJO, border: `2px solid ${ROJO}`, borderRadius: 12, fontSize: 14, fontWeight: 700, cursor: "pointer", marginTop: 12 },
  toast: { position: "fixed", bottom: 28, left: "50%", transform: "translateX(-50%)", background: "#0d2959", color: "#fff", padding: "12px 24px", borderRadius: 40, fontSize: 14, fontWeight: 600, zIndex: 200, whiteSpace: "nowrap", boxShadow: "0 4px 16px rgba(0,0,0,0.3)" },
};
