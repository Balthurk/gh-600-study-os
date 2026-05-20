const LESSONS = [
  {
    id: "mapa",
    title: "Mapa oficial del examen GH-600",
    phase: "Mapa oficial",
    track: "Core examen",
    hours: 1,
    exam: 5,
    agentos: 4,
    summary:
      "Lectura literal: 20-30 minutos. Trabajo recomendado: 60-90 minutos si lo conviertes en mapa de dominios, pesos, huecos personales y checklist de estudio. El examen mide si sabes operar, integrar, supervisar y gobernar agentes de IA dentro de flujos SDLC productivos usando GitHub como sistema de registro y control.",
    study: [
      "Seis dominios: arquitectura y SDLC, herramientas y entorno, memoria/estado, evaluacion/tuning, coordinacion multiagente y guardrails/accountability.",
      "El dominio de mayor peso es herramientas y entorno: tool permissions, MCP, GitHub APIs, workflows, scopes, branch boundaries, rollbacks, retries y traceability.",
      "El perfil esperado no es usuario casual de prompts: es alguien que entiende GitHub workflows, PR reviews, code quality, seguridad, Copilot, MCP, custom instructions, custom agents, tools y setup steps.",
      "Passing score indicado por Microsoft Learn: 700 o mas. Exam sandbox recomendado para no perder tiempo por interfaz.",
      "Microsoft indica que puede haber preguntas de features en preview si son de uso comun. Eso hace importante estudiar cloud agent, custom agents, MCP y agentic workflows con cautela."
    ],
    traps: [
      "No preparar esto como teoria generica de IA. Es un examen GitHub-first.",
      "No vender 'primeros 100' como ranking oficial si la credencial no lo muestra.",
      "No confundir saber usar Codex/ChatGPT con saber gobernar agentes dentro de GitHub."
    ],
    agentosUse:
      "Convertir cada dominio en una capacidad AgentOS verificable: permisos, control plane, run logs, rollback, plan gate, memory pruning, conflict handling y human approval.",
    artifact: "GH600_SKILLS_TO_AGENTOS_CAPABILITY_MATRIX.md",
    questions: [
      "Que dominio cubre MCP allow lists, tool permissions y branch-based scope?",
      "Cuando una pregunta habla de evidencia objetiva, que recursos GitHub debes mirar antes que la confianza del agente?",
      "Que significa que GitHub sea control plane y no solo repositorio?"
    ],
    sources: ["S001", "S002"]
  },
  {
    id: "foundation",
    title: "Agente, asistente y modelo de contribuidor",
    phase: "Fundamentos",
    track: "Core examen",
    hours: 4,
    exam: 5,
    agentos: 4,
    summary:
      "Un asistente sugiere; un agente conserva un objetivo, decide pasos intermedios, usa herramientas y produce artefactos durables como ramas, commits y PRs.",
    study: [
      "Un agente participa en el workflow: crea rama, modifica archivos, abre o actualiza PR, responde a checks y revisiones.",
      "El ciclo operativo base es plan, act, evaluate. No es lineal: se repite hasta cumplir criterios o escalar.",
      "El plan debe ser visible: alcance, criterios de exito, riesgos, rollback y ruta de escalado.",
      "La accion debe estar acotada a repo, rama, PR y permisos concretos.",
      "La evaluacion debe usar senales del sistema: status checks, CI, code review, code scanning, secret scanning, dependency alerts y artifacts.",
      "El contributor model evita dos errores: rechazar porque lo hizo IA o aceptar porque lo hizo IA. Se evalua como cualquier contribucion: objetivo, alcance, evidencia, ownership, policy y fallback."
    ],
    traps: [
      "Un agente no reemplaza el workflow; entra en el workflow.",
      "CI verde no equivale automaticamente a solucion correcta.",
      "La responsabilidad no se transfiere al agente: las personas que definen permisos, controles y aprobaciones siguen siendo responsables."
    ],
    agentosUse:
      "Definir AgentOS como sistema de contribucion supervisada: el agente propone, el sistema registra y valida, la persona/politica acepta.",
    artifact: "AGENTOS_CONTRIBUTOR_MODEL.md",
    questions: [
      "Que evidencias minimas debe tener un PR generado por agente?",
      "Que diferencia practica hay entre output sugerido y artefacto durable?",
      "Como se detecta una ejecucion planless en GitHub?"
    ],
    sources: ["S003", "S004", "S005", "S006", "S007", "S008", "S009"]
  },
  {
    id: "sdlc",
    title: "Arquitectura SDLC, task contracts y separacion plan/ejecucion",
    phase: "Arquitectura",
    track: "Core examen",
    hours: 6,
    exam: 5,
    agentos: 5,
    summary:
      "La arquitectura segura asigna responsabilidades del agente a etapas concretas del SDLC y separa planificacion, ejecucion y validacion con limites tecnicos, no solo instrucciones.",
    study: [
      "Mapeo SDLC: planning produce issues/plan; implementation produce branch/commits/PR; validation produce checks/artifacts; deployment suele requerir environments y aprobacion.",
      "Cada tarea debe tener contrato: inputs, outputs y criterios de exito. Sin esto, el agente puede producir cambios plausibles que no resuelven el objetivo.",
      "Plan-first: el agente produce un PR o artefacto de plan sin tocar codigo; recomendado para auth, infra, workflows, produccion y cambios dificiles de revertir.",
      "Plan + execution: plan y diff aparecen juntos; valido para cambios de menor riesgo si hay checks/reviews obligatorios.",
      "Las fronteras reales son tool allowlists, permisos, scopes, branch protections, required checks y handoff explicito; no basta con decirle al modelo 'no edites'."
    ],
    traps: [
      "El lugar donde nace el plan no es lo importante; lo importante es cuando entra validacion humana respecto al impacto.",
      "Un agente planner debe ser read-only si se quiere enforcement real.",
      "Cambios en workflows, infra, secrets o auth deben elevar riesgo aunque el diff parezca pequeno."
    ],
    agentosUse:
      "Crear contrato AgentOS: task -> plan -> approval -> execution branch -> PR -> validation -> merge/reject/rollback.",
    artifact: "AGENTOS_SDLC_AGENT_ARCHITECTURE_CONTRACT.md",
    questions: [
      "Cuando usar plan-first frente a plan+execution?",
      "Que campos debe incluir un task contract para vulnerabilidad?",
      "Por que una instruccion textual no sustituye una allowlist de herramientas?"
    ],
    sources: ["S010", "S011", "S012", "S013", "S017"]
  },
  {
    id: "governance",
    title: "PR governance: templates, checks, CODEOWNERS, branches y rulesets",
    phase: "Governance GitHub",
    track: "Core examen",
    hours: 7,
    exam: 5,
    agentos: 5,
    summary:
      "En GH-600, el pull request no es solo colaboracion: es el punto de control arquitectonico donde se revisan plan, diff, evidencias, owners, checks, rules y aprobaciones.",
    study: [
      "Workflow seguro: agente crea rama, abre PR con plan, CODEOWNERS enruta revisores, Actions ejecuta checks, rulesets/branch protection bloquean merge hasta cumplir requisitos.",
      "PR template debe exigir objetivo, scope, pasos, criterios verificables, riesgos, mitigaciones, rollback/escalado y evidencia.",
      "Required status checks convierten evaluacion en gate. El check puede validar plan, tests, lint, security scans o cobertura.",
      "CODEOWNERS enruta review por ruta; combinado con required reviews impide que cambios sensibles pasen sin expertos.",
      "Rulesets son policy-as-code para ramas/tags/repos: pueden requerir PR, status checks, signed commits, deploy checks, code scanning, linear history o bloquear bypass.",
      "Branch protection/rulesets son especialmente relevantes para agentes porque limitan merge y cambios directos a ramas protegidas."
    ],
    traps: [
      "Un PR sin plan ni evidencia es poco auditable aunque el diff sea pequeno.",
      "CODEOWNERS no protege por si solo si no se exige review de owners.",
      "Si un agente puede saltarse required checks, el problema no es el modelo: es la arquitectura de governance."
    ],
    agentosUse:
      "Usar policies AgentOS para decidir aprobacion por ruta: docs low risk, src medium, .github/workflows e infra high, deploy/secrets critical.",
    artifact: "AGENTOS_REPOSITORY_GOVERNANCE_BASELINE.md",
    questions: [
      "Que combinacion convierte CODEOWNERS en control efectivo?",
      "Que debe contener un PR template para agentes?",
      "Que diferencia practica hay entre branch protection y rulesets?"
    ],
    sources: ["S014", "S072", "S073", "S074", "S075", "S076", "S077", "S078", "S079", "S080"]
  },
  {
    id: "actions",
    title: "GitHub Actions como entorno de ejecucion y evidencia",
    phase: "GitHub Actions",
    track: "Core examen",
    hours: 7,
    exam: 5,
    agentos: 5,
    summary:
      "Los agentes en GitHub se apoyan en workflows para ejecutar, validar, registrar evidencia y acotar permisos. La clave es dominar triggers, contexts, permissions, artifacts y operaciones de runs.",
    study: [
      "Workflow: YAML versionado que se dispara por eventos, schedule, workflow_dispatch o APIs.",
      "Jobs y steps corren en runners aislados; los logs, conclusions y artifacts son evidencia para revisar y auditar.",
      "Contexts como github.*, vars.* y env.* deben usarse con proposito: evento/runtime, configuracion central y entorno de job.",
      "Outputs son contratos entre steps/jobs. No uses logs como transporte estructurado si necesitas handoff fiable.",
      "Defensive gating: si un workflow tiene triggers multiples, anade if conditions para que acciones PR-only no corran fuera de contexto.",
      "GITHUB_TOKEN debe tener minimo privilegio: permissions read por defecto y elevacion solo donde sea necesario.",
      "Artifacts conservan resultados de pruebas, logs o reportes para que el PR no dependa de scrollback."
    ],
    traps: [
      "Eventos disparados con GITHUB_TOKEN tienen restricciones para evitar loops de workflows.",
      "Workflow_dispatch o schedule pueden romper pasos que asumen pull_request si no hay gating.",
      "Variables y secrets no son intercambiables; secrets no deben aparecer en instrucciones, YAML plano ni archivos commiteados."
    ],
    agentosUse:
      "Base para heartbeats, validators, run evidence, scheduled checks, reruns, cancellation policy y reports AgentOS.",
    artifact: "AGENTOS_ACTIONS_HEARTBEAT_AND_VALIDATION_RUNBOOK.md",
    questions: [
      "Que evidence guardarias como artifact y que dejarias solo en logs?",
      "Como evitarias que una tarea programada ejecute logica pensada solo para PR?",
      "Por que permissions: contents: read es un buen punto de partida?"
    ],
    sources: ["S015", "S016", "S018", "S019", "S081", "S082", "S083", "S084", "S085", "S086", "S087", "S088", "S089", "S090", "S091", "S092", "S093", "S094", "S095"]
  },
  {
    id: "mcp",
    title: "MCP: servidores, registries, allow lists y tool boundaries",
    phase: "MCP y herramientas",
    track: "Core examen",
    hours: 6,
    exam: 5,
    agentos: 5,
    summary:
      "MCP estandariza como un agente descubre y usa herramientas/contexto externo. Para el examen no basta saber conectarlo: hay que gobernarlo con registry, allow list, scopes y revision.",
    study: [
      "Un MCP server expone herramientas, recursos y prompts a clientes compatibles mediante interfaces estructuradas.",
      "En GitHub, MCP amplia capacidades del agente, pero tambien aumenta blast radius: cada servidor nuevo debe tratarse como cambio de herramienta de alto riesgo.",
      "Registry: catalogo para descubrir servidores aprobados y describirlos de forma estandar.",
      "Allow list: politica que decide si se permite cualquier servidor o solo servidores del registry.",
      "Remote MCP reduce setup; local MCP da control y acceso local, pero debe estar gobernado si se usa en organizacion.",
      "El patron seguro es server expone, registry descubre, allow list permite, toolset limita, logs auditan.",
      "En el estandar MCP, host, client y server son roles distintos: el host coordina, el client mantiene una conexion con un server y el server provee contexto o acciones."
    ],
    traps: [
      "MCP no es solo 'mas contexto'; puede ser capacidad de accion externa.",
      "Allow all acelera pero reduce control; registry only mejora governance.",
      "Las roots MCP comunican alcance, pero no sustituyen permisos/sandbox reales del sistema operativo."
    ],
    agentosUse:
      "Disenar registry AgentOS: server id, owner, tools expuestas, scopes, auth, risk tier, approval gate, audit output y rollback path.",
    artifact: "AGENTOS_MCP_LAYER_BLUEPRINT.md",
    questions: [
      "Que tres piezas hacen MCP escalable y gobernable?",
      "Que diferencia hay entre tools, resources y prompts en MCP?",
      "Cuando un MCP server deberia requerir aprobacion humana antes de habilitarse?"
    ],
    sources: ["S020", "S055", "S056", "S057", "S058", "S059", "S060", "S061", "S062", "S063", "S064", "S065", "S066", "S067"]
  },
  {
    id: "boundaries",
    title: "Execution context, limits, retries, rollback y escalation",
    phase: "Ejecucion segura",
    track: "Core examen",
    hours: 4,
    exam: 5,
    agentos: 5,
    summary:
      "El contexto de ejecucion define donde opera un agente y que puede tocar: repo, rama, workflow, permisos, branch isolation, human review, retries, rollback y escalado.",
    study: [
      "Repository scope es la primera frontera: el agente no deberia cruzar a otros repos si no se concede explicitamente.",
      "Branch-based isolation evita cambios directos en main: el agente trabaja en rama y el PR convierte cambios en objeto revisable.",
      "Custom agents refinan scope con applyTo y tools, pero no controlan por si mismos branch creation, PR behavior ni execution isolation.",
      "Error handling debe fallar rapido, registrar mensajes significativos y evitar estados parciales silenciosos.",
      "Retries son utiles para fallos transitorios, pero deben tener limite. Tras fallos repetidos, escalado humano con resumen de intentos y evidencia.",
      "Rollback natural: cerrar/discard PR antes de merge. Si se mergeo, revert commit o revert PR.",
      "Environment protections controlan deploys y secretos sensibles."
    ],
    traps: [
      "Retry infinito es una degradacion, no resiliencia.",
      "Un agente puede preparar cambios; la decision de merge/deploy sigue siendo humana o policy-gated.",
      "Branch scope no significa permiso amplio dentro de todo el repo si applyTo/tools limitan mas."
    ],
    agentosUse:
      "Implementar verdicts AgentOS: continue, repair, wait, block, rollback, escalate; cada uno con evidencia y limite de intentos.",
    artifact: "AGENTOS_EXECUTION_LIMITS_AND_RECOVERY_POLICY.md",
    questions: [
      "Que evidencia debe incluir un escalado tras dos checks fallidos?",
      "Que rollback elegirias antes de merge y despues de merge?",
      "Que define el execution context de un agente en GitHub?"
    ],
    sources: ["S021", "S022", "S023", "S096", "S097", "S098", "S099", "S100", "S101"]
  },
  {
    id: "custom-agents",
    title: "Custom agents: .agent.md, skills, hooks, env, secrets, firewall y testing",
    phase: "Custom agents",
    track: "Core examen",
    hours: 6,
    exam: 4,
    agentos: 5,
    summary:
      "Los custom agents permiten especializar Copilot cloud agent. La parte examinable esta en configurarlos con scope, tools, instrucciones, skills, MCP, hooks, entorno y pruebas.",
    study: [
      "La preparacion organizacional decide donde se habilitan agentes, que politicas aplican, que repos los usan y que propietarios revisan configuraciones.",
      "Los archivos .agent.md viven bajo .github/agents y definen rol, instrucciones, applyTo, tools y comportamiento esperado.",
      "Skills amplian tareas especializadas con instrucciones, scripts y recursos; conviene versionarlas y probarlas.",
      "Hooks ejecutan comandos en puntos del ciclo del agente: pre-tool-use, post-tool-use, errores o lifecycle. Sirven para bloquear, validar, loggear y escalar.",
      "Environment setup define como preparar runtime; secrets y variables deben inyectarse por boundaries, no commitearse.",
      "Firewall limita acceso externo del cloud agent y es clave contra exfiltracion o llamadas inesperadas.",
      "Test custom agents antes de usarlos en repos sensibles: revisar scope, prompts, tools, logs y resultados."
    ],
    traps: [
      "Un custom agent con buenas instrucciones pero herramientas demasiado amplias sigue siendo peligroso.",
      "Cambiar allowlists, hooks, skills o MCP en un agente debe tratarse como cambio de governance.",
      "Secrets no deben vivir en instrucciones ni en configuraciones commiteadas."
    ],
    agentosUse:
      "Mapear cada agente AgentOS a rol, file scope, allowed tools, forbidden actions, hooks, evidence contract y release test.",
    artifact: "AGENTOS_CUSTOM_AGENT_OPERATIONS_POLICY.md",
    questions: [
      "Que deberia controlar applyTo y que deberia controlar tools?",
      "Que hook usarias para bloquear un comando peligroso antes de ejecutar?",
      "Por que probar un custom agent es parte de governance?"
    ],
    sources: ["S028", "S029", "S030", "S031", "S032", "S033", "S034", "S035", "S036", "S037"]
  },
  {
    id: "multiagent",
    title: "Coordinacion multiagente y Copilot SDK",
    phase: "Multiagente",
    track: "Mejorar nota",
    hours: 6,
    exam: 4,
    agentos: 5,
    summary:
      "Este bloque va mas alla del minimo: sub-agentes, colas, eventos streaming, hooks y observabilidad. Es util para notas altas y para convertir AgentOS en orquestador serio.",
    study: [
      "La coordinacion multiagente exige aislamiento: ramas, write scopes, ownership de archivos y outputs claros para evitar conflictos.",
      "Patrones: primary agent delega subtareas, subagent devuelve artifacts, orchestrator decide merge, retry, fallback o human handoff.",
      "Eventos de streaming permiten mostrar progreso y diagnosticar estados parciales.",
      "Session persistence evita repetir pasos, pero debe estar acotada para no perpetuar contexto stale.",
      "Steering and queueing ayuda a controlar concurrencia, prioridad y pausas.",
      "OpenTelemetry aporta trazas para analizar latencia, fallos, tool calls y handoffs."
    ],
    traps: [
      "Paralelizar agentes sin write scopes distintos crea conflictos y trabajo duplicado.",
      "Persistir sesion sin invalidacion puede consolidar errores.",
      "La observabilidad multiagente debe registrar decisiones y handoffs, no solo logs tecnicos."
    ],
    agentosUse:
      "Formalizar primary agent, delegated worker, reviewer, validator y recovery agent con contratos de handoff y conflict policy.",
    artifact: "AGENTOS_MULTI_AGENT_ORCHESTRATION_SPEC.md",
    questions: [
      "Que evidencia necesitas para saber que un fallo fue del subagente, herramienta o contexto?",
      "Que write scopes asignarias a dos agentes paralelos?",
      "Cuando usarias fallback en vez de retry?"
    ],
    sources: ["S038", "S039", "S040", "S041", "S042", "S043", "S044", "S045", "S046"]
  },
  {
    id: "memory",
    title: "Memoria, estado, contexto y drift",
    phase: "Memoria y estado",
    track: "Core examen",
    hours: 4,
    exam: 4,
    agentos: 5,
    summary:
      "La memoria ayuda a continuidad, pero el examen insiste en scope, expiracion, pruning, reset, validacion contra repo actual y prevencion de contexto stale.",
    study: [
      "Distingue memoria de corto plazo, largo plazo y memoria externa. Cada una necesita scope y reglas de expiracion.",
      "El estado durable debe capturar progreso, decisiones y evidencias para reanudar sin repetir ni divergir.",
      "Context drift ocurre cuando el agente actua con informacion obsoleta o contradictoria. Se corrige con readback, checks, branch state y validacion contra artefactos actuales.",
      "Copilot Memory puede guardar facts utiles de repo/preferencias, pero no debe sustituir evidencia actual.",
      "Repository indexing mejora contexto de codigo; content exclusion controla parte del contexto en algunas experiencias, pero cloud agent tiene limitaciones especificas.",
      "Session data sirve para revisar historial de sesiones y reconstruir acciones."
    ],
    traps: [
      "Mas memoria no siempre es mejor: puede aumentar stale context.",
      "Una preferencia guardada no debe ganar frente a branch actual, tests o policy.",
      "Content exclusion no se puede asumir igual en todas las experiencias de Copilot."
    ],
    agentosUse:
      "Crear memoria verificable: cada fact debe tener origen, fecha, scope, TTL, ultima validacion y regla de invalidez.",
    artifact: "AGENTOS_MEMORY_AND_STATE_POLICY.md",
    questions: [
      "Que diferencia hay entre durable state y memoria conversacional?",
      "Como detectarias drift en una tarea larga?",
      "Que facts nunca deberian guardarse como memoria reutilizable?"
    ],
    sources: ["S051", "S052", "S053", "S054"]
  },
  {
    id: "cli",
    title: "Copilot CLI: allowed tools, MCP, hooks, PRs y rollback",
    phase: "Copilot CLI",
    track: "Core examen",
    hours: 4,
    exam: 4,
    agentos: 5,
    summary:
      "La CLI concentra varias ideas examinables: permitir o denegar herramientas, conectar MCP, usar hooks, crear custom agents, gestionar PRs, rollback y session data.",
    study: [
      "Allowed/denied tools debe tratarse como control de riesgo por tarea, no como preferencia ergonomica.",
      "La configuracion CLI puede incluir MCP servers, hooks y custom agents para especializar comportamiento.",
      "Rollback en CLI debe entenderse como capacidad de revertir o cancelar cambios antes de consolidarlos.",
      "Manage pull requests permite llevar trabajo de agente al flujo revisable normal.",
      "Session data permite trazabilidad y continuidad, pero tambien requiere higiene de privacidad y pruning."
    ],
    traps: [
      "Denegar herramientas peligrosas es mas fuerte que pedir al agente que no las use.",
      "Rollback no elimina la necesidad de plan y evidencias.",
      "La CLI no deberia recibir permisos mas amplios por comodidad."
    ],
    agentosUse:
      "Definir perfiles AgentOS de herramientas: read-only planner, code executor, repo metadata reader, PR operator y release operator.",
    artifact: "AGENTOS_ALLOWED_TOOLS_AND_ROLLBACK_POLICY.md",
    questions: [
      "Que herramienta denegarias para un planner?",
      "Que datos de sesion conservarias para auditoria?",
      "Que diferencia hay entre cancelar, revertir y descartar PR?"
    ],
    sources: ["S068", "S069", "S070", "S071", "S102", "S103", "S104", "S105"]
  },
  {
    id: "evaluation",
    title: "Evaluacion, error analysis y tuning",
    phase: "Evaluacion",
    track: "Core examen",
    hours: 5,
    exam: 5,
    agentos: 5,
    summary:
      "Para aprobar hay que pensar como operador: definir exito antes, generar senales, clasificar fallos y ajustar instrucciones, tools, memoria o workflows segun evidencia.",
    study: [
      "Success criteria deben reflejar intencion real: resolver vulnerabilidad, mantener scope, pasar tests relevantes, no introducir secrets y respetar owners.",
      "Senales cuantitativas: checks, test pass rate, coverage, code scanning, dependency alerts, timing, flaky reruns, number of revisions.",
      "Senales cualitativas: review comments, architecture fit, scope discipline, claridad del plan y rollback.",
      "Root causes tipicas: reasoning error, tool misuse, stale context, missing dependency, insufficient permissions, brittle workflow, environment mismatch.",
      "Tuning no significa solo cambiar prompt: puede incluir constraints, memory usage, tool access, workflow gates, hooks, test coverage o artifact requirements.",
      "SARIF/code scanning, secret scanning, dependency alerts y Checks API convierten evaluacion en datos auditables."
    ],
    traps: [
      "No confundir fallo de herramienta con fallo de razonamiento.",
      "Un check que no cubre el riesgo no prueba que el cambio sea seguro.",
      "Tuning sin registrar antes/despues no es mejora controlada."
    ],
    agentosUse:
      "Crear failure taxonomy AgentOS y tabla: symptom -> evidence -> root cause -> fix -> regression guard.",
    artifact: "AGENTOS_EVALUATION_AND_FAILURE_ANALYSIS_PLAYBOOK.md",
    questions: [
      "Que senales usarias para saber si una vulnerabilidad sigue alcanzable?",
      "Como distinguir tool misuse de permission issue?",
      "Que cambiarias si el agente siempre hace cambios demasiado amplios?"
    ],
    sources: ["S079", "S080", "S088", "S089", "S094", "S095", "S106", "S107", "S108", "S109"]
  },
  {
    id: "guardrails",
    title: "Guardrails, accountability y uso responsable",
    phase: "Guardrails",
    track: "Core examen",
    hours: 5,
    exam: 5,
    agentos: 5,
    summary:
      "Los guardrails no son decorativos: clasifican riesgo, reducen permisos, bloquean acciones peligrosas, exigen autorizacion explicita y preservan velocidad donde el riesgo no lo justifica.",
    study: [
      "Autonomy levels deben depender de riesgo operacional, seguridad y compliance: low, medium, high, critical.",
      "Human-in-the-loop debe reservarse para decisiones materiales: secrets, deploys, auth, workflows, infra, datos sensibles, cambios irreversibles.",
      "Least privilege: credenciales, GITHUB_TOKEN, MCP tools y workflow permissions deben ser minimos por defecto.",
      "Copilot cloud agent incorpora mitigaciones: rama unica, PR/draft review, limites de quien puede disparar, workflow approval, branch protections, firewall, security validation, signed commits, session logs y audit logs.",
      "Prompt injection existe en issues/comments; GitHub filtra ciertos caracteres ocultos, pero la defensa real requiere review, scopes, logs y outputs seguros.",
      "Build guardrails recomienda planificar policies, adaptar rulesets, proteger configuraciones Copilot/MCP con CODEOWNERS, revisar runners, secrets y workflow policies."
    ],
    traps: [
      "Aprobar todo reduce velocidad aparente y no reduce riesgo material.",
      "No todos los policies de Copilot aplican igual a cloud agent.",
      "El agente no deberia poder aprobar o mergear su propio PR."
    ],
    agentosUse:
      "Definir autonomy matrix AgentOS: accion -> riesgo -> permiso -> approval -> evidence -> rollback.",
    artifact: "AGENTOS_GUARDRAILS_AND_ACCOUNTABILITY_MATRIX.md",
    questions: [
      "Que acciones requieren juicio humano explicito?",
      "Como reducirias riesgo sin bloquear cambios docs low-risk?",
      "Que controles usar para proteger .github/workflows y configuraciones MCP?"
    ],
    sources: ["S025", "S026", "S027", "S036", "S074", "S078", "S087", "S098", "S110"]
  },
  {
    id: "agentic-workflows",
    title: "GitHub Agentic Workflows y Continuous AI",
    phase: "Mejorar nota",
    track: "Mejorar nota",
    hours: 4,
    exam: 3,
    agentos: 5,
    summary:
      "Bloque extra para nota alta y producto: Agentic Workflows estan en technical preview, pero conectan directamente con Continuous AI, safe outputs, sandboxing y automatizacion programada.",
    study: [
      "Agentic Workflows describen outcomes en Markdown y configuran guardrails en frontmatter; el lock file se ejecuta en GitHub Actions.",
      "No reemplazan CI/CD determinista: lo amplian con tareas abiertas pero acotadas como triage, reportes, documentacion, test improvement y CI failure analysis.",
      "Guardrails destacados: read-only token, cero secrets en el agente, firewall de red, safe outputs, deteccion de amenazas y write job separado.",
      "Safe outputs convierten propuestas del agente en artefactos que un job con permisos acotados aplica si cumple reglas: prefijos de titulo, maximo de operaciones, labels permitidas.",
      "Es preview: util para entender hacia donde va GitHub, pero no basar el aprobado solo en esto."
    ],
    traps: [
      "Technical preview puede cambiar; estudiar conceptos, no memorizar solo CLI exacta.",
      "Ejecutar un coding CLI normal dentro de Actions suele dar mas permisos de los necesarios si no se disena bien.",
      "Safe output no es merge automatico: es propuesta estructurada con aplicador separado."
    ],
    agentosUse:
      "Inspirar AgentOS DailyOps: reportes programados, safe outputs, lock/run evidence, issue creation con limites, threat scan y approval before write.",
    artifact: "AGENTOS_CONTINUOUS_AI_SAFE_OUTPUTS_SPEC.md",
    questions: [
      "Que problema resuelve separar AI agent job y write job?",
      "Por que Agentic Workflows son extra para mejorar nota y no el nucleo minimo?",
      "Que safe outputs usarias para un reporte diario AgentOS?"
    ],
    sources: ["S111", "S112", "S113"]
  },
  {
    id: "custom-library",
    title: "Customization Library: agentes ejemplo",
    phase: "Mejorar nota",
    track: "Mejorar nota",
    hours: 3,
    exam: 3,
    agentos: 5,
    summary:
      "Los ejemplos oficiales de custom agents son utiles para practicar plantillas reales: implementation planner, first custom agent, bug fix teammate y cleanup specialist.",
    study: [
      "Implementation planner debe producir plan antes de codigo, con scope, pasos, riesgos y criterios.",
      "First custom agent muestra estructura base para rol, instrucciones y aplicabilidad.",
      "Bug fix teammate orienta al flujo de reproducir, localizar, cambiar minimo, validar y explicar.",
      "Cleanup specialist enfatiza cambios de bajo riesgo, scope claro y mejoras incrementales.",
      "Estos ejemplos son ideales para transformar teoria en archivos .agent.md de practica."
    ],
    traps: [
      "No copiar ejemplos sin adaptar applyTo, tools y criterios de salida.",
      "Un cleanup agent puede degradar arquitectura si no tiene limites.",
      "Un bug fixer debe validar reproduccion y test, no solo cambiar codigo plausible."
    ],
    agentosUse:
      "Crear plantillas AgentOS para planner, fixer, reviewer, cleanup y validator con readme de uso.",
    artifact: "AGENTOS_CUSTOM_AGENT_TEMPLATE_LIBRARY.md",
    questions: [
      "Que salida esperas de implementation planner antes de tocar codigo?",
      "Que herramienta prohibirias a cleanup specialist?",
      "Como sabrias que bug fix teammate corrigio la causa y no el sintoma?"
    ],
    sources: ["S047", "S048", "S049", "S050"]
  },
  {
    id: "cloud-agent",
    title: "Copilot cloud agent: capacidades, limites y coste operativo",
    phase: "Cloud agent",
    track: "Core examen",
    hours: 3,
    exam: 4,
    agentos: 4,
    summary:
      "Cloud agent es el producto GitHub que encarna muchos conceptos GH-600: research, plan, branch, changes, iteration, PR, session logs, limitations y customization.",
    study: [
      "Puede investigar repo, crear plan, arreglar bugs, implementar features incrementales, mejorar tests, actualizar docs, tratar deuda tecnica y resolver conflictos.",
      "Cloud agent trabaja en entorno GitHub Actions; agent mode del IDE trabaja en entorno local.",
      "Limitaciones importantes: un repo por tarea, una rama a la vez, un PR por tarea, compatibilidad condicionada por rulesets/branch protections.",
      "Puede mejorarse con custom instructions, MCP servers, custom agents, hooks y skills.",
      "Usa Actions minutes y premium requests; el coste operativo tambien es parte del diseno."
    ],
    traps: [
      "No asumir que cloud agent puede cambiar multiples repos en una sola ejecucion.",
      "No confundir cloud agent con IDE agent mode.",
      "Rulesets incompatibles pueden bloquear el uso del agente; a veces Copilot debe ser bypass actor."
    ],
    agentosUse:
      "Usar cloud agent como comparativa de mercado para explicar por que AgentOS necesita run state, approvals, observabilidad y cost controls.",
    artifact: "AGENTOS_CLOUD_AGENT_COMPARISON_NOTES.md",
    questions: [
      "Que limitacion de cloud agent afecta a cambios multi-repo?",
      "Que personalizaciones pueden mejorar conocimiento y seguridad del agente?",
      "Por que usage cost pertenece a arquitectura y no solo a billing?"
    ],
    sources: ["S024", "S025", "S110"]
  }
];

