import { useState, useEffect } from "react";

const LOGO = "data:image/jpeg;base64,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";

async function loadTeacherName() {
  try { const r = await window.storage.get("yorkin:teacher"); return r ? r.value : null; } catch { return null; }
}
async function saveTeacherName(name) {
  try { await window.storage.set("yorkin:teacher", name); } catch {}
}
async function loadData(teacher) {
  try { const r = await window.storage.get(`yorkin:data:${teacher}`); return r ? JSON.parse(r.value) : { students: [], advisings: [] }; } catch { return { students: [], advisings: [] }; }
}
async function saveData(teacher, data) {
  try { await window.storage.set(`yorkin:data:${teacher}`, JSON.stringify(data)); } catch {}
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
    (async () => {
      const name = await loadTeacherName();
      if (name) {
        setTeacherName(name);
        const d = await loadData(name);
        setData(d);
        setPhase("home");
      } else {
        setPhase("setup");
      }
    })();
  }, []);

  const showToast = (msg) => { setToast(msg); setTimeout(() => setToast(null), 2500); };
  const persist = async (nd) => { setData(nd); await saveData(teacherName, nd); };

  const confirmSetup = async () => {
    if (!inputName.trim()) return;
    const name = inputName.trim();
    await saveTeacherName(name);
    setTeacherName(name);
    const d = await loadData(name);
    setData(d);
    setPhase("home");
  };

  const addStudent = async () => {
    if (!form.name?.trim()) return;
    await persist({ ...data, students: [...data.students, { id: Date.now(), name: form.name.trim(), grade: form.grade || "" }] });
    setModal(null); setForm({});
    showToast("Estudiante agregado ✓");
  };

  const deleteStudent = async (id) => {
    await persist({ students: data.students.filter(s => s.id !== id), advisings: data.advisings.filter(a => a.studentId !== id) });
    setModal(null);
    showToast("Estudiante eliminado");
  };

  const addAdvising = async () => {
    await persist({ ...data, advisings: [...data.advisings, { id: Date.now(), studentId: selectedStudent.id, date: new Date().toISOString(), notes: form.notes || "" }] });
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