const SOURCES = {
  S001: ["Study Guide oficial GH-600", "Core examen", "Dominios, pesos, perfil, passing score, preview features, recursos oficiales.", "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600"],
  S002: ["Exam sandbox Microsoft", "Core examen", "Interfaz de examen, navegacion, revision de preguntas y experiencia previa al dia del examen.", "https://mscertdemo.starttest.com/"],
  S003: ["Foundations of Agentic AI in GitHub", "Core examen", "Modulo raiz: agente vs asistente, ciclo plan-act-evaluate, GitHub como control plane.", "https://learn.microsoft.com/en-us/training/modules/foundations-agentic-ai/"],
  S004: ["Define agentic AI in the SDLC", "Core examen", "Diferencia asistente/agente y como aparece en ramas, commits, PRs y workflows.", "https://learn.microsoft.com/en-us/training/modules/foundations-agentic-ai/2-define-agentic-ai"],
  S005: ["Agent lifecycle: plan, act, evaluate", "Core examen", "El ciclo es iterativo; plan visible, accion acotada y evaluacion con senales del sistema.", "https://learn.microsoft.com/en-us/training/modules/foundations-agentic-ai/3-explain-agent-lifecycle-plan-act-evaluate"],
  S006: ["GitHub as system of record/control plane", "Core examen", "Repos, PRs, reviews, checks, rulesets, CODEOWNERS y environments como enforcement.", "https://learn.microsoft.com/en-us/training/modules/foundations-agentic-ai/4-describe-github-system-record-control-plane"],
  S007: ["Risks, anti-patterns, traceability needs", "Core examen", "Planless execution, over-permission, hidden reasoning, blind trust in CI y audit trail minimo.", "https://learn.microsoft.com/en-us/training/modules/foundations-agentic-ai/5-identify-risks-traceability"],
  S008: ["Contributor model for agent work", "Core examen", "Evaluar PRs de agentes con el mismo rigor: intent, scope, evidence, ownership, policy, fallback.", "https://learn.microsoft.com/en-us/training/modules/foundations-agentic-ai/6-apply-contributor-model-agent-generated-work"],
  S009: ["Foundations summary", "Core examen", "Resumen y enlaces de lectura: PR review, rulesets, protected branches, CODEOWNERS, token, SARIF, push protection.", "https://learn.microsoft.com/en-us/training/modules/foundations-agentic-ai/8-summary"],
  S010: ["Designing Agent Architecture and SDLC Integration", "Core examen", "Modulo raiz de arquitectura, PR governance, reliable workflows y operation controls.", "https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/"],
  S011: ["Map agent responsibilities to SDLC", "Core examen", "Responsabilidades por etapa: planning, implementation, validation, deployment.", "https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/2-agent-responsibilities"],
  S012: ["Inputs, outputs, success criteria", "Core examen", "Task contracts; outputs como plan, PR y evidencia; criteria verificables.", "https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/3-inputs-outputs-success-criteria"],
  S013: ["Separate planning, reasoning, execution", "Core examen", "Plan-first vs plan+execution, tool gating, planner read-only y handoff explicito.", "https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/4-plan-reason-execution"],
  S014: ["PR governance examples", "Core examen", "Templates, plan gate, CODEOWNERS, required checks, branches y environment gates.", "https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/5-pull-request-governance-controls"],
  S015: ["Reliable workflows", "Core examen", "Outputs, contexts, triggers, event-aware gating y risk-based autonomy.", "https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/6-reliable-workflows"],
  S016: ["Agent operation controls", "Core examen", "Observability, artifacts, MCP, secrets, hooks, reliability, retries, escalation y least privilege.", "https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/7-agent-operations-controls"],
  S017: ["Design module summary", "Core examen", "Resumen de arquitectura: boundaries, governance, observability, MCP restrictions y hooks.", "https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/9-summary"],
  S018: ["Tooling, MCP, and Agent Execution Environments", "Core examen", "Modulo raiz: herramientas, APIs, MCP, execution context, scopes y protections.", "https://learn.microsoft.com/en-us/training/modules/agent-tooling-mcp-execution-environments/"],
  S019: ["Agents interact with GitHub APIs/workflows", "Core examen", "APIs, branches, commits, PRs, workflows y Agentic Workflows en Markdown/frontmatter.", "https://learn.microsoft.com/en-us/training/modules/agent-tooling-mcp-execution-environments/2-interact-github-apis-workflows"],
  S020: ["MCP servers, registries, allow lists", "Core examen", "Servidor, registry y allow list como modelo de conectividad gobernable.", "https://learn.microsoft.com/en-us/training/modules/agent-tooling-mcp-execution-environments/3-model-context-protocol-servers-registries-allow-lists"],
  S021: ["Execution context and boundaries", "Core examen", "Repo scope, branch isolation, custom agent applyTo/tools y workflow boundaries.", "https://learn.microsoft.com/en-us/training/modules/agent-tooling-mcp-execution-environments/4-execution-context-boundaries"],
  S022: ["Execution limits and protections", "Core examen", "Repository/branch limits, PR control, workflow controls, error handling, retries, rollback y escalation.", "https://learn.microsoft.com/en-us/training/modules/agent-tooling-mcp-execution-environments/5-agent-execution-limits-protections"],
  S023: ["Tooling module summary", "Core examen", "Resumen: GitHub APIs, workflows, Agentic Workflows, MCP, scopes y safeguards.", "https://learn.microsoft.com/en-us/training/modules/agent-tooling-mcp-execution-environments/7-summary"],
  S024: ["About GitHub Copilot cloud agent", "Core examen", "Capacidades, diferencias con IDE agent mode, customization, usage costs y limitaciones.", "https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-cloud-agent"],
  S025: ["Responsible use of Copilot cloud agent", "Core examen", "Uso responsable, performance, riesgos de seguridad, codigo inexacto y public code matches.", "https://docs.github.com/en/copilot/responsible-use/copilot-cloud-agent"],
  S026: ["Risks and mitigations for cloud agent", "Core examen", "Validacion de seguridad, branch limits, human review, workflow approval, firewall, prompt injection y audit logs.", "https://docs.github.com/en/copilot/concepts/agents/cloud-agent/risks-and-mitigations"],
  S027: ["Building guardrails for cloud agent", "Core examen", "Policy planning, rulesets, CODEOWNERS para config Copilot/MCP, runners, secrets y workflow policies.", "https://docs.github.com/en/copilot/tutorials/cloud-agent/build-guardrails"],
  S028: ["Prepare for custom agents", "Core examen", "Readiness organizacional, politicas y preparacion para custom agents.", "https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/prepare-for-custom-agents"],
  S029: ["About custom agents", "Core examen", "Concepto de agentes personalizados para especializar cloud agent por tarea.", "https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-custom-agents"],
  S030: ["Create custom agents", "Core examen", "Creacion de .agent.md y configuracion de agentes en repo.", "https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/create-custom-agents"],
  S031: ["Add skills to custom agents", "Core examen", "Skills como paquete de instrucciones, scripts y recursos para tareas especializadas.", "https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/add-skills"],
  S032: ["Extend cloud agent with MCP", "Core examen", "Conectar herramientas externas via MCP manteniendo control de servidor y capacidades.", "https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/extend-cloud-agent-with-mcp"],
  S033: ["Use hooks with cloud agent", "Core examen", "Hooks como guardrails ejecutables para validacion, logging y bloqueo.", "https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/use-hooks"],
  S034: ["Customize agent environment", "Core examen", "Setup del entorno de ejecucion de cloud agent.", "https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/customize-the-agent-environment"],
  S035: ["Configure secrets and variables", "Core examen", "Secretos y variables para agente con boundaries de entorno.", "https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/configure-secrets-and-variables"],
  S036: ["Customize agent firewall", "Core examen", "Restriccion de acceso externo del agente mediante firewall.", "https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/customize-the-agent-firewall"],
  S037: ["Test custom agents", "Core examen", "Testing y release de custom agents antes de usarlos en repos reales.", "https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/test-custom-agents"],
  S038: ["Copilot SDK custom agents", "Mejorar nota", "Sub-agent orchestration, custom agents y SDK patterns.", "https://docs.github.com/en/copilot/how-tos/copilot-sdk/use-copilot-sdk/custom-agents"],
  S039: ["Copilot SDK quickstart", "Mejorar nota", "Setup rapido del SDK para construir agentes.", "https://docs.github.com/en/copilot/how-tos/copilot-sdk/sdk-getting-started"],
  S040: ["SDK working with hooks", "Mejorar nota", "Hooks en SDK para intervencion programatica.", "https://docs.github.com/en/copilot/how-tos/copilot-sdk/use-copilot-sdk/working-with-hooks"],
  S041: ["SDK MCP servers", "Mejorar nota", "Uso de MCP servers desde Copilot SDK.", "https://docs.github.com/en/copilot/how-tos/copilot-sdk/use-copilot-sdk/mcp-servers"],
  S042: ["SDK session persistence", "Mejorar nota", "Persistencia de sesion y continuidad controlada.", "https://docs.github.com/en/copilot/how-tos/copilot-sdk/use-copilot-sdk/session-persistence"],
  S043: ["SDK custom skills", "Mejorar nota", "Skills personalizadas con SDK.", "https://docs.github.com/en/copilot/how-tos/copilot-sdk/use-copilot-sdk/custom-skills"],
  S044: ["SDK steering and queueing", "Mejorar nota", "Control de cola, steering y coordinacion.", "https://docs.github.com/en/copilot/how-tos/copilot-sdk/use-copilot-sdk/steering-and-queueing"],
  S045: ["SDK streaming events", "Mejorar nota", "Eventos de streaming para progreso y observabilidad.", "https://docs.github.com/en/copilot/how-tos/copilot-sdk/use-copilot-sdk/streaming-events"],
  S046: ["SDK OpenTelemetry", "Mejorar nota", "Trazas y observabilidad con OpenTelemetry.", "https://docs.github.com/en/copilot/how-tos/copilot-sdk/observability/opentelemetry"],
  S047: ["Implementation planner", "Mejorar nota", "Ejemplo de agente planner para plan antes de ejecutar.", "https://docs.github.com/en/copilot/tutorials/customization-library/custom-agents/implementation-planner"],
  S048: ["Your first custom agent", "Mejorar nota", "Ejemplo base para crear custom agent.", "https://docs.github.com/en/copilot/tutorials/customization-library/custom-agents/your-first-custom-agent"],
  S049: ["Bug fix teammate", "Mejorar nota", "Ejemplo de agente para bugs con diagnostico y validacion.", "https://docs.github.com/en/copilot/tutorials/customization-library/custom-agents/bug-fix-teammate"],
  S050: ["Cleanup specialist", "Mejorar nota", "Ejemplo de agente para limpieza incremental y scope controlado.", "https://docs.github.com/en/copilot/tutorials/customization-library/custom-agents/cleanup-specialist"],
  S051: ["Copilot Memory", "Core examen", "Facts de repo/preferencias, validacion, limites y privacidad.", "https://docs.github.com/en/copilot/concepts/agents/copilot-memory"],
  S052: ["Copilot CLI session data", "Core examen", "Historial de sesiones para trazabilidad y continuidad.", "https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/chronicle"],
  S053: ["Repository indexing", "Core examen", "Indexacion de repo como fuente de contexto.", "https://docs.github.com/en/copilot/concepts/context/repository-indexing"],
  S054: ["Content exclusion", "Core examen", "Exclusion de contenido como control de contexto, con limites por experiencia.", "https://docs.github.com/en/copilot/concepts/context/content-exclusion"],
  S055: ["GitHub Docs: About MCP", "Core examen", "Concepto GitHub de MCP como contexto/herramientas para Copilot.", "https://docs.github.com/en/copilot/concepts/context/mcp"],
  S056: ["MCP official intro", "Core examen", "MCP como estandar abierto para conectar AI apps con datos, tools y workflows.", "https://modelcontextprotocol.io/docs/getting-started/intro"],
  S057: ["MCP architecture", "Mejorar nota", "Host, client, server, data layer, transport, JSON-RPC, primitives y notifications.", "https://modelcontextprotocol.io/docs/learn/architecture"],
  S058: ["MCP server concepts", "Mejorar nota", "Tools, resources, prompts, schemas, user consent y multi-server flows.", "https://modelcontextprotocol.io/docs/learn/server-concepts"],
  S059: ["MCP client concepts", "Mejorar nota", "Elicitation, roots, sampling y relacion host-client-server.", "https://modelcontextprotocol.io/docs/learn/client-concepts"],
  S060: ["MCP versioning", "Mejorar nota", "Versionado del protocolo y compatibilidad.", "https://modelcontextprotocol.io/docs/learn/versioning"],
  S061: ["Extend Copilot Chat with MCP", "Core examen", "Agregar MCP a Copilot Chat en IDE.", "https://docs.github.com/en/copilot/how-tos/provide-context/use-mcp-in-your-ide/extend-copilot-chat-with-mcp"],
  S062: ["Set up GitHub MCP Server", "Core examen", "Setup del GitHub MCP Server.", "https://docs.github.com/en/copilot/how-tos/provide-context/use-mcp-in-your-ide/set-up-the-github-mcp-server"],
  S063: ["MCP enterprise configuration", "Core examen", "Configuracion empresarial de MCP.", "https://docs.github.com/en/copilot/how-tos/provide-context/use-mcp-in-your-ide/enterprise-configuration"],
  S064: ["Configure MCP toolsets", "Core examen", "Toolsets para limitar capacidades expuestas.", "https://docs.github.com/en/copilot/how-tos/provide-context/use-mcp-in-your-ide/configure-toolsets"],
  S065: ["Use GitHub MCP Server", "Core examen", "Uso del servidor MCP desde IDE.", "https://docs.github.com/en/copilot/how-tos/provide-context/use-mcp-in-your-ide/use-the-github-mcp-server"],
  S066: ["Change MCP registry", "Core examen", "Cambio de registry MCP.", "https://docs.github.com/en/copilot/how-tos/provide-context/use-mcp-in-your-ide/change-mcp-registry"],
  S067: ["GitHub MCP Server from Copilot Chat", "Core examen", "Usar GitHub MCP Server en tareas de GitHub Chat.", "https://docs.github.com/en/copilot/how-tos/copilot-on-github/copilot-for-github-tasks/using-the-github-mcp-server-from-copilot-chat"],
  S068: ["Allowing and denying tool use", "Core examen", "Allowed/denied tools en Copilot CLI.", "https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/allowing-tools"],
  S069: ["Configure Copilot CLI", "Core examen", "Configuracion de CLI.", "https://docs.github.com/en/copilot/how-tos/copilot-cli/set-up-copilot-cli/configure-copilot-cli"],
  S070: ["Add MCP servers for CLI", "Core examen", "Agregar MCP servers a Copilot CLI.", "https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/add-mcp-servers"],
  S071: ["Use hooks with CLI", "Core examen", "Hooks en Copilot CLI.", "https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/use-hooks"],
  S072: ["About code owners", "Core examen", "CODEOWNERS y ownership de revision por ruta.", "https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners"],
  S073: ["About protected branches", "Core examen", "Branch protection y restricciones de merge.", "https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches"],
  S074: ["Manage branch protection rule", "Core examen", "Crear y gestionar branch protection.", "https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/managing-a-branch-protection-rule"],
  S075: ["About rulesets", "Core examen", "Rulesets para policy-as-code de repos/branches/tags.", "https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets"],
  S076: ["Creating rulesets", "Core examen", "Creacion de rulesets en repositorio.", "https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/creating-rulesets-for-a-repository"],
  S077: ["Managing rulesets", "Core examen", "Gestion de rulesets.", "https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/managing-rulesets-for-a-repository"],
  S078: ["Available rules for rulesets", "Core examen", "Reglas disponibles: checks, reviews, scanning, signed commits, deploys y restricciones.", "https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets"],
  S079: ["About status checks", "Core examen", "Status checks como senal de calidad y gate de merge.", "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks"],
  S080: ["REST API Checks", "Mejorar nota", "Checks API para crear/leer validaciones automatizadas.", "https://docs.github.com/en/rest/checks"],
  S081: ["Understand GitHub Actions", "Core examen", "Conceptos basicos de Actions.", "https://docs.github.com/en/actions/get-started/understand-github-actions"],
  S082: ["Workflows", "Core examen", "Workflows y jobs como automatizacion versionada.", "https://docs.github.com/en/actions/concepts/workflows-and-actions/workflows"],
  S083: ["Workflow syntax", "Core examen", "Sintaxis YAML de workflows.", "https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax"],
  S084: ["Events that trigger workflows", "Core examen", "Eventos push, pull_request, schedule, workflow_dispatch y mas.", "https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows"],
  S085: ["Contexts", "Core examen", "Contexts para metadata y decisiones runtime.", "https://docs.github.com/en/actions/reference/workflows-and-actions/contexts"],
  S086: ["Expressions", "Core examen", "Expressions para condiciones y transformaciones.", "https://docs.github.com/en/actions/reference/workflows-and-actions/expressions"],
  S087: ["Variables", "Core examen", "Variables de configuracion.", "https://docs.github.com/en/actions/concepts/workflows-and-actions/variables"],
  S088: ["Secrets", "Core examen", "Secrets como boundary sensible de runtime.", "https://docs.github.com/en/actions/concepts/security/secrets"],
  S089: ["GITHUB_TOKEN", "Core examen", "Token automatico de workflow y permisos.", "https://docs.github.com/en/actions/concepts/security/github_token"],
  S090: ["Workflow artifacts", "Core examen", "Artifacts como evidencia durable.", "https://docs.github.com/en/actions/concepts/workflows-and-actions/workflow-artifacts"],
  S091: ["Use workflow run logs", "Core examen", "Logs de ejecucion para diagnostico.", "https://docs.github.com/en/actions/how-tos/monitor-workflows/use-workflow-run-logs"],
  S092: ["Re-run workflows and jobs", "Core examen", "Reruns para fallos transitorios o validacion renovada.", "https://docs.github.com/en/actions/how-tos/manage-workflow-runs/re-run-workflows-and-jobs"],
  S093: ["Cancel workflow run", "Core examen", "Cancelacion de runs para frenar trabajo no deseado.", "https://docs.github.com/en/actions/how-tos/manage-workflow-runs/cancel-a-workflow-run"],
  S094: ["Disable and enable workflows", "Core examen", "Control operativo de workflows.", "https://docs.github.com/en/actions/how-tos/manage-workflow-runs/disable-and-enable-workflows"],
  S095: ["Schedule issue creation", "Mejorar nota", "Automatizacion programada de issues.", "https://docs.github.com/en/actions/tutorials/manage-your-work/schedule-issue-creation"],
  S096: ["Manage environments", "Core examen", "Gestion de environments.", "https://docs.github.com/en/actions/how-tos/deploy/configure-and-manage-deployments/manage-environments"],
  S097: ["Deployment environments", "Core examen", "Environments como gate de despliegue y secretos.", "https://docs.github.com/en/actions/concepts/workflows-and-actions/deployment-environments"],
  S098: ["Control deployments", "Core examen", "Controlar despliegues con reglas y aprobaciones.", "https://docs.github.com/en/actions/how-tos/deploy/configure-and-manage-deployments/control-deployments"],
  S099: ["Review deployments", "Core examen", "Revision de deployments antes de continuar.", "https://docs.github.com/en/actions/how-tos/deploy/configure-and-manage-deployments/review-deployments"],
  S100: ["Create custom protection rules", "Mejorar nota", "Reglas de proteccion custom para deployments.", "https://docs.github.com/en/actions/how-tos/deploy/configure-and-manage-deployments/create-custom-protection-rules"],
  S101: ["Configure custom protection rules", "Mejorar nota", "Configurar reglas custom de proteccion.", "https://docs.github.com/en/actions/how-tos/deploy/configure-and-manage-deployments/configure-custom-protection-rules"],
  S102: ["Create custom agents for CLI", "Core examen", "Custom agents en CLI.", "https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/create-custom-agents-for-cli"],
  S103: ["Roll back CLI changes", "Core examen", "Rollback/cancelacion de cambios de Copilot CLI.", "https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/roll-back-changes"],
  S104: ["Manage pull requests with CLI", "Core examen", "Gestion de PRs desde Copilot CLI.", "https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/manage-pull-requests"],
  S105: ["Use session data in CLI", "Core examen", "Session data para revisar historial.", "https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/chronicle"],
  S106: ["SARIF upload", "Mejorar nota", "Subir resultados SARIF para code scanning.", "https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/integrate-with-existing-tools/uploading-a-sarif-file-to-github"],
  S107: ["Secret scanning push protection", "Mejorar nota", "Push protection para evitar secretos soportados.", "https://docs.github.com/en/code-security/concepts/secret-security/about-push-protection"],
  S108: ["Security hardening for Actions", "Mejorar nota", "Practicas de hardening para workflows.", "https://docs.github.com/en/actions/reference/security/secure-use"],
  S109: ["Troubleshooting required checks", "Mejorar nota", "Diagnosticar checks requeridos rotos o fragiles.", "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/troubleshooting-required-status-checks"],
  S110: ["Agentic audit log events", "Mejorar nota", "Eventos de auditoria de actividad agentic.", "https://docs.github.com/en/copilot/reference/agentic-audit-log-events"],
  S111: ["GitHub Agentic Workflows home", "Mejorar nota", "Continuous AI, safe outputs, sandbox, firewall y markdown workflows.", "https://github.github.com/gh-aw/"],
  S112: ["Agentic Workflows blog", "Mejorar nota", "Technical preview, casos de uso, safe outputs y defense-in-depth.", "https://github.blog/ai-and-ml/automate-repository-tasks-with-github-agentic-workflows/"],
  S113: ["gh-aw repository", "Mejorar nota", "Proyecto GitHub Agentic Workflows y workflow types.", "https://github.com/github/gh-aw"]
};

const SOURCE_TIME_MINUTES = {
  S001: 30,
  S002: 20,
  S003: 40,
  S004: 5,
  S005: 5,
  S006: 5,
  S007: 5,
  S008: 5,
  S009: 5,
  S010: 45,
  S011: 5,
  S012: 5,
  S013: 5,
  S014: 5,
  S015: 5,
  S016: 5,
  S017: 5,
  S018: 35,
  S019: 5,
  S020: 5,
  S021: 5,
  S022: 5,
  S023: 5,
  S024: 14,
  S025: 16,
  S026: 10,
  S027: 10,
  S028: 10,
  S029: 10,
  S030: 10,
  S031: 11,
  S032: 15,
  S033: 10,
  S034: 14,
  S035: 10,
  S036: 10,
  S037: 10,
  S038: 10,
  S039: 10,
  S040: 12,
  S041: 10,
  S042: 11,
  S043: 10,
  S044: 10,
  S045: 20,
  S046: 10,
  S047: 10,
  S048: 10,
  S049: 10,
  S050: 10,
  S051: 10,
  S052: 11,
  S053: 10,
  S054: 10,
  S055: 10,
  S056: 12,
  S057: 21,
  S058: 13,
  S059: 12,
  S060: 12,
  S061: 19,
  S062: 21,
  S063: 14,
  S064: 10,
  S065: 19,
  S066: 10,
  S067: 10,
  S068: 10,
  S069: 11,
  S070: 10,
  S071: 10,
  S072: 12,
  S073: 20,
  S074: 10,
  S075: 10,
  S076: 13,
  S077: 10,
  S078: 19,
  S079: 10,
  S080: 10,
  S081: 10,
  S082: 10,
  S083: 90,
  S084: 65,
  S085: 46,
  S086: 13,
  S087: 10,
  S088: 10,
  S089: 10,
  S090: 10,
  S091: 10,
  S092: 10,
  S093: 10,
  S094: 10,
  S095: 10,
  S096: 10,
  S097: 10,
  S098: 13,
  S099: 10,
  S100: 10,
  S101: 10,
  S102: 10,
  S103: 10,
  S104: 10,
  S105: 11,
  S106: 11,
  S107: 10,
  S108: 31,
  S109: 10,
  S110: 10,
  S111: 8,
  S112: 18,
  S113: 25,
};

const ROUTES = {
  "Aprobar GH-600": ["mapa", "foundation", "sdlc", "governance", "actions", "mcp", "boundaries", "custom-agents", "memory", "cli", "evaluation", "guardrails", "cloud-agent"],
  "Aprobar + AgentOS": LESSONS.map((lesson) => lesson.id),
  "Mejorar nota": LESSONS.filter((lesson) => lesson.track === "Mejorar nota" || lesson.agentos >= 5).map((lesson) => lesson.id)
};

const DIAGRAMS = [
  {
    title: "Plan, act, evaluate",
    text: "El ciclo no termina al actuar. Si los checks fallan, el agente debe revisar plan, cambiar accion o escalar.",
    nodes: [["Goal", "Plan visible", "Action branch", "Evaluate"], ["Checks fail", "Revise", "Retry bounded", "Escalate"]]
  },
  {
    title: "GitHub control plane",
    text: "GitHub registra intencion, cambio, evidencia, revision y decision.",
    nodes: [["Issue", "Branch", "Pull request", "Checks"], ["CODEOWNERS", "Rulesets", "Environment", "Audit"]]
  },
  {
    title: "MCP governance",
    text: "MCP debe gobernarse como una superficie de herramientas, no como simple contexto.",
    nodes: [["MCP server", "Registry", "Allow list", "Toolset"], ["Auth boundary", "Scope", "Logs", "Review"]]
  },
  {
    title: "Safe execution path",
    text: "El agente propone. La politica, los checks y las personas deciden si se acepta.",
    nodes: [["Task", "Plan gate", "PR", "Evidence"], ["Review", "Merge", "Rollback", "Postmortem"]]
  },
  {
    title: "Agentic Workflow safe outputs",
    text: "El agente no escribe directamente; produce un output que otro job valida y aplica con permisos acotados.",
    nodes: [["Event", "Read-only agent", "Output artifact", "Threat scan"], ["Safe", "Write job", "GitHub API", "Blocked"]]
  },
  {
    title: "Failure taxonomy",
    text: "El examen suele preguntar por causa raiz: razonamiento, herramienta, contexto, permisos o entorno.",
    nodes: [["Symptom", "Evidence", "Root cause", "Fix"], ["Regression guard", "Memory update", "Tool change", "Escalation"]]
  }
];

const CHECKLIST = [
  "Se explicar que un agente es goal-driven y produce artefactos durables.",
  "Se describir GitHub como system of record y control plane.",
  "Se distinguir plan-first y plan+execution.",
  "Se disenar task contracts con inputs, outputs y success criteria.",
  "Se usar PR template, required checks, CODEOWNERS, branch protection y rulesets.",
  "Se explicar GITHUB_TOKEN, secrets, vars, contexts, outputs y artifacts.",
  "Se configurar mentalmente MCP server, registry, allow list y toolset.",
  "Se explicar repo scope, branch isolation, workflow boundaries y environments.",
  "Se disenar retries con limite, rollback y escalation path.",
  "Se diferenciar memoria, estado durable, session data y context drift.",
  "Se clasificar fallos por reasoning, tool misuse, stale context, permissions o environment.",
  "Se definir autonomy levels y human-in-the-loop por riesgo.",
  "Se explicar custom agents, skills, hooks, env setup, secrets, firewall y testing.",
  "Se explicar cloud agent vs IDE agent mode y limitaciones de cloud agent.",
  "Extra: se explicar Agentic Workflows, safe outputs, read-only agent job y write job separado."
];

const QUESTION_BANK = [
  {
    "id": "Q001",
    "domain": "Arquitectura y SDLC",
    "type": "single",
    "prompt": "Un agente propone cambiar auth, workflows y despliegue en un solo PR. Que respuesta es mas segura?",
    "options": [
      "Aceptar si los tests pasan",
      "Pedir plan-first con alcance, riesgos, gates y dividir cambios",
      "Dar permisos admin temporalmente",
      "Ejecutar directo en main para reducir drift"
    ],
    "correct": [
      1
    ],
    "explanation": "Cambios de auth/workflows/deploy son de alto riesgo. El patron correcto es plan-first, dividir alcance y exigir gates/reviews antes de ejecutar.",
    "source": "Designing Agent Architecture"
  },
  {
    "id": "Q002",
    "domain": "Arquitectura y SDLC",
    "type": "multi",
    "prompt": "Que elementos hacen un task contract util para un agente?",
    "options": [
      "Inputs claros",
      "Outputs esperados",
      "Criterios de exito verificables",
      "Opinion general del agente sin evidencias",
      "Ruta de rollback/escalado"
    ],
    "correct": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Un contrato util define entrada, salida, exito observable y que hacer si falla. Una opinion sin evidencias no gobierna nada.",
    "source": "Microsoft Learn SDLC"
  },
  {
    "id": "Q003",
    "domain": "Arquitectura y SDLC",
    "type": "single",
    "prompt": "Cuando conviene separar planner y executor?",
    "options": [
      "Nunca, aumenta coste",
      "Solo en cambios de documentacion",
      "Cuando el riesgo exige revisar el plan antes de tocar artefactos",
      "Cuando no hay GitHub Actions"
    ],
    "correct": [
      2
    ],
    "explanation": "Separar plan y ejecucion reduce impacto en tareas sensibles y permite revision humana/policy antes del cambio.",
    "source": "Plan/reason/execution"
  },
  {
    "id": "Q004",
    "domain": "Arquitectura y SDLC",
    "type": "single",
    "prompt": "Que significa GitHub como control plane para agentes?",
    "options": [
      "Repositorio usado solo como backup",
      "Lugar donde se registran tareas, branches, PRs, checks, reviews y decisiones",
      "Interfaz de chat del agente",
      "Servidor MCP principal"
    ],
    "correct": [
      1
    ],
    "explanation": "Control plane significa que GitHub concentra estado, revision, reglas, evidencias y decisiones del workflow.",
    "source": "Foundations"
  },
  {
    "id": "Q005",
    "domain": "Arquitectura y SDLC",
    "type": "multi",
    "prompt": "En un PR generado por agente, que evidencias deberian aparecer?",
    "options": [
      "Plan resumido",
      "Scope y archivos tocados",
      "Checks o pruebas ejecutadas",
      "Ruta de rollback",
      "Solo 'LGTM by AI'"
    ],
    "correct": [
      0,
      1,
      2,
      3
    ],
    "explanation": "El PR debe ser auditable: plan, scope, validacion y rollback. Una aprobacion textual del agente no es evidencia.",
    "source": "PR governance"
  },
  {
    "id": "Q006",
    "domain": "Arquitectura y SDLC",
    "type": "single",
    "prompt": "Un agente abre un PR sin explicar objetivo ni criterios. Que anti-pattern es?",
    "options": [
      "Planless execution",
      "Least privilege",
      "Safe outputs",
      "Content exclusion"
    ],
    "correct": [
      0
    ],
    "explanation": "Es ejecucion sin plan visible. Dificulta revision, ownership y trazabilidad.",
    "source": "Foundations risks"
  },
  {
    "id": "Q007",
    "domain": "Arquitectura y SDLC",
    "type": "single",
    "prompt": "El contributor model implica que el codigo de agentes debe...",
    "options": [
      "Aceptarse si viene de Copilot",
      "Rechazarse por defecto",
      "Evaluarse como cualquier contribucion: intent, scope, evidence, policy",
      "Saltarse CODEOWNERS"
    ],
    "correct": [
      2
    ],
    "explanation": "El modelo de contribuidor evita sesgos a favor o en contra de IA; se revisa la contribucion por evidencia y politica.",
    "source": "Contributor model"
  },
  {
    "id": "Q008",
    "domain": "Arquitectura y SDLC",
    "type": "multi",
    "prompt": "Que tareas son candidatas a ejecucion autonoma de menor riesgo?",
    "options": [
      "Actualizar docs no sensibles",
      "Cambiar README",
      "Rotar secretos de produccion",
      "Modificar workflow deploy-prod",
      "Corregir typo en test"
    ],
    "correct": [
      0,
      1,
      4
    ],
    "explanation": "Docs/typos/tests de bajo impacto pueden automatizarse mas; secrets, prod y workflows son sensibles.",
    "source": "Risk-based autonomy"
  },
  {
    "id": "Q009",
    "domain": "Arquitectura y SDLC",
    "type": "single",
    "prompt": "Si el agente no conoce dependencias del repo, que deberia hacer primero?",
    "options": [
      "Inferir y editar",
      "Leer contexto actual y construir plan",
      "Crear release",
      "Borrar caches"
    ],
    "correct": [
      1
    ],
    "explanation": "Primero debe reunir contexto actual, no actuar con supuestos.",
    "source": "Agent lifecycle"
  },
  {
    "id": "Q010",
    "domain": "Arquitectura y SDLC",
    "type": "single",
    "prompt": "Que output es mas durable para revisar trabajo agentico?",
    "options": [
      "Mensaje de chat sin enlaces",
      "PR con branch, diff, checks y comentarios",
      "Captura de pantalla aislada",
      "Respuesta oral"
    ],
    "correct": [
      1
    ],
    "explanation": "Un PR conserva artefactos, diff, revision y checks dentro del sistema de registro.",
    "source": "GitHub control plane"
  },
  {
    "id": "Q011",
    "domain": "Herramientas y entorno",
    "type": "single",
    "prompt": "Un MCP server nuevo permite crear issues, modificar PRs y leer secretos. Que accion previa es correcta?",
    "options": [
      "Permitirlo porque es oficial",
      "Clasificar herramientas, scopes, auth y approval gates antes de habilitarlo",
      "Usarlo solo si el agente promete cuidado",
      "Activarlo en todos los repos"
    ],
    "correct": [
      1
    ],
    "explanation": "MCP expone acciones. Debe gobernarse con scopes, allow list, owner, riesgos y aprobaciones.",
    "source": "MCP governance"
  },
  {
    "id": "Q012",
    "domain": "Herramientas y entorno",
    "type": "multi",
    "prompt": "Que componentes hacen gobernable MCP?",
    "options": [
      "Registry",
      "Allow list",
      "Toolsets/scopes",
      "Audit logs",
      "Prompt bonito"
    ],
    "correct": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Registry, allow list, toolsets y logs son controles reales. El prompt ayuda, pero no sustituye enforcement.",
    "source": "MCP"
  },
  {
    "id": "Q013",
    "domain": "Herramientas y entorno",
    "type": "single",
    "prompt": "Que frontera evita cambios directos en main?",
    "options": [
      "Branch isolation + PR",
      "Memoria larga",
      "MCP resources",
      "Prompt de sistema"
    ],
    "correct": [
      0
    ],
    "explanation": "Branch isolation fuerza cambios en rama y conversion a PR revisable.",
    "source": "Execution boundaries"
  },
  {
    "id": "Q014",
    "domain": "Herramientas y entorno",
    "type": "single",
    "prompt": "Un workflow se dispara por schedule y pull_request, pero asume github.event.pull_request. Que falta?",
    "options": [
      "Mas secrets",
      "Event-aware gating con if conditions",
      "Borrar workflow_dispatch",
      "Usar chmod"
    ],
    "correct": [
      1
    ],
    "explanation": "Triggers multiples requieren condiciones que validen contexto antes de ejecutar logica especifica de PR.",
    "source": "Reliable workflows"
  },
  {
    "id": "Q015",
    "domain": "Herramientas y entorno",
    "type": "multi",
    "prompt": "Que acciones reducen blast radius de herramientas?",
    "options": [
      "Permisos minimos",
      "Deny tools peligrosas",
      "Scopes por repo/rama",
      "Tokens admin globales",
      "Approval antes de write"
    ],
    "correct": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Least privilege, deny lists, scopes y approvals reducen impacto. Tokens globales lo aumentan.",
    "source": "Tool permissions"
  },
  {
    "id": "Q016",
    "domain": "Herramientas y entorno",
    "type": "single",
    "prompt": "Si una tool call falla por permiso insuficiente, que root cause probable es?",
    "options": [
      "Reasoning error",
      "Permission issue",
      "Memory drift",
      "Public code match"
    ],
    "correct": [
      1
    ],
    "explanation": "El sintoma apunta a permisos/scopes, no necesariamente razonamiento.",
    "source": "Error analysis"
  },
  {
    "id": "Q017",
    "domain": "Herramientas y entorno",
    "type": "multi",
    "prompt": "Que debe incluir un registro de tool use auditable?",
    "options": [
      "Herramienta invocada",
      "Input relevante no secreto",
      "Resultado/estado",
      "Decision posterior",
      "Token secreto completo"
    ],
    "correct": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Se registra lo necesario para auditoria sin exponer secretos.",
    "source": "Observability"
  },
  {
    "id": "Q018",
    "domain": "Herramientas y entorno",
    "type": "single",
    "prompt": "Remote MCP frente a local MCP: cual es la diferencia operativa clave?",
    "options": [
      "Remote reduce setup local; local puede acceder a recursos locales",
      "Local siempre es mas seguro",
      "Remote no necesita governance",
      "No hay diferencia"
    ],
    "correct": [
      0
    ],
    "explanation": "Remote simplifica despliegue; local puede tener acceso al entorno de usuario y requiere cuidado.",
    "source": "MCP server concepts"
  },
  {
    "id": "Q019",
    "domain": "Herramientas y entorno",
    "type": "single",
    "prompt": "Que deberia hacer un agente tras dos retries fallidos por la misma causa?",
    "options": [
      "Retry infinito",
      "Escalar con resumen de intentos y evidencias",
      "Ignorar error",
      "Mergear parcial"
    ],
    "correct": [
      1
    ],
    "explanation": "Retries deben tener limite. Fallos repetidos requieren escalado o cambio de estrategia.",
    "source": "Execution limits"
  },
  {
    "id": "Q020",
    "domain": "Herramientas y entorno",
    "type": "multi",
    "prompt": "Que elementos son boundaries de ejecucion en GitHub?",
    "options": [
      "Repo scope",
      "Branch scope",
      "Workflow permissions",
      "Environment approvals",
      "Color del badge"
    ],
    "correct": [
      0,
      1,
      2,
      3
    ],
    "explanation": "El alcance operativo real lo dan repos, branches, permisos y environments.",
    "source": "Execution context"
  },
  {
    "id": "Q021",
    "domain": "Memoria y estado",
    "type": "single",
    "prompt": "Un agente usa una decision antigua que ya no coincide con main. Como se llama el riesgo?",
    "options": [
      "Context drift",
      "CODEOWNERS",
      "Safe output",
      "SARIF"
    ],
    "correct": [
      0
    ],
    "explanation": "Context drift ocurre cuando el agente actua con informacion obsoleta o contradictoria.",
    "source": "Memory/state"
  },
  {
    "id": "Q022",
    "domain": "Memoria y estado",
    "type": "multi",
    "prompt": "Que campos hacen verificable una memoria reutilizable?",
    "options": [
      "Origen",
      "Fecha/TTL",
      "Scope",
      "Ultima validacion",
      "Secreto en claro"
    ],
    "correct": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Memoria confiable necesita origen, fecha, scope y validacion. No debe guardar secretos.",
    "source": "Copilot Memory"
  },
  {
    "id": "Q023",
    "domain": "Memoria y estado",
    "type": "single",
    "prompt": "Que senal deberia pesar mas que una preferencia guardada en memoria?",
    "options": [
      "Estado actual del repo y checks",
      "La primera respuesta del agente",
      "Un prompt viejo",
      "Una suposicion"
    ],
    "correct": [
      0
    ],
    "explanation": "La memoria no debe ganar frente a artefactos actuales y verificables.",
    "source": "Repository indexing"
  },
  {
    "id": "Q024",
    "domain": "Memoria y estado",
    "type": "single",
    "prompt": "Diferencia entre memoria conversacional y estado durable?",
    "options": [
      "No hay diferencia",
      "La memoria ayuda contexto; el estado durable registra progreso/evidencia reanudable",
      "El estado durable solo existe en chat",
      "La memoria siempre es mas fiable"
    ],
    "correct": [
      1
    ],
    "explanation": "El estado durable sirve para reanudar y auditar; la memoria contextual puede estar incompleta o stale.",
    "source": "Session data"
  },
  {
    "id": "Q025",
    "domain": "Memoria y estado",
    "type": "multi",
    "prompt": "Como reducir stale context en tareas largas?",
    "options": [
      "Readback del repo actual",
      "Revalidar branch/checks",
      "TTL de facts",
      "Ignorar cambios externos",
      "Reset/escalado si contradiccion"
    ],
    "correct": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Releer, validar y caducar informacion reduce drift. Ignorar cambios externos lo empeora.",
    "source": "State management"
  },
  {
    "id": "Q026",
    "domain": "Memoria y estado",
    "type": "single",
    "prompt": "Content exclusion sirve principalmente para...",
    "options": [
      "Controlar parte del contenido disponible como contexto",
      "Aprobar PRs",
      "Ejecutar tests",
      "Crear MCP servers"
    ],
    "correct": [
      0
    ],
    "explanation": "Content exclusion limita que contenido entra en ciertas experiencias de contexto.",
    "source": "Content exclusion"
  },
  {
    "id": "Q027",
    "domain": "Memoria y estado",
    "type": "multi",
    "prompt": "Que datos son malos candidatos para memoria persistente?",
    "options": [
      "Secrets",
      "Tokens",
      "Decisiones temporales sin TTL",
      "Preferencias generales no sensibles",
      "Datos personales innecesarios"
    ],
    "correct": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Memoria debe evitar secretos, datos sensibles y facts temporales sin expiracion.",
    "source": "Memory privacy"
  },
  {
    "id": "Q028",
    "domain": "Memoria y estado",
    "type": "single",
    "prompt": "Si el agente pierde continuidad tras una pausa, que recurso ayuda a reconstruir?",
    "options": [
      "Session data/logs",
      "Cambiar branch protection",
      "Borrar PR",
      "Desactivar checks"
    ],
    "correct": [
      0
    ],
    "explanation": "Historial de sesion y logs permiten reconstruir acciones y estado.",
    "source": "Chronicle/session"
  },
  {
    "id": "Q029",
    "domain": "Evaluacion y tuning",
    "type": "single",
    "prompt": "Un check pasa, pero no cubre la vulnerabilidad cambiada. Que conclusion es correcta?",
    "options": [
      "El cambio es seguro",
      "El check no prueba el riesgo relevante",
      "Hay que desactivar el check",
      "El agente aprueba automaticamente"
    ],
    "correct": [
      1
    ],
    "explanation": "La validacion debe corresponder al riesgo real; un check irrelevante no demuestra seguridad.",
    "source": "Evaluation"
  },
  {
    "id": "Q030",
    "domain": "Evaluacion y tuning",
    "type": "multi",
    "prompt": "Que senales ayudan a evaluar trabajo agentico?",
    "options": [
      "Status checks",
      "Review comments",
      "Code scanning",
      "Artifacts",
      "Confianza subjetiva del modelo"
    ],
    "correct": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Se necesitan senales del sistema y revision humana; la confianza subjetiva no basta.",
    "source": "Checks/API"
  },
  {
    "id": "Q031",
    "domain": "Evaluacion y tuning",
    "type": "single",
    "prompt": "Un agente hace cambios demasiado amplios de forma repetida. Que tuning es razonable?",
    "options": [
      "Aumentar permisos",
      "Definir scope, file allowlist y criterios de salida mas estrictos",
      "Quitar reviews",
      "Merge automatico"
    ],
    "correct": [
      1
    ],
    "explanation": "El problema es disciplina de scope; se corrige con constraints y gates.",
    "source": "Tuning"
  },
  {
    "id": "Q032",
    "domain": "Evaluacion y tuning",
    "type": "multi",
    "prompt": "Que root causes deberias distinguir en error analysis?",
    "options": [
      "Reasoning error",
      "Tool misuse",
      "Stale context",
      "Permission issue",
      "Environment mismatch"
    ],
    "correct": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Clasificar causa raiz evita aplicar fixes equivocados.",
    "source": "Failure taxonomy"
  },
  {
    "id": "Q033",
    "domain": "Evaluacion y tuning",
    "type": "single",
    "prompt": "Si un workflow falla porque falta una dependencia en runner, el root cause es mas probable...",
    "options": [
      "Environment mismatch",
      "Prompt injection",
      "CODEOWNERS",
      "Memory TTL"
    ],
    "correct": [
      0
    ],
    "explanation": "El fallo viene del entorno, no necesariamente del razonamiento.",
    "source": "Actions logs"
  },
  {
    "id": "Q034",
    "domain": "Evaluacion y tuning",
    "type": "single",
    "prompt": "Que es tuning controlado?",
    "options": [
      "Cambiar prompt sin medir",
      "Registrar antes/despues y ajustar constraints/tools/workflows segun evidencia",
      "Borrar logs",
      "Subir temperatura"
    ],
    "correct": [
      1
    ],
    "explanation": "Tuning debe tener baseline, cambio y verificacion posterior.",
    "source": "Tuning"
  },
  {
    "id": "Q035",
    "domain": "Evaluacion y tuning",
    "type": "multi",
    "prompt": "Que artefactos pueden conservar evidencia de evaluacion?",
    "options": [
      "Workflow artifacts",
      "SARIF",
      "Check runs",
      "PR comments",
      "Mensajes efimeros sin copia"
    ],
    "correct": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Artifacts, SARIF, checks y comments quedan disponibles para auditoria.",
    "source": "Artifacts/SARIF"
  },
  {
    "id": "Q036",
    "domain": "Evaluacion y tuning",
    "type": "single",
    "prompt": "Un retry arregla un fallo flaky una vez. Que deberias hacer?",
    "options": [
      "Ignorar para siempre",
      "Registrar flakiness y evitar asumir que el sistema es estable",
      "Borrar test",
      "Merge sin notas"
    ],
    "correct": [
      1
    ],
    "explanation": "Los flakes deben registrarse; un rerun verde no elimina el riesgo.",
    "source": "Reruns"
  },
  {
    "id": "Q037",
    "domain": "Multiagente",
    "type": "single",
    "prompt": "Dos agentes editan el mismo archivo sin coordinacion. Riesgo principal?",
    "options": [
      "Conflictos y trabajo duplicado",
      "Mas seguridad",
      "Mejor CODEOWNERS",
      "Menor drift siempre"
    ],
    "correct": [
      0
    ],
    "explanation": "La paralelizacion necesita write scopes y ownership claros.",
    "source": "Multi-agent coordination"
  },
  {
    "id": "Q038",
    "domain": "Multiagente",
    "type": "multi",
    "prompt": "Que debe definir un handoff entre agentes?",
    "options": [
      "Output esperado",
      "Evidencia producida",
      "Responsable siguiente",
      "Condiciones de fallo",
      "Permiso global irrestricto"
    ],
    "correct": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Un handoff necesita contrato y criterios; permisos irrestrictos aumentan riesgo.",
    "source": "Sub-agent orchestration"
  },
  {
    "id": "Q039",
    "domain": "Multiagente",
    "type": "single",
    "prompt": "Cuando usar fallback en vez de retry?",
    "options": [
      "Cuando la misma causa persiste y existe estrategia alternativa",
      "Siempre tras primer fallo",
      "Nunca",
      "Solo si main esta protegido"
    ],
    "correct": [
      0
    ],
    "explanation": "Fallback aplica cuando retry no cambia condiciones y hay ruta alternativa.",
    "source": "Retry/fallback"
  },
  {
    "id": "Q040",
    "domain": "Multiagente",
    "type": "multi",
    "prompt": "Que ayuda a observar sistemas multiagente?",
    "options": [
      "Streaming events",
      "OpenTelemetry",
      "Logs de tool calls",
      "Handoffs registrados",
      "Ocultar subagentes"
    ],
    "correct": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Observabilidad multiagente requiere eventos, trazas, tool calls y handoffs.",
    "source": "Observability"
  },
  {
    "id": "Q041",
    "domain": "Multiagente",
    "type": "single",
    "prompt": "Un primary agent delega sin especificar archivos permitidos. Que falta?",
    "options": [
      "Write scope",
      "Exam sandbox",
      "XP badge",
      "Content exclusion"
    ],
    "correct": [
      0
    ],
    "explanation": "Sin write scope hay riesgo de conflicto y cambios fuera de alcance.",
    "source": "Delegation"
  },
  {
    "id": "Q042",
    "domain": "Multiagente",
    "type": "single",
    "prompt": "Persistir sesion indefinidamente puede causar...",
    "options": [
      "Consolidacion de contexto obsoleto",
      "Branch protection mas fuerte",
      "Menor necesidad de checks",
      "Automatic merge seguro"
    ],
    "correct": [
      0
    ],
    "explanation": "Persistencia sin invalidacion perpetua errores y stale context.",
    "source": "Session persistence"
  },
  {
    "id": "Q043",
    "domain": "Multiagente",
    "type": "multi",
    "prompt": "Que roles separarias en un flujo complejo?",
    "options": [
      "Planner",
      "Executor",
      "Reviewer/validator",
      "Recovery/escalation",
      "Agente que aprueba su propio PR"
    ],
    "correct": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Separar roles mejora control. El agente no deberia aprobar su propio trabajo.",
    "source": "Multi-agent roles"
  },
  {
    "id": "Q044",
    "domain": "Multiagente",
    "type": "single",
    "prompt": "Que es mejor para dos subagentes paralelos?",
    "options": [
      "Mismo branch y mismos archivos",
      "Branches/scopes disjuntos con merge/review posterior",
      "Permiso admin para ambos",
      "Sin logs"
    ],
    "correct": [
      1
    ],
    "explanation": "Scopes disjuntos reducen conflictos y facilitan integracion.",
    "source": "Concurrency"
  },
  {
    "id": "Q045",
    "domain": "Guardrails",
    "type": "single",
    "prompt": "Que accion exige human-in-the-loop casi siempre?",
    "options": [
      "Cambiar docs",
      "Rotar secreto o desplegar prod",
      "Corregir typo",
      "Leer README"
    ],
    "correct": [
      1
    ],
    "explanation": "Secrets y produccion son cambios sensibles con impacto material.",
    "source": "Guardrails"
  },
  {
    "id": "Q046",
    "domain": "Guardrails",
    "type": "multi",
    "prompt": "Que controles protegen .github/workflows?",
    "options": [
      "CODEOWNERS",
      "Required reviews",
      "Rulesets/branch protection",
      "Checks",
      "Permitir push directo de agentes"
    ],
    "correct": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Workflows son sensibles y deben protegerse con owners, reviews, rules y checks.",
    "source": "Build guardrails"
  },
  {
    "id": "Q047",
    "domain": "Guardrails",
    "type": "single",
    "prompt": "Least privilege en GITHUB_TOKEN implica...",
    "options": [
      "Dar write-all por comodidad",
      "Permisos minimos y elevar solo donde haga falta",
      "Usar token personal en logs",
      "Desactivar permissions"
    ],
    "correct": [
      1
    ],
    "explanation": "Minimizar permisos reduce blast radius.",
    "source": "GITHUB_TOKEN"
  },
  {
    "id": "Q048",
    "domain": "Guardrails",
    "type": "multi",
    "prompt": "Que medidas reducen riesgo de prompt injection en issues/comments?",
    "options": [
      "Scope limitado",
      "Review humana",
      "Logs/evidencia",
      "Firewall/tool restrictions",
      "Dar instrucciones al agente para obedecer cualquier comentario"
    ],
    "correct": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Comentarios pueden contener instrucciones hostiles; hay que limitar, revisar y registrar.",
    "source": "Responsible use"
  },
  {
    "id": "Q049",
    "domain": "Guardrails",
    "type": "single",
    "prompt": "El agente quiere mergear su propio PR. Que deberia pasar?",
    "options": [
      "Permitido si esta seguro",
      "Bloqueado por policy/review externa",
      "Solo si es docs",
      "Siempre automatico"
    ],
    "correct": [
      1
    ],
    "explanation": "Accountability exige aprobacion externa o policy gate, no autoaprobacion.",
    "source": "Accountability"
  },
  {
    "id": "Q050",
    "domain": "Guardrails",
    "type": "multi",
    "prompt": "Que incluiria una autonomy matrix?",
    "options": [
      "Accion",
      "Riesgo",
      "Permiso",
      "Approval",
      "Rollback/evidence"
    ],
    "correct": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "La matriz conecta accion con riesgo, permiso, aprobacion y recuperacion.",
    "source": "Autonomy levels"
  },
  {
    "id": "Q051",
    "domain": "Guardrails",
    "type": "single",
    "prompt": "Safe outputs en Agentic Workflows separan...",
    "options": [
      "Propuesta del agente y job con permisos de escritura",
      "Main y README",
      "MCP y memoria",
      "Code scanning y SARIF"
    ],
    "correct": [
      0
    ],
    "explanation": "El agente produce output seguro; otro job controlado aplica cambios si cumplen reglas.",
    "source": "Agentic Workflows"
  },
  {
    "id": "Q052",
    "domain": "Guardrails",
    "type": "single",
    "prompt": "Una allowlist amplia para todos los MCP servers es...",
    "options": [
      "Gobernanza fuerte",
      "Riesgo alto salvo justificacion y controles",
      "Obligatoria para aprobar",
      "Igual que registry-only"
    ],
    "correct": [
      1
    ],
    "explanation": "Allow all aumenta superficie; registry/allowlist controlada es mas segura.",
    "source": "MCP allow lists"
  },
  {
    "id": "Q053",
    "domain": "GitHub Governance",
    "type": "single",
    "prompt": "CODEOWNERS se vuelve control efectivo cuando...",
    "options": [
      "Existe archivo solamente",
      "Se combina con required review de owners",
      "Lo lee el agente",
      "Esta en README"
    ],
    "correct": [
      1
    ],
    "explanation": "CODEOWNERS por si solo enruta; para bloquear merge necesita required review/branch rules.",
    "source": "CODEOWNERS"
  },
  {
    "id": "Q054",
    "domain": "GitHub Governance",
    "type": "multi",
    "prompt": "Que pueden exigir rulesets?",
    "options": [
      "Pull request",
      "Required status checks",
      "Signed commits",
      "Code scanning",
      "Ignorar branch protections"
    ],
    "correct": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Rulesets son policy-as-code y pueden exigir PR, checks, firmas, scanning, etc.",
    "source": "Rulesets"
  },
  {
    "id": "Q055",
    "domain": "GitHub Governance",
    "type": "single",
    "prompt": "Environment approvals sirven principalmente para...",
    "options": [
      "Controlar despliegues y secretos de entorno",
      "Buscar texto",
      "Crear issues",
      "Indexar repos"
    ],
    "correct": [
      0
    ],
    "explanation": "Environments protegen deploys, reviewers y secrets por entorno.",
    "source": "Environments"
  },
  {
    "id": "Q056",
    "domain": "GitHub Governance",
    "type": "multi",
    "prompt": "Que pertenece a GitHub Actions evidence?",
    "options": [
      "Logs",
      "Artifacts",
      "Conclusion de jobs",
      "Workflow run id",
      "Color del logo"
    ],
    "correct": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Runs, logs, artifacts y conclusiones permiten auditoria.",
    "source": "Actions"
  },
  {
    "id": "Q057",
    "domain": "GitHub Governance",
    "type": "single",
    "prompt": "Usar logs como transporte estructurado entre jobs es inferior a...",
    "options": [
      "Outputs/artifacts",
      "Comentarios sin formato",
      "Memoria del agente",
      "Capturas"
    ],
    "correct": [
      0
    ],
    "explanation": "Outputs y artifacts son contratos mas fiables que parsear logs.",
    "source": "Workflow outputs"
  },
  {
    "id": "Q058",
    "domain": "GitHub Governance",
    "type": "single",
    "prompt": "Un required check queda pending porque el workflow no se ejecuto en esa rama. Que revisar?",
    "options": [
      "Triggers/branch filters y nombre exacto del check",
      "README",
      "Color de badge",
      "MCP roots"
    ],
    "correct": [
      0
    ],
    "explanation": "Required checks dependen de nombres, triggers y condiciones correctas.",
    "source": "Required checks"
  },
  {
    "id": "Q059",
    "domain": "GitHub Governance",
    "type": "multi",
    "prompt": "Que secretos nunca deberian exponerse en prompts o logs?",
    "options": [
      "PAT",
      "Cloud credentials",
      "Deployment keys",
      "API tokens",
      "Nombre de branch"
    ],
    "correct": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Credenciales y tokens deben tratarse como secretos; un nombre de branch no suele ser secreto.",
    "source": "Secrets"
  },
  {
    "id": "Q060",
    "domain": "GitHub Governance",
    "type": "single",
    "prompt": "Workflow artifacts son utiles porque...",
    "options": [
      "Persisten evidencias descargables del run",
      "Aprueban PRs automaticamente",
      "Sustituyen tests",
      "Dan permisos write"
    ],
    "correct": [
      0
    ],
    "explanation": "Artifacts conservan reportes/resultados mas alla del scrollback.",
    "source": "Artifacts"
  },
  {
    "id": "Q061",
    "domain": "Copilot Agents",
    "type": "single",
    "prompt": "Cloud agent frente a IDE agent mode: diferencia clave?",
    "options": [
      "Cloud corre en GitHub Actions; IDE agent mode en entorno local",
      "Son identicos",
      "IDE siempre crea PR",
      "Cloud no usa PR"
    ],
    "correct": [
      0
    ],
    "explanation": "El entorno de ejecucion y el workflow son distintos.",
    "source": "Cloud agent"
  },
  {
    "id": "Q062",
    "domain": "Copilot Agents",
    "type": "multi",
    "prompt": "Custom agents pueden definirse mediante...",
    "options": [
      ".agent.md",
      "applyTo",
      "tools",
      "skills/hooks",
      "Permisos admin automaticos"
    ],
    "correct": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Custom agents se especializan con archivo, scope, herramientas, skills y hooks; no dan admin automatico.",
    "source": "Custom agents"
  },
  {
    "id": "Q063",
    "domain": "Copilot Agents",
    "type": "single",
    "prompt": "Que controla mejor acciones peligrosas en CLI?",
    "options": [
      "Deny/allow tools",
      "Pedir por favor",
      "Cambiar titulo",
      "Usar mas contexto"
    ],
    "correct": [
      0
    ],
    "explanation": "Allowed/denied tools es enforcement mas fuerte que una instruccion blanda.",
    "source": "Copilot CLI"
  },
  {
    "id": "Q064",
    "domain": "Copilot Agents",
    "type": "multi",
    "prompt": "Que deberias probar antes de liberar un custom agent?",
    "options": [
      "Scope",
      "Tools",
      "Hooks",
      "Logs/resultados",
      "Que puede saltar reviews"
    ],
    "correct": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Testing debe revisar alcance, herramientas, hooks y outputs.",
    "source": "Test custom agents"
  },
  {
    "id": "Q065",
    "domain": "Copilot Agents",
    "type": "single",
    "prompt": "Firewall del cloud agent reduce riesgo de...",
    "options": [
      "Acceso externo/exfiltracion no deseada",
      "Branch conflict",
      "Falta de README",
      "Unit count"
    ],
    "correct": [
      0
    ],
    "explanation": "El firewall limita red externa y reduce superficie de exfiltracion.",
    "source": "Agent firewall"
  },
  {
    "id": "Q066",
    "domain": "Copilot Agents",
    "type": "single",
    "prompt": "Rollback natural antes de merge es...",
    "options": [
      "Cerrar o descartar PR/branch",
      "Revert commit de main",
      "Desactivar repo",
      "Eliminar logs"
    ],
    "correct": [
      0
    ],
    "explanation": "Antes de merge el cambio esta aislado; cerrar PR o borrar rama suele bastar.",
    "source": "Rollback"
  },
  {
    "id": "Q067",
    "domain": "Copilot Agents",
    "type": "single",
    "prompt": "Rollback despues de merge suele ser...",
    "options": [
      "Revert commit/PR",
      "Cerrar issue",
      "Ignorar",
      "Cambiar prompt"
    ],
    "correct": [
      0
    ],
    "explanation": "Una vez mergeado, se revierte el commit/PR o se aplica fix forward segun politica.",
    "source": "Rollback"
  },
  {
    "id": "Q068",
    "domain": "Copilot Agents",
    "type": "multi",
    "prompt": "Agentic Workflows son especialmente utiles para...",
    "options": [
      "Tareas programadas",
      "Reportes/triage",
      "Safe outputs",
      "CI failure analysis",
      "Cambios secretos sin review"
    ],
    "correct": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Son buenos para continuous AI acotado; secretos sin review no son apropiados.",
    "source": "Agentic Workflows"
  }
];

const state = {
  route: localStorage.getItem("gh600.route") || "Aprobar + AgentOS",
  activeTab: localStorage.getItem("gh600.tab") || "lecciones",
  selectedLesson: localStorage.getItem("gh600.lesson") || "mapa",
  query: "",
  track: "Todas",
  done: JSON.parse(localStorage.getItem("gh600.done") || "{}"),
  sourceDone: JSON.parse(localStorage.getItem("gh600.sourceDone") || "{}"),
  notes: JSON.parse(localStorage.getItem("gh600.notes") || "{}"),
  examDomain: localStorage.getItem("gh600.examDomain") || "Todas",
  examIndex: Number(localStorage.getItem("gh600.examIndex") || "0"),
  examStats: JSON.parse(localStorage.getItem("gh600.examStats") || "{}"),
  examAnswer: [],
  examSubmitted: false
};

function save() {
  localStorage.setItem("gh600.route", state.route);
  localStorage.setItem("gh600.tab", state.activeTab);
  localStorage.setItem("gh600.lesson", state.selectedLesson);
  localStorage.setItem("gh600.done", JSON.stringify(state.done));
  localStorage.setItem("gh600.sourceDone", JSON.stringify(state.sourceDone));
  localStorage.setItem("gh600.notes", JSON.stringify(state.notes));
  localStorage.setItem("gh600.examDomain", state.examDomain);
  localStorage.setItem("gh600.examIndex", String(state.examIndex));
  localStorage.setItem("gh600.examStats", JSON.stringify(state.examStats));
}

function esc(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function routeLessons() {
  const ids = ROUTES[state.route] || ROUTES["Aprobar + AgentOS"];
  return LESSONS.filter((lesson) => ids.includes(lesson.id));
}

function filteredLessons() {
  const q = state.query.trim().toLowerCase();
  return routeLessons().filter((lesson) => {
    const trackOk = state.track === "Todas" || lesson.track === state.track;
    const haystack = [
      lesson.title,
      lesson.phase,
      lesson.track,
      lesson.summary,
      lesson.study.join(" "),
      lesson.traps.join(" "),
      lesson.agentosUse,
      lesson.artifact
    ].join(" ").toLowerCase();
    return trackOk && (!q || haystack.includes(q));
  });
}

function stats() {
  const lessons = routeLessons();
  const total = lessons.reduce((sum, item) => sum + item.hours, 0);
  const complete = lessons.filter((item) => state.done[item.id]).reduce((sum, item) => sum + item.hours, 0);
  return {
    total,
    complete,
    remaining: Math.max(0, total - complete),
    percent: total ? Math.round((complete / total) * 100) : 0,
    blocks: lessons.length,
    doneBlocks: lessons.filter((item) => state.done[item.id]).length
  };
}

function sourceById(id) {
  const source = SOURCES[id];
  if (!source) return null;
  const url = source[3];
  const official = url.includes("learn.microsoft.com/en-us/training/modules/");
  return { id, title: source[0], track: source[1], extract: source[2], url, minutes: SOURCE_TIME_MINUTES[id] || 15, official };
}

function allSources() {
  return Object.keys(SOURCES).map(sourceById);
}

function examDomains() {
  return ["Todas", "Fallos", ...Array.from(new Set(QUESTION_BANK.map((question) => question.domain)))];
}

function examQuestions() {
  let questions = QUESTION_BANK;
  if (state.examDomain === "Fallos") {
    questions = questions.filter((question) => {
      const stat = state.examStats[question.id];
      return stat && stat.wrong > 0 && !stat.lastCorrect;
    });
    if (!questions.length) questions = QUESTION_BANK;
  } else if (state.examDomain !== "Todas") {
    questions = questions.filter((question) => question.domain === state.examDomain);
  }
  return questions;
}

function isAnswerCorrect(question, answer) {
  const expected = [...question.correct].sort((a, b) => a - b).join(",");
  const actual = [...answer].sort((a, b) => a - b).join(",");
  return expected === actual;
}

function sourceProgress(ids) {
  const total = ids.length;
  const read = ids.filter((id) => state.sourceDone[id]).length;
  return { read, total };
}

function sourceRows(ids) {
  return ids.map(sourceById).filter(Boolean).map((source) => `
    <div class="source-row ${state.sourceDone[source.id] ? "source-read" : ""}">
      <div>
        <a href="${esc(source.url)}" target="_blank" rel="noreferrer">${esc(source.title)}</a>
        <p>${esc(source.extract)}</p>
        <div class="url">${esc(source.url)}</div>
      </div>
      <div class="source-actions">
        <button class="source-read-toggle" data-source-read="${source.id}" aria-pressed="${state.sourceDone[source.id] ? "true" : "false"}">
          <span class="check-dot">${state.sourceDone[source.id] ? "✓" : ""}</span>
          ${state.sourceDone[source.id] ? "Leida" : "Marcar leida"}
        </button>
        <span class="time-badge ${source.official ? "official" : ""}" title="${source.official ? "Tiempo oficial publicado por Microsoft Learn" : "Estimacion de lectura calmada con margen x1,5"}">${source.minutes} min · ${source.official ? "oficial" : "estimado"}</span>
        <button class="btn copy" data-copy="${esc(source.url)}">Copiar URL</button>
      </div>
    </div>
  `).join("");
}

function pills(lesson) {
  const trackClass = lesson.track === "Mejorar nota" ? "extra" : "core";
  return `
    <span class="pill ${trackClass}">${esc(lesson.track)}</span>
    <span class="pill">${esc(lesson.phase)}</span>
    <span class="pill">Examen ${lesson.exam}/5</span>
    <span class="pill agentos">AgentOS ${lesson.agentos}/5</span>
    <span class="pill">${lesson.hours} h</span>
  `;
}

function renderSidebar() {
  const st = stats();
  const items = filteredLessons().map((lesson) => `
    <button class="nav-item ${state.selectedLesson === lesson.id ? "active" : ""} ${state.done[lesson.id] ? "done" : ""}" data-select="${lesson.id}">
      <span class="check-dot">${state.done[lesson.id] ? "✓" : ""}</span>
      <span>
        <span class="nav-title">${esc(lesson.title)}</span>
        <span class="nav-sub">${esc(lesson.phase)} · ${lesson.hours} h</span>
      </span>
      <span class="pill ${lesson.track === "Mejorar nota" ? "extra" : "core"}">${lesson.track === "Mejorar nota" ? "Extra" : "Core"}</span>
    </button>
  `).join("");

  return `
    <aside class="sidebar">
      <section class="brand">
        <span class="eyebrow">GH-600 Study OS</span>
        <h1>Offline</h1>
        <p>Material propio, sintetizado desde fuentes oficiales exploradas el 2026-05-17. No necesitas internet para estudiar el contenido de esta app.</p>
      </section>

      <section class="route-picker">
        <label for="route">Ruta</label>
        <select id="route">
          ${Object.keys(ROUTES).map((route) => `<option ${route === state.route ? "selected" : ""}>${esc(route)}</option>`).join("")}
        </select>
      </section>

      <section class="filters">
        <label class="field-label" for="search">Buscar</label>
        <input id="search" value="${esc(state.query)}" placeholder="MCP, rollback, CODEOWNERS..." />
        <label class="field-label" for="trackFilter" style="margin-top:10px">Filtro</label>
        <select id="trackFilter">
          ${["Todas", "Core examen", "Mejorar nota"].map((track) => `<option ${track === state.track ? "selected" : ""}>${esc(track)}</option>`).join("")}
        </select>
      </section>

      <section class="metrics">
        <div class="metric"><strong>${st.percent}%</strong><span>Progreso</span></div>
        <div class="metric"><strong>${st.remaining.toFixed(1)}h</strong><span>Restante</span></div>
        <div class="metric"><strong>${st.doneBlocks}/${st.blocks}</strong><span>Bloques</span></div>
        <div class="metric"><strong>${allSources().length}</strong><span>Fuentes</span></div>
      </section>

      <section class="progress-wrap">
        <div class="progress-meta"><span>${st.complete.toFixed(1)}h hechas</span><span>${st.total.toFixed(1)}h total</span></div>
        <div class="progress"><span style="width:${st.percent}%"></span></div>
      </section>

      <section class="next-card">
        <span class="eyebrow">Guardado local activo</span>
        <p>Progreso, fuentes leidas, ruta, bloque activo, notas y checklist se guardan automaticamente en este navegador con localStorage.</p>
      </section>

      <nav class="nav-list">${items || "<p>No hay bloques con ese filtro.</p>"}</nav>
    </aside>
  `;
}

function renderHero() {
  return `
    <section class="hero">
      <span class="eyebrow">Aplicacion navegable · contenido offline · fuentes verificadas</span>
      <h2>Preparacion GH-600 orientada a aprobar y a mejorar AgentOS.</h2>
      <p>La app separa el minimo de examen de los extras para mejorar nota. Todas las notas son estudio propio basado en fuentes oficiales Microsoft Learn, GitHub Docs, MCP y GitHub Agentic Workflows. Se evitan copias largas literales: lo que ves aqui es sintesis operativa para memorizar, practicar y convertir en arquitectura.</p>
    </section>
  `;
}

function renderLesson() {
  const lesson = LESSONS.find((item) => item.id === state.selectedLesson) || filteredLessons()[0] || LESSONS[0];
  if (lesson.id !== state.selectedLesson) {
    state.selectedLesson = lesson.id;
    save();
  }
  const sourceStats = sourceProgress(lesson.sources);
  return `
    ${renderHero()}
    <article class="lesson-card">
      <div class="lesson-header">
        <div class="lesson-title">
          <div>${pills(lesson)}</div>
          <h2>${esc(lesson.title)}</h2>
          <p>${esc(lesson.summary)}</p>
        </div>
        <button class="btn primary complete-btn" data-done="${lesson.id}">${state.done[lesson.id] ? "Marcar pendiente" : "Completar bloque"}</button>
      </div>

      <div class="detail-grid">
        <section class="card callout">
          <h4>Contenido offline extraido y sintetizado</h4>
          <ul>${lesson.study.map((item) => `<li>${esc(item)}</li>`).join("")}</ul>
        </section>
        <section class="card danger">
          <h4>Trampas de examen</h4>
          <ul>${lesson.traps.map((item) => `<li>${esc(item)}</li>`).join("")}</ul>
        </section>
      </div>

      <div class="practice">
        <section class="card">
          <h4>Uso en AgentOS</h4>
          <p>${esc(lesson.agentosUse)}</p>
          <p><strong>Artefacto:</strong> <code>${esc(lesson.artifact)}</code></p>
        </section>
        <section class="card question">
          <h4>Preguntas tipo escenario</h4>
          <ul>${lesson.questions.map((item) => `<li>${esc(item)}</li>`).join("")}</ul>
        </section>
      </div>

      <section class="card" style="margin-top:14px">
        <h4>Notas personales</h4>
        <textarea id="lessonNotes" data-note="${lesson.id}" placeholder="Escribe aqui dudas, mnemotecnia o conexiones con AgentOS...">${esc(state.notes[lesson.id] || "")}</textarea>
      </section>

      <section style="margin-top:18px">
        <div class="section-head">
          <h3>Fuentes usadas en este bloque</h3>
          <span class="pill agentos">${sourceStats.read}/${sourceStats.total} leidas</span>
        </div>
        <div class="source-list">${sourceRows(lesson.sources)}</div>
      </section>
    </article>
  `;
}

function renderSources() {
  const q = state.query.trim().toLowerCase();
  const sources = allSources().filter((source) => {
    const trackOk = state.track === "Todas" || source.track === state.track;
    const haystack = `${source.title} ${source.track} ${source.extract} ${source.url}`.toLowerCase();
    return trackOk && (!q || haystack.includes(q));
  });
  return `
    ${renderHero()}
    <section class="panel" style="margin-top:18px">
      <h3>Biblioteca de fuentes exploradas</h3>
      <p>Estas son las URLs que han sido abiertas o verificadas durante la investigacion. Las fuentes ` +
      `marcadas como Mejorar nota son utiles para subir nivel, pero no deben desplazar el core del study guide.</p>
      <div class="source-grid">
        ${sources.map((source) => `
          <article class="source-card ${state.sourceDone[source.id] ? "source-read" : ""}">
            <span class="pill ${source.track === "Mejorar nota" ? "extra" : "core"}">${esc(source.track)}</span>
            <span class="time-badge ${source.official ? "official" : ""}" title="${source.official ? "Tiempo oficial publicado por Microsoft Learn" : "Estimacion de lectura calmada con margen x1,5"}">${source.minutes} min · ${source.official ? "oficial" : "estimado"}</span>
            <h3 style="margin-top:10px">${esc(source.title)}</h3>
            <p>${esc(source.extract)}</p>
            <div class="url">${esc(source.url)}</div>
            <button class="source-read-toggle" data-source-read="${source.id}" aria-pressed="${state.sourceDone[source.id] ? "true" : "false"}" style="margin-top:10px">
              <span class="check-dot">${state.sourceDone[source.id] ? "✓" : ""}</span>
              ${state.sourceDone[source.id] ? "Leida" : "Marcar leida"}
            </button>
            <button class="btn copy" data-copy="${esc(source.url)}" style="margin-top:10px">Copiar URL</button>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderDiagrams() {
  return `
    ${renderHero()}
    <section class="diagram-grid" style="margin-top:18px">
      ${DIAGRAMS.map((diagram) => `
        <article class="diagram-card">
          <h3>${esc(diagram.title)}</h3>
          <p>${esc(diagram.text)}</p>
          <div class="flow">
            ${diagram.nodes.map((row, rowIndex) => `
              <div class="flow-row">
                ${row.map((node, index) => {
                  const cls = rowIndex === 1 && index === row.length - 1 ? "warn" : rowIndex === 1 && node === "Blocked" ? "bad" : index === row.length - 1 ? "good" : "";
                  return `<div class="flow-node ${cls}">${esc(node)}</div>`;
                }).join("")}
              </div>
            `).join("")}
          </div>
        </article>
      `).join("")}
    </section>
  `;
}

function renderChecklist() {
  return `
    ${renderHero()}
    <section class="panel" style="margin-top:18px">
      <h3>Checklist final antes del examen</h3>
      <p>Cuando puedas responder cada punto sin mirar la app, estas en zona razonable de aprobado. Los puntos extra ayudan a nota alta y a AgentOS.</p>
      <div class="checklist">
        ${CHECKLIST.map((item, index) => `
          <label class="card">
            <input type="checkbox" data-check-final="${index}" ${localStorage.getItem(`gh600.final.${index}`) === "1" ? "checked" : ""} style="width:auto;height:auto;margin-right:8px" />
            ${esc(item)}
          </label>
        `).join("")}
      </div>
    </section>
  `;
}

function renderExam() {
  const questions = examQuestions();
  const index = questions.length ? state.examIndex % questions.length : 0;
  const question = questions[index];
  const answered = Object.values(state.examStats).filter((stat) => stat.attempts > 0).length;
  const correctTotal = Object.values(state.examStats).filter((stat) => stat.lastCorrect).length;
  const isSubmitted = state.examSubmitted && question;
  const correct = question ? isAnswerCorrect(question, state.examAnswer) : false;

  if (!question) {
    return `
      ${renderHero()}
      <section class="panel" style="margin-top:18px">
        <h3>Examenes</h3>
        <p>No hay preguntas disponibles para este filtro.</p>
      </section>
    `;
  }

  return `
    ${renderHero()}
    <section class="exam-shell">
      <div class="exam-toolbar">
        <div>
          <span class="eyebrow">Simulador funcional</span>
          <h3>Pregunta ${index + 1} de ${questions.length}</h3>
          <p>Tipo: ${question.type === "multi" ? "varias respuestas" : "respuesta unica"} · Dominio: ${esc(question.domain)} · Fuente: ${esc(question.source || "material sintetizado")}</p>
        </div>
        <div class="exam-controls">
          <select id="examDomain">
            ${examDomains().map((domain) => `<option ${domain === state.examDomain ? "selected" : ""}>${esc(domain)}</option>`).join("")}
          </select>
          <button class="btn" id="resetExam">Reset examenes</button>
        </div>
      </div>

      <div class="metrics exam-metrics">
        <div class="metric"><strong>${QUESTION_BANK.length}</strong><span>Preguntas</span></div>
        <div class="metric"><strong>${answered}</strong><span>Intentadas</span></div>
        <div class="metric"><strong>${correctTotal}</strong><span>Ult. correctas</span></div>
        <div class="metric"><strong>${examDomains().length - 2}</strong><span>Dominios</span></div>
      </div>

      <article class="exam-card">
        <div class="exam-question">${esc(question.prompt)}</div>
        <div class="option-list">
          ${question.options.map((option, optionIndex) => {
            const selected = state.examAnswer.includes(optionIndex);
            const shouldBe = question.correct.includes(optionIndex);
            const stateClass = isSubmitted
              ? shouldBe
                ? "correct"
                : selected
                  ? "incorrect"
                  : ""
              : selected
                ? "selected"
                : "";
            return `
              <label class="option-card ${stateClass}">
                <input
                  type="${question.type === "multi" ? "checkbox" : "radio"}"
                  name="exam-answer"
                  data-exam-answer="${optionIndex}"
                  ${selected ? "checked" : ""}
                  ${isSubmitted ? "disabled" : ""}
                />
                <span>${esc(option)}</span>
              </label>
            `;
          }).join("")}
        </div>

        ${isSubmitted ? `
          <section class="answer-panel ${correct ? "answer-ok" : "answer-bad"}">
            <h4>${correct ? "Correcto" : "Incorrecto"}</h4>
            <p>${esc(question.explanation)}</p>
            ${!correct ? `<p><strong>Respuesta correcta:</strong> ${question.correct.map((i) => esc(question.options[i])).join(" · ")}</p>` : ""}
          </section>
        ` : `
          <p class="exam-hint">${question.type === "multi" ? "Puede haber varias respuestas correctas." : "Selecciona una respuesta."}</p>
        `}

        <div class="exam-actions">
          <button class="btn primary" id="submitExam" ${isSubmitted ? "disabled" : ""}>Corregir</button>
          <button class="btn" id="nextExam">Siguiente</button>
        </div>
      </article>
    </section>
  `;
}

function renderMain() {
  const tabs = [
    ["lecciones", "Lecciones"],
    ["fuentes", "Fuentes"],
    ["examenes", "Examenes"],
    ["diagramas", "Diagramas"],
    ["checklist", "Checklist"]
  ];
  const content = state.activeTab === "fuentes"
    ? renderSources()
    : state.activeTab === "examenes"
      ? renderExam()
    : state.activeTab === "diagramas"
      ? renderDiagrams()
      : state.activeTab === "checklist"
        ? renderChecklist()
        : renderLesson();

  return `
    <main class="main">
      <div class="topbar">
        <div class="tabs">
          ${tabs.map(([id, label]) => `<button class="tab ${state.activeTab === id ? "active" : ""}" data-tab="${id}">${label}</button>`).join("")}
        </div>
        <div class="tabs">
          <button class="btn" id="markRoute">Completar ruta</button>
          <button class="btn" id="resetProgress">Reset</button>
        </div>
      </div>
      ${content}
    </main>
  `;
}

function render() {
  document.getElementById("app").innerHTML = `<div class="shell">${renderSidebar()}${renderMain()}</div>`;
  bind();
}

function toast(message) {
  const el = document.createElement("div");
  el.className = "toast";
  el.textContent = message;
  document.body.appendChild(el);
  window.setTimeout(() => el.remove(), 1200);
}

function bind() {
  document.querySelectorAll("[data-select]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedLesson = button.dataset.select;
      state.activeTab = "lecciones";
      save();
      render();
    });
  });

  document.querySelectorAll("[data-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeTab = button.dataset.tab;
      save();
      render();
    });
  });

  document.querySelectorAll("[data-done]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.done;
      state.done[id] = !state.done[id];
      save();
      render();
    });
  });

  document.querySelectorAll("[data-copy]").forEach((button) => {
    button.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(button.dataset.copy);
        toast("URL copiada");
      } catch {
        toast("No se pudo copiar");
      }
    });
  });

  document.querySelectorAll("[data-source-read]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.sourceRead;
      state.sourceDone[id] = !state.sourceDone[id];
      save();
      render();
    });
  });

  document.querySelectorAll("[data-exam-answer]").forEach((input) => {
    input.addEventListener("change", () => {
      const value = Number(input.dataset.examAnswer);
      const questions = examQuestions();
      const question = questions[state.examIndex % questions.length];
      if (question.type === "multi") {
        if (input.checked) {
          state.examAnswer = Array.from(new Set([...state.examAnswer, value]));
        } else {
          state.examAnswer = state.examAnswer.filter((item) => item !== value);
        }
      } else {
        state.examAnswer = [value];
      }
      render();
    });
  });

  const examDomain = document.getElementById("examDomain");
  if (examDomain) {
    examDomain.addEventListener("change", () => {
      state.examDomain = examDomain.value;
      state.examIndex = 0;
      state.examAnswer = [];
      state.examSubmitted = false;
      save();
      render();
    });
  }

  const submitExam = document.getElementById("submitExam");
  if (submitExam) {
    submitExam.addEventListener("click", () => {
      const questions = examQuestions();
      const question = questions[state.examIndex % questions.length];
      if (!state.examAnswer.length) {
        toast("Selecciona una respuesta");
        return;
      }
      const correct = isAnswerCorrect(question, state.examAnswer);
      const previous = state.examStats[question.id] || { attempts: 0, correct: 0, wrong: 0, lastCorrect: false };
      state.examStats[question.id] = {
        attempts: previous.attempts + 1,
        correct: previous.correct + (correct ? 1 : 0),
        wrong: previous.wrong + (correct ? 0 : 1),
        lastCorrect: correct
      };
      state.examSubmitted = true;
      save();
      render();
    });
  }

  const nextExam = document.getElementById("nextExam");
  if (nextExam) {
    nextExam.addEventListener("click", () => {
      const questions = examQuestions();
      state.examIndex = questions.length ? (state.examIndex + 1) % questions.length : 0;
      state.examAnswer = [];
      state.examSubmitted = false;
      save();
      render();
    });
  }

  const resetExam = document.getElementById("resetExam");
  if (resetExam) {
    resetExam.addEventListener("click", () => {
      if (!confirm("Resetear resultados de examenes?")) return;
      state.examStats = {};
      state.examIndex = 0;
      state.examAnswer = [];
      state.examSubmitted = false;
      save();
      render();
    });
  }

  document.querySelectorAll("[data-check-final]").forEach((box) => {
    box.addEventListener("change", () => {
      localStorage.setItem(`gh600.final.${box.dataset.checkFinal}`, box.checked ? "1" : "0");
    });
  });

  const route = document.getElementById("route");
  if (route) {
    route.addEventListener("change", () => {
      state.route = route.value;
      const ids = ROUTES[state.route];
      if (!ids.includes(state.selectedLesson)) state.selectedLesson = ids[0];
      save();
      render();
    });
  }

  const search = document.getElementById("search");
  if (search) {
    search.addEventListener("input", () => {
      state.query = search.value;
      render();
    });
  }

  const track = document.getElementById("trackFilter");
  if (track) {
    track.addEventListener("change", () => {
      state.track = track.value;
      render();
    });
  }

  const notes = document.getElementById("lessonNotes");
  if (notes) {
    notes.addEventListener("input", () => {
      state.notes[notes.dataset.note] = notes.value;
      save();
    });
  }

  const markRoute = document.getElementById("markRoute");
  if (markRoute) {
    markRoute.addEventListener("click", () => {
      routeLessons().forEach((lesson) => {
        state.done[lesson.id] = true;
      });
      save();
      render();
    });
  }

  const resetProgress = document.getElementById("resetProgress");
  if (resetProgress) {
    resetProgress.addEventListener("click", () => {
      if (!confirm("Resetear progreso, notas y checklist local?")) return;
      Object.keys(localStorage).filter((key) => key.startsWith("gh600.")).forEach((key) => localStorage.removeItem(key));
      state.route = "Aprobar + AgentOS";
      state.activeTab = "lecciones";
      state.selectedLesson = "mapa";
      state.query = "";
      state.track = "Todas";
      state.done = {};
      state.sourceDone = {};
      state.notes = {};
      save();
      render();
    });
  }
}

render();
