const canvas = document.querySelector("#routeCanvas");
const ctx = canvas.getContext("2d");
const overlayVisualScale = 0.8;
const visualSize = (value) => value * overlayVisualScale;
const canvasFont = (size, weight = 500) => `${weight} ${size}px "PingFang SC", "Microsoft YaHei", sans-serif`;
const canvasWrap = document.querySelector("#canvasWrap");
const canvasBackdrop = document.querySelector("#canvasBackdrop");
const baseImagePreview = document.querySelector("#baseImagePreview");
const baseInput = document.querySelector("#baseInput");
const emptyState = document.querySelector("#emptyState");
const statusEl = document.querySelector("#status");
const toolTitle = document.querySelector("#toolTitle");
const toolHint = document.querySelector("#toolHint");
const projectInput = document.querySelector("#projectInput");
const saveProjectBtn = document.querySelector("#saveProject");

const baseMode = document.querySelector("#baseMode");
const scaleMode = document.querySelector("#scaleMode");
const routeMode = document.querySelector("#routeMode");
const routeDrawMode = document.querySelector("#routeDrawMode");
const editMode = document.querySelector("#editMode");
const widthMode = document.querySelector("#widthMode");
const infoMode = document.querySelector("#infoMode");
const signMode = document.querySelector("#signMode");
const personMode = document.querySelector("#personMode");
const testMode = document.querySelector("#testMode");
const optimalMode = document.querySelector("#optimalMode");
const simulateMode = document.querySelector("#simulateMode");
const simulationLogMode = document.querySelector("#simulationLogMode");
const feedbackMode = document.querySelector("#feedbackMode");
const basePanel = document.querySelector("#basePanel");
const scalePanel = document.querySelector("#scalePanel");
const routePanel = document.querySelector("#routePanel");
const widthPanel = document.querySelector("#widthPanel");
const spacePanel = document.querySelector("#spacePanel");
const signPanel = document.querySelector("#signPanel");
const personPanel = document.querySelector("#personPanel");
const testPanel = document.querySelector("#testPanel");
const optimalPanel = document.querySelector("#optimalPanel");
const simulatePanel = document.querySelector("#simulatePanel");
const simulationLogPanel = document.querySelector("#simulationLogPanel");
const feedbackPanel = document.querySelector("#feedbackPanel");
const scaleButtons = Array.from(document.querySelectorAll("[data-scale-meters]"));
const scaleInstruction = document.querySelector("#scaleInstruction");
const scaleResult = document.querySelector("#scaleResult");
const clearScaleBtn = document.querySelector("#clearScale");
const customScaleModeBtn = document.querySelector("#customScaleMode");
const quickScaleModeBtn = document.querySelector("#quickScaleMode");
const customScalePanel = document.querySelector("#customScalePanel");
const quickScalePanel = document.querySelector("#quickScalePanel");
const scaleReferenceList = document.querySelector("#scaleReferenceList");
const drawScaleReferenceBtn = document.querySelector("#drawScaleReference");
const scaleActualDistanceInput = document.querySelector("#scaleActualDistance");
const addScaleReferenceBtn = document.querySelector("#addScaleReference");
const scaleInlineEditor = document.querySelector("#scaleInlineEditor");
const widthInlineEditor = document.querySelector("#widthInlineEditor");
const widthInlineInput = document.querySelector("#widthInlineInput");
const widthInlineUnit = document.querySelector("#widthInlineUnit");
const routeTools = document.querySelector("#routeTools");
const primaryMode = document.querySelector("#primaryMode");
const secondaryMode = document.querySelector("#secondaryMode");
const finishLineBtn = document.querySelector("#finishLine");
const undoBtn = document.querySelector("#undo");
const clearBtn = document.querySelector("#clear");
const exportBtn = document.querySelector("#exportJson");
const exportBaseBtn = document.querySelector("#exportBase");
const toggleGrayscaleBtn = document.querySelector("#toggleGrayscale");
const baseOpacityInput = document.querySelector("#baseOpacity");
const baseOpacityValue = document.querySelector("#baseOpacityValue");
const widthInput = document.querySelector("#widthInput");
const widthUnit = document.querySelector("#widthUnit");
const showWidthLabelsInput = document.querySelector("#showWidthLabels");
const applyWidthBtn = document.querySelector("#applyWidth");
const confirmInterfaceBtn = document.querySelector("#confirmInterface");
const infoInput = document.querySelector("#infoInput");
const spaceNameInput = document.querySelector("#spaceName");
const spaceTypeInput = document.querySelector("#spaceType");
const spaceNumberInput = document.querySelector("#spaceNumber");
const deleteSpaceBtn = document.querySelector("#deleteSpace");
const addEquivalentSpacePointsInput = document.querySelector("#addEquivalentSpacePoints");
const showSpaceLabelsInput = document.querySelector("#showSpaceLabels");
const showSignLabelsInput = document.querySelector("#showSignLabels");
const showSignInfoLabelsInput = document.querySelector("#showSignInfoLabels");
const signPlacementModeBtn = document.querySelector("#signPlacementMode");
const signInfoModeBtn = document.querySelector("#signInfoMode");
const signPlacementFields = document.querySelector("#signPlacementFields");
const signInfoControls = document.querySelector("#signInfoControls");
const signInstallTypeInput = document.querySelector("#signInstallType");
const signHangingFacingInput = document.querySelector("#signHangingFacing");
const signHangingFacingField = document.querySelector("#signHangingFacingField");
const signImageFaceButtons = Array.from(document.querySelectorAll("[data-sign-image-face]"));
const signAssociationPanel = document.querySelector("#signAssociationPanel");
const signAssociationTitle = document.querySelector("#signAssociationTitle");
const signAssociationSubtitle = document.querySelector("#signAssociationSubtitle");
const signAssociationEmpty = document.querySelector("#signAssociationEmpty");
const signAssociationEditor = document.querySelector("#signAssociationEditor");
const signAssociationImport = document.querySelector("#signAssociationImport");
const signDirectionButtons = Array.from(document.querySelectorAll("[data-sign-action]"));
const signSpacePicker = document.querySelector("#signSpacePicker");
const signSpacePickerTitle = document.querySelector("#signSpacePickerTitle");
const signSpaceChecklist = document.querySelector("#signSpaceChecklist");
const confirmSignDirectionBtn = document.querySelector("#confirmSignDirection");
const finishSignAssociationBtn = document.querySelector("#finishSignAssociation");
const deleteSignBtn = document.querySelector("#deleteSign");
const freeStartMode = document.querySelector("#freeStartMode");
const spaceStartMode = document.querySelector("#spaceStartMode");
const testStartSelect = document.querySelector("#testStartSelect");
const testEndSelect = document.querySelector("#testEndSelect");
const testStartChecklist = document.querySelector("#testStartChecklist");
const testEndChecklist = document.querySelector("#testEndChecklist");
const testStartDropdown = document.querySelector("#testStartDropdown");
const testEndDropdown = document.querySelector("#testEndDropdown");
const testStartDropdownLabel = document.querySelector("#testStartDropdownLabel");
const testEndDropdownLabel = document.querySelector("#testEndDropdownLabel");
const startMultiSelectInput = document.querySelector("#startMultiSelect");
const endMultiSelectInput = document.querySelector("#endMultiSelect");
const selectAllStartsBtn = document.querySelector("#selectAllStarts");
const selectAllEndsBtn = document.querySelector("#selectAllEnds");
const clearTestPointsBtn = document.querySelector("#clearTestPoints");
const useDefaultHeadingInput = document.querySelector("#useDefaultHeading");
const startHeadingButtons = Array.from(document.querySelectorAll("[data-start-heading]"));
const startHeadingLabel = document.querySelector("#startHeadingLabel");
const buildOptimalPathBtn = document.querySelector("#buildOptimalPath");
const visionDistanceRange = document.querySelector("#visionDistanceRange");
const visionDistanceValue = document.querySelector("#visionDistanceValue");
const visionDistanceUnit = document.querySelector("#visionDistanceUnit");
const normalAngleRange = document.querySelector("#normalAngleRange");
const normalAngleValue = document.querySelector("#normalAngleValue");
const decisionAngleRange = document.querySelector("#decisionAngleRange");
const decisionAngleValue = document.querySelector("#decisionAngleValue");
const runSimulationBtn = document.querySelector("#runSimulation");
const clearSimulationBtn = document.querySelector("#clearSimulation");
const simulationStatus = document.querySelector("#simulationStatus");
const simulationLogEmpty = document.querySelector("#simulationLogEmpty");
const simulationLogList = document.querySelector("#simulationLogList");
const prdMeanValue = document.querySelector("#prdMeanValue");
const effectivePrdMeanValue = document.querySelector("#effectivePrdMeanValue");
const failureDistanceMultiplierInput = document.querySelector("#failureDistanceMultiplier");
const refreshSimulationResultsBtn = document.querySelector("#refreshSimulationResults");
const testedRouteCount = document.querySelector("#testedRouteCount");
const resultRoutePicker = document.querySelector("#resultRoutePicker");
const feedbackSummary = document.querySelector("#feedbackSummary");
const destinationFailureList = document.querySelector("#destinationFailureList");
const showPathLabelsInput = document.querySelector("#showPathLabels");

const layerInputs = {
  base: document.querySelector("#layerBase"),
  routes: document.querySelector("#layerRoutes"),
  surface: document.querySelector("#layerSurface"),
  spaces: document.querySelector("#layerSpaces"),
  signs: document.querySelector("#layerSigns"),
  testPoints: document.querySelector("#layerTestPoints"),
  optimalPath: document.querySelector("#layerOptimalPath"),
  actualPath: document.querySelector("#layerActualPath"),
  simulationRecords: document.querySelector("#layerSimulationRecords"),
};

const angleSnap = document.querySelector("#angleSnap");
const nodeSnap = document.querySelector("#nodeSnap");
const intersectionSnap = document.querySelector("#intersectionSnap");

const state = {
  image: null,
  baseCanvas: null,
  imageName: "",
  fileStatus: "未导入",
  baseGrayscale: true,
  baseOpacity: 1,
  scaleCalibration: {
    mode: "custom",
    selectedMeters: 2,
    samples: [],
    pendingLine: null,
    drawingEnabled: false,
  },
  tool: null,
  routeType: "primary",
  segments: [],
  currentStart: null,
  pointer: null,
  snapPoint: null,
  guides: [],
  hover: null,
  selectedIds: new Set(),
  drag: null,
  resizeTimer: null,
  interfaceConfirmed: false,
  infoMapName: "",
  spaces: [],
  spaceEquivalentPoints: [],
  selectedSpaceId: null,
  selectedEquivalentPointId: null,
  hoverSpaceId: null,
  hoverEquivalentPointId: null,
  spaceNumberOverride: false,
  signs: [],
  selectedSignId: null,
  hoverSignId: null,
  signSubMode: "placement",
  signAssociationFace: "front",
  signAssociationAction: "straight",
  signAssociationPicking: false,
  didDrag: false,
  test: {
    startMode: "space",
    start: null,
    startSpaceId: "",
    startSpaceIds: [],
    startMultiSelect: false,
    endSpaceId: "",
    endSpaceIds: [],
    endMultiSelect: false,
    optimalPath: [],
    optimalAnchors: null,
    actualPath: [],
    problemPoints: [],
    infoEvents: [],
    simulationLog: [],
    readSignIds: [],
    routeResults: [],
    activeRouteId: "",
    focusedRouteId: "",
    selectedResultRouteIds: [],
    showPathLabels: true,
    failureDistanceMultiplier: 5,
    expandedFailureDestinations: [],
    useDefaultHeading: true,
    startHeading: 0,
    person: {
      visionDistance: 140,
      normalAngle: 90,
      decisionAngle: 180,
      demoPoint: null,
      demoSegmentId: null,
      heading: 0,
    },
  },
  layers: {
    base: true,
    routes: true,
    surface: true,
    spaces: true,
    signs: true,
    signPanels: true,
    testPoints: true,
    optimalPath: true,
    actualPath: true,
    simulationRecords: true,
  },
};

const drawingHistory = Object.fromEntries(
  ["scale", "route", "edit", "width", "info", "sign"].map((tool) => [tool, { undo: [], redo: [] }]),
);

function cloneSignsForHistory(signs) {
  return signs.map((sign) => ({
    ...sign,
    point: clonePoint(sign.point),
    destinationsByAction: structuredClone(sign.destinationsByAction || {}),
    destinationsByFace: structuredClone(sign.destinationsByFace || {}),
    images: [...(sign.images || [])],
    imagesByFace: {
      front: [...(sign.imagesByFace?.front || [])],
      back: [...(sign.imagesByFace?.back || [])],
    },
  }));
}

function captureDrawingSnapshot(tool) {
  if (tool === "scale") {
    return { scaleCalibration: structuredClone(state.scaleCalibration) };
  }
  if (["route", "edit", "width"].includes(tool)) {
    return {
      segments: structuredClone(state.segments),
      interfaceConfirmed: state.interfaceConfirmed,
      selectedIds: [...state.selectedIds],
    };
  }
  if (tool === "info") {
    return {
      spaces: structuredClone(state.spaces),
      spaceEquivalentPoints: structuredClone(state.spaceEquivalentPoints),
      selectedSpaceId: state.selectedSpaceId,
      selectedEquivalentPointId: state.selectedEquivalentPointId,
    };
  }
  if (tool === "sign") return { signs: cloneSignsForHistory(state.signs), selectedSignId: state.selectedSignId };
  return null;
}

function restoreDrawingSnapshot(tool, snapshot) {
  if (!snapshot) return;
  if (tool === "scale") {
    state.scaleCalibration = structuredClone(snapshot.scaleCalibration || {
      mode: "custom", selectedMeters: 2, samples: [], pendingLine: null, drawingEnabled: false,
    });
    state.currentStart = null;
    state.pointer = null;
    state.guides = [];
    clearSimulationResults();
    syncScaleControls();
    syncPersonInputs();
    updateStatus();
    redraw();
    return;
  }
  if (["route", "edit", "width"].includes(tool)) {
    state.segments = structuredClone(snapshot.segments);
    state.interfaceConfirmed = snapshot.interfaceConfirmed;
    state.selectedIds = new Set(snapshot.selectedIds || []);
    updateWidthInput();
  } else if (tool === "info") {
    state.spaces = structuredClone(snapshot.spaces);
    state.spaceEquivalentPoints = structuredClone(snapshot.spaceEquivalentPoints || []);
    state.selectedSpaceId = snapshot.selectedSpaceId;
    state.selectedEquivalentPointId = snapshot.selectedEquivalentPointId || null;
    syncSpaceFields();
    refreshSignTargets();
    refreshTestSpaceOptions();
  } else if (tool === "sign") {
    state.signs = cloneSignsForHistory(snapshot.signs);
    state.selectedSignId = snapshot.selectedSignId;
    syncSignFields();
  }
  clearComputedTestPaths();
  updateStatus();
  redraw();
}

function recordDrawingChange(tool = state.tool) {
  const history = drawingHistory[tool];
  if (!history) return;
  history.undo.push(captureDrawingSnapshot(tool));
  if (history.undo.length > 100) history.undo.shift();
  history.redo = [];
}

function undoDrawingChange(tool = state.tool) {
  const history = drawingHistory[tool];
  if (!history?.undo.length) return false;
  history.redo.push(captureDrawingSnapshot(tool));
  restoreDrawingSnapshot(tool, history.undo.pop());
  return true;
}

function redoDrawingChange(tool = state.tool) {
  const history = drawingHistory[tool];
  if (!history?.redo.length) return false;
  history.undo.push(captureDrawingSnapshot(tool));
  restoreDrawingSnapshot(tool, history.redo.pop());
  return true;
}

const colors = {
  primary: "#d8334a",
  secondary: "#1778d4",
  surface: "#18a66a",
  info: "#8a4bd8",
  sign: "#e36a21",
  testStart: "#16a06a",
  testEnd: "#d8334a",
  optimal: "#d8334a",
  actual: "#1778d4",
  problem: "#e36a21",
};

const signActionOrder = ["straight", "leftFront", "rightFront", "left", "right", "back"];

const defaultWidths = {
  primary: 84,
  secondary: 52,
};

const displayOffsets = {
  optimalPath: -4,
  actualPath: 0,
};

const spaceTypeLabels = {
  elevator_lobby: "电梯厅",
  work_area: "工区",
  meeting_room: "会议室",
  pantry: "茶水间",
  male_restroom: "男卫生间",
  female_restroom: "女卫生间",
  restroom: "卫生间",
  print_area: "打印区",
  multifunction_room: "开放协作区",
  training_room: "培训室",
  lab: "实验室",
  stairwell: "楼梯间",
  live_room: "直播间",
  discussion_pod: "讨论舱",
  service_room: "服务室",
  phone: "电话亭",
  small_post_office: "小邮局",
  massage_room: "按摩室",
  gym: "健身房",
  restaurant: "餐厅",
  exhibition_hall: "展厅",
  admin_service_room: "行政服务室",
  it_service_room: "IT服务室",
  finance_service_room: "财务服务室",
  hr_service_room: "HR服务室",
  other: "其他",
};

const numberedSpaceTypes = new Set([
  "meeting_room", "training_room", "lab", "live_room", "work_area",
  "discussion_pod", "elevator_lobby", "stairwell", "pantry",
]);
const optionalNumberedSpaceTypes = new Set(["pantry"]);
const elevatorDirectionNumbers = ["东", "南", "西", "北"];

function setStatus(text) {
  statusEl.textContent = text;
}

function setRouteType(type) {
  state.routeType = type;
  primaryMode.classList.toggle("active", type === "primary");
  secondaryMode.classList.toggle("active", type === "secondary");
}

function setTool(tool) {
  hideCanvasInlineEditors();
  state.tool = tool;
  state.currentStart = null;
  state.pointer = null;
  state.snapPoint = null;
  state.guides = [];
  state.hover = null;
  state.drag = null;
  if (tool === "route") state.selectedIds.clear();
  if (tool !== "sign") {
    state.selectedSignId = null;
    state.signAssociationPicking = false;
    renderSignAssociationEditor();
  }
  baseMode.classList.toggle("active", tool === "base");
  scaleMode.classList.toggle("active", tool === "scale");
  routeMode.classList.toggle("active", ["route", "edit"].includes(tool));
  routeDrawMode.classList.toggle("active", tool === "route");
  editMode.classList.toggle("active", tool === "edit");
  widthMode.classList.toggle("active", tool === "width");
  infoMode.classList.toggle("active", tool === "info");
  signMode.classList.toggle("active", tool === "sign");
  personMode.classList.toggle("active", tool === "person");
  testMode.classList.toggle("active", tool === "test");
  optimalMode.classList.toggle("active", tool === "optimal");
  simulateMode.classList.toggle("active", tool === "simulate");
  simulationLogMode.classList.toggle("active", tool === "simulationLog");
  feedbackMode.classList.toggle("active", tool === "feedback");
  basePanel.hidden = tool !== "base";
  scalePanel.hidden = tool !== "scale";
  routePanel.hidden = !["route", "edit"].includes(tool);
  widthPanel.hidden = tool !== "width";
  spacePanel.hidden = tool !== "info";
  signPanel.hidden = tool !== "sign";
  personPanel.hidden = tool !== "person";
  testPanel.hidden = tool !== "test";
  optimalPanel.hidden = tool !== "optimal";
  simulatePanel.hidden = tool !== "simulate";
  simulationLogPanel.hidden = tool !== "simulationLog";
  feedbackPanel.hidden = tool !== "feedback";

  const copy = {
    base: ["底图导入", "导入平面图后会自动适配画板；可转换灰度、调节透明度或导出处理结果。"],
    scale: ["比例尺", "在图上点击两点并输入真实距离；Enter 确认，线段自动吸附正交和 45°。"],
    route: ["绘制动线", "依次点击起点和终点绘制单条线段；Shift 吸附正交/45°，Esc 取消，⌘Z 撤销。"],
    edit: ["调整动线", "拖拽线段或端点；方向键微移，Shift+方向键移动 10px，Delete 删除，⌘Y 重做。"],
    width: ["行走范围", "点击线段后拖拽箭头或点击宽度数字输入；Shift 多选，Enter 确认。"],
    info: ["空间信息", "点击信息界面连续添加，拖拽可重新吸附；Delete 删除，⌘Z / ⌘Y 撤销或重做。"],
    sign: ["导向信息", "先布置标识，再关联方向和空间；拖拽调整，Delete 删除，Enter 完成关联。"],
    person: ["人物设定", "调节视距、常规视角和决策点视角，画板会同步预览人物观察范围。"],
    test: ["起点和终点", "选择空间起点或平面选点，再选择终点；开启多选可一次测试多条路线。"],
    optimal: ["最优路径", "生成沿动线中心线的红色最短路径，用作模拟距离和方向的对照。"],
    simulate: ["模拟路径", "设置初始方向并开始模拟；蓝色路径展示人物读取标识后的实际行进过程。"],
    simulationLog: ["模拟记录", "按顺序查看出发、看见标识、读取信息、方向决策与最终结果。"],
    feedback: ["模拟结果", "选择路线编号，单独查看该路线的最优路径、模拟路径和问题反馈。"],
  };
  if (tool === "person") ensureDemoPerson();
  if (tool === "scale") syncScaleControls();
  if (["simulate", "simulationLog", "feedback"].includes(tool)) updateSimulationPanels();
  syncSignSubMode();
  toolTitle.textContent = copy[tool][0];
  toolHint.textContent = copy[tool][1];
  updateWidthInput();
  updateStatus();
  redraw();
}

function setSignSubMode(mode) {
  state.signSubMode = mode === "info" ? "info" : "placement";
  state.signAssociationPicking = false;
  syncSignSubMode();
  updateStatus();
  redraw();
}

function syncSignSubMode() {
  const isSignTool = state.tool === "sign";
  const isPlacement = state.signSubMode !== "info";
  if (signPlacementModeBtn) signPlacementModeBtn.classList.toggle("active", isPlacement);
  if (signInfoModeBtn) signInfoModeBtn.classList.toggle("active", !isPlacement);
  if (signPlacementFields) signPlacementFields.hidden = !isPlacement;
  if (signInfoControls) signInfoControls.hidden = isPlacement;
  if (signAssociationPanel && (!isSignTool || isPlacement)) signAssociationPanel.hidden = true;
  syncHangingFacingField();
  syncSignImageFaceControls();
  if (isSignTool && !isPlacement) renderSignAssociationEditor();
}

function fitCanvasToViewport(img) {
  const wrapStyle = window.getComputedStyle(canvasWrap);
  const horizontalPadding =
    (Number.parseFloat(wrapStyle.paddingLeft) || 0) +
    (Number.parseFloat(wrapStyle.paddingRight) || 0);
  const verticalPadding =
    (Number.parseFloat(wrapStyle.paddingTop) || 0) +
    (Number.parseFloat(wrapStyle.paddingBottom) || 0);
  const wrapWidth = Math.max(1, canvasWrap.clientWidth - horizontalPadding);
  const wrapHeight = Math.max(1, canvasWrap.clientHeight - verticalPadding);
  const scale = Math.min(1, wrapWidth / img.naturalWidth, wrapHeight / img.naturalHeight);
  // Geometry is edited in preview coordinates so routes, labels and handles
  // keep a stable on-screen size even when the source image is very large.
  canvas.width = Math.max(1, Math.round(img.naturalWidth * scale));
  canvas.height = Math.max(1, Math.round(img.naturalHeight * scale));
  canvas.dataset.scale = String(scale);
}

function buildBaseMap() {
  if (!state.image) return;
  const offscreen = document.createElement("canvas");
  offscreen.width = canvas.width;
  offscreen.height = canvas.height;
  const offCtx = offscreen.getContext("2d");
  offCtx.imageSmoothingEnabled = true;
  offCtx.imageSmoothingQuality = "high";
  offCtx.filter = state.baseGrayscale ? "grayscale(100%)" : "none";
  offCtx.drawImage(state.image, 0, 0, offscreen.width, offscreen.height);
  offCtx.filter = "none";
  state.baseCanvas = offscreen;
}

function syncBaseControls() {
  toggleGrayscaleBtn.classList.toggle("activeControl", state.baseGrayscale);
  toggleGrayscaleBtn.setAttribute("aria-pressed", String(state.baseGrayscale));
  baseOpacityInput.value = String(Math.round(state.baseOpacity * 100));
  baseOpacityValue.value = `${Math.round(state.baseOpacity * 100)}%`;
  baseOpacityValue.textContent = baseOpacityValue.value;
  syncBasePreview();
}

function syncBasePreview() {
  if (!baseImagePreview) return;
  const previewWidth = `${canvas.width}px`;
  const previewHeight = `${canvas.height}px`;
  if (canvasBackdrop) {
    canvasBackdrop.style.width = previewWidth;
    canvasBackdrop.style.height = previewHeight;
  }
  baseImagePreview.style.width = previewWidth;
  baseImagePreview.style.height = previewHeight;
  const hasImage = Boolean(state.image?.src);
  baseImagePreview.hidden = !hasImage || state.layers.base === false;
  baseImagePreview.style.opacity = String(state.baseOpacity);
  baseImagePreview.style.filter = state.baseGrayscale ? "grayscale(100%)" : "none";
}

function refitBaseMap() {
  if (!state.image) return;
  const oldWidth = canvas.width || 1;
  const oldHeight = canvas.height || 1;
  fitCanvasToViewport(state.image);
  const sx = canvas.width / oldWidth;
  const sy = canvas.height / oldHeight;
  if (Math.abs(sx - 1) > 0.001 || Math.abs(sy - 1) > 0.001) {
    scaleExistingGeometry(sx, sy);
  }
  buildBaseMap();
  redraw();
}

function scaleExistingGeometry(sx, sy) {
  const scalePoint = (point) => {
    point.x *= sx;
    point.y *= sy;
  };
  state.segments.forEach((segment) => {
    scalePoint(segment.a);
    scalePoint(segment.b);
    segment.width *= (sx + sy) / 2;
  });
  state.spaces.forEach((space) => scalePoint(space.point));
  state.spaceEquivalentPoints.forEach((point) => scalePoint(point.point));
  state.signs.forEach((sign) => scalePoint(sign.point));
  (state.scaleCalibration.samples || []).forEach((sample) => {
    scalePoint(sample.a);
    scalePoint(sample.b);
  });
  if (state.scaleCalibration.pendingLine) {
    scalePoint(state.scaleCalibration.pendingLine.a);
    scalePoint(state.scaleCalibration.pendingLine.b);
  }
  if (state.test.start?.point) scalePoint(state.test.start.point);
  state.test.optimalPath.forEach(scalePoint);
  if (state.test.optimalAnchors) {
    scalePoint(state.test.optimalAnchors.start);
    scalePoint(state.test.optimalAnchors.end);
  }
  state.test.actualPath.forEach(scalePoint);
  state.test.problemPoints.forEach((problem) => scalePoint(problem.point));
  state.test.infoEvents.forEach((event) => scalePoint(event.point));
  (state.test.routeResults || []).forEach((result) => {
    if (result.start?.point) scalePoint(result.start.point);
    (result.optimalPath || []).forEach(scalePoint);
    (result.actualPath || []).forEach(scalePoint);
    if (result.optimalAnchors?.start) scalePoint(result.optimalAnchors.start);
    if (result.optimalAnchors?.end) scalePoint(result.optimalAnchors.end);
    (result.problemPoints || []).forEach((problem) => problem.point && scalePoint(problem.point));
    (result.infoEvents || []).forEach((event) => event.point && scalePoint(event.point));
    (result.simulationLog || []).forEach((entry) => entry.point && scalePoint(entry.point));
  });
  (state.test.simulationLog || []).forEach((entry) => entry.point && scalePoint(entry.point));
  if (state.test.person.demoPoint) scalePoint(state.test.person.demoPoint);
  state.test.person.visionDistance *= (sx + sy) / 2;
  if (state.currentStart) scalePoint(state.currentStart);
  syncScaleControls();
  syncPersonInputs();
}

function canvasPoint(event) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: (event.clientX - rect.left) * (canvas.width / rect.width),
    y: (event.clientY - rect.top) * (canvas.height / rect.height),
  };
}

function distance(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

function clonePoint(point) {
  return { x: point.x, y: point.y };
}

function segmentLength(segment) {
  return distance(segment.a, segment.b);
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function makeId() {
  return `seg-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function allNodes(excludeSegmentId = null) {
  const nodes = [];
  state.segments.forEach((segment) => {
    if (segment.id === excludeSegmentId) return;
    nodes.push(segment.a, segment.b);
  });
  return nodes;
}

function nearestPointOnSegment(point, a, b) {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const lenSq = dx * dx + dy * dy;
  if (!lenSq) return { point: clonePoint(a), distance: distance(point, a), ratio: 0 };
  const ratio = Math.max(0, Math.min(1, ((point.x - a.x) * dx + (point.y - a.y) * dy) / lenSq));
  const projected = { x: a.x + ratio * dx, y: a.y + ratio * dy };
  return { point: projected, distance: distance(point, projected), ratio };
}

function nearestNode(point, threshold = 14, excludeSegmentId = null) {
  if (!nodeSnap.checked) return null;
  let best = null;
  let bestDistance = threshold;
  for (const node of allNodes(excludeSegmentId)) {
    const d = distance(point, node);
    if (d < bestDistance) {
      best = node;
      bestDistance = d;
    }
  }
  return best ? clonePoint(best) : null;
}

function nearestSegmentSnap(point, threshold = 14, excludeSegmentId = null) {
  let best = null;
  let bestDistance = threshold;
  for (const segment of state.segments) {
    if (segment.id === excludeSegmentId) continue;
    const projected = nearestPointOnSegment(point, segment.a, segment.b);
    if (projected.ratio <= 0.02 || projected.ratio >= 0.98) continue;
    if (projected.distance < bestDistance) {
      best = projected.point;
      bestDistance = projected.distance;
    }
  }
  return best ? clonePoint(best) : null;
}

function lineIntersection(a, b, c, d) {
  const denominator = (a.x - b.x) * (c.y - d.y) - (a.y - b.y) * (c.x - d.x);
  if (Math.abs(denominator) < 0.0001) return null;
  const t =
    ((a.x - c.x) * (c.y - d.y) - (a.y - c.y) * (c.x - d.x)) / denominator;
  const u =
    -((a.x - b.x) * (a.y - c.y) - (a.y - b.y) * (a.x - c.x)) / denominator;
  if (t < 0 || t > 1 || u < 0 || u > 1) return null;
  return { x: a.x + t * (b.x - a.x), y: a.y + t * (b.y - a.y) };
}

function infiniteLineIntersection(a, b, c, d) {
  const denominator = (a.x - b.x) * (c.y - d.y) - (a.y - b.y) * (c.x - d.x);
  if (Math.abs(denominator) < 0.0001) return null;
  const t =
    ((a.x - c.x) * (c.y - d.y) - (a.y - c.y) * (c.x - d.x)) / denominator;
  return { x: a.x + t * (b.x - a.x), y: a.y + t * (b.y - a.y) };
}

function nearestIntersection(from, to, threshold = 16) {
  if (!intersectionSnap.checked || !from) return null;
  let best = null;
  let bestDistance = threshold;
  for (const segment of state.segments) {
    const hit = lineIntersection(from, to, segment.a, segment.b);
    if (!hit) continue;
    const d = distance(to, hit);
    if (d < bestDistance) {
      best = hit;
      bestDistance = d;
    }
  }
  return best;
}

function nearestExtensionIntersection(from, to, threshold = 16, excludeSegmentId = null) {
  if (!intersectionSnap.checked || !from) return null;
  let best = null;
  let bestDistance = threshold;
  for (const segment of state.segments) {
    if (segment.id === excludeSegmentId) continue;
    const hit = infiniteLineIntersection(from, to, segment.a, segment.b);
    if (!hit) continue;
    const projectedOnNew = nearestPointOnSegment(hit, from, to);
    const projectedOnExisting = nearestPointOnSegment(hit, segment.a, segment.b);
    const onBothSegments = projectedOnNew.distance < 0.75 && projectedOnExisting.distance < 0.75;
    if (onBothSegments) continue;
    const d = distance(to, hit);
    if (d < bestDistance) {
      best = {
        point: hit,
        guides: [
          { a: from, b: hit },
          { a: segment.a, b: segment.b },
        ],
      };
      bestDistance = d;
    }
  }
  return best;
}

function nearestExistingExtensionIntersection(point, threshold = 18, excludeSegmentId = null) {
  if (!intersectionSnap.checked) return null;
  let best = null;
  let bestDistance = threshold;
  const segments = state.segments.filter((segment) => segment.id !== excludeSegmentId);
  for (let leftIndex = 0; leftIndex < segments.length; leftIndex += 1) {
    for (let rightIndex = leftIndex + 1; rightIndex < segments.length; rightIndex += 1) {
      const left = segments[leftIndex];
      const right = segments[rightIndex];
      const hit = infiniteLineIntersection(left.a, left.b, right.a, right.b);
      if (!hit) continue;
      const d = distance(point, hit);
      if (d >= bestDistance) continue;
      best = {
        point: hit,
        guides: [
          { a: left.a, b: left.b },
          { a: right.a, b: right.b },
        ],
      };
      bestDistance = d;
    }
  }
  return best;
}

function snapAngle(from, to, force = false) {
  if ((!angleSnap.checked && !force) || !from) return to;
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const len = Math.hypot(dx, dy);
  if (len < 1) return to;
  const angle = Math.atan2(dy, dx);
  const step = Math.PI / 4;
  const snapped = Math.round(angle / step) * step;
  return { x: from.x + Math.cos(snapped) * len, y: from.y + Math.sin(snapped) * len };
}

function applyPointSnaps(raw, from = null, excludeSegmentId = null, forceAngle = false) {
  let point = from ? snapAngle(from, raw, forceAngle) : raw;
  state.guides = buildAlignmentGuides(point, from, excludeSegmentId);
  const hitNode = nearestNode(point, 14, excludeSegmentId);
  if (hitNode) {
    state.snapPoint = hitNode;
    return hitNode;
  }
  // Intersections are more precise construction targets than an arbitrary
  // projection onto a segment, so they must win before ordinary line snaps.
  const hitExistingExtensions = nearestExistingExtensionIntersection(point, 18, excludeSegmentId);
  if (hitExistingExtensions) {
    state.guides.push(...hitExistingExtensions.guides);
    state.snapPoint = hitExistingExtensions.point;
    return hitExistingExtensions.point;
  }
  const hitIntersection = nearestIntersection(from, point);
  if (hitIntersection) {
    state.snapPoint = hitIntersection;
    return hitIntersection;
  }
  const hitExtension = nearestExtensionIntersection(from, point, 16, excludeSegmentId);
  if (hitExtension) {
    state.guides.push(...hitExtension.guides);
    state.snapPoint = hitExtension.point;
    return hitExtension.point;
  }
  const hitSegment = nearestSegmentSnap(point, 14, excludeSegmentId);
  if (hitSegment) {
    state.snapPoint = hitSegment;
    return hitSegment;
  }
  state.snapPoint = null;
  return point;
}

function applyEditPositionSnaps(raw, from, excludeSegmentId) {
  const point = clonePoint(raw);
  state.guides = buildAlignmentGuides(point, from, excludeSegmentId);
  const hitNode = nearestNode(point, 14, excludeSegmentId);
  if (hitNode) {
    state.snapPoint = hitNode;
    return { point: hitNode, snapped: true };
  }
  const hitSegment = nearestSegmentSnap(point, 14, excludeSegmentId);
  if (hitSegment) {
    state.snapPoint = hitSegment;
    return { point: hitSegment, snapped: true };
  }
  const hitExistingExtensions = nearestExistingExtensionIntersection(point, 18, excludeSegmentId);
  if (hitExistingExtensions) {
    state.guides.push(...hitExistingExtensions.guides);
    state.snapPoint = hitExistingExtensions.point;
    return { point: hitExistingExtensions.point, snapped: true };
  }
  const hitExtension = nearestExtensionIntersection(from, point, 16, excludeSegmentId);
  if (hitExtension) {
    state.guides.push(...hitExtension.guides);
    state.snapPoint = hitExtension.point;
    return { point: hitExtension.point, snapped: true };
  }
  state.snapPoint = null;
  return { point, snapped: false };
}

function scaleCalibrationPoint(raw) {
  const point = snapAngle(state.currentStart, raw, true);
  if (!state.currentStart) return point;
  const dx = point.x - state.currentStart.x;
  const dy = point.y - state.currentStart.y;
  const length = Math.max(1, Math.hypot(dx, dy));
  const ux = dx / length;
  const uy = dy / length;
  state.guides = [{
    a: { x: state.currentStart.x - ux * 2000, y: state.currentStart.y - uy * 2000 },
    b: { x: state.currentStart.x + ux * 2000, y: state.currentStart.y + uy * 2000 },
  }];
  return point;
}

function buildAlignmentGuides(point, from = null, excludeSegmentId = null) {
  if (!from) return [];
  const guides = [];
  const threshold = 8;
  for (const segment of state.segments) {
    if (segment.id === excludeSegmentId) continue;
    for (const node of [segment.a, segment.b]) {
      if (Math.abs(point.x - node.x) < threshold) {
        guides.push({ a: { x: node.x, y: 0 }, b: { x: node.x, y: canvas.height } });
      }
      if (Math.abs(point.y - node.y) < threshold) {
        guides.push({ a: { x: 0, y: node.y }, b: { x: canvas.width, y: node.y } });
      }
    }
    const targetLength = segmentLength(segment);
    if (Math.abs(distance(from, point) - targetLength) < threshold) {
      const dx = point.x - from.x;
      const dy = point.y - from.y;
      const len = Math.max(1, Math.hypot(dx, dy));
      const ux = dx / len;
      const uy = dy / len;
      guides.push({
        a: { x: from.x - ux * 2000, y: from.y - uy * 2000 },
        b: { x: from.x + ux * 2000, y: from.y + uy * 2000 },
      });
    }
  }
  return guides.slice(0, 4);
}

function hitTestEndpoint(point, threshold = 12) {
  let best = null;
  let bestDistance = threshold;
  for (const segment of state.segments) {
    for (const endpoint of ["a", "b"]) {
      const d = distance(point, segment[endpoint]);
      if (d < bestDistance) {
        best = { kind: "endpoint", segment, endpoint };
        bestDistance = d;
      }
    }
  }
  return best;
}

function hitTestSegment(point, threshold = 12) {
  let best = null;
  let bestDistance = threshold;
  for (const segment of state.segments) {
    const projected = nearestPointOnSegment(point, segment.a, segment.b);
    const widthThreshold = state.tool === "width" ? Math.max(threshold, segment.width / 2 + 18) : threshold;
    if (projected.distance < widthThreshold && projected.distance < bestDistance) {
      best = { kind: "segment", segment, projected };
      bestDistance = projected.distance;
    }
  }
  return best;
}

function hitTest(point) {
  return hitTestEndpoint(point) ?? hitTestSegment(point);
}

function selectedSegments() {
  return state.segments.filter((segment) => state.selectedIds.has(segment.id));
}

function connectedEndpointRefs(segmentId, point, tolerance = 3) {
  const refs = [];
  for (const segment of state.segments) {
    if (segment.id === segmentId) continue;
    for (const endpoint of ["a", "b"]) {
      if (distance(segment[endpoint], point) <= tolerance) {
        refs.push({ segmentId: segment.id, endpoint });
      }
    }
  }
  return refs;
}

function moveConnectedEndpoints(refs, point) {
  for (const ref of refs || []) {
    const segment = state.segments.find((item) => item.id === ref.segmentId);
    if (segment) segment[ref.endpoint] = clonePoint(point);
  }
}

function mergeRedundantCollinearSegments(tolerance = 3) {
  let mergedCount = 0;
  let changed = true;
  while (changed) {
    changed = false;
    for (let leftIndex = 0; leftIndex < state.segments.length && !changed; leftIndex += 1) {
      const left = state.segments[leftIndex];
      for (let rightIndex = leftIndex + 1; rightIndex < state.segments.length; rightIndex += 1) {
        const right = state.segments[rightIndex];
        if (left.type !== right.type || Math.abs(left.width - right.width) > 0.5) continue;
        const endpointPairs = [
          ["a", "a"], ["a", "b"], ["b", "a"], ["b", "b"],
        ];
        const sharedPair = endpointPairs.find(([leftEnd, rightEnd]) => distance(left[leftEnd], right[rightEnd]) <= tolerance);
        if (!sharedPair) continue;
        const [leftSharedEnd, rightSharedEnd] = sharedPair;
        const shared = {
          x: (left[leftSharedEnd].x + right[rightSharedEnd].x) / 2,
          y: (left[leftSharedEnd].y + right[rightSharedEnd].y) / 2,
        };
        const incidents = state.segments.filter((segment) => (
          distance(segment.a, shared) <= tolerance || distance(segment.b, shared) <= tolerance
        ));
        if (incidents.length !== 2) continue;
        const leftOuter = left[leftSharedEnd === "a" ? "b" : "a"];
        const rightOuter = right[rightSharedEnd === "a" ? "b" : "a"];
        const leftHeading = directionTo(shared, leftOuter);
        const rightHeading = directionTo(shared, rightOuter);
        if (Math.abs(Math.PI - angleDifference(leftHeading, rightHeading)) > (2 * Math.PI) / 180) continue;
        left.a = clonePoint(leftOuter);
        left.b = clonePoint(rightOuter);
        state.spaces.forEach((space) => {
          if (space.segmentId === right.id) space.segmentId = left.id;
        });
        state.signs.forEach((sign) => {
          if (sign.segmentId === right.id) sign.segmentId = left.id;
        });
        state.segments.splice(rightIndex, 1);
        mergedCount += 1;
        changed = true;
        break;
      }
    }
  }
  return mergedCount;
}

function deleteSelectedSegments() {
  if (!state.selectedIds.size) return 0;
  recordDrawingChange("edit");
  const selectedIds = new Set(state.selectedIds);
  const before = state.segments.length;
  state.segments = state.segments.filter((segment) => !selectedIds.has(segment.id));
  const deleted = before - state.segments.length;
  if (!deleted) return 0;
  state.selectedIds.clear();
  state.interfaceConfirmed = false;
  clearComputedTestPaths();
  splitSegmentsAtInteriorEndpoints();
  mergeRedundantCollinearSegments();
  updateWidthInput();
  updateStatus();
  redraw();
  return deleted;
}

function selectOnly(id) {
  state.selectedIds.clear();
  state.selectedIds.add(id);
  updateWidthInput();
}

function toggleSelection(id) {
  if (state.selectedIds.has(id)) {
    state.selectedIds.delete(id);
  } else {
    state.selectedIds.add(id);
  }
  updateWidthInput();
}

function distanceDisplayValue(pixelValue, decimals = 2) {
  const ratio = pixelsPerMeter();
  return ratio ? Number((pixelValue / ratio).toFixed(decimals)) : Math.round(pixelValue);
}

function distanceDisplayUnit() {
  return pixelsPerMeter() ? "m" : "px";
}

function pixelsFromDistanceInput(value) {
  const ratio = pixelsPerMeter();
  return ratio ? Number(value) * ratio : Number(value);
}

function maximumSegmentWidth() {
  return Math.max(280, canvas.width || 0, canvas.height || 0);
}

function updateWidthInput() {
  const selected = selectedSegments();
  const ratio = pixelsPerMeter();
  const maximumWidth = maximumSegmentWidth();
  widthUnit.textContent = distanceDisplayUnit();
  widthInput.min = "0";
  widthInput.max = ratio ? String(Number((maximumWidth / ratio).toFixed(2))) : String(maximumWidth);
  widthInput.step = ratio ? "0.01" : "1";
  if (!selected.length) {
    widthInput.value = "";
    widthInput.placeholder = "选择动线";
    return;
  }
  const first = distanceDisplayValue(selected[0].width);
  const same = selected.every((segment) => Math.abs(distanceDisplayValue(segment.width) - first) < 0.001);
  widthInput.value = same ? String(first) : "";
  widthInput.placeholder = same ? "" : "多个宽度";
}

function addSegment(a, b, type = state.routeType, width = defaultWidths[type]) {
  if (distance(a, b) < 4) return;
  recordDrawingChange("route");
  clearComputedTestPaths();
  state.segments.push({
    id: makeId(),
    type,
    width,
    a: clonePoint(a),
    b: clonePoint(b),
  });
  splitSegmentsAtInteriorEndpoints();
}

function splitSegmentsAtInteriorEndpoints() {
  const next = [];
  let changed = false;
  for (const segment of state.segments) {
    const cuts = [
      { ratio: 0, point: segment.a },
      { ratio: 1, point: segment.b },
    ];
    for (const other of state.segments) {
      if (other.id === segment.id) continue;
      const hit = lineIntersection(segment.a, segment.b, other.a, other.b);
      if (hit) {
        const projected = nearestPointOnSegment(hit, segment.a, segment.b);
        if (projected.ratio > 0.035 && projected.ratio < 0.965) {
          cuts.push({ ratio: projected.ratio, point: projected.point });
        }
      }
      for (const endpoint of [other.a, other.b]) {
        const projected = nearestPointOnSegment(endpoint, segment.a, segment.b);
        if (projected.ratio > 0.035 && projected.ratio < 0.965 && projected.distance < 6) {
          cuts.push({ ratio: projected.ratio, point: projected.point });
        }
      }
    }

    cuts.sort((left, right) => left.ratio - right.ratio);
    const unique = [];
    for (const cut of cuts) {
      const last = unique.at(-1);
      if (!last || distance(last.point, cut.point) > 3) unique.push(cut);
    }

    if (unique.length <= 2) {
      next.push(segment);
      continue;
    }

    changed = true;
    for (let i = 0; i < unique.length - 1; i += 1) {
      if (distance(unique[i].point, unique[i + 1].point) < 4) continue;
      next.push({
        ...segment,
        id: makeId(),
        a: clonePoint(unique[i].point),
        b: clonePoint(unique[i + 1].point),
      });
    }
  }

  if (changed) {
    state.segments = next;
    state.selectedIds.clear();
    clearComputedTestPaths();
  }
}

function weldNearbySegmentEndpoints(threshold = 16) {
  const endpoints = state.segments.flatMap((segment) => ([
    { segment, endpoint: "a", point: segment.a },
    { segment, endpoint: "b", point: segment.b },
  ]));
  const parents = endpoints.map((_, index) => index);
  const find = (index) => {
    let root = index;
    while (parents[root] !== root) root = parents[root];
    while (parents[index] !== index) {
      const next = parents[index];
      parents[index] = root;
      index = next;
    }
    return root;
  };
  const unite = (left, right) => {
    const leftRoot = find(left);
    const rightRoot = find(right);
    if (leftRoot !== rightRoot) parents[rightRoot] = leftRoot;
  };

  for (let i = 0; i < endpoints.length; i += 1) {
    for (let j = i + 1; j < endpoints.length; j += 1) {
      if (endpoints[i].segment.id === endpoints[j].segment.id) continue;
      if (distance(endpoints[i].point, endpoints[j].point) <= threshold) unite(i, j);
    }
  }

  const groups = new Map();
  endpoints.forEach((endpoint, index) => {
    const root = find(index);
    if (!groups.has(root)) groups.set(root, []);
    groups.get(root).push(endpoint);
  });

  let welded = 0;
  for (const group of groups.values()) {
    if (group.length < 2) continue;
    if (new Set(group.map((item) => item.segment.id)).size !== group.length) continue;
    const intersections = [];
    for (let i = 0; i < group.length; i += 1) {
      for (let j = i + 1; j < group.length; j += 1) {
        const hit = infiniteLineIntersection(
          group[i].segment.a,
          group[i].segment.b,
          group[j].segment.a,
          group[j].segment.b,
        );
        if (!hit) continue;
        if (distance(hit, group[i].point) <= threshold * 1.5 && distance(hit, group[j].point) <= threshold * 1.5) {
          intersections.push(hit);
        }
      }
    }
    const source = intersections.length ? intersections : group.map((item) => item.point);
    const target = {
      x: source.reduce((sum, point) => sum + point.x, 0) / source.length,
      y: source.reduce((sum, point) => sum + point.y, 0) / source.length,
    };
    group.forEach((item) => {
      item.segment[item.endpoint] = clonePoint(target);
    });
    welded += 1;
  }

  if (welded) {
    clearComputedTestPaths();
    splitSegmentsAtInteriorEndpoints();
  }
  return welded;
}

function buildJointMap() {
  const joints = [];
  for (const segment of state.segments) {
    for (const [endpoint, point] of [["a", segment.a], ["b", segment.b]]) {
      let joint = joints.find((item) => distance(item.point, point) < 4);
      if (!joint) {
        joint = { point: clonePoint(point), width: segment.width, count: 0, segments: [] };
        joints.push(joint);
      }
      joint.width = Math.max(joint.width, segment.width);
      joint.count += 1;
      joint.segments.push({ segment, endpoint });
    }
  }
  return joints;
}

function drawJointCornerFills(maskCtx, joint) {
  const arms = joint.segments
    .map(({ segment, endpoint }) => {
      const other = endpoint === "a" ? segment.b : segment.a;
      const dx = other.x - joint.point.x;
      const dy = other.y - joint.point.y;
      const len = Math.hypot(dx, dy);
      if (len < 1) return null;
      const ux = dx / len;
      const uy = dy / len;
      return {
        half: segment.width / 2,
        len,
        ux,
        uy,
        nx: -uy,
        ny: ux,
      };
    })
    .filter(Boolean);

  if (arms.length < 2) return;

  maskCtx.save();
  maskCtx.fillStyle = "#000";

  if (arms.length === 2) {
    const [first, second] = arms;
    const dot = first.ux * second.ux + first.uy * second.uy;
    if (Math.abs(dot) <= 0.35) {
      const firstReach = second.half;
      const secondReach = first.half;
      const p1 = {
        x: joint.point.x - first.ux * firstReach,
        y: joint.point.y - first.uy * firstReach,
      };
      const p2 = {
        x: p1.x - second.ux * secondReach,
        y: p1.y - second.uy * secondReach,
      };
      const p3 = {
        x: joint.point.x - second.ux * secondReach,
        y: joint.point.y - second.uy * secondReach,
      };
      maskCtx.beginPath();
      maskCtx.moveTo(joint.point.x, joint.point.y);
      maskCtx.lineTo(p1.x, p1.y);
      maskCtx.lineTo(p2.x, p2.y);
      maskCtx.lineTo(p3.x, p3.y);
      maskCtx.closePath();
      maskCtx.fill();
    }
    maskCtx.restore();
    return;
  }

  maskCtx.restore();
}

function segmentVector(segment) {
  const dx = segment.b.x - segment.a.x;
  const dy = segment.b.y - segment.a.y;
  const len = Math.max(1, Math.hypot(dx, dy));
  return {
    dx,
    dy,
    len,
    ux: dx / len,
    uy: dy / len,
    nx: -dy / len,
    ny: dx / len,
  };
}

function segmentMidpoint(segment) {
  return {
    x: (segment.a.x + segment.b.x) / 2,
    y: (segment.a.y + segment.b.y) / 2,
  };
}

function widthArrowForSegment(segment) {
  const vector = segmentVector(segment);
  const mid = segmentMidpoint(segment);
  return {
    x: mid.x + vector.nx * (segment.width / 2 + 18),
    y: mid.y + vector.ny * (segment.width / 2 + 18),
    nx: vector.nx,
    ny: vector.ny,
    ux: vector.ux,
    uy: vector.uy,
    mid,
  };
}

function hitTestWidthArrow(point, threshold = 16) {
  let best = null;
  let bestDistance = threshold;
  for (const segment of selectedSegments()) {
    const arrow = widthArrowForSegment(segment);
    const d = distance(point, arrow);
    if (d < bestDistance) {
      best = { kind: "widthArrow", segment, arrow };
      bestDistance = d;
    }
  }
  return best;
}

function widthLabelGeometry(segment) {
  const mid = segmentMidpoint(segment);
  const text = `${distanceDisplayValue(segment.width)}${distanceDisplayUnit()}`;
  ctx.save();
  ctx.font = canvasFont(12);
  const width = ctx.measureText(text).width + 12;
  ctx.restore();
  return { mid, text, x: mid.x - width / 2, y: mid.y - 28, width, height: 22 };
}

function hitTestWidthLabel(point) {
  if (!showWidthLabelsInput.checked) return null;
  return state.segments.find((segment) => {
    const box = widthLabelGeometry(segment);
    return point.x >= box.x && point.x <= box.x + box.width
      && point.y >= box.y && point.y <= box.y + box.height;
  }) || null;
}

function openWidthInlineEditor(segment) {
  if (!state.selectedIds.has(segment.id)) selectOnly(segment.id);
  const box = widthLabelGeometry(segment);
  positionCanvasEditor(widthInlineEditor, { x: box.mid.x, y: box.y + box.height });
  widthInlineInput.value = String(distanceDisplayValue(segment.width));
  widthInlineUnit.textContent = distanceDisplayUnit();
  widthInlineEditor.hidden = false;
  widthInlineInput.focus();
  widthInlineInput.select();
}

function informationEdges() {
  const edges = [];
  for (const segment of state.segments) {
    const vector = segmentVector(segment);
    const offset = segment.width / 2;
    const leftA = { x: segment.a.x + vector.nx * offset, y: segment.a.y + vector.ny * offset };
    const leftB = { x: segment.b.x + vector.nx * offset, y: segment.b.y + vector.ny * offset };
    const rightA = { x: segment.a.x - vector.nx * offset, y: segment.a.y - vector.ny * offset };
    const rightB = { x: segment.b.x - vector.nx * offset, y: segment.b.y - vector.ny * offset };
    edges.push({ a: leftA, b: leftB, segmentId: segment.id });
    edges.push({ a: rightA, b: rightB, segmentId: segment.id });
    edges.push({ a: leftA, b: rightA, segmentId: segment.id });
    edges.push({ a: leftB, b: rightB, segmentId: segment.id });
  }
  return edges;
}

function nearestInformationInterface(point) {
  let best = null;
  let bestDistance = Infinity;
  for (const edge of informationEdges()) {
    const projected = nearestPointOnSegment(point, edge.a, edge.b);
    if (projected.distance < bestDistance) {
      best = { point: projected.point, segmentId: edge.segmentId, distance: projected.distance };
      bestDistance = projected.distance;
    }
  }
  return best;
}

function nearestRouteCenter(point) {
  let best = null;
  let bestDistance = Infinity;
  for (const segment of state.segments) {
    const projected = nearestPointOnSegment(point, segment.a, segment.b);
    if (projected.distance < bestDistance) {
      best = { point: projected.point, segmentId: segment.id, distance: projected.distance, ratio: projected.ratio };
      bestDistance = projected.distance;
    }
  }
  return best;
}

function pointInWalkable(point) {
  return state.segments.some((segment) => {
    const projected = nearestPointOnSegment(point, segment.a, segment.b);
    return projected.distance <= segment.width / 2;
  });
}

function nearestWalkablePoint(point) {
  if (pointInWalkable(point)) return { point: clonePoint(point), snapped: false };
  const nearest = nearestRouteCenter(point);
  return nearest ? { point: clonePoint(nearest.point), snapped: true } : null;
}

function clearComputedTestPaths() {
  state.test.optimalPath = [];
  state.test.optimalAnchors = null;
  state.test.routeResults = [];
  state.test.activeRouteId = "";
  state.test.focusedRouteId = "";
  state.test.selectedResultRouteIds = [];
  clearSimulationResults();
}

function clearSimulationResults() {
  state.test.actualPath = [];
  state.test.problemPoints = [];
  state.test.infoEvents = [];
  state.test.readSignIds = [];
  state.test.simulationLog = [];
  updateSimulationPanels();
}

function spaceById(id) {
  return state.spaces.find((space) => space.id === id) ?? null;
}

function ensureDemoPerson() {
  const existingSegment = state.segments.find((segment) => segment.id === state.test.person.demoSegmentId);
  const segment = existingSegment || state.segments[0];
  if (!segment) {
    state.test.person.demoPoint = null;
    state.test.person.demoSegmentId = null;
    return;
  }
  const mid = segmentMidpoint(segment);
  const vector = segmentVector(segment);
  state.test.person.demoPoint = mid;
  state.test.person.demoSegmentId = segment.id;
  state.test.person.heading = Math.atan2(vector.dy, vector.dx);
}

function pixelsPerMeter() {
  const samples = state.scaleCalibration?.samples || [];
  const ratios = samples
    .map((sample) => distance(sample.a, sample.b) / Number(sample.meters))
    .filter((ratio) => Number.isFinite(ratio) && ratio > 0);
  return ratios.length ? ratios.reduce((sum, ratio) => sum + ratio, 0) / ratios.length : null;
}

function positionCanvasEditor(editor, point) {
  const canvasRect = canvas.getBoundingClientRect();
  const wrapRect = canvasWrap.getBoundingClientRect();
  const cssX = (point.x / canvas.width) * canvasRect.width + canvasRect.left - wrapRect.left;
  const cssY = (point.y / canvas.height) * canvasRect.height + canvasRect.top - wrapRect.top;
  editor.style.left = `${Math.min(canvasWrap.clientWidth - 130, cssX + 12)}px`;
  editor.style.top = `${Math.min(canvasWrap.clientHeight - 48, cssY + 12)}px`;
}

function hideCanvasInlineEditors() {
  scaleInlineEditor.hidden = true;
  widthInlineEditor.hidden = true;
}

function showScaleInlineEditor() {
  const pending = state.scaleCalibration.pendingLine;
  if (!pending || state.scaleCalibration.mode !== "custom") return;
  positionCanvasEditor(scaleInlineEditor, pending.b);
  scaleInlineEditor.hidden = false;
  scaleActualDistanceInput.value = "";
  scaleActualDistanceInput.focus();
}

function setScaleCalibrationMode(mode) {
  state.scaleCalibration.mode = mode === "quick" ? "quick" : "custom";
  customScaleModeBtn.classList.toggle("active", state.scaleCalibration.mode === "custom");
  quickScaleModeBtn.classList.toggle("active", state.scaleCalibration.mode === "quick");
  customScalePanel.hidden = state.scaleCalibration.mode !== "custom";
  quickScalePanel.hidden = state.scaleCalibration.mode !== "quick";
  state.currentStart = null;
  state.pointer = null;
  state.guides = [];
  state.scaleCalibration.pendingLine = null;
  state.scaleCalibration.drawingEnabled = false;
  hideCanvasInlineEditors();
  syncScaleControls();
  redraw();
}

function renderScaleReferenceList() {
  scaleReferenceList.innerHTML = "";
  (state.scaleCalibration.samples || []).forEach((sample, index) => {
    const item = document.createElement("div");
    item.className = "scaleReferenceItem";
    const text = document.createElement("span");
    text.textContent = `参考${index + 1}：图上距离 ${distance(sample.a, sample.b).toFixed(1)}px，实际距离 ${sample.meters}m`;
    const remove = document.createElement("button");
    remove.type = "button";
    remove.title = `删除参考${index + 1}`;
    remove.setAttribute("aria-label", `删除参考${index + 1}`);
    remove.textContent = "×";
    remove.addEventListener("click", () => {
      recordDrawingChange("scale");
      state.scaleCalibration.samples = state.scaleCalibration.samples.filter((candidate) => candidate.id !== sample.id);
      clearSimulationResults();
      syncScaleControls();
      syncPersonInputs();
      updateWidthInput();
      updateStatus();
      redraw();
    });
    item.append(text, remove);
    scaleReferenceList.appendChild(item);
  });
}

function commitScaleReference(meters) {
  const pending = state.scaleCalibration.pendingLine;
  if (!pending || !Number.isFinite(Number(meters)) || Number(meters) <= 0) return false;
  const hadScale = Boolean(pixelsPerMeter());
  recordDrawingChange("scale");
  state.scaleCalibration.samples.push({
    id: `scale-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    meters: Number(meters),
    a: clonePoint(pending.a),
    b: clonePoint(pending.b),
  });
  if (!hadScale) applyScaledPersonDefaults();
  state.scaleCalibration.pendingLine = null;
  state.scaleCalibration.drawingEnabled = state.scaleCalibration.mode === "custom";
  hideCanvasInlineEditors();
  clearSimulationResults();
  syncScaleControls();
  syncPersonInputs();
  updateWidthInput();
  updateStatus();
  redraw();
  return true;
}

function applyScaledPersonDefaults() {
  const ratio = pixelsPerMeter();
  if (!ratio) return;
  state.test.person.visionDistance = 5 * ratio;
  state.test.person.normalAngle = 120;
  state.test.person.decisionAngle = 240;
}

function syncScaleControls() {
  const calibration = state.scaleCalibration || {
    mode: "custom", selectedMeters: 2, samples: [], pendingLine: null, drawingEnabled: false,
  };
  state.scaleCalibration = calibration;
  scaleButtons.forEach((button) => {
    const meters = Number(button.dataset.scaleMeters);
    button.classList.toggle("active", meters === calibration.selectedMeters);
    button.classList.toggle("measured", calibration.samples.some((sample) => sample.meters === meters));
  });
  const ratio = pixelsPerMeter();
  const count = calibration.samples.length;
  scaleInstruction.textContent = state.currentStart && state.tool === "scale"
    ? "已确定起点，请点击第二个点完成图上距离。"
    : calibration.pendingLine
      ? calibration.mode === "quick"
        ? `图上距离已绘制，按 Enter 确认实际距离 ${calibration.selectedMeters}米。`
        : "图上距离已绘制，请在鼠标旁键入实际距离并按 Enter 确认。"
      : calibration.drawingEnabled
        ? "请在图面点击两个点绘制下一组图上距离。"
      : "点击“绘制图上距离”后在平面上点击两点；可不限次数添加参考。";
  scaleResult.textContent = ratio
    ? `平均比例：1米 = ${ratio.toFixed(2)} px（${count} 个样本）`
    : "尚未标定比例尺";
  drawScaleReferenceBtn.classList.toggle("activeControl", Boolean(calibration.drawingEnabled));
  customScaleModeBtn.classList.toggle("active", calibration.mode !== "quick");
  quickScaleModeBtn.classList.toggle("active", calibration.mode === "quick");
  customScalePanel.hidden = calibration.mode === "quick";
  quickScalePanel.hidden = calibration.mode !== "quick";
  renderScaleReferenceList();
}

function syncPersonInputs() {
  const person = state.test.person;
  const ratio = pixelsPerMeter();
  if (ratio) {
    const displayMeters = clamp(person.visionDistance / ratio, 0, 25);
    person.visionDistance = displayMeters * ratio;
    visionDistanceRange.min = "0";
    visionDistanceRange.max = "25";
    visionDistanceRange.step = "0.1";
    visionDistanceValue.min = "0";
    visionDistanceValue.max = "25";
    visionDistanceValue.step = "0.1";
    visionDistanceRange.value = displayMeters.toFixed(1);
    visionDistanceValue.value = displayMeters.toFixed(1);
    visionDistanceUnit.textContent = "m";
  } else {
    visionDistanceRange.min = "0";
    visionDistanceRange.max = "360";
    visionDistanceRange.step = "1";
    visionDistanceValue.min = "0";
    visionDistanceValue.max = "360";
    visionDistanceValue.step = "1";
    visionDistanceRange.value = String(person.visionDistance);
    visionDistanceValue.value = String(person.visionDistance);
    visionDistanceUnit.textContent = "px";
  }
  normalAngleRange.value = String(person.normalAngle);
  normalAngleValue.value = String(person.normalAngle);
  decisionAngleRange.value = String(person.decisionAngle);
  decisionAngleValue.value = String(person.decisionAngle);
}

function setPersonParam(key, value) {
  if (key === "visionDistance" && pixelsPerMeter()) {
    const ratio = pixelsPerMeter();
    if (!Number.isFinite(Number(value))) return;
    state.test.person.visionDistance = clamp(Number(value), 0, 25) * ratio;
    clearSimulationResults();
    syncPersonInputs();
    updateStatus();
    redraw();
    return;
  }
  const limits = {
    visionDistance: [0, 360],
    normalAngle: [30, 360],
    decisionAngle: [60, 360],
  }[key];
  if (!Number.isFinite(Number(value))) return;
  const next = clamp(Number(value), limits[0], limits[1]);
  state.test.person[key] = key === "decisionAngle"
    ? Math.max(next, state.test.person.normalAngle)
    : next;
  if (key === "normalAngle" && state.test.person.decisionAngle < state.test.person.normalAngle) {
    state.test.person.decisionAngle = state.test.person.normalAngle;
  }
  clearSimulationResults();
  syncPersonInputs();
  updateStatus();
  redraw();
}

function setTestStartMode(mode) {
  const changed = state.test.startMode !== mode;
  state.test.startMode = mode;
  freeStartMode.classList.toggle("active", mode === "free");
  spaceStartMode.classList.toggle("active", mode === "space");
  testStartSelect.disabled = mode !== "space";
  testStartDropdown.hidden = mode !== "space";
  startMultiSelectInput.closest(".selectionModeToggle").hidden = mode !== "space";
  if (mode === "free") {
    state.test.startSpaceIds = [];
    state.test.startSpaceId = "";
    testStartSelect.value = "";
    if (state.test.start?.source === "space") state.test.start = null;
  } else if (state.test.start?.source === "free") {
    state.test.start = null;
  }
  if (changed) clearComputedTestPaths();
  updateStatus();
  redraw();
}

function setTestSelectionMode(role, multiple) {
  const key = role === "start" ? "startMultiSelect" : "endMultiSelect";
  const idsKey = role === "start" ? "startSpaceIds" : "endSpaceIds";
  state.test[key] = Boolean(multiple);
  if (!state.test[key] && state.test[idsKey].length > 1) {
    state.test[idsKey] = state.test[idsKey].slice(0, 1);
  }
  if (role === "start") {
    startMultiSelectInput.checked = state.test.startMultiSelect;
    state.test.startSpaceId = state.test.startSpaceIds[0] || "";
    const first = spaceById(state.test.startSpaceId);
    state.test.start = first
      ? { source: "space", spaceId: first.id, point: clonePoint(first.point) }
      : null;
  } else {
    endMultiSelectInput.checked = state.test.endMultiSelect;
    state.test.endSpaceId = state.test.endSpaceIds[0] || "";
  }
  clearComputedTestPaths();
  refreshTestSpaceOptions();
  updateStatus();
  redraw();
}

function setFreeTestStart(point) {
  const snap = nearestWalkablePoint(point);
  if (!snap) {
    setStatus("还没有可行走范围。请先画动线、调宽度并确认行走范围。");
    return;
  }
  state.test.start = { source: "free", point: snap.point };
  state.test.startSpaceIds = [];
  state.test.startSpaceId = "";
  testStartSelect.value = "";
  clearComputedTestPaths();
  setStatus(snap.snapped ? "起点已自动吸附到最近的行走范围内。" : "已设置自由起点。");
  computeOptimalPath({ silent: true });
  redraw();
}

function setSpaceTestStart(spaceId) {
  const space = spaceById(spaceId);
  if (!space) {
    state.test.start = null;
    state.test.startSpaceId = "";
    testStartSelect.value = "";
    updateStatus();
    redraw();
    return;
  }
  state.test.start = { source: "space", spaceId: space.id, point: clonePoint(space.point) };
  state.test.startSpaceIds = [space.id];
  state.test.startSpaceId = space.id;
  testStartSelect.value = space.id;
  clearComputedTestPaths();
  computeOptimalPath({ silent: true });
  updateStatus();
  redraw();
}

function setTestEnd(spaceId) {
  const space = spaceById(spaceId);
  state.test.endSpaceId = space ? space.id : "";
  state.test.endSpaceIds = space ? [space.id] : [];
  testEndSelect.value = state.test.endSpaceId;
  clearComputedTestPaths();
  computeOptimalPath({ silent: true });
  updateStatus();
  redraw();
}

function clearTestPoints() {
  state.test.start = null;
  state.test.startSpaceId = "";
  state.test.startSpaceIds = [];
  state.test.endSpaceId = "";
  state.test.endSpaceIds = [];
  clearComputedTestPaths();
  testStartSelect.value = "";
  testEndSelect.value = "";
  refreshTestSpaceOptions();
  updateStatus();
  redraw();
}

function graphKey(point) {
  return `${Math.round(point.x * 1000) / 1000},${Math.round(point.y * 1000) / 1000}`;
}

function addGraphPoint(nodes, point) {
  const key = graphKey(point);
  if (!nodes.has(key)) nodes.set(key, clonePoint(point));
  return key;
}

function addGraphEdge(graph, fromKey, toKey, weight, routeWidth = 0, segmentId = "", edgeType = "route") {
  if (fromKey === toKey) return;
  if (!graph.has(fromKey)) graph.set(fromKey, []);
  if (!graph.has(toKey)) graph.set(toKey, []);
  graph.get(fromKey).push({ key: toKey, weight, routeWidth, segmentId, edgeType });
  graph.get(toKey).push({ key: fromKey, weight, routeWidth, segmentId, edgeType });
}

function removeGraphEdge(graph, fromKey, toKey) {
  if (graph.has(fromKey)) graph.set(fromKey, graph.get(fromKey).filter((edge) => edge.key !== toKey));
  if (graph.has(toKey)) graph.set(toKey, graph.get(toKey).filter((edge) => edge.key !== fromKey));
}

function navigableGraphEdges(graph, key) {
  const edges = graph.get(key) || [];
  const routeEdges = edges.filter((edge) => edge.edgeType !== "sign-access");
  return routeEdges.length ? routeEdges : edges;
}

function dijkstra(graph, startKey, endKey) {
  const distances = new Map([[startKey, 0]]);
  const previous = new Map();
  const pending = new Set(graph.keys());

  while (pending.size) {
    let current = null;
    let best = Infinity;
    for (const key of pending) {
      const value = distances.get(key) ?? Infinity;
      if (value < best) {
        best = value;
        current = key;
      }
    }
    if (!current || current === endKey) break;
    pending.delete(current);
    for (const edge of graph.get(current) || []) {
      if (!pending.has(edge.key)) continue;
      const next = best + edge.weight;
      if (next < (distances.get(edge.key) ?? Infinity)) {
        distances.set(edge.key, next);
        previous.set(edge.key, current);
      }
    }
  }

  if (startKey !== endKey && !previous.has(endKey)) return null;
  const path = [endKey];
  while (path[0] !== startKey) path.unshift(previous.get(path[0]));
  return path;
}

function routeGraphAnchors(anchorA = null, anchorB = null, extraAnchors = []) {
  const nodes = new Map();
  const graph = new Map();
  const walkableConnectors = [];
  const cuts = new Map(state.segments.map((segment) => [segment.id, [
    { ratio: 0, point: segment.a },
    { ratio: 1, point: segment.b },
  ]]));

  for (let i = 0; i < state.segments.length; i += 1) {
    for (let j = i + 1; j < state.segments.length; j += 1) {
      const first = state.segments[i];
      const second = state.segments[j];
      const hit = lineIntersection(first.a, first.b, second.a, second.b);
      if (hit) {
        cuts.get(first.id).push({ ratio: nearestPointOnSegment(hit, first.a, first.b).ratio, point: hit });
        cuts.get(second.id).push({ ratio: nearestPointOnSegment(hit, second.a, second.b).ratio, point: hit });
        continue;
      }

      const connectionLimit = ((first.width || defaultWidths.secondary) + (second.width || defaultWidths.secondary)) / 2;
      const candidates = [
        { a: first.a, aSegment: first, aRatio: 0, bSegment: second },
        { a: first.b, aSegment: first, aRatio: 1, bSegment: second },
        { a: second.a, aSegment: second, aRatio: 0, bSegment: first },
        { a: second.b, aSegment: second, aRatio: 1, bSegment: first },
      ]
        .map((candidate) => {
          const projected = nearestPointOnSegment(candidate.a, candidate.bSegment.a, candidate.bSegment.b);
          return {
            ...candidate,
            b: projected.point,
            bRatio: projected.ratio,
            joinsInterior: projected.ratio > 0.001 && projected.ratio < 0.999,
            gap: projected.distance,
          };
        })
        .filter((candidate) => candidate.gap <= connectionLimit)
        .filter((candidate) => lineOfSightWithinWalkable(candidate.a, candidate.b))
        .sort((a, b) => Number(b.joinsInterior) - Number(a.joinsInterior) || a.gap - b.gap);
      const connector = candidates[0];
      if (!connector) continue;
      cuts.get(connector.aSegment.id).push({ ratio: connector.aRatio, point: connector.a });
      cuts.get(connector.bSegment.id).push({ ratio: connector.bRatio, point: connector.b });
      walkableConnectors.push(connector);
    }
  }

  for (const anchor of [anchorA, anchorB, ...extraAnchors]) {
    if (!anchor?.segmentId || !cuts.has(anchor.segmentId)) continue;
    cuts.get(anchor.segmentId).push({ ratio: anchor.ratio, point: anchor.point });
  }

  for (const segment of state.segments) {
    const ordered = cuts.get(segment.id)
      .filter((cut) => cut.ratio >= -0.0001 && cut.ratio <= 1.0001)
      .sort((a, b) => a.ratio - b.ratio);
    const unique = [];
    for (const cut of ordered) {
      if (!unique.some((item) => distance(item.point, cut.point) < 0.5)) unique.push(cut);
    }
    for (let i = 0; i < unique.length - 1; i += 1) {
      const from = unique[i].point;
      const to = unique[i + 1].point;
      const fromKey = addGraphPoint(nodes, from);
      const toKey = addGraphPoint(nodes, to);
      addGraphEdge(graph, fromKey, toKey, distance(from, to), segment.width || 0, segment.id);
    }
  }

  for (const connector of walkableConnectors) {
    const fromKey = addGraphPoint(nodes, connector.a);
    const toKey = addGraphPoint(nodes, connector.b);
    addGraphEdge(
      graph,
      fromKey,
      toKey,
      connector.gap,
      Math.min(connector.aSegment.width || 0, connector.bSegment.width || 0),
      `${connector.aSegment.id}|${connector.bSegment.id}`,
    );
    if (connector.joinsInterior) {
      const halfWidth = (connector.bSegment.width || defaultWidths.secondary) / 2;
      for (const endpoint of [connector.bSegment.a, connector.bSegment.b]) {
        if (distance(connector.b, endpoint) <= halfWidth + 1) {
          removeGraphEdge(graph, toKey, graphKey(endpoint));
        }
      }
    }
  }

  return { nodes, graph };
}

function buildRouteGraph(anchorA, anchorB, extraAnchors = []) {
  return routeGraphAnchors(anchorA, anchorB, extraAnchors);
}

function insertGraphAnchor(nodes, graph, anchor) {
  if (!anchor?.segmentId) return "";
  const segment = segmentById(anchor.segmentId);
  if (!segment) return nearestGraphKey(nodes, anchor.point);
  const key = addGraphPoint(nodes, anchor.point);
  if (!graph.has(key)) graph.set(key, []);
  const neighbors = [
    { ratio: 0, point: segment.a },
    { ratio: 1, point: segment.b },
  ];
  for (const [nodeKey, node] of nodes.entries()) {
    if (nodeKey === key) continue;
    const projected = nearestPointOnSegment(node, segment.a, segment.b);
    if (projected.distance < 0.75) {
      neighbors.push({ ratio: projected.ratio, point: node });
    }
  }
  const ordered = neighbors
    .filter((item) => item.ratio >= -0.0001 && item.ratio <= 1.0001)
    .sort((a, b) => a.ratio - b.ratio);
  const anchorRatio = nearestPointOnSegment(anchor.point, segment.a, segment.b).ratio;
  const before = ordered.filter((item) => item.ratio < anchorRatio - 0.0001).at(-1);
  const after = ordered.find((item) => item.ratio > anchorRatio + 0.0001);
  [before, after].filter(Boolean).forEach((neighbor) => {
    const neighborKey = addGraphPoint(nodes, neighbor.point);
    addGraphEdge(graph, key, neighborKey, distance(anchor.point, neighbor.point), segment.width || 0, segment.id);
  });
  return key;
}

function routeAnchorForSignReturn(observerPoint, signPoint, heading, preferredSegmentId = "") {
  const preferredIds = new Set(String(preferredSegmentId || "").split("|").filter(Boolean));
  const candidates = state.segments.map((segment) => {
    const observerProjection = nearestPointOnSegment(observerPoint, segment.a, segment.b);
    const signProjection = nearestPointOnSegment(signPoint, segment.a, segment.b);
    const segmentHeading = directionTo(segment.a, segment.b);
    const headingScore = Math.min(
      angleDifference(heading, segmentHeading),
      angleDifference(heading, segmentHeading + Math.PI),
    );
    return {
      point: signProjection.point,
      segmentId: segment.id,
      distance: signProjection.distance,
      ratio: signProjection.ratio,
      observerDistance: observerProjection.distance,
      headingScore,
      preferred: preferredIds.has(segment.id),
    };
  });
  const nearby = candidates.filter((candidate) => {
    const segment = segmentById(candidate.segmentId);
    return candidate.observerDistance <= (segment?.width || defaultWidths.secondary) / 2 + 4;
  });
  return (nearby.length ? nearby : candidates)
    .sort((a, b) => Number(b.preferred) - Number(a.preferred)
      || a.headingScore - b.headingScore
      || a.observerDistance - b.observerDistance
      || a.distance - b.distance)[0] || null;
}

function insertSignReadNode(nodes, graph, sign, returnAnchor = null) {
  const routeAnchor = returnAnchor || signRouteAnchor(sign);
  if (!routeAnchor) return "";
  const routeKey = insertGraphAnchor(nodes, graph, routeAnchor);
  const signKey = addGraphPoint(nodes, sign.point);
  if (!graph.has(signKey)) graph.set(signKey, []);
  if (routeKey) {
    const segment = segmentById(routeAnchor.segmentId);
    addGraphEdge(graph, signKey, routeKey, distance(sign.point, routeAnchor.point), segment?.width || 0, routeAnchor.segmentId, "sign-access");
  }
  return signKey;
}

function wallSignForwardExit(nodes, graph, sign, guidance, returnAnchor = null) {
  if (!sign || !guidance || guidance.action !== "straight" || !["wall", "film"].includes(sign.installType)) {
    return null;
  }
  const routeWidth = segmentById(returnAnchor?.segmentId)?.width || defaultWidths.secondary;
  const scale = pixelsPerMeter();
  const maxSideDistance = scale ? scale * 2 : Math.max(80, routeWidth * 2);
  const forward = {
    x: Math.cos(guidance.readHeading),
    y: Math.sin(guidance.readHeading),
  };
  const right = { x: -forward.y, y: forward.x };
  // The wall interface is perpendicular to the person's stable reading heading.
  // Using that heading directly avoids selecting an internal rectangle edge at route junctions.
  const tangent = right;
  const openingProbeDistance = Math.max(6, Math.min(18, routeWidth / 4));
  const scanStep = Math.max(2, Math.min(6, maxSideDistance / 100));
  const largestRouteHalfWidth = state.segments.reduce(
    (largest, segment) => Math.max(largest, (segment.width || routeWidth) / 2),
    routeWidth / 2,
  );
  // The opening itself must be within 2 m, while the route centerline intersection
  // may sit up to half a route width beyond the opening boundary.
  const intersectionSearchDistance = maxSideDistance + largestRouteHalfWidth + scanStep * 2;
  const rayEnds = [
    { direction: -1, side: "left" },
    { direction: 1, side: "right" },
  ].map((ray) => ({
    ...ray,
    point: {
      x: sign.point.x + tangent.x * intersectionSearchDistance * ray.direction,
      y: sign.point.y + tangent.y * intersectionSearchDistance * ray.direction,
    },
  })).map((ray) => {
    let openingDistance = null;
    for (let sideDistance = scanStep; sideDistance <= maxSideDistance + 0.001; sideDistance += scanStep) {
      const interfacePoint = {
        x: sign.point.x + tangent.x * sideDistance * ray.direction,
        y: sign.point.y + tangent.y * sideDistance * ray.direction,
      };
      const pointBeyondInterface = {
        x: interfacePoint.x + forward.x * openingProbeDistance,
        y: interfacePoint.y + forward.y * openingProbeDistance,
      };
      if (pointInWalkable(pointBeyondInterface)) {
        openingDistance = sideDistance;
        break;
      }
    }
    return { ...ray, openingDistance };
  });
  const candidates = [];
  for (const ray of rayEnds) {
    if (!Number.isFinite(ray.openingDistance)) continue;
    for (const segment of state.segments) {
      const segmentHeading = directionTo(segment.a, segment.b);
      const forwardHeadingScore = Math.min(
        angleDifference(guidance.targetHeading, segmentHeading),
        angleDifference(guidance.targetHeading, segmentHeading + Math.PI),
      );
      if (forwardHeadingScore > Math.PI / 3) continue;
      const point = lineIntersection(sign.point, ray.point, segment.a, segment.b);
      if (!point) continue;
      const sideDistance = distance(sign.point, point);
      const maximumIntersectionDistance = maxSideDistance + (segment.width || routeWidth) / 2 + scanStep * 2;
      if (sideDistance <= 1 || sideDistance > maximumIntersectionDistance) continue;
      const openingReach = (segment.width || routeWidth) / 2 + scanStep * 2;
      if (Math.abs(sideDistance - ray.openingDistance) > openingReach) continue;
      const dx = point.x - sign.point.x;
      const dy = point.y - sign.point.y;
      const sideOffset = dx * right.x + dy * right.y;
      candidates.push({
        point,
        sideOffset,
        distance: sideDistance,
        segmentId: segment.id,
        routeWidth: segment.width || 0,
        forwardHeadingScore,
        openingDistance: ray.openingDistance,
        exitSide: ray.side,
      });
    }
  }

  const destination = candidates.sort((a, b) => a.openingDistance - b.openingDistance
    || a.distance - b.distance
    || a.forwardHeadingScore - b.forwardHeadingScore
    || b.routeWidth - a.routeWidth)[0];
  if (!destination) return null;
  const segment = segmentById(destination.segmentId);
  const projection = nearestPointOnSegment(destination.point, segment.a, segment.b);
  return {
    ...destination,
    key: insertGraphAnchor(nodes, graph, {
      point: destination.point,
      segmentId: destination.segmentId,
      ratio: projection.ratio,
    }),
  };
}

function connectGuidedRouteFromSign(nodes, graph, signKey, sign, guidance, returnAnchor = null) {
  if (!signKey || !sign || !guidance) return "";
  if (guidance.turnSequence?.length) return "";
  const sideExit = wallSignForwardExit(nodes, graph, sign, guidance, returnAnchor);
  if (sideExit) {
    const segment = segmentById(sideExit.segmentId);
    addGraphEdge(
      graph,
      signKey,
      sideExit.key,
      sideExit.distance,
      segment?.width || sideExit.routeWidth || 0,
      sideExit.segmentId,
      sideExit.exitSide === "left" ? "sign-forward-exit-left" : "sign-forward-exit-right",
    );
    return sideExit.key;
  }
  if (guidance.action === "straight" && ["wall", "film"].includes(sign.installType)) return "";
  const maxDistance = Math.max(120, state.test.person.visionDistance);
  const candidates = state.segments.map((segment) => {
    const projected = nearestPointOnSegment(sign.point, segment.a, segment.b);
    const travelHeading = directionTo(sign.point, projected.point);
    const targetScore = angleDifference(guidance.targetHeading, travelHeading);
    const segmentHeading = directionTo(segment.a, segment.b);
    const routeAlignment = Math.min(
      angleDifference(guidance.targetHeading, segmentHeading),
      angleDifference(guidance.targetHeading, segmentHeading + Math.PI),
    );
    return {
      point: projected.point,
      segmentId: segment.id,
      distance: projected.distance,
      ratio: projected.ratio,
      targetScore,
      routeAlignment,
      isReturnSegment: segment.id === returnAnchor?.segmentId,
    };
  }).filter((candidate) => candidate.distance > 1
    && candidate.distance <= maxDistance
    && candidate.targetScore <= Math.PI / 3
    && lineOfSightWithinWalkable(sign.point, candidate.point));

  const aligned = candidates.filter((candidate) => candidate.routeAlignment <= Math.PI / 3);
  const pool = aligned.length ? aligned : candidates;
  const destination = pool.sort((a, b) => a.distance - b.distance
    || a.targetScore - b.targetScore
    || a.routeAlignment - b.routeAlignment
    || Number(a.isReturnSegment) - Number(b.isReturnSegment))[0];
  if (!destination) return "";

  const routeKey = insertGraphAnchor(nodes, graph, destination);
  if (!routeKey || routeKey === signKey) return "";
  const segment = segmentById(destination.segmentId);
  addGraphEdge(
    graph,
    signKey,
    routeKey,
    distance(sign.point, destination.point),
    segment?.width || 0,
    destination.segmentId,
    "sign-guidance",
  );
  return routeKey;
}

function hangingFaceReadHeading(sign, face = "front") {
  const frontHeading = sign.hangingFacing === "leftRight" ? Math.PI / 2 : 0;
  return face === "back" ? frontHeading + Math.PI : frontHeading;
}

function destinationFaceForSign(sign, endSpace) {
  if (sign?.installType !== "hanging") return "front";
  return signActionsForDestination(sign, endSpace, "front").length ? "front"
    : signActionsForDestination(sign, endSpace, "back").length ? "back"
      : "";
}

function signReadHeading(sign, fallbackHeading = 0, face = "front") {
  if (sign.installType === "hanging") return hangingFaceReadHeading(sign, face);
  // Wall, film and standing signs keep their own panel orientation. This is
  // especially important for paired signs: the effective sign, not the sign
  // that first entered view, defines the person's stable reading heading.
  if (["wall", "film", "standing"].includes(sign.installType) && Number.isFinite(sign.angle)) {
    return sign.angle + Math.PI;
  }
  const routeAnchor = signRouteAnchor(sign);
  if (routeAnchor && distance(routeAnchor.point, sign.point) > 2) {
    return directionTo(routeAnchor.point, sign.point);
  }
  return fallbackHeading;
}

function signRouteAnchor(sign) {
  const preferredSegment = segmentById(sign?.segmentId);
  if (preferredSegment) {
    const projected = nearestPointOnSegment(sign.point, preferredSegment.a, preferredSegment.b);
    return { ...projected, segmentId: preferredSegment.id };
  }
  return nearestRouteCenter(sign?.point);
}

function signPairRouteAnchor(sign) {
  return signRouteAnchor(sign);
}

function signPanelReadHeading(sign) {
  const routeAnchor = signRouteAnchor(sign);
  if (sign?.installType === "hanging") return hangingFaceReadHeading(sign, "front");
  if (routeAnchor && distance(routeAnchor.point, sign.point) > 1) {
    return directionTo(routeAnchor.point, sign.point);
  }
  return sign?.angle || 0;
}

function segmentsBelongToSameRoute(leftSegment, rightSegment, leftAnchor, rightAnchor) {
  if (!leftSegment || !rightSegment || !leftAnchor || !rightAnchor) return false;
  if (leftSegment.id === rightSegment.id) return true;
  const leftHeading = directionTo(leftSegment.a, leftSegment.b);
  const rightHeading = directionTo(rightSegment.a, rightSegment.b);
  const axisDifference = Math.min(
    angleDifference(leftHeading, rightHeading),
    Math.abs(Math.PI - angleDifference(leftHeading, rightHeading)),
  );
  if (axisDifference > Math.PI / 12) return false;
  const routeWidth = Math.max(leftSegment.width || 0, rightSegment.width || 0, 1);
  return distance(leftAnchor.point, rightAnchor.point) < routeWidth * 2;
}

function pairedSignFor(sign) {
  const routeAnchor = signPairRouteAnchor(sign);
  const segment = routeAnchor ? segmentById(routeAnchor.segmentId) : null;
  if (!sign || !routeAnchor || !segment) return null;
  const facing = signPanelReadHeading(sign);
  return state.signs
    .filter((candidate) => candidate.id !== sign.id)
    .map((candidate) => ({
      sign: candidate,
      routeAnchor: signPairRouteAnchor(candidate),
    }))
    .map(({ sign: candidate, routeAnchor: candidateAnchor }) => ({
      sign: candidate,
      routeAnchor: candidateAnchor,
      segment: candidateAnchor ? segmentById(candidateAnchor.segmentId) : null,
      distance: distance(sign.point, candidate.point),
      facingDifference: angleDifference(facing, signPanelReadHeading(candidate)),
    }))
    .filter((candidate) => segmentsBelongToSameRoute(segment, candidate.segment, routeAnchor, candidate.routeAnchor))
    .filter((candidate) => {
      const routeWidth = Math.max(segment.width || 0, candidate.segment?.width || 0, 1);
      const parallelScore = Math.min(
        candidate.facingDifference,
        Math.abs(Math.PI - candidate.facingDifference),
      );
      return candidate.distance < routeWidth * 2 && parallelScore <= Math.PI / 6;
    })
    .sort((a, b) => a.distance - b.distance || a.facingDifference - b.facingDifference)[0]?.sign || null;
}

function signInspectionContext(sign, endSpace) {
  const pair = pairedSignFor(sign);
  const signs = pair ? [sign, pair] : [sign];
  const matchedSign = signs.find((candidate) => signMatchesDestination(candidate, endSpace));
  const effectiveSign = matchedSign || sign;
  return {
    detectedSign: sign,
    // The first visible sign only triggers the grouped inspection. Once the
    // destination is matched, this sign exclusively defines the stable point,
    // reading heading and subsequent direction decision.
    decisionSign: matchedSign || null,
    effectiveSign,
    signs,
    hasEffectiveInformation: Boolean(matchedSign),
  };
}

function decisionSignForInspection(context) {
  return context.decisionSign || context.effectiveSign || context.detectedSign;
}

function signInspectionGroupLabel(context) {
  return context.signs.length > 1
    ? `${context.signs.map(signNumberLabel).join("与")}（同一标识）`
    : signNumberLabel(context.detectedSign);
}

function groupedSignDiscoveryText(context) {
  if (context.signs.length === 1) return `发现${signNumberLabel(context.detectedSign)}并走近查看`;
  if (context.hasEffectiveInformation) {
    return `发现${signInspectionGroupLabel(context)}，同时读取两个标识的信息，并转向含有有效信息的${signNumberLabel(decisionSignForInspection(context))}`;
  }
  return `发现${signInspectionGroupLabel(context)}，同时读取两个标识的信息`;
}

function normalizedSpaceName(space) {
  return String(space?.name || "").trim();
}

function equivalentDestinationSpaces(endSpace) {
  if (!endSpace) return [];
  const name = normalizedSpaceName(endSpace);
  if (!name) return [endSpace];
  const matches = state.spaces.filter((space) => normalizedSpaceName(space) === name);
  const regularSpaces = matches.length ? matches : [endSpace];
  const sourceIds = new Set(regularSpaces.map((space) => space.id));
  const equivalentPoints = state.spaceEquivalentPoints
    .filter((point) => sourceIds.has(point.spaceId))
    .map((point) => ({
      ...endSpace,
      id: `equivalent-${point.id}`,
      point: point.point,
      segmentId: point.segmentId,
      sourceSpaceId: point.spaceId,
      isEquivalentPoint: true,
    }));
  return [...regularSpaces, ...equivalentPoints];
}

function calculatePathToSingleDestination(startPoint, endSpace) {
  if (!startPoint || !endSpace || !state.segments.length) return null;
  const startAnchor = nearestRouteCenter(startPoint);
  const endAnchor = nearestRouteCenter(endSpace.point);
  if (!startAnchor || !endAnchor) return null;

  const { nodes, graph } = buildRouteGraph(startAnchor, endAnchor);
  const startKey = addGraphPoint(nodes, startAnchor.point);
  const endKey = addGraphPoint(nodes, endAnchor.point);
  if (!graph.has(startKey)) graph.set(startKey, []);
  if (!graph.has(endKey)) graph.set(endKey, []);
  const pathKeys = dijkstra(graph, startKey, endKey);
  if (!pathKeys) return null;
  return {
    path: pathKeys.map((key) => clonePoint(nodes.get(key))),
    anchors: { start: clonePoint(startAnchor.point), end: clonePoint(endAnchor.point) },
    destinationSpace: endSpace,
  };
}

function calculateOptimalPath(startPoint, endSpace) {
  // PRD and failure thresholds must always use the selected formal destination
  // as their baseline. Equivalent points remain simulation success targets only.
  return calculatePathToSingleDestination(startPoint, endSpace);
}

function routeStartPrefix(startIndex) {
  const normalizedIndex = Math.max(0, Number(startIndex) || 0);
  const block = Math.floor(normalizedIndex / 52);
  const indexInBlock = normalizedIndex % 52;
  const isUppercase = indexInBlock < 26;
  const letterIndex = indexInBlock % 26;
  const baseCode = isUppercase ? 65 : 97;
  return `${String.fromCharCode(baseCode + letterIndex)}${"'".repeat(block)}`;
}

function routeTestCases() {
  const starts = state.test.startMode === "free" && state.test.start?.point
    ? [{ source: "free", point: clonePoint(state.test.start.point), spaceId: "" }]
    : (state.test.startSpaceIds || []).map((spaceId) => {
        const space = spaceById(spaceId);
        return space ? { source: "space", point: clonePoint(space.point), spaceId } : null;
      }).filter(Boolean);
  const ends = (state.test.endSpaceIds || [])
    .map(spaceById)
    .filter(Boolean);
  return starts.flatMap((start, startIndex) => ends.map((endSpace, endIndex) => ({
    id: `route-${startIndex + 1}-${endIndex + 1}`,
    label: `${routeStartPrefix(startIndex)}${endIndex + 1}`,
    start,
    endSpaceId: endSpace.id,
  })));
}

function syncActiveRouteResult(result) {
  if (!result) return;
  state.test.activeRouteId = result.id;
  state.test.start = structuredClone(result.start);
  state.test.startSpaceId = result.start.spaceId || "";
  state.test.endSpaceId = result.endSpaceId;
  state.test.optimalPath = structuredClone(result.optimalPath || []);
  state.test.optimalAnchors = structuredClone(result.optimalAnchors || null);
  state.test.actualPath = structuredClone(result.actualPath || []);
  state.test.problemPoints = structuredClone(result.problemPoints || []);
  state.test.infoEvents = structuredClone(result.infoEvents || []);
  state.test.simulationLog = structuredClone(result.simulationLog || []);
  state.test.readSignIds = [...(result.readSignIds || [])];
}

function computeOptimalPath(options = {}) {
  const cases = routeTestCases();
  if (!cases.length) {
    if (!options.silent) setStatus("请先设置至少一个起点和终点，并确保已经绘制动线。");
    return false;
  }
  const results = cases.map((testCase) => {
    const optimal = calculateOptimalPath(testCase.start.point, spaceById(testCase.endSpaceId));
    return {
      ...testCase,
      optimalPath: optimal?.path || [],
      optimalAnchors: optimal?.anchors || null,
      actualPath: [],
      problemPoints: [],
      infoEvents: [],
      simulationLog: [],
      readSignIds: [],
      success: false,
      simulated: false,
    };
  });
  state.test.routeResults = results;
  state.test.selectedResultRouteIds = [];
  state.test.focusedRouteId = "";
  const first = results[0];
  syncActiveRouteResult(first);
  clearSimulationResults();
  const connected = results.filter((result) => result.optimalPath.length).length;
  if (!connected) {
    if (!options.silent) setStatus("所选起点和终点所在动线尚未连通，暂时无法生成最优路径。");
    redraw();
    return false;
  }

  syncStartHeadingControls();
  if (!options.silent) setStatus(`已生成 ${connected} 条沿动线的红色最优路径。`);
  redraw();
  return true;
}

function angleDifference(a, b) {
  let diff = Math.abs(a - b) % (Math.PI * 2);
  if (diff > Math.PI) diff = Math.PI * 2 - diff;
  return diff;
}

function isPointInView(origin, heading, target, angleDeg, maxDistance) {
  const d = distance(origin, target);
  if (d > maxDistance) return false;
  if (d < 1) return true;
  const angle = Math.atan2(target.y - origin.y, target.x - origin.x);
  return angleDifference(heading, angle) <= (angleDeg * Math.PI) / 360;
}

function lineOfSightWithinWalkable(origin, target) {
  const length = distance(origin, target);
  if (length < 2) return true;
  const steps = Math.max(2, Math.ceil(length / 4));
  for (let index = 1; index < steps; index += 1) {
    const ratio = index / steps;
    const point = {
      x: origin.x + (target.x - origin.x) * ratio,
      y: origin.y + (target.y - origin.y) * ratio,
    };
    if (!pointInWalkable(point)) return false;
  }
  return true;
}

function signMatchesDestination(sign, endSpace) {
  if (!sign || !endSpace) return false;
  if (signActionsForDestination(sign, endSpace).length) return true;
  const text = `${sign.text || ""} ${sign.customText || ""}`.trim();
  const equivalentIds = new Set(equivalentDestinationSpaces(endSpace).map((space) => space.id));
  return equivalentIds.has(sign.targetSpaceId) || Boolean(text && (text.includes(endSpace.name) || endSpace.name.includes(text)));
}

function nearbyInvalidSignIgnoreDistance(sign) {
  const scale = pixelsPerMeter();
  if (scale) return scale * 3;
  const anchor = signRouteAnchor(sign);
  const routeWidth = segmentById(anchor?.segmentId)?.width || defaultWidths.secondary;
  return Math.max(120, routeWidth * 3);
}

function shouldIgnoreNearbyInvalidSign(sign, endSpace, navigationState = null) {
  const validSignPoint = navigationState?.lastValidSignPoint;
  if (!sign || !validSignPoint || signMatchesDestination(sign, endSpace)) return false;
  return distance(validSignPoint, sign.point) <= nearbyInvalidSignIgnoreDistance(sign);
}

function visibleDestinationSigns(point, heading, angleDeg, endSpace) {
  return state.signs.filter((sign) => (
    signMatchesDestination(sign, endSpace)
    && readableSignInView(point, heading, angleDeg, sign)
  ));
}

function destinationSpaceVisible(point, heading, angleDeg, endSpace) {
  return equivalentDestinationSpaces(endSpace)
    .filter((space) => space?.point)
    .filter((space) => isPointInView(point, heading, space.point, angleDeg, state.test.person.visionDistance))
    .filter((space) => lineOfSightWithinWalkable(point, space.point))
    .sort((a, b) => distance(point, a.point) - distance(point, b.point))[0] || null;
}

function destinationEncounterAlongStep(from, to, endSpace) {
  const detectDistance = Math.min(state.test.person.visionDistance, 90);
  return equivalentDestinationSpaces(endSpace)
    .map((space) => ({ space, projected: nearestPointOnSegment(space.point, from, to) }))
    .filter(({ projected }) => projected.ratio >= 0 && projected.ratio <= 1)
    .filter(({ space, projected }) => projected.distance <= detectDistance
      && lineOfSightWithinWalkable(projected.point, space.point))
    .sort((a, b) => a.projected.ratio - b.projected.ratio || a.projected.distance - b.projected.distance)
    .map(({ space, projected }) => ({ space, point: projected.point, ratio: projected.ratio }))[0] || null;
}

function visibleSigns(point, heading, angleDeg) {
  return state.signs.filter((sign) => (
    readableSignInView(point, heading, angleDeg, sign)
  ));
}

function signPanelVisibleToHeading(sign, heading) {
  if (sign.installType === "hanging") {
    const frontHeading = hangingFaceReadHeading(sign, "front");
    const allowed = [frontHeading, frontHeading + Math.PI];
    return allowed.some((angle) => angleDifference(heading, angle) <= Math.PI / 3);
  }
  if (["wall", "film"].includes(sign.installType)) {
    return angleDifference(heading, (sign.angle || 0) + Math.PI) <= (Math.PI * 2) / 3;
  }
  return true;
}

function readableSignInView(point, heading, angleDeg, sign) {
  if (!sign) return false;
  if (!isPointInView(point, heading, sign.point, angleDeg, state.test.person.visionDistance)) return false;
  if (!lineOfSightWithinWalkable(point, sign.point)) return false;
  return signPanelVisibleToHeading(sign, directionTo(point, sign.point));
}

function relativeActionLabel(fromHeading, toHeading) {
  let diff = (toHeading - fromHeading + Math.PI * 3) % (Math.PI * 2) - Math.PI;
  if (Math.abs(diff) <= Math.PI / 4) return "向前";
  if (Math.abs(diff) >= (Math.PI * 3) / 4) return "向后";
  return diff > 0 ? "右拐" : "左拐";
}

function panelActionLabel(action) {
  return {
    straight: "向前",
    leftFront: "左上",
    rightFront: "右上",
    left: "左拐",
    right: "右拐",
    back: "向后",
  }[action] || "向前";
}

function emptySignDestinations() {
  return Object.fromEntries(signActionOrder.map((action) => [action, []]));
}

function normalizeDestinationMap(source = {}) {
  const destinations = {};
  signActionOrder.forEach((action) => {
    destinations[action] = Array.from(new Set(source?.[action] || []));
  });
  return destinations;
}

function normalizeSignFaces(sign) {
  const legacy = normalizeDestinationMap(sign.destinationsByAction);
  const front = normalizeDestinationMap(sign.destinationsByFace?.front || legacy);
  const back = normalizeDestinationMap(sign.destinationsByFace?.back);
  if (sign.targetSpaceId) {
    const action = sign.panelAction || "straight";
    front[action] = Array.from(new Set([...(front[action] || []), sign.targetSpaceId]));
  }
  sign.destinationsByFace = { front, back };
  sign.destinationsByAction = front;
  sign.imagesByFace = {
    front: sign.imagesByFace?.front || sign.images || [],
    back: sign.imagesByFace?.back || [],
  };
  sign.images = sign.imagesByFace.front;
  return sign.destinationsByFace;
}

function signDestinationsForFace(sign, face = "front") {
  return normalizeSignFaces(sign)[face === "back" ? "back" : "front"];
}

function normalizeSignDestinations(sign) {
  return signDestinationsForFace(sign, "front");
}

function signActionsForDestination(sign, endSpace, face = null) {
  if (!sign || !endSpace) return [];
  const destinationIds = new Set(equivalentDestinationSpaces(endSpace).map((space) => space.id));
  const faces = sign.installType === "hanging" && !face ? ["front", "back"] : [face || "front"];
  return faces.flatMap((faceName) => {
    const destinations = signDestinationsForFace(sign, faceName);
    return signActionOrder
      .filter((action) => destinations[action].some((id) => destinationIds.has(id)))
      .map((action) => ({ face: faceName, action }));
  });
}

function headingFromPersonAction(personHeading, action) {
  return {
    straight: personHeading,
    leftFront: personHeading - Math.PI / 4,
    rightFront: personHeading + Math.PI / 4,
    left: personHeading - Math.PI / 2,
    right: personHeading + Math.PI / 2,
    back: personHeading + Math.PI,
  }[action] ?? personHeading;
}

function signActionForDestination(sign, endSpace, face = null) {
  return signActionsForDestination(sign, endSpace, face)[0]?.action || sign.panelAction || "straight";
}

function signActionTargetHeading(sign, currentHeading, endSpace = null) {
  return headingFromPersonAction(currentHeading, signActionForDestination(sign, endSpace));
}

function signInfoText(sign, endSpace = null, face = "front") {
  const action = signActionForDestination(sign, endSpace, face);
  const destinations = signDestinationsForFace(sign, face);
  const names = (destinations[action] || [])
    .map((id) => spaceById(id)?.name)
    .filter(Boolean);
  const content = endSpace?.name || names.join("、") || sign.text || sign.customText || composeSignDefaultText(sign.installType, sign.number);
  return `${panelActionLabel(action)}：${content}`;
}

function recordVisibleSign(sign, point, prefix = "", endSpace = null, face = "front") {
  if (!sign) return null;
  if (endSpace && !signMatchesDestination(sign, endSpace)) return null;
  const action = signActionForDestination(sign, endSpace, face);
  const eventKey = `${sign.id || prefix}|${face}|${action}|${endSpace?.id || ""}`;
  const existing = state.test.infoEvents.find((event) => event.signId === sign.id || event.key === eventKey);
  if (existing) return existing;
  const event = {
    key: eventKey,
    point: clonePoint(point),
    action,
    label: panelActionLabel(action),
    signId: sign.id || "",
    face,
    valid: true,
  };
  state.test.infoEvents.push(event);
  return event;
}

function recordSignInspection(sign, point, arrivalHeading, endSpace = null) {
  if (!sign) return null;
  if (sign.id && !state.test.readSignIds.includes(sign.id)) state.test.readSignIds.push(sign.id);
  const face = destinationFaceForSign(sign, endSpace);
  if (endSpace && face && signMatchesDestination(sign, endSpace)) {
    const readHeading = signReadHeading(sign, arrivalHeading, face);
    const event = recordVisibleSign(sign, point, "inspect", endSpace, face);
    if (event) Object.assign(event, { readHeading, arrivalHeading, face, valid: true });
    return guidanceForSign(sign, readHeading, endSpace, face, arrivalHeading);
  }
  const eventKey = `${sign.id || "sign"}|no-target|${endSpace?.id || ""}`;
  if (!state.test.infoEvents.some((event) => event.key === eventKey)) {
    state.test.infoEvents.push({
      key: eventKey,
      point: clonePoint(point),
      action: "noInfo",
      label: "无目前信息",
      signId: sign.id || "",
      readHeading: signReadHeading(sign, arrivalHeading, "front"),
      arrivalHeading,
      face: "front",
      valid: false,
    });
  }
  return null;
}

function recordGroupedSignInspection(context, arrivalHeading, endSpace = null) {
  if (context.hasEffectiveInformation) {
    context.signs.forEach((sign) => {
      if (sign.id && !state.test.readSignIds.includes(sign.id)) state.test.readSignIds.push(sign.id);
    });
    const decisionSign = decisionSignForInspection(context);
    return recordSignInspection(decisionSign, decisionSign.point, arrivalHeading, endSpace);
  }
  let effectiveGuidance = null;
  context.signs.forEach((sign) => {
    const guidance = recordSignInspection(sign, sign.point, arrivalHeading, endSpace);
    if (sign.id === decisionSignForInspection(context).id) effectiveGuidance = guidance;
  });
  return effectiveGuidance;
}

function updateNavigationAfterSignInspection(navigationState, guidance, arrivalHeading) {
  if (guidance) {
    navigationState.hasFollowedGuidance = true;
    navigationState.returningFromInvalidSign = false;
    navigationState.preInvalidSignHeading = null;
    navigationState.lastValidSignPoint = clonePoint(guidance.sign.point);
    navigationState.lastValidSignId = guidance.sign.id || "";
    navigationState.lastValidGuidanceHeading = guidance.targetHeading;
    return;
  }
  if (navigationState.hasFollowedGuidance) {
    navigationState.returningFromInvalidSign = true;
    navigationState.preInvalidSignHeading = arrivalHeading;
  }
}

function isWithinRecentGuidancePriorityRange(point, navigationState = null) {
  const signPoint = navigationState?.lastValidSignPoint;
  if (!point || !signPoint || !Number.isFinite(navigationState?.lastValidGuidanceHeading)) return false;
  const scale = pixelsPerMeter();
  const limit = scale ? scale * 3 : 120;
  return distance(point, signPoint) <= limit;
}

function hasRecordedSign(sign) {
  return Boolean(sign?.id) && state.test.infoEvents.some((event) => event.signId === sign.id);
}

function hasReadSign(sign) {
  return Boolean(sign?.id) && state.test.readSignIds.includes(sign.id);
}

function addActualPathPoint(point) {
  const last = state.test.actualPath.at(-1);
  if (!last) {
    if (pointInWalkable(point)) state.test.actualPath.push(clonePoint(point));
    return;
  }
  if (distance(last, point) <= 2) return;
  if (pointInWalkable(point) && lineOfSightWithinWalkable(last, point)) {
    state.test.actualPath.push(clonePoint(point));
    return;
  }

  const startAnchor = nearestRouteCenter(last);
  const endAnchor = nearestRouteCenter(point);
  if (!startAnchor || !endAnchor) return;
  const { nodes, graph } = buildRouteGraph(startAnchor, endAnchor);
  const startKey = graphKey(startAnchor.point);
  const endKey = graphKey(endAnchor.point);
  const pathKeys = dijkstra(graph, startKey, endKey);
  if (!pathKeys) return;

  const candidates = [startAnchor.point, ...pathKeys.map((key) => nodes.get(key)), endAnchor.point, point]
    .filter(Boolean);
  let previous = last;
  for (const candidate of candidates) {
    if (distance(previous, candidate) <= 2) continue;
    if (!pointInWalkable(candidate) || !lineOfSightWithinWalkable(previous, candidate)) return;
    state.test.actualPath.push(clonePoint(candidate));
    previous = candidate;
  }
}

function pathLength(points) {
  if (!points || points.length < 2) return 0;
  return points.slice(1).reduce((total, point, index) => total + distance(points[index], point), 0);
}

function firstSignAlongStep(from, to, endSpace, navigationState = null) {
  const candidates = [];
  const stepHeading = directionTo(from, to);
  const stepLength = distance(from, to);
  const sampleCount = Math.max(1, Math.ceil(stepLength / 4));
  for (const sign of state.signs) {
    if (hasReadSign(sign)) continue;
    if (shouldIgnoreNearbyInvalidSign(sign, endSpace, navigationState)) continue;
    const projected = nearestPointOnSegment(sign.point, from, to);
    if (projected.ratio < 0 || projected.ratio > 1) continue;
    if (projected.distance > state.test.person.visionDistance) continue;
    for (let index = 0; index <= sampleCount; index += 1) {
      const ratio = index / sampleCount;
      const point = {
        x: from.x + (to.x - from.x) * ratio,
        y: from.y + (to.y - from.y) * ratio,
      };
      if (!readableSignInView(point, stepHeading, state.test.person.normalAngle, sign)) continue;
      candidates.push({ sign, point, ratio, distance: distance(point, sign.point) });
      break;
    }
  }
  return candidates.sort((a, b) => a.ratio - b.ratio || a.distance - b.distance)[0] || null;
}

function firstPassedSignAlongStep(from, to, endSpace = null, navigationState = null) {
  const candidates = [];
  for (const sign of state.signs) {
    if (hasReadSign(sign)) continue;
    if (shouldIgnoreNearbyInvalidSign(sign, endSpace, navigationState)) continue;
    const routeAnchor = signRouteAnchor(sign);
    if (!routeAnchor) continue;
    const projected = nearestPointOnSegment(routeAnchor.point, from, to);
    if (projected.ratio < -0.0001 || projected.ratio > 1.0001 || projected.distance > 1.5) continue;
    candidates.push({
      sign,
      point: clonePoint(routeAnchor.point),
      routeAnchor,
      ratio: clamp(projected.ratio, 0, 1),
    });
  }
  return candidates.sort((a, b) => a.ratio - b.ratio)[0] || null;
}

function firstEventAlongPath(points, finder) {
  let traveled = 0;
  const events = [];
  for (let index = 0; index < points.length - 1; index += 1) {
    const from = points[index];
    const to = points[index + 1];
    const event = finder(from, to);
    const legLength = distance(from, to);
    if (event) events.push({ ...event, legIndex: index, pathDistance: traveled + legLength * (event.ratio ?? 0) });
    traveled += legLength;
  }
  return events.sort((a, b) => a.pathDistance - b.pathDistance)[0] || null;
}

function addPathPointsBeforeEvent(points, legIndex) {
  for (let index = 1; index <= legIndex; index += 1) addActualPathPoint(points[index]);
}

function firstVisibleUnreadDestinationSign(point, heading, angleDeg, endSpace, navigationState = null) {
  return visibleSigns(point, heading, angleDeg)
    .filter((sign) => !hasReadSign(sign))
    .filter((sign) => !shouldIgnoreNearbyInvalidSign(sign, endSpace, navigationState))
    .sort((a, b) => distance(point, a.point) - distance(point, b.point))[0] || null;
}

function syncHangingFacingField() {
  signHangingFacingField.hidden = state.signSubMode === "info" || signInstallTypeInput.value !== "hanging";
}

function syncSignImageFaceControls() {
  const sign = selectedSign();
  const isHanging = sign?.installType === "hanging";
  if (!isHanging) state.signAssociationFace = "front";
  signImageFaceButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.signImageFace === state.signAssociationFace);
  });
}

function segmentById(id) {
  return state.segments.find((segment) => segment.id === id) ?? null;
}

function directionTo(point, nextPoint) {
  return Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x);
}

function directionScore(fromHeading, toHeading) {
  return angleDifference(fromHeading, toHeading);
}

function directionLabel(angle) {
  const normalized = (angle + Math.PI * 2) % (Math.PI * 2);
  const labels = ["东", "东南", "南", "西南", "西", "西北", "北", "东北"];
  const index = Math.round(normalized / (Math.PI / 4)) % 8;
  return labels[index];
}

function syncStartHeadingControls() {
  useDefaultHeadingInput.checked = Boolean(state.test.useDefaultHeading);
  startHeadingButtons.forEach((button) => {
    const degrees = Math.round((state.test.startHeading * 180) / Math.PI);
    button.disabled = Boolean(state.test.useDefaultHeading);
    button.classList.toggle("active", !state.test.useDefaultHeading && Number(button.dataset.startHeading) === degrees);
  });
  startHeadingLabel.textContent = state.test.useDefaultHeading
    ? "按最优路径"
    : `初始方向：${directionLabel(state.test.startHeading)}`;
}

function setUseDefaultHeading(enabled, options = {}) {
  state.test.useDefaultHeading = Boolean(enabled);
  syncStartHeadingControls();
  if (!options.keepSimulation) clearSimulationResults();
  updateStatus();
  redraw();
}

function setStartHeading(degrees, options = {}) {
  state.test.useDefaultHeading = false;
  state.test.startHeading = (Number(degrees) * Math.PI) / 180;
  syncStartHeadingControls();
  if (!options.keepSimulation) clearSimulationResults();
  updateStatus();
  redraw();
}

function optimalPathStartHeading() {
  if (!state.test.optimalPath.length) return null;
  const start = state.test.optimalAnchors?.start || state.test.optimalPath[0];
  const forwardPoint = state.test.optimalPath.find((point) => distance(start, point) > 2);
  return forwardPoint ? directionTo(start, forwardPoint) : null;
}

function initialSimulationHeading() {
  if (state.test.useDefaultHeading) {
    return optimalPathStartHeading() ?? state.test.startHeading;
  }
  return state.test.startHeading;
}

function signDirectionScore(sign, fromPoint, candidatePoint, currentHeading, endSpace = null) {
  const action = sign.actionOverride || signActionForDestination(sign, endSpace);
  const baseHeading = sign.readHeading ?? currentHeading;
  const candidateHeading = directionTo(fromPoint, candidatePoint);
  if (action === "leftFront" || action === "rightFront") {
    const forwardHeading = headingFromPersonAction(baseHeading, "straight");
    const sideHeading = headingFromPersonAction(baseHeading, action === "leftFront" ? "left" : "right");
    const forwardScore = angleDifference(forwardHeading, candidateHeading);
    const sideScore = angleDifference(sideHeading, candidateHeading);
    const side = signedAngle(baseHeading, candidateHeading);
    const sideMatches = action === "leftFront" ? side < -0.05 : side > 0.05;
    if (forwardScore <= Math.PI / 3 && sideScore <= Math.PI / 2 && sideMatches) {
      return Math.min(forwardScore, sideScore) + Math.abs(forwardScore - sideScore) * 0.25;
    }
    return Math.min(forwardScore, sideScore) + (sideMatches ? Math.PI / 3 : Math.PI);
  }
  const targetAngle = sign.targetHeading ?? signActionTargetHeading(sign, baseHeading, endSpace);
  return angleDifference(targetAngle, candidateHeading);
}

function signedAngle(fromHeading, toHeading) {
  return (toHeading - fromHeading + Math.PI * 3) % (Math.PI * 2) - Math.PI;
}

function guidanceForSign(sign, readHeading, endSpace, face = "front", travelHeading = readHeading) {
  const originalAction = signActionForDestination(sign, endSpace, face);
  const turnSequence = originalAction === "leftFront" ? ["left", "right"]
    : originalAction === "rightFront" ? ["right", "left"]
      : null;
  const action = turnSequence?.[0] || originalAction;
  return {
    sign,
    targetHeading: headingFromPersonAction(readHeading, action),
    readHeading,
    action,
    originalAction,
    turnSequence,
    sequenceIndex: 0,
    stageBaseHeading: readHeading,
    stageTargetHeading: headingFromPersonAction(readHeading, action),
    travelHeading,
    face,
  };
}

function completeOrAdvanceGuidance(guidance, choice) {
  if (!guidance?.turnSequence?.length) return true;
  const nextIndex = guidance.sequenceIndex + 1;
  if (nextIndex >= guidance.turnSequence.length) return true;
  guidance.sequenceIndex = nextIndex;
  guidance.readHeading = choice.heading;
  guidance.action = guidance.turnSequence[nextIndex];
  guidance.targetHeading = headingFromPersonAction(choice.heading, guidance.action);
  guidance.stageBaseHeading = choice.heading;
  guidance.stageTargetHeading = guidance.targetHeading;
  return false;
}

function frontSideGuidedChoice(choices, current, guidance, endSpace) {
  if (!guidance || !["leftFront", "rightFront"].includes(guidance.action) || !endSpace?.point) return null;
  const baseHeading = guidance.readHeading ?? directionTo(current, endSpace.point);
  const sideSign = guidance.action === "rightFront" ? 1 : -1;
  const forwardHeading = headingFromPersonAction(baseHeading, "straight");
  const sideChoices = choices
    .map((choice) => {
      const side = Math.sign(signedAngle(baseHeading, choice.heading));
      const targetGain = distance(current, endSpace.point) - distance(choice.point, endSpace.point);
      const forwardScore = angleDifference(forwardHeading, choice.heading);
      return { ...choice, side, targetGain, forwardScore };
    })
    .filter((choice) => choice.side === sideSign && choice.targetGain > -8);
  if (sideChoices.length) {
    return sideChoices
      .slice()
      .sort((a, b) => b.targetGain - a.targetGain || a.forwardScore - b.forwardScore || Number(a.visited) - Number(b.visited) || a.weight - b.weight)[0];
  }
  return null;
}

function expandedDecisionChoices(currentKey, previousKey, nodes, graph, choices, visitedEdges) {
  const expanded = [];
  const currentPoint = nodes.get(currentKey);
  const previousPoint = nodes.get(previousKey);
  const returnHeading = currentPoint && previousPoint ? directionTo(currentPoint, previousPoint) : null;
  for (const choice of choices) {
    const nextEdges = navigableGraphEdges(graph, choice.key);
    const shouldExpand = choice.weight < 18 && nextEdges.length > 2;
    if (!shouldExpand) {
      expanded.push(choice);
      continue;
    }
    for (const nextEdge of nextEdges) {
      if (nextEdge.key === currentKey) continue;
      const nextPoint = nodes.get(nextEdge.key);
      if (!nextPoint) continue;
      expanded.push({
        ...nextEdge,
        point: nextPoint,
        heading: directionTo(nodes.get(currentKey), nextPoint),
        visited: visitedEdges.has(edgeVisitKey(choice.key, nextEdge.key)),
        isBacktrack: nextEdge.key === previousKey,
        isReturnDirection: Number.isFinite(returnHeading)
          && angleDifference(returnHeading, directionTo(currentPoint, nextPoint)) <= Math.PI / 9,
        viaKey: choice.key,
        weight: choice.weight + nextEdge.weight,
        routeWidth: Math.max(choice.routeWidth || 0, nextEdge.routeWidth || 0),
      });
    }
  }
  return expanded;
}

function nearestGraphKey(nodes, point) {
  let bestKey = "";
  let bestDistance = Infinity;
  for (const [key, node] of nodes.entries()) {
    const d = distance(point, node);
    if (d < bestDistance) {
      bestKey = key;
      bestDistance = d;
    }
  }
  return bestKey;
}

function guidedJunctionLookaheadScore(choice, currentKey, nodes, graph, guidance) {
  if (!guidance || !choice?.key) return Infinity;
  const targetHeading = guidance.targetHeading;
  const maxDistance = Math.max(160, state.test.person.visionDistance * 2);
  const initialPreviousKey = choice.viaKey || currentKey;
  const queue = [{ key: choice.key, previousKey: initialPreviousKey, cost: choice.weight || 0 }];
  const bestCost = new Map([[`${initialPreviousKey}|${choice.key}`, choice.weight || 0]]);

  while (queue.length) {
    queue.sort((a, b) => a.cost - b.cost);
    const current = queue.shift();
    if (current.cost > maxDistance) continue;
    const point = nodes.get(current.key);
    if (!point) continue;
    const onward = navigableGraphEdges(graph, current.key)
      .filter((edge) => edge.key !== current.previousKey)
      .filter((edge) => {
        const nextDegree = navigableGraphEdges(graph, edge.key).length;
        return edge.weight >= 18 || nextDegree > 1;
      });

    if (onward.length > 1) {
      const aligned = onward
        .map((edge) => ({
          edge,
          angle: angleDifference(targetHeading, directionTo(point, nodes.get(edge.key))),
        }))
        .filter((item) => item.angle <= Math.PI / 3)
        .sort((a, b) => a.angle - b.angle || a.edge.weight - b.edge.weight)[0];
      if (aligned) return current.cost + aligned.angle * 40;
    }

    for (const edge of onward) {
      const nextCost = current.cost + edge.weight;
      if (nextCost > maxDistance) continue;
      const visitKey = `${current.key}|${edge.key}`;
      if ((bestCost.get(visitKey) ?? Infinity) <= nextCost) continue;
      bestCost.set(visitKey, nextCost);
      queue.push({ key: edge.key, previousKey: current.key, cost: nextCost });
    }
  }
  return Infinity;
}

function routeChoicesAt(currentKey, previousKey, nodes, graph, visitedEdges = new Set()) {
  const current = nodes.get(currentKey);
  const previous = nodes.get(previousKey);
  const returnHeading = current && previous ? directionTo(current, previous) : null;
  const rawChoices = Array.from(new Map(navigableGraphEdges(graph, currentKey)
    .map((edge) => ({
      ...edge,
      point: nodes.get(edge.key),
      heading: directionTo(current, nodes.get(edge.key)),
      visited: visitedEdges.has(edgeVisitKey(currentKey, edge.key)),
      isBacktrack: edge.key === previousKey,
      isReturnDirection: Number.isFinite(returnHeading) && nodes.get(edge.key)
        && angleDifference(returnHeading, directionTo(current, nodes.get(edge.key))) <= Math.PI / 9,
    }))
    .filter((choice) => choice.point)
    .map((choice) => [choice.key, choice])).values());
  const groups = [];
  for (const choice of rawChoices) {
    let group = groups.find((items) => angleDifference(items[0].heading, choice.heading) <= (20 * Math.PI) / 180);
    if (!group) {
      group = [];
      groups.push(group);
    }
    group.push(choice);
  }
  return groups.map((items) => items
    .slice()
    .sort((a, b) => Number(a.visited) - Number(b.visited) || a.weight - b.weight || (b.routeWidth || 0) - (a.routeWidth || 0))[0]);
}

function choiceUsesPrimaryRoute(choice) {
  return String(choice.segmentId || "")
    .split("|")
    .some((segmentId) => segmentById(segmentId)?.type === "primary");
}

function sequentialTurnChoice(choices, heading, guidance) {
  if (!guidance?.turnSequence?.length) return null;
  const signAccess = choices.find((choice) => !choice.isBacktrack && choice.edgeType === "sign-access");
  if (signAccess) {
    return {
      ...signAccess,
      method: "sequence-access",
      guidanceResolved: false,
      nextHeadingOverride: guidance.travelHeading,
    };
  }
  const action = guidance.action;
  const sideSign = action === "right" ? 1 : -1;
  // The first turn is relative to the sign-reading heading. After that turn,
  // left/right is evaluated from the person's incoming heading at each node.
  const baseHeading = guidance.sequenceIndex === 0
    ? (guidance.stageBaseHeading ?? guidance.readHeading)
    : heading;
  const targetHeading = headingFromPersonAction(baseHeading, action);
  const forwardChoices = choices.filter((choice) => !choice.isBacktrack);
  const sideChoices = forwardChoices
    .map((choice) => ({
      ...choice,
      relativeAngle: signedAngle(baseHeading, choice.heading),
      targetScore: angleDifference(targetHeading, choice.heading),
    }))
    .filter((choice) => Math.sign(choice.relativeAngle) === sideSign)
    .filter((choice) => Math.abs(choice.relativeAngle) >= Math.PI / 6
      && Math.abs(choice.relativeAngle) <= (5 * Math.PI) / 6)
    .filter((choice) => choice.targetScore <= Math.PI / 3)
    .sort((a, b) => a.targetScore - b.targetScore
      || Number(a.visited) - Number(b.visited)
      || (b.routeWidth || 0) - (a.routeWidth || 0));
  if (sideChoices.length) {
    return {
      ...sideChoices[0],
      method: "sign",
      sign: guidance.sign,
      guidanceResolved: true,
      sequenceTurnLabel: action === "right" ? "右拐" : "左拐",
      sequenceStage: guidance.sequenceIndex + 1,
    };
  }
  if (!forwardChoices.length) {
    const backtrack = choices.find((choice) => choice.isBacktrack);
    return backtrack ? { ...backtrack, method: "backtrack" } : null;
  }
  const continuation = forwardChoices
    .slice()
    .sort((a, b) => directionScore(heading, a.heading) - directionScore(heading, b.heading)
      || Number(a.visited) - Number(b.visited)
      || (b.routeWidth || 0) - (a.routeWidth || 0))[0];
  return {
    ...continuation,
    method: "sequence-wait",
    guidanceResolved: false,
    waitingTurnLabel: action === "right" ? "右拐" : "左拐",
    waitingTargetDirection: directionLabel(targetHeading),
    waitingBaseDirection: directionLabel(baseHeading),
  };
}

function chooseNextSimulationStep(
  currentKey,
  previousKey,
  nodes,
  graph,
  heading,
  endSpace,
  visitedEdges,
  guidance = null,
  navigationState = {},
) {
  const current = nodes.get(currentKey);
  const choices = routeChoicesAt(currentKey, previousKey, nodes, graph, visitedEdges);

  if (!choices.length) return null;
  const signForwardExit = choices.find((choice) => !choice.isBacktrack
    && ["sign-forward-exit-left", "sign-forward-exit-right"].includes(choice.edgeType));
  if (guidance?.action === "straight" && signForwardExit) {
    return { ...signForwardExit, method: "sign-exit-approach", guidanceResolved: false };
  }
  const sequentialChoice = sequentialTurnChoice(choices, heading, guidance);
  if (sequentialChoice) return sequentialChoice;
  const forwardChoices = choices.filter((choice) => !choice.isBacktrack);
  // An effective sign instruction always outranks automatic passage through
  // an ordinary two-segment turn, regardless of the sign installation type.
  const guidanceOverridesOrdinaryTurn = Boolean(guidance);
  if (!forwardChoices.length) {
    const backtrack = choices.find((choice) => choice.isBacktrack);
    return backtrack ? { ...backtrack, method: "backtrack" } : null;
  }
  if (forwardChoices.length === 1 && !guidanceOverridesOrdinaryTurn) {
    return { ...forwardChoices[0], method: "only-route" };
  }
  if (choices.length === 2 && !guidance) {
    const continuation = choices
      .slice()
      .sort((a, b) => directionScore(heading, a.heading) - directionScore(heading, b.heading))[0];
    return { ...continuation, method: "only-route" };
  }
  // A valid sign may explicitly direct the person back along the arrival edge.
  // Apply the instruction before the normal "avoid backtracking" preference.
  const rawDecisionChoices = guidance
    ? choices
    : forwardChoices.length ? forwardChoices : choices;
  const decisionChoices = expandedDecisionChoices(currentKey, previousKey, nodes, graph, rawDecisionChoices, visitedEdges);
  const isDecision = choices.length >= 3;
  const decisionIndex = navigationState.decisionCount || 0;
  if (isDecision) navigationState.decisionCount = decisionIndex + 1;
  const visible = guidance && signMatchesDestination(guidance.sign, endSpace)
    ? [{ ...guidance.sign, targetHeading: guidance.targetHeading, readHeading: guidance.readHeading, actionOverride: guidance.action, guidanceFace: guidance.face }]
    : [];
  const frontSideChoice = frontSideGuidedChoice(decisionChoices, current, guidance, endSpace);
  if (frontSideChoice && isDecision) return { ...frontSideChoice, method: "sign", sign: guidance.sign, guidanceResolved: true };
  if (visible.length) {
    const ranked = decisionChoices
      .slice()
      .sort((a, b) => {
        const signA = Math.min(...visible.map((sign) => signDirectionScore(sign, current, a.point, heading, endSpace)));
        const signB = Math.min(...visible.map((sign) => signDirectionScore(sign, current, b.point, heading, endSpace)));
        return signA - signB || Number(a.visited) - Number(b.visited) || (b.routeWidth || 0) - (a.routeWidth || 0) || a.weight - b.weight;
      });
    const bestImmediateScore = signDirectionScore(visible[0], current, ranked[0].point, heading, endSpace);
    if (bestImmediateScore <= Math.PI / 3) {
      return { ...ranked[0], method: "sign", sign: visible[0], guidanceResolved: true };
    }
    const nearbyJunction = decisionChoices
      .map((choice) => ({ choice, score: guidedJunctionLookaheadScore(choice, currentKey, nodes, graph, guidance) }))
      .filter((item) => Number.isFinite(item.score))
      .sort((a, b) => a.score - b.score || Number(a.choice.visited) - Number(b.choice.visited))[0];
    if (nearbyJunction) {
      return { ...nearbyJunction.choice, method: "sign-approach", sign: visible[0], guidanceResolved: false };
    }
    const sign = visible
      .slice()
      .sort((a, b) => signDirectionScore(a, current, ranked[0].point, heading, endSpace) - signDirectionScore(b, current, ranked[0].point, heading, endSpace))[0];
    return { ...ranked[0], method: "sign-approach", sign, guidanceResolved: false };
  }

  const unexplored = decisionChoices.filter((choice) => !choice.visited);
  if (isDecision && navigationState.hasFollowedGuidance) {
    const returnedFromInvalidSign = Boolean(navigationState.returningFromInvalidSign);
    const recentGuidanceHasPriority = !returnedFromInvalidSign
      && isWithinRecentGuidancePriorityRange(current, navigationState);
    const continuationHeading = recentGuidanceHasPriority
      ? navigationState.lastValidGuidanceHeading
      : returnedFromInvalidSign
      ? navigationState.preInvalidSignHeading ?? heading
      : heading;
    const unvisitedNonReturn = unexplored.filter((choice) => !choice.isBacktrack && !choice.isReturnDirection);
    const nonReturn = decisionChoices.filter((choice) => !choice.isBacktrack && !choice.isReturnDirection);
    const continuationPool = recentGuidanceHasPriority && nonReturn.length
      ? nonReturn
      : unvisitedNonReturn.length
      ? unvisitedNonReturn
      : nonReturn.length ? nonReturn
        : unexplored.length ? unexplored : decisionChoices;
    const continuation = continuationPool
      .slice()
      .sort((a, b) => directionScore(continuationHeading, a.heading) - directionScore(continuationHeading, b.heading)
        || Number(a.visited) - Number(b.visited)
        || Number(choiceUsesPrimaryRoute(b)) - Number(choiceUsesPrimaryRoute(a))
        || (b.routeWidth || 0) - (a.routeWidth || 0))[0];
    navigationState.returningFromInvalidSign = false;
    navigationState.preInvalidSignHeading = null;
    return {
      ...continuation,
      method: returnedFromInvalidSign
        ? "invalid-sign-return-straight"
        : recentGuidanceHasPriority
          ? "recent-guidance-priority"
          : "post-guidance-straight",
    };
  }
  if (isDecision && unexplored.length) {
    const widest = unexplored
      .slice()
      .sort((a, b) => Number(choiceUsesPrimaryRoute(b)) - Number(choiceUsesPrimaryRoute(a))
        || (b.routeWidth || 0) - (a.routeWidth || 0)
        || directionScore(heading, a.heading) - directionScore(heading, b.heading)
        || a.weight - b.weight)[0];
    return { ...widest, method: decisionIndex === 0 ? "initial-wide-trial" : "wide-trial" };
  }

  const forward = decisionChoices
    .filter((choice) => directionScore(heading, choice.heading) <= (25 * Math.PI) / 180)
    .sort((a, b) => directionScore(heading, a.heading) - directionScore(heading, b.heading) || Number(a.visited) - Number(b.visited) || (b.routeWidth || 0) - (a.routeWidth || 0))[0];
  if (forward) return { ...forward, method: "straight" };

  if (unexplored.length) {
    const next = unexplored
      .slice()
      .sort((a, b) => (b.routeWidth || 0) - (a.routeWidth || 0) || directionScore(heading, a.heading) - directionScore(heading, b.heading))[0];
    return { ...next, method: "wide-trial" };
  }

  return { ...decisionChoices[Math.floor(Math.random() * decisionChoices.length)], method: "random" };
}

function edgeVisitKey(a, b) {
  return [a, b].sort().join("|");
}

function pathTurnAngle(prev, current, next) {
  const incoming = Math.atan2(current.y - prev.y, current.x - prev.x);
  const outgoing = Math.atan2(next.y - current.y, next.x - current.x);
  return angleDifference(incoming, outgoing);
}

function graphDegreeAt(point) {
  const endSpace = spaceById(state.test.endSpaceId);
  const startAnchor = state.test.start?.point ? nearestRouteCenter(state.test.start.point) : null;
  const endAnchor = endSpace ? nearestRouteCenter(endSpace.point) : null;
  if (!startAnchor || !endAnchor) return 0;
  const { graph } = buildRouteGraph(startAnchor, endAnchor);
  return graph.get(graphKey(point))?.length || 0;
}

function simulationPointText(point) {
  if (!point) return "";
  return `位置（${Math.round(point.x)}, ${Math.round(point.y)}）`;
}

function addSimulationLog(type, text, point = null) {
  state.test.simulationLog ||= [];
  state.test.simulationLog.push({
    id: `log-${state.test.simulationLog.length + 1}`,
    type,
    text,
    point: point ? clonePoint(point) : null,
  });
}

function renderSimulationLog() {
  if (!simulationLogList || !simulationLogEmpty) return;
  const entries = state.test.simulationLog || [];
  const events = state.test.infoEvents || [];
  const startEntry = entries.find((entry) => entry.type === "start");
  const outcomeEntry = [...entries].reverse().find((entry) => entry.type === "success" || entry.type === "failure");
  simulationLogEmpty.hidden = Boolean(startEntry || events.length || outcomeEntry);
  simulationLogList.innerHTML = "";

  const appendRecord = (number, type, text, point = null, substeps = []) => {
    const item = document.createElement("li");
    item.dataset.logType = type;
    item.dataset.stepNumber = String(number);
    const summary = document.createElement("div");
    summary.className = "simulationLogSummary";
    summary.textContent = `${text}${point ? ` · ${simulationPointText(point)}` : ""}`;
    item.appendChild(summary);
    if (substeps.length) {
      const details = document.createElement("ol");
      details.className = "simulationReadSteps";
      substeps.forEach((step) => {
        const detail = document.createElement("li");
        detail.textContent = step;
        details.appendChild(detail);
      });
      item.appendChild(details);
    }
    simulationLogList.appendChild(item);
  };

  if (startEntry) appendRecord(0, "start", startEntry.text, startEntry.point);

  events.forEach((event, index) => {
    const sign = state.signs.find((item) => item.id === event.signId);
    const signLabel = sign ? signNumberLabel(sign) : "导向标识";
    appendRecord(
      index + 1,
      event.action === "noInfo" ? "no-info" : "sign",
      `${signLabel}：${simulationRecordLabel(event)}`,
      event.point,
      simulationReadProcessSteps(event, sign),
    );
  });

  if (outcomeEntry) {
    const outcome = document.createElement("li");
    outcome.className = "simulationLogOutcome";
    outcome.dataset.logType = outcomeEntry.type;
    outcome.textContent = `结果：${outcomeEntry.text}${outcomeEntry.point ? ` · ${simulationPointText(outcomeEntry.point)}` : ""}`;
    simulationLogList.appendChild(outcome);
  }
}

function simulationReadProcessSteps(event, sign) {
  const signLabel = sign ? signNumberLabel(sign) : "导向标识";
  const endSpace = spaceById(state.test.endSpaceId);
  const destination = endSpace?.name || "当前目的地";
  const heading = Number.isFinite(event.readHeading) ? `地图${directionLabel(event.readHeading)}方向` : "标识面板方向";
  const face = sign?.installType === "hanging" ? (event.face === "back" ? "背面" : "正面") : "面板";
  const action = simulationRecordLabel(event);
  const steps = [
    `视野扫过${signLabel}，发现标识并从当前行进位置走近查看。`,
    `到达标识稳定点，面朝${heading}查看${face}。`,
  ];
  if (event.action === "noInfo") {
    steps.push(`只查找与「${destination}」有关的内容，确认该标识没有当前目的地信息。`);
    steps.push("该标识不产生方向决策；按规则返回发现标识时所在的动线，并恢复查看前的行进方向。");
    return steps;
  }
  steps.push(`只读取与「${destination}」有关的内容，获得“${action}”指令。`);
  if (event.action === "leftFront") {
    steps.push("把“左上”拆成两段：先左拐，再在随后第一个可右拐的节点右拐并继续前进。");
  } else if (event.action === "rightFront") {
    steps.push("把“右上”拆成两段：先右拐，再在随后第一个可左拐的节点左拐并继续前进。");
  } else if (event.action === "straight" && ["wall", "film"].includes(sign?.installType)) {
    steps.push("信息界面不能穿行；沿界面两侧各检查 2 米，移动到可用出口交点后，保持读牌朝向继续向前。");
  } else {
    steps.push(`以面朝标识的方向为基准执行“${action}”，转入相应动线继续前进。`);
  }
  return steps;
}

function routeResultSummary(result) {
  const startSpace = result.start?.spaceId ? spaceById(result.start.spaceId) : null;
  const startName = startSpace?.name || (result.start?.source === "free" && result.start?.point
    ? `平面选点（${Math.round(result.start.point.x)}, ${Math.round(result.start.point.y)}）`
    : "未设置");
  const endName = spaceById(result.endSpaceId)?.name || "未设置";
  return `起点：${startName}；终点：${endName}`;
}

let routeSummaryTooltip = null;

function ensureRouteSummaryTooltip() {
  if (routeSummaryTooltip) return routeSummaryTooltip;
  routeSummaryTooltip = document.createElement("div");
  routeSummaryTooltip.className = "routeSummaryTooltip";
  routeSummaryTooltip.setAttribute("role", "tooltip");
  routeSummaryTooltip.hidden = true;
  document.body.appendChild(routeSummaryTooltip);
  window.addEventListener("scroll", hideRouteSummaryTooltip, true);
  window.addEventListener("resize", hideRouteSummaryTooltip);
  return routeSummaryTooltip;
}

function showRouteSummaryTooltip(button) {
  const content = button.dataset.routeSummary;
  if (!content) return;
  const tooltip = ensureRouteSummaryTooltip();
  tooltip.textContent = content;
  tooltip.hidden = false;
  tooltip.style.left = "0px";
  tooltip.style.top = "0px";

  const buttonRect = button.getBoundingClientRect();
  const tooltipRect = tooltip.getBoundingClientRect();
  const edgeGap = 10;
  const desiredLeft = buttonRect.left + buttonRect.width / 2 - tooltipRect.width / 2;
  const left = Math.min(
    window.innerWidth - tooltipRect.width - edgeGap,
    Math.max(edgeGap, desiredLeft),
  );
  const spaceAbove = buttonRect.top - edgeGap;
  const top = spaceAbove >= tooltipRect.height + 8
    ? buttonRect.top - tooltipRect.height - 8
    : Math.min(window.innerHeight - tooltipRect.height - edgeGap, buttonRect.bottom + 8);
  tooltip.style.left = `${left}px`;
  tooltip.style.top = `${Math.max(edgeGap, top)}px`;
}

function hideRouteSummaryTooltip() {
  if (routeSummaryTooltip) routeSummaryTooltip.hidden = true;
}

function attachRouteSummaryTooltip(button) {
  button.addEventListener("pointerenter", () => showRouteSummaryTooltip(button));
  button.addEventListener("pointerleave", hideRouteSummaryTooltip);
  button.addEventListener("focus", () => showRouteSummaryTooltip(button));
  button.addEventListener("blur", hideRouteSummaryTooltip);
  button.addEventListener("click", hideRouteSummaryTooltip);
}

function selectedResultIds() {
  const validIds = new Set((state.test.routeResults || []).map((result) => result.id));
  const selected = (state.test.selectedResultRouteIds || []).filter((id) => validIds.has(id));
  state.test.selectedResultRouteIds = selected;
  return selected;
}

function routePrd(result) {
  const optimalDistance = Number(result?.optimalDistance);
  const actualDistance = Number(result?.actualDistance);
  if (!result?.simulated || !Number.isFinite(optimalDistance) || optimalDistance <= 0 || !Number.isFinite(actualDistance)) {
    return null;
  }
  return actualDistance / optimalDistance;
}

function updatePrdMetric() {
  if (!prdMeanValue || !effectivePrdMeanValue) return;
  const selected = new Set(selectedResultIds());
  const allResults = state.test.routeResults || [];
  const scopedResults = selected.size
    ? allResults.filter((result) => selected.has(result.id))
    : allResults;
  const meanText = (results) => {
    const values = results.map(routePrd).filter((value) => Number.isFinite(value));
    return values.length
      ? (values.reduce((sum, value) => sum + value, 0) / values.length).toFixed(2)
      : "--";
  };
  prdMeanValue.textContent = meanText(scopedResults);
  effectivePrdMeanValue.textContent = meanText(scopedResults.filter((result) => result.success === true));
  if (failureDistanceMultiplierInput) {
    failureDistanceMultiplierInput.value = String(state.test.failureDistanceMultiplier || 5);
  }
  if (testedRouteCount) {
    const testedCount = allResults.filter((result) => result.simulated).length;
    testedRouteCount.textContent = `共测试 ${testedCount} 条路线`;
  }
}

function renderDestinationFailureCounts() {
  if (!destinationFailureList) return;
  const expandedDestinations = new Set(state.test.expandedFailureDestinations || []);
  const counts = new Map();
  (state.test.routeResults || [])
    .filter((result) => result.simulated && result.success === false)
    .forEach((result) => {
      const destinationName = spaceById(result.endSpaceId)?.name || "未命名目的地";
      const routeMatch = String(result.id || "").match(/^route-\d+-(\d+)$/);
      const destinationNumber = routeMatch?.[1]
        || String((state.test.endSpaceIds || []).indexOf(result.endSpaceId) + 1);
      const current = counts.get(destinationName) || { count: 0, destinationNumbers: new Set(), results: [] };
      current.count += 1;
      if (destinationNumber && destinationNumber !== "0") current.destinationNumbers.add(destinationNumber);
      current.results.push(result);
      counts.set(destinationName, current);
    });

  destinationFailureList.replaceChildren();
  if (!counts.size) {
    const empty = document.createElement("div");
    empty.className = "placeholderText";
    empty.textContent = "暂无寻找失败的目的地。";
    destinationFailureList.appendChild(empty);
    return;
  }

  [...counts.entries()]
    .sort((a, b) => b[1].count - a[1].count || a[0].localeCompare(b[0], "zh-CN"))
    .forEach(([destinationName, summary]) => {
      const row = document.createElement("div");
      row.className = "destinationFailureItem";
      const summaryButton = document.createElement("button");
      summaryButton.type = "button";
      summaryButton.className = "destinationFailureSummary";
      summaryButton.innerHTML = `<span>${destinationName}</span><strong>${summary.count}次</strong>`;
      const routes = document.createElement("div");
      routes.className = "destinationFailureRoutes simulationRoutePicker";
      routes.hidden = !expandedDestinations.has(destinationName);
      summary.results.forEach((result) => {
        const routeButton = document.createElement("button");
        routeButton.type = "button";
        routeButton.textContent = result.label;
        routeButton.classList.add("failed");
        routeButton.classList.toggle("active", selectedResultIds().includes(result.id));
        routeButton.dataset.routeSummary = `${routeResultSummary(result)}\nPRD：${routePrd(result)?.toFixed(2) || "--"}`;
        attachRouteSummaryTooltip(routeButton);
        routeButton.addEventListener("click", (event) => {
          event.stopPropagation();
          state.test.selectedResultRouteIds = [result.id];
          state.test.focusedRouteId = result.id;
          syncActiveRouteResult(result);
          updateSimulationPanels();
          redraw();
        });
        routes.appendChild(routeButton);
      });
      summaryButton.addEventListener("click", () => {
        if (expandedDestinations.has(destinationName)) expandedDestinations.delete(destinationName);
        else expandedDestinations.add(destinationName);
        state.test.expandedFailureDestinations = [...expandedDestinations];
        routes.hidden = !expandedDestinations.has(destinationName);
      });
      row.append(summaryButton, routes);
      destinationFailureList.appendChild(row);
    });
}

function renderResultRoutePicker() {
  if (!resultRoutePicker) return;
  const results = state.test.routeResults || [];
  const hasSimulation = results.some((result) => result.simulated);
  resultRoutePicker.hidden = results.length <= 1 || !hasSimulation;
  resultRoutePicker.innerHTML = "";
  if (results.length <= 1 || !hasSimulation) return;

  const allButton = document.createElement("button");
  allButton.type = "button";
  allButton.textContent = "全部";
  const selected = selectedResultIds();
  allButton.classList.toggle("active", selected.length === 0);
  allButton.addEventListener("click", () => {
    state.test.selectedResultRouteIds = [];
    state.test.focusedRouteId = "";
    updateSimulationPanels();
    redraw();
  });
  resultRoutePicker.appendChild(allButton);

  for (const result of results) {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = result.label;
    button.classList.toggle("failed", result.simulated && !result.success);
    button.classList.toggle("active", selected.includes(result.id));
    const summary = routeResultSummary(result);
    const prd = routePrd(result);
    const prdText = prd === null ? "--" : prd.toFixed(2);
    button.dataset.routeSummary = `${summary}\nPRD：${prdText}`;
    attachRouteSummaryTooltip(button);
    button.addEventListener("click", (event) => {
      if (event.shiftKey) {
        const next = new Set(selectedResultIds());
        if (next.has(result.id)) next.delete(result.id);
        else next.add(result.id);
        state.test.selectedResultRouteIds = [...next];
        const fallbackId = next.has(result.id) ? result.id : [...next].at(-1) || "";
        state.test.focusedRouteId = fallbackId;
        if (fallbackId) syncActiveRouteResult(results.find((item) => item.id === fallbackId));
      } else {
        state.test.selectedResultRouteIds = [result.id];
        state.test.focusedRouteId = result.id;
        syncActiveRouteResult(result);
      }
      updateSimulationPanels();
      redraw();
    });
    resultRoutePicker.appendChild(button);
  }
}

function simulationChoiceText(choice, heading) {
  const direction = directionLabel(choice.heading ?? heading);
  if (choice.sequenceTurnLabel) {
    return `人物在动线上的投影点与当前节点重合，并确认该节点存在相对于本段基准朝向的${choice.sequenceTurnLabel}分支；执行第 ${choice.sequenceStage} 段${choice.sequenceTurnLabel}${choice.sequenceStage === 2 ? "并完成两段式导向指令" : ""}`;
  }
  if (choice.method === "sequence-access") {
    return `先从标识稳定点回到标识投影所在的动线节点，同时保留读牌前的行进朝向和两段式转向指令`;
  }
  if (choice.method === "sequence-wait") {
    return `人物在动线上的投影点与当前节点重合；本阶段以地图${choice.waitingBaseDirection}方向为人物朝向，但该节点没有可${choice.waitingTurnLabel}至地图${choice.waitingTargetDirection}方向的分支，因此不在此处转向，沿当前通路继续等待下一个可执行节点`;
  }
  if (choice.edgeType === "sign-access") {
    return `读完标识后从标识稳定点返回查看前所在的动线；返回过程不改变查看标识前保存的行进方向`;
  }
  if (choice.edgeType === "sign-guidance") {
    return `标识包含当前目的地的有效信息；人物保持稳定点的面朝方向不变，按提示向地图${direction}方向前往附近最近可进入的动线`;
  }
  if (choice.edgeType === "sign-forward-exit-left" || choice.edgeType === "sign-forward-exit-right") {
    const side = choice.edgeType.endsWith("left") ? "左侧" : "右侧";
    return `贴墙式或贴膜式标识提示“向前”，信息界面不能穿行；从稳定点沿信息界面向${side}逐段检查，在 2 米内首次发现界面前方出现行走范围，因此确认出口位于${side}；继续沿该方向移动到界面延长线与动线中心线的第一个交点，再保持读牌朝向继续向前`;
  }
  return {
    sign: `当前位置已有符合刚才导向信息的相连动线，立即执行该方向并向地图${direction}方向行走`,
    "sign-exit-approach": `先沿信息界面移动到出口交点；到达后继续保留读牌朝向和“向前”指令`,
    "sign-approach": `保留刚才获得的导向信息，先向地图${direction}方向前往附近可执行该方向的动线交叉口`,
    straight: `没有新的有效标识，沿当前方向继续向地图${direction}方向直行`,
    "post-guidance-straight": `此前已经依据有效标识完成转向；到达决策点后优先排除来路，并从尚未走过的分支中选择向地图${direction}方向继续行进`,
    "recent-guidance-priority": `获得有效指令后在 3 米内到达决策点；继续保持指令形成的地图${direction}方向，该方向的优先级高于尚未走过的其他支路`,
    "invalid-sign-return-straight": `在决策点走近标识查看后确认没有当前目的地信息，已返回查看标识前的动线并恢复原朝向，优先向地图${direction}方向继续直行`,
    "only-route": `该节点只有两条相连线段，是普通转折点而不是决策点；直接从来路线段过渡到下一条线段，并向地图${direction}方向继续直行`,
    "initial-wide-trial": `首次到达由 3 条或以上动线相交形成的决策点，使用决策点视角检查后仍没有当前目的地的有效信息，优先选择最粗的主动线向地图${direction}方向试探`,
    "wide-trial": `到达决策点且没有当前目的地的有效信息，优先选择较粗的主动线向地图${direction}方向试探`,
    backtrack: `到达没有其他相连动线的端点，确认是死路，折返并向地图${direction}方向行走`,
    random: `没有明确导向，选择向地图${direction}方向继续试探`,
  }[choice.method] || `向地图${direction}方向继续行走`;
}

function signInspectionLogText(sign, guidance, endSpace, arrivalHeading) {
  if (!guidance) {
    const faceText = sign.installType === "hanging" ? "正面和背面" : "面板";
    return `到达${signNumberLabel(sign)}并查看${faceText}，没有找到与「${endSpace.name}」有关的信息；按最近距离返回发现标识前所在的动线，并恢复原来的${directionLabel(arrivalHeading)}朝向继续行走`;
  }
  const faceText = sign.installType === "hanging" ? `${guidance.face === "back" ? "背面" : "正面"}，` : "";
  const sequenceRule = guidance.originalAction === "leftFront"
    ? "；该指令分两段执行：先左拐，再在随后第一个可右拐节点右拐"
    : guidance.originalAction === "rightFront"
      ? "；该指令分两段执行：先右拐，再在随后第一个可左拐节点左拐"
      : "";
  const forwardRule = guidance.action === "straight" && ["wall", "film"].includes(sign.installType)
    ? "；信息界面不能穿行，沿标识所在界面向左、向右各检查 2 米，寻找界面延长线与向前动线的交点作为出口"
    : "；保留该稳定点和朝向，寻找提示方向上最近可进入的动线";
  return `到达${signNumberLabel(sign)}，面朝地图${directionLabel(guidance.readHeading)}方向稳定查看${faceText}读到「${signInfoText(sign, endSpace, guidance.face)}」${sequenceRule || forwardRule}`;
}

function updateSimulationPanels() {
  if (!simulationStatus || !feedbackSummary) return;
  renderSimulationLog();
  renderResultRoutePicker();
  updatePrdMetric();
  renderDestinationFailureCounts();
  const results = state.test.routeResults || [];
  if (results.length > 1 && results.some((result) => result.simulated)) {
    const focused = results.find((result) => result.id === state.test.focusedRouteId);
    if (focused) {
      simulationStatus.textContent = `当前查看路线 ${focused.label}。`;
      if (!focused.success) {
        feedbackSummary.textContent = focused.problemPoints?.at(-1)?.reason || `路线 ${focused.label} 寻路失败。`;
      } else {
        feedbackSummary.textContent = `路线 ${focused.label} 寻路成功。`;
      }
      return;
    }
    const failed = results
      .filter((result) => result.simulated && result.success === false)
      .map((result) => result.label);
    simulationStatus.textContent = `已完成 ${results.length} 条路线模拟，点击路线编号查看对应记录。`;
    const messages = [];
    if (failed.length) messages.push(`寻路失败：${failed.join("、")}。`);
    feedbackSummary.replaceChildren();
    if (messages.length) {
      messages.forEach((message) => {
        const line = document.createElement("div");
        line.className = "feedbackSectionLine";
        line.textContent = message;
        feedbackSummary.appendChild(line);
      });
    } else {
      feedbackSummary.textContent = "全部路线寻路成功。";
    }
    return;
  }
  const problem = state.test.problemPoints.at(-1);
  if (problem) {
    simulationStatus.textContent = `模拟已停下；途中获得 ${state.test.infoEvents.length} 次导向信息。`;
    feedbackSummary.textContent = problem.reason;
    return;
  }
  if (state.test.actualPath.length) {
    simulationStatus.textContent = `模拟完成，蓝色路径已经生成；途中获得 ${state.test.infoEvents.length} 次导向信息。`;
    feedbackSummary.textContent = "本次模拟没有发现问题点。";
    return;
  }
  simulationStatus.textContent = "蓝色路径用于显示人的实际行走结果。";
  feedbackSummary.textContent = "还没有模拟问题点。";
}

function runSingleSimulation() {
  clearSimulationResults();
  if (!state.test.optimalPath.length && !computeOptimalPath({ silent: true })) {
    addSimulationLog("failure", "缺少有效的起点、终点或连通动线，无法开始模拟");
    updateSimulationPanels();
    setStatus("请先设置起点、终点，并生成最优路径。");
    return;
  }
  const endSpace = spaceById(state.test.endSpaceId);
  if (!endSpace) {
    addSimulationLog("failure", "尚未选择目的地，无法开始模拟");
    updateSimulationPanels();
    setStatus("请先选择终点空间。");
    return;
  }

  const startAnchor = state.test.start?.point ? nearestRouteCenter(state.test.start.point) : null;
  const resolvedDestination = calculateOptimalPath(state.test.start.point, endSpace)?.destinationSpace || endSpace;
  const endAnchor = nearestRouteCenter(resolvedDestination.point);
  if (!startAnchor || !endAnchor) {
    addSimulationLog("failure", "起点或目的地附近没有可用于模拟的动线");
    updateSimulationPanels();
    setStatus("没有找到可用于模拟的动线。");
    return;
  }

  const { nodes, graph } = buildRouteGraph(startAnchor, endAnchor);
  const startKey = nearestGraphKey(nodes, startAnchor.point);
  const endKey = nearestGraphKey(nodes, endAnchor.point);
  if (!startKey || !endKey) {
    addSimulationLog("failure", "起点或终点没有接入动线网络，无法开始寻路", startAnchor.point);
    state.test.problemPoints.push({
      point: clonePoint(startAnchor.point),
      reason: "起点或终点没有接入动线网络，模拟人在起点停下。",
    });
    updateSimulationPanels();
    redraw();
    return;
  }

  let currentKey = startKey;
  let previousKey = "";
  let heading = initialSimulationHeading();
  let guidance = null;
  let resumeHeadingAfterSign = null;
  const navigationState = {
    hasFollowedGuidance: false,
    returningFromInvalidSign: false,
    preInvalidSignHeading: null,
    lastValidSignPoint: null,
    lastValidSignId: "",
    lastValidGuidanceHeading: null,
    decisionCount: 0,
  };
  const visitedEdges = new Set();
  const optimalDistance = Math.max(1, pathLength(state.test.optimalPath));
  const failureMultiplier = Math.max(1, Number(state.test.failureDistanceMultiplier) || 5);
  const maxActualDistance = optimalDistance * failureMultiplier;
  const maxSteps = Math.max(60, state.segments.length * 20);
  state.test.actualPath.push(clonePoint(nodes.get(currentKey)));
  const startSpace = state.test.startSpaceId ? spaceById(state.test.startSpaceId) : null;
  addSimulationLog(
    "start",
    `从${startSpace ? `「${startSpace.name}」` : "自由起点"}出发，初始朝向为地图${directionLabel(heading)}方向，已知目的地是「${endSpace.name}」`,
    nodes.get(currentKey),
  );

  for (let step = 0; step < maxSteps; step += 1) {
    if (currentKey === endKey) break;
    const currentPointForView = nodes.get(currentKey);
    const connectedDirectionCount = routeChoicesAt(currentKey, previousKey, nodes, graph, visitedEdges).length;
    const viewAngle = connectedDirectionCount >= 3
      ? state.test.person.decisionAngle
      : state.test.person.normalAngle;
    const visibleDestination = destinationSpaceVisible(currentPointForView, heading, viewAngle, endSpace);
    if (visibleDestination) {
      addSimulationLog("success", `视野内直接看到目的地「${endSpace.name}」，径直走向目的地并完成寻路`, currentPointForView);
      addActualPathPoint(visibleDestination.point);
      currentKey = endKey;
      break;
    }
    if (!guidance) {
      const visibleSign = firstVisibleUnreadDestinationSign(currentPointForView, heading, viewAngle, endSpace, navigationState);
      if (visibleSign) {
        const arrivalHeading = heading;
        const inspection = signInspectionContext(visibleSign, endSpace);
        const stableSign = decisionSignForInspection(inspection);
        const returnAnchor = routeAnchorForSignReturn(currentPointForView, stableSign.point, arrivalHeading);
        addSimulationLog("sign", `视野内${groupedSignDiscoveryText(inspection)}`, currentPointForView);
        const stableKey = insertSignReadNode(nodes, graph, stableSign, returnAnchor) || currentKey;
        const stablePoint = nodes.get(stableKey) || currentPointForView;
        addActualPathPoint(stableSign.point);
        guidance = recordGroupedSignInspection(inspection, arrivalHeading, endSpace);
        if (guidance && stableKey) {
          connectGuidedRouteFromSign(nodes, graph, stableKey, stableSign, guidance, returnAnchor);
        }
        updateNavigationAfterSignInspection(navigationState, guidance, arrivalHeading);
        addSimulationLog("sign", signInspectionLogText(stableSign, guidance, endSpace, arrivalHeading), stableSign.point);
        resumeHeadingAfterSign = guidance ? null : arrivalHeading;
        if (distance(stablePoint, stableSign.point) > 1) addActualPathPoint(stablePoint);
        previousKey = currentKey === stableKey ? previousKey : currentKey;
        currentKey = stableKey || currentKey;
        heading = guidance?.readHeading ?? arrivalHeading;
        if (pathLength(state.test.actualPath) > maxActualDistance) {
          addSimulationLog("failure", `累计模拟距离超过最优路径的 ${failureMultiplier} 倍，仍未到达「${endSpace.name}」，寻路失败`, nodes.get(currentKey) || currentPointForView);
          state.test.problemPoints.push({
            point: clonePoint(nodes.get(currentKey) || currentPointForView),
            reason: `模拟路线已经超过最优路线 ${failureMultiplier} 倍，仍未到达「${endSpace.name}」，判定寻路失败。`,
          });
          break;
        }
        continue;
      }
    }
    const choice = chooseNextSimulationStep(
      currentKey,
      previousKey,
      nodes,
      graph,
      heading,
      endSpace,
      visitedEdges,
      guidance,
      navigationState,
    );
    if (!choice) {
      addSimulationLog("failure", "当前位置没有可继续行走的动线方向，寻路停止", nodes.get(currentKey));
      state.test.problemPoints.push({
        point: clonePoint(nodes.get(currentKey)),
        reason: "动线在当前位置没有可继续行走的方向，模拟人在这里停下。",
      });
      break;
    }

    visitedEdges.add(edgeVisitKey(currentKey, choice.key));
    const currentPoint = nodes.get(currentKey);
    const nextPoint = nodes.get(choice.key);
    const viaPoint = choice.viaKey ? nodes.get(choice.viaKey) : null;
    const movementPoints = viaPoint ? [currentPoint, viaPoint, nextPoint] : [currentPoint, nextPoint];
    addSimulationLog(choice.method === "backtrack" ? "backtrack" : "move", simulationChoiceText(choice, heading), currentPoint);
    if (viaPoint) {
      const viaEncounter = destinationEncounterAlongStep(currentPoint, viaPoint, endSpace)
        || destinationEncounterAlongStep(viaPoint, nextPoint, endSpace);
      if (viaEncounter) {
        addSimulationLog("success", `行进途中看到同名目的地「${viaEncounter.space.name}」，直接前往并完成寻路`, viaEncounter.point);
        addActualPathPoint(viaEncounter.point);
        addActualPathPoint(viaEncounter.space.point);
        currentKey = endKey;
        break;
      }
      visitedEdges.add(edgeVisitKey(currentKey, choice.viaKey));
      visitedEdges.add(edgeVisitKey(choice.viaKey, choice.key));
    }
    const endEncounter = viaPoint ? null : destinationEncounterAlongStep(currentPoint, nextPoint, endSpace);
    if (endEncounter) {
      addSimulationLog("success", `行进途中看到同名目的地「${endEncounter.space.name}」，直接前往并完成寻路`, endEncounter.point);
      addActualPathPoint(endEncounter.point);
      addActualPathPoint(endEncounter.space.point);
      currentKey = endKey;
      break;
    }
    if (choice.method === "sign") {
      recordVisibleSign(choice.sign, currentPoint, "node", endSpace, guidance?.face || "front");
      if (guidance?.sign?.id === choice.sign?.id && choice.guidanceResolved) {
        const resolvedChoice = viaPoint
          ? { ...choice, heading: directionTo(viaPoint, nextPoint) }
          : choice;
        const completed = completeOrAdvanceGuidance(guidance, resolvedChoice);
        if (completed) {
          navigationState.lastValidGuidanceHeading = resolvedChoice.heading;
          guidance = null;
        }
        else {
          const nextTurn = guidance.action === "left" ? "左拐" : "右拐";
          addSimulationLog(
            "move",
            `已完成${guidance.originalAction === "leftFront" ? "左上指令的左拐" : "右上指令的右拐"}；继续保留第二段指令，在随后第一个可执行${nextTurn}的节点完成${nextTurn}`,
            nextPoint,
          );
        }
      }
    }
    const encountered = firstEventAlongPath(
      movementPoints,
      (from, to) => firstSignAlongStep(from, to, endSpace, navigationState),
    );
    if (encountered) {
      const arrivalHeading = directionTo(movementPoints[encountered.legIndex], movementPoints[encountered.legIndex + 1]);
      const inspection = signInspectionContext(encountered.sign, endSpace);
      if (guidance && !inspection.hasEffectiveInformation) {
        recordGroupedSignInspection(inspection, arrivalHeading, endSpace);
        addSimulationLog(
          "sign",
          `${signInspectionGroupLabel(inspection)}没有当前目的地信息，忽略该标识并继续执行此前的「${panelActionLabel(guidance.action)}」指令`,
          encountered.point,
        );
      } else {
      const stableSign = decisionSignForInspection(inspection);
      const returnAnchor = routeAnchorForSignReturn(
        encountered.point,
        stableSign.point,
        arrivalHeading,
        choice.segmentId,
      );
      addSimulationLog("sign", `行进途中在视野内${groupedSignDiscoveryText(inspection)}`, encountered.point);
      const stableKey = insertSignReadNode(nodes, graph, stableSign, returnAnchor);
      const stablePoint = stableKey ? nodes.get(stableKey) : encountered.point;
      addPathPointsBeforeEvent(movementPoints, encountered.legIndex);
      addActualPathPoint(encountered.point);
      addActualPathPoint(stableSign.point);
      guidance = recordGroupedSignInspection(inspection, arrivalHeading, endSpace);
      if (guidance && stableKey) {
        connectGuidedRouteFromSign(nodes, graph, stableKey, stableSign, guidance, returnAnchor);
      }
      updateNavigationAfterSignInspection(navigationState, guidance, arrivalHeading);
      addSimulationLog("sign", signInspectionLogText(stableSign, guidance, endSpace, arrivalHeading), stableSign.point);
      resumeHeadingAfterSign = guidance ? null : arrivalHeading;
      if (distance(stablePoint, stableSign.point) > 1) addActualPathPoint(stablePoint);
      if (stableKey) {
        previousKey = currentKey;
        currentKey = stableKey;
        heading = guidance?.readHeading ?? arrivalHeading;
        if (pathLength(state.test.actualPath) > maxActualDistance) {
          addSimulationLog("failure", `累计模拟距离超过最优路径的 ${failureMultiplier} 倍，仍未到达「${endSpace.name}」，寻路失败`, stablePoint);
          state.test.problemPoints.push({
            point: clonePoint(stablePoint),
            reason: `模拟路线已经超过最优路线 ${failureMultiplier} 倍，仍未到达「${endSpace.name}」，判定寻路失败。`,
          });
          break;
        }
        continue;
      }
      }
    }
    const passedSign = firstEventAlongPath(
      movementPoints,
      (from, to) => firstPassedSignAlongStep(from, to, endSpace, navigationState),
    );
    if (passedSign) {
      const movementHeading = directionTo(
        movementPoints[passedSign.legIndex],
        movementPoints[passedSign.legIndex + 1],
      );
      const inspection = signInspectionContext(passedSign.sign, endSpace);
      if (guidance && !inspection.hasEffectiveInformation) {
        recordGroupedSignInspection(inspection, movementHeading, endSpace);
        addSimulationLog(
          "sign",
          `经过${signInspectionGroupLabel(inspection)}，但没有当前目的地信息；忽略该标识并继续执行此前的「${panelActionLabel(guidance.action)}」指令`,
          passedSign.point,
        );
      } else {
      const stableSign = decisionSignForInspection(inspection);
      const returnAnchor = routeAnchorForSignReturn(
        passedSign.point,
        stableSign.point,
        movementHeading,
        passedSign.routeAnchor.segmentId,
      );
      const passedKey = inspection.signs.length > 1
        ? insertSignReadNode(nodes, graph, stableSign, returnAnchor)
        : insertGraphAnchor(nodes, graph, passedSign.routeAnchor);
      addPathPointsBeforeEvent(movementPoints, passedSign.legIndex);
      addActualPathPoint(passedSign.point);
      if (inspection.signs.length > 1 && distance(passedSign.point, stableSign.point) > 1) {
        addActualPathPoint(stableSign.point);
      }
      guidance = recordGroupedSignInspection(inspection, movementHeading, endSpace);
      if (guidance && passedKey) {
        connectGuidedRouteFromSign(nodes, graph, passedKey, stableSign, guidance, returnAnchor);
      }
      updateNavigationAfterSignInspection(navigationState, guidance, movementHeading);
      addSimulationLog(
        "sign",
        `经过${signNumberLabel(passedSign.sign)}：人物与标识在动线上的投影点重合。${inspection.signs.length > 1 ? `同时读取${signInspectionGroupLabel(inspection)}；` : ""}${signInspectionLogText(stableSign, guidance, endSpace, movementHeading)}`,
        stableSign.point,
      );
      resumeHeadingAfterSign = guidance ? null : movementHeading;
      if (passedKey) {
        previousKey = currentKey;
        currentKey = passedKey;
        heading = guidance?.readHeading ?? movementHeading;
        continue;
      }
      }
    }
    if (viaPoint) addActualPathPoint(viaPoint);
    previousKey = choice.viaKey || currentKey;
    currentKey = choice.key;
    heading = choice.nextHeadingOverride
      ?? resumeHeadingAfterSign
      ?? (viaPoint ? directionTo(viaPoint, nextPoint) : choice.heading);
    resumeHeadingAfterSign = null;
    if (navigationState.returningFromInvalidSign) {
      navigationState.preInvalidSignHeading = heading;
    }
    addActualPathPoint(nodes.get(currentKey));
    const newlyVisibleDestination = destinationSpaceVisible(nodes.get(currentKey), heading, viewAngle, endSpace);
    if (newlyVisibleDestination) {
      addSimulationLog("success", `新的位置可以直接看到目的地「${endSpace.name}」，径直走向目的地并完成寻路`, nodes.get(currentKey));
      addActualPathPoint(newlyVisibleDestination.point);
      currentKey = endKey;
      break;
    }
    if (pathLength(state.test.actualPath) > maxActualDistance) {
      addSimulationLog("failure", `累计模拟距离超过最优路径的 ${failureMultiplier} 倍，仍未到达「${endSpace.name}」，寻路失败`, nodes.get(currentKey));
      state.test.problemPoints.push({
        point: clonePoint(nodes.get(currentKey)),
        reason: `模拟路线已经超过最优路线 ${failureMultiplier} 倍，仍未到达「${endSpace.name}」，判定寻路失败。`,
      });
      break;
    }
  }

  if (currentKey !== endKey && !state.test.problemPoints.length) {
    addSimulationLog("failure", `经过直行、宽动线试探和折返后仍未到达「${endSpace.name}」，寻路停止`, nodes.get(currentKey));
    state.test.problemPoints.push({
      point: clonePoint(nodes.get(currentKey)),
      reason: `经过直行、宽动线试探和必要折返后，仍未到达「${endSpace.name}」，模拟人在这里停下。`,
    });
  }
  if (currentKey === endKey && !(state.test.simulationLog || []).some((entry) => entry.type === "success")) {
    addSimulationLog("success", `到达同名目的地「${resolvedDestination.name}」，寻路成功`, resolvedDestination.point);
  }

  updateSimulationPanels();
  updateStatus();
  redraw();
}

function captureSimulationResult(result) {
  const success = (state.test.simulationLog || []).some((entry) => entry.type === "success")
    && !state.test.problemPoints.length;
  return {
    ...result,
    actualPath: structuredClone(state.test.actualPath || []),
    problemPoints: structuredClone(state.test.problemPoints || []),
    infoEvents: structuredClone(state.test.infoEvents || []),
    simulationLog: structuredClone(state.test.simulationLog || []),
    readSignIds: [...(state.test.readSignIds || [])],
    success,
    simulated: true,
    optimalDistance: pathLength(result.optimalPath || []),
    actualDistance: pathLength(state.test.actualPath || []),
  };
}

function runSimulation() {
  if (!state.test.routeResults.length && !computeOptimalPath({ silent: true })) {
    setStatus("请先设置起点、终点，并生成最优路径。");
    return;
  }
  const startMode = state.test.startMode;
  const startSpaceIds = [...(state.test.startSpaceIds || [])];
  const endSpaceIds = [...(state.test.endSpaceIds || [])];
  const results = state.test.routeResults.map((result) => {
    if (!result.optimalPath.length) {
      return {
        ...result,
        success: false,
        simulated: true,
        problemPoints: [{ point: clonePoint(result.start.point), reason: "起点和终点所在动线没有连通。" }],
        simulationLog: [{ id: "log-1", type: "failure", text: "起点和终点所在动线没有连通，无法开始模拟", point: clonePoint(result.start.point) }],
        optimalDistance: 0,
        actualDistance: 0,
      };
    }
    state.test.start = structuredClone(result.start);
    state.test.startSpaceId = result.start.spaceId || "";
    state.test.endSpaceId = result.endSpaceId;
    state.test.optimalPath = structuredClone(result.optimalPath);
    state.test.optimalAnchors = structuredClone(result.optimalAnchors);
    runSingleSimulation();
    return captureSimulationResult(result);
  });
  state.test.startMode = startMode;
  state.test.startSpaceIds = startSpaceIds;
  state.test.endSpaceIds = endSpaceIds;
  state.test.routeResults = results;
  state.test.selectedResultRouteIds = [];
  state.test.focusedRouteId = "";
  syncActiveRouteResult(results[0]);
  updateSimulationPanels();
  updateStatus();
  redraw();
}

function snapForSign(point, installType) {
  if (installType === "hanging") return nearestRouteCenter(point);
  if (installType === "standing") {
    if (pointInWalkable(point)) {
      const nearest = nearestRouteCenter(point);
      return { point: clonePoint(point), segmentId: nearest?.segmentId ?? null, distance: 0 };
    }
    return nearestRouteCenter(point);
  }
  return nearestInformationInterface(point);
}

function orientationTowardWalkable(point, segmentId) {
  const segment = state.segments.find((item) => item.id === segmentId);
  if (!segment) return { angle: 0, vector: { x: 0, y: -1 } };
  const projected = nearestPointOnSegment(point, segment.a, segment.b);
  const dx = projected.point.x - point.x;
  const dy = projected.point.y - point.y;
  const len = Math.max(1, Math.hypot(dx, dy));
  return {
    angle: Math.atan2(dy, dx),
    vector: { x: dx / len, y: dy / len },
  };
}

function hitTestSpace(point, threshold = 14) {
  let best = null;
  let bestDistance = threshold;
  for (const space of state.spaces) {
    const d = distance(point, space.point);
    if (d < bestDistance) {
      best = space;
      bestDistance = d;
    }
  }
  return best;
}

function hitTestEquivalentSpacePoint(point, threshold = 14) {
  let best = null;
  let bestDistance = threshold;
  for (const equivalentPoint of state.spaceEquivalentPoints) {
    const d = distance(point, equivalentPoint.point);
    if (d < bestDistance) {
      best = equivalentPoint;
      bestDistance = d;
    }
  }
  return best;
}

function hitTestSign(point, threshold = 16) {
  let best = null;
  let bestDistance = threshold;
  for (const sign of state.signs) {
    const d = distance(point, sign.point);
    if (d < bestDistance) {
      best = sign;
      bestDistance = d;
    }
  }
  return best;
}

function drawWalkableSurface() {
  if (!state.layers.surface || (!state.interfaceConfirmed && state.tool !== "width") || !state.segments.length) return;
  const mask = document.createElement("canvas");
  mask.width = canvas.width;
  mask.height = canvas.height;
  const maskCtx = mask.getContext("2d");
  maskCtx.strokeStyle = "#000";
  maskCtx.lineCap = "butt";
  maskCtx.lineJoin = "miter";

  for (const segment of state.segments) {
    maskCtx.lineWidth = segment.width;
    maskCtx.beginPath();
    maskCtx.moveTo(segment.a.x, segment.a.y);
    maskCtx.lineTo(segment.b.x, segment.b.y);
    maskCtx.stroke();
  }

  for (const joint of buildJointMap().filter((item) => item.count > 1)) {
    drawJointCornerFills(maskCtx, joint);
  }

  const surface = document.createElement("canvas");
  surface.width = canvas.width;
  surface.height = canvas.height;
  const surfaceCtx = surface.getContext("2d");
  surfaceCtx.fillStyle = "rgba(24, 166, 106, 0.3)";
  surfaceCtx.fillRect(0, 0, surface.width, surface.height);
  surfaceCtx.globalCompositeOperation = "destination-in";
  surfaceCtx.drawImage(mask, 0, 0);
  ctx.drawImage(surface, 0, 0);
}

function drawSegment(segment, preview = false) {
  const selected = state.selectedIds.has(segment.id);
  ctx.save();
  ctx.strokeStyle = selected ? "#111111" : colors[segment.type];
  ctx.lineWidth = visualSize(selected ? 6 : 5);
  ctx.lineJoin = "round";
  ctx.lineCap = "round";
  ctx.setLineDash(preview || ["primary", "secondary"].includes(segment.type) ? [visualSize(12), visualSize(10)] : []);
  ctx.beginPath();
  ctx.moveTo(segment.a.x, segment.a.y);
  ctx.lineTo(segment.b.x, segment.b.y);
  ctx.stroke();
  ctx.restore();

  if (state.tool === "edit") {
    drawNode(segment.a, selected ? "#ffe082" : "#ffffff", "#111111", 5);
    drawNode(segment.b, selected ? "#ffe082" : "#ffffff", "#111111", 5);
  }
}

function drawWidthLabels() {
  if (state.tool !== "width" || !showWidthLabelsInput.checked) return;
  for (const segment of state.segments) {
    const geometry = widthLabelGeometry(segment);
    const mid = geometry.mid;
    const selected = state.selectedIds.has(segment.id);
    ctx.save();
    ctx.font = canvasFont(12);
    const text = geometry.text;
    const w = geometry.width;
    ctx.fillStyle = selected ? "#ffe082" : "rgba(255, 255, 255, 0.92)";
    ctx.strokeStyle = selected ? "#111" : "#657178";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.roundRect(mid.x - w / 2, mid.y - 28, w, 22, 4);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = "#1f2528";
    ctx.fillText(text, mid.x - w / 2 + 6, mid.y - 13);
    ctx.restore();
  }
}

function drawWidthArrows() {
  if (state.tool !== "width") return;
  for (const segment of selectedSegments()) {
    const arrow = widthArrowForSegment(segment);
    const edge = {
      x: arrow.mid.x + arrow.nx * (segment.width / 2),
      y: arrow.mid.y + arrow.ny * (segment.width / 2),
    };
    const tip = {
      x: arrow.x + arrow.nx * visualSize(9),
      y: arrow.y + arrow.ny * visualSize(9),
    };
    const left = {
      x: arrow.x - arrow.nx * visualSize(8) + arrow.ux * visualSize(7),
      y: arrow.y - arrow.ny * visualSize(8) + arrow.uy * visualSize(7),
    };
    const right = {
      x: arrow.x - arrow.nx * visualSize(8) - arrow.ux * visualSize(7),
      y: arrow.y - arrow.ny * visualSize(8) - arrow.uy * visualSize(7),
    };

    ctx.save();
    ctx.strokeStyle = "#111111";
    ctx.fillStyle = "#ffe082";
    ctx.lineWidth = visualSize(2);
    ctx.setLineDash([visualSize(4), visualSize(5)]);
    ctx.beginPath();
    ctx.moveTo(edge.x, edge.y);
    ctx.lineTo(arrow.x, arrow.y);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.beginPath();
    ctx.moveTo(tip.x, tip.y);
    ctx.lineTo(left.x, left.y);
    ctx.lineTo(right.x, right.y);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  }
}

function drawNode(point, fill = "#ffffff", stroke = "#111111", size = 5) {
  ctx.save();
  ctx.beginPath();
  ctx.arc(point.x, point.y, visualSize(size), 0, Math.PI * 2);
  ctx.fillStyle = fill;
  ctx.fill();
  ctx.lineWidth = visualSize(2);
  ctx.strokeStyle = stroke;
  ctx.stroke();
  ctx.restore();
}

function drawSpaceInfo() {
  if (!state.layers.spaces) return;
  for (const space of state.spaces) {
    const selected = space.id === state.selectedSpaceId;
    const hovered = space.id === state.hoverSpaceId;
    const shouldShowLabel = selected || hovered || showSpaceLabelsInput.checked;
    ctx.save();
    ctx.fillStyle = selected ? "#facc15" : "#ffffff";
    ctx.strokeStyle = selected ? "#111111" : colors.info;
    ctx.lineWidth = visualSize(2);
    ctx.beginPath();
    ctx.arc(space.point.x, space.point.y, visualSize(selected ? 8 : 6), 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    if (shouldShowLabel) {
      const label = space.name || "未命名";
      ctx.font = canvasFont(13);
      const width = ctx.measureText(label).width + 14;
      const x = space.point.x + 12;
      const y = space.point.y - 26;
      ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
      ctx.strokeStyle = selected ? "#111111" : colors.info;
      ctx.beginPath();
      ctx.roundRect(x, y, width, 24, 4);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = "#1f2528";
      ctx.fillText(label, x + 7, y + 16);
    }
    ctx.restore();
  }
  for (const equivalentPoint of state.spaceEquivalentPoints) {
    const source = state.spaces.find((space) => space.id === equivalentPoint.spaceId);
    if (!source) continue;
    const selected = equivalentPoint.id === state.selectedEquivalentPointId;
    const hovered = equivalentPoint.id === state.hoverEquivalentPointId;
    const shouldShowLabel = selected || hovered || showSpaceLabelsInput.checked;
    ctx.save();
    ctx.fillStyle = selected ? "#facc15" : "#ffffff";
    ctx.strokeStyle = selected ? "#111111" : colors.info;
    ctx.lineWidth = visualSize(2);
    ctx.setLineDash([visualSize(3), visualSize(3)]);
    ctx.beginPath();
    ctx.arc(equivalentPoint.point.x, equivalentPoint.point.y, visualSize(selected ? 8 : 6), 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.setLineDash([]);

    if (shouldShowLabel) {
      const label = source.name || "未命名";
      ctx.font = canvasFont(13);
      const width = ctx.measureText(label).width + 14;
      const x = equivalentPoint.point.x + 12;
      const y = equivalentPoint.point.y - 26;
      ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
      ctx.strokeStyle = selected ? "#111111" : colors.info;
      ctx.beginPath();
      ctx.roundRect(x, y, width, 24, 4);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = "#1f2528";
      ctx.fillText(label, x + 7, y + 16);
    }
    ctx.restore();
  }
}

function drawSigns() {
  if (!state.layers.signs) return;
  for (const sign of state.signs) {
    const selected = sign.id === state.selectedSignId;
    const hovered = sign.id === state.hoverSignId;
    const orientation = orientationTowardWalkable(sign.point, sign.segmentId);
    const vx = orientation.vector.x;
    const vy = orientation.vector.y;
    const px = -vy;
    const py = vx;
    const tip = { x: sign.point.x + vx * visualSize(16), y: sign.point.y + vy * visualSize(16) };
    const left = { x: sign.point.x - vx * visualSize(6) + px * visualSize(8), y: sign.point.y - vy * visualSize(6) + py * visualSize(8) };
    const right = { x: sign.point.x - vx * visualSize(6) - px * visualSize(8), y: sign.point.y - vy * visualSize(6) - py * visualSize(8) };

    ctx.save();
    ctx.fillStyle = selected ? "#facc15" : "#ffffff";
    ctx.strokeStyle = selected ? "#111111" : colors.sign;
    ctx.lineWidth = visualSize(2);
    if (sign.installType === "standing") {
      ctx.beginPath();
      ctx.rect(sign.point.x - visualSize(7), sign.point.y - visualSize(7), visualSize(14), visualSize(14));
    } else if (sign.installType === "hanging") {
      drawHangingSignRect(sign.point, sign.hangingFacing || "upDown", selected);
    } else {
      ctx.beginPath();
      ctx.moveTo(tip.x, tip.y);
      ctx.lineTo(left.x, left.y);
      ctx.lineTo(right.x, right.y);
      ctx.closePath();
    }
    if (sign.installType !== "hanging") {
      ctx.fill();
      ctx.stroke();
    }
    const showNumber = selected || hovered || showSignLabelsInput.checked;
    const showInfo = selected || hovered || showSignInfoLabelsInput.checked;
    let labelY = sign.point.y - 28;
    if (showNumber) {
      const box = drawLabelBox([signNumberLabel(sign)], sign.point.x + 12, labelY, colors.sign, {
        lineHeight: 16,
        paddingY: 6,
      });
      labelY += box.height + 5;
    }
    if (showInfo) {
      const lines = signAssociationLines(sign);
      if (lines.length) {
        drawLabelBox(lines, sign.point.x + 12, labelY, colors.sign, {
          font: canvasFont(12),
          lineHeight: 16,
          paddingY: 6,
        });
      }
    }
    if (state.layers.signPanels) {
      drawSignPanel(sign);
    }
    ctx.restore();
  }
}

function drawHangingSignRect(point, facing = "upDown", selected = false) {
  const horizontal = facing === "leftRight";
  const width = visualSize(horizontal ? 28 : 10);
  const height = visualSize(horizontal ? 10 : 28);
  ctx.beginPath();
  ctx.roundRect(point.x - width / 2, point.y - height / 2, width, height, visualSize(2));
  ctx.fill();
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(point.x - visualSize(horizontal ? 0 : 8), point.y - visualSize(horizontal ? 8 : 0));
  ctx.lineTo(point.x + visualSize(horizontal ? 0 : 8), point.y + visualSize(horizontal ? 8 : 0));
  ctx.strokeStyle = selected ? "#111111" : colors.sign;
  ctx.stroke();
}

function drawPanelActionGlyph(point, action = "straight") {
  const glyph = {
    straight: "↑",
    leftFront: "↖",
    rightFront: "↗",
    left: "←",
    right: "→",
    back: "↓",
  }[action] || "↑";
  ctx.save();
  ctx.font = canvasFont(12);
  ctx.fillStyle = colors.sign;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(glyph, point.x, point.y);
  ctx.restore();
}

function drawSignPlacementPreview() {
  if (state.tool !== "sign" || state.signSubMode !== "placement" || !state.pointer) return;
  const installType = signInstallTypeInput.value || "wall";
  const snap = snapForSign(state.pointer, installType);
  if (!snap) return;
  ctx.save();
  ctx.globalAlpha = 0.7;
  ctx.fillStyle = "#ffffff";
  ctx.strokeStyle = colors.sign;
  ctx.lineWidth = visualSize(2);
  if (installType === "hanging") {
    drawHangingSignRect(snap.point, signHangingFacingInput.value || "upDown", true);
  } else {
    drawNode(snap.point, "#ffffff", colors.sign, 6);
  }
  ctx.restore();
}

function drawSignPanel(sign) {
  normalizeSignFaces(sign);
  const panels = sign.installType === "hanging"
    ? [
        { face: "front", image: sign.imagesByFace.front?.[0] },
        { face: "back", image: sign.imagesByFace.back?.[0] },
      ].filter((item) => item.image?.url)
    : [{ face: "front", image: sign.imagesByFace.front?.[0] }].filter((item) => item.image?.url);
  if (!panels.length) return;
  const panelWidth = visualSize(72);
  const panelHeight = visualSize(44);
  const horizontalStack = sign.installType === "hanging" && sign.hangingFacing === "upDown";
  ctx.save();
  panels.forEach(({ face, image }, index) => {
    const x = sign.point.x + visualSize(18) + (horizontalStack ? index * (panelWidth + visualSize(8)) : 0);
    const y = sign.point.y + visualSize(12) + (!horizontalStack ? index * (panelHeight + visualSize(8)) : 0);
    ctx.fillStyle = "rgba(255, 255, 255, 0.92)";
    ctx.strokeStyle = colors.sign;
    ctx.lineWidth = visualSize(1.5);
    ctx.beginPath();
    ctx.roundRect(x, y, panelWidth, panelHeight, visualSize(4));
    ctx.fill();
    ctx.stroke();
    if (image.element?.complete) {
      const innerW = panelWidth - visualSize(8);
      const innerH = panelHeight - visualSize(8);
      const naturalW = image.element.naturalWidth || innerW;
      const naturalH = image.element.naturalHeight || innerH;
      const scale = Math.min(innerW / naturalW, innerH / naturalH);
      const drawW = naturalW * scale;
      const drawH = naturalH * scale;
      ctx.drawImage(image.element, x + visualSize(4) + (innerW - drawW) / 2, y + visualSize(4) + (innerH - drawH) / 2, drawW, drawH);
    }
    if (sign.installType === "hanging") {
      ctx.fillStyle = colors.sign;
      ctx.font = canvasFont(10);
      ctx.textAlign = "left";
      ctx.fillText(face === "front" ? "正" : "背", x + 4, y + 11);
    }
  });
  ctx.restore();
}

function offsetPathPoints(points, offset) {
  if (!offset || !points || points.length < 2) return points;
  return points.map((point, index) => {
    const prev = points[Math.max(0, index - 1)];
    const next = points[Math.min(points.length - 1, index + 1)];
    const dx = next.x - prev.x;
    const dy = next.y - prev.y;
    const len = Math.max(1, Math.hypot(dx, dy));
    return {
      x: point.x + (-dy / len) * offset,
      y: point.y + (dx / len) * offset,
    };
  });
}

function offsetPointByPath(point, path, offset) {
  if (!offset || !path || path.length < 2) return point;
  let bestIndex = 0;
  let bestDistance = Infinity;
  path.forEach((candidate, index) => {
    const d = distance(point, candidate);
    if (d < bestDistance) {
      bestIndex = index;
      bestDistance = d;
    }
  });
  return offsetPathPoints(path, offset)[bestIndex] || point;
}

function drawPathLine(points, color, dashed = false, offset = 0) {
  if (!points || points.length < 2) return;
  const displayPoints = offsetPathPoints(points, offset);
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = visualSize(4);
  ctx.lineJoin = "round";
  ctx.lineCap = "round";
  ctx.setLineDash(dashed ? [visualSize(10), visualSize(8)] : []);
  ctx.beginPath();
  ctx.moveTo(displayPoints[0].x, displayPoints[0].y);
  displayPoints.slice(1).forEach((point) => ctx.lineTo(point.x, point.y));
  ctx.stroke();
  ctx.restore();
}

function drawLabelBox(lines, x, y, strokeColor, options = {}) {
  const font = options.font || canvasFont(13);
  const lineHeight = options.lineHeight || 18;
  const paddingX = options.paddingX || 8;
  const paddingY = options.paddingY || 6;
  ctx.save();
  ctx.font = font;
  const width = Math.max(...lines.map((line) => ctx.measureText(line).width), 20) + paddingX * 2;
  const height = lines.length * lineHeight + paddingY * 2 - 4;
  ctx.textAlign = "left";
  ctx.textBaseline = "alphabetic";
  ctx.fillStyle = options.fill || "rgba(255, 255, 255, 0.94)";
  ctx.strokeStyle = strokeColor;
  ctx.lineWidth = options.lineWidth || 1.5;
  ctx.beginPath();
  ctx.roundRect(x, y, width, height, 4);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = options.textColor || "#1f2528";
  lines.forEach((line, index) => {
    ctx.fillText(line, x + paddingX, y + paddingY + 10 + index * lineHeight);
  });
  ctx.restore();
  return { width, height };
}

function drawTestMarker(point, label, color, detail = "") {
  ctx.save();
  ctx.fillStyle = color;
  ctx.strokeStyle = "#ffffff";
  ctx.lineWidth = visualSize(3);
  ctx.beginPath();
  ctx.arc(point.x, point.y, visualSize(8), 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  const text = detail ? `${label}：${detail}` : label;
  ctx.font = canvasFont(13);
  const width = ctx.measureText(text).width + 16;
  const x = point.x + 13;
  const y = point.y - 28;
  ctx.fillStyle = "rgba(255, 255, 255, 0.88)";
  ctx.strokeStyle = color;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.roundRect(x, y, width, 24, 4);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = "#1f2528";
  ctx.fillText(text, x + 8, y + 16);
  ctx.restore();
}

function drawVisionSector(point, heading, angleDeg, radius, fill, stroke) {
  const half = (angleDeg * Math.PI) / 360;
  ctx.save();
  ctx.fillStyle = fill;
  ctx.strokeStyle = stroke;
  ctx.lineWidth = visualSize(1.5);
  ctx.beginPath();
  ctx.moveTo(point.x, point.y);
  ctx.arc(point.x, point.y, radius, heading - half, heading + half);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
}

function drawPersonGlyph(point, heading) {
  ctx.save();
  ctx.translate(point.x, point.y);
  ctx.rotate(heading);
  ctx.fillStyle = "#ffffff";
  ctx.strokeStyle = "#111111";
  ctx.lineWidth = visualSize(2);
  ctx.beginPath();
  ctx.arc(0, 0, visualSize(7), 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(visualSize(7), 0);
  ctx.lineTo(visualSize(17), -visualSize(5));
  ctx.lineTo(visualSize(17), visualSize(5));
  ctx.closePath();
  ctx.fillStyle = colors.actual;
  ctx.fill();
  ctx.stroke();
  ctx.restore();
}

function drawPersonSettings() {
  if (state.tool !== "person") return;
  ensureDemoPerson();
  const person = state.test.person;
  if (!person.demoPoint) return;
  drawVisionSector(
    person.demoPoint,
    person.heading,
    person.decisionAngle,
    person.visionDistance,
    "rgba(227, 106, 33, 0.12)",
    "rgba(227, 106, 33, 0.55)",
  );
  drawVisionSector(
    person.demoPoint,
    person.heading,
    person.normalAngle,
    person.visionDistance,
    "rgba(23, 120, 212, 0.14)",
    "rgba(23, 120, 212, 0.65)",
  );
  drawPersonGlyph(person.demoPoint, person.heading);
}

function drawProblemPoints() {
  for (const problem of state.test.problemPoints) {
    const point = offsetPointByPath(problem.point, state.test.actualPath, displayOffsets.actualPath);
    ctx.save();
    ctx.strokeStyle = colors.problem;
    ctx.fillStyle = "rgba(255, 255, 255, 0.92)";
    ctx.lineWidth = visualSize(2.5);
    ctx.beginPath();
    ctx.arc(point.x, point.y, visualSize(9), 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(point.x - visualSize(5), point.y - visualSize(5));
    ctx.lineTo(point.x + visualSize(5), point.y + visualSize(5));
    ctx.moveTo(point.x + visualSize(5), point.y - visualSize(5));
    ctx.lineTo(point.x - visualSize(5), point.y + visualSize(5));
    ctx.stroke();
    ctx.restore();
  }
}

function simulationRecordLabel(event) {
  if (event.action === "noInfo") return "无目前信息";
  if (signActionOrder.includes(event.action)) return panelActionLabel(event.action);
  const savedLabel = String(event.label || "").trim();
  if (!savedLabel || savedLabel.includes("无当前目的地信息") || savedLabel.includes("无目前信息")) {
    return "无目前信息";
  }
  const actionText = savedLabel
    .replace(/^(正面|背面)\s*[·]?\s*/, "")
    .split(/[：:]/)[0]
    .trim();
  return actionText || "无目前信息";
}

function drawInfoEvents() {
  state.test.infoEvents.forEach((event, index) => {
    const point = offsetPointByPath(event.point, state.test.actualPath, displayOffsets.actualPath);
    ctx.save();
    ctx.strokeStyle = colors.actual;
    ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
    ctx.lineWidth = visualSize(2.5);
    ctx.beginPath();
    ctx.arc(point.x, point.y, visualSize(12), 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = colors.actual;
    ctx.font = canvasFont(12);
    ctx.fillText(String(index + 1), point.x - 3.5, point.y + 4);

    ctx.font = canvasFont(13);
    const maxWidth = 150;
    const recordLabel = simulationRecordLabel(event);
    const rawWidth = ctx.measureText(recordLabel).width + 14;
    const width = Math.min(maxWidth, rawWidth);
    const label = rawWidth > maxWidth ? `${recordLabel.slice(0, 12)}...` : recordLabel;
    const x = point.x + 15;
    const y = point.y - 30;
    ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
    ctx.strokeStyle = colors.actual;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.roundRect(x, y, width, 24, 4);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = "#1f2528";
    ctx.fillText(label, x + 7, y + 16);
    ctx.restore();
  });
}

function drawPathfindingTest() {
  const results = state.test.routeResults || [];
  const focusedResult = results.find((result) => result.id === state.test.focusedRouteId);
  const displayedResults = focusedResult ? [focusedResult] : results;
  const multiRoute = results.length > 1;
  if (results.length) {
    for (const result of displayedResults) {
      if (state.layers.optimalPath) drawPathLine(result.optimalPath, colors.optimal, false, displayOffsets.optimalPath);
      if (state.layers.actualPath) drawPathLine(result.actualPath, colors.actual, true, displayOffsets.actualPath);
      if (multiRoute && state.test.showPathLabels) {
        const labelPath = result.actualPath?.length ? result.actualPath : result.optimalPath;
        const mid = pathMidpoint(labelPath);
        if (mid) drawLabelBox([result.label], mid.x + 8, mid.y - 30, "#1f2528");
      }
    }
  } else {
    if (state.layers.optimalPath) drawPathLine(state.test.optimalPath, colors.optimal, false, displayOffsets.optimalPath);
    if (state.layers.actualPath) drawPathLine(state.test.actualPath, colors.actual, true, displayOffsets.actualPath);
  }
  if (!multiRoute || focusedResult) {
    if (state.layers.simulationRecords) drawInfoEvents();
    if (state.layers.actualPath) drawProblemPoints();
  }
  if (state.layers.optimalPath && state.test.optimalAnchors && (!multiRoute || focusedResult)) {
    drawNode(state.test.optimalAnchors.start, "#ffffff", colors.optimal, 5);
    drawNode(state.test.optimalAnchors.end, "#ffffff", colors.optimal, 5);
  }
  if (state.layers.actualPath && state.test.actualPath.length && (!multiRoute || focusedResult)) {
    const last = state.test.actualPath.at(-1);
    const prev = state.test.actualPath.at(-2) || last;
    const displayLast = offsetPointByPath(last, state.test.actualPath, displayOffsets.actualPath);
    drawPersonGlyph(displayLast, Math.atan2(last.y - prev.y, last.x - prev.x));
  }

  const focusedStartSpace = focusedResult?.start?.spaceId ? spaceById(focusedResult.start.spaceId) : null;
  const starts = focusedResult
    ? [{
        point: focusedResult.start.point,
        name: focusedStartSpace?.name || "自由点",
      }]
    : state.test.startMode === "space"
      ? (state.test.startSpaceIds || []).map(spaceById).filter(Boolean).map((space) => ({ point: space.point, name: space.name }))
      : state.test.start?.point ? [{ point: state.test.start.point, name: "自由点" }] : [];
  for (const start of starts) {
    if (state.layers.testPoints) {
      drawTestMarker(start.point, "起点", colors.testStart, start.name);
    }
  }
  if (state.test.start?.point) {
    const personPoint = state.test.optimalAnchors?.start
      || nearestRouteCenter(state.test.start.point)?.point
      || state.test.start.point;
    const displayPersonPoint = state.test.optimalPath.length
      ? offsetPointByPath(personPoint, state.test.optimalPath, displayOffsets.actualPath)
      : { x: personPoint.x, y: personPoint.y + 18 };
    drawPersonGlyph(displayPersonPoint, initialSimulationHeading());
  }

  if (state.layers.testPoints) {
    const endSpaces = focusedResult
      ? [spaceById(focusedResult.endSpaceId)].filter(Boolean)
      : (state.test.endSpaceIds || []).map(spaceById).filter(Boolean);
    for (const endSpace of endSpaces) {
      drawTestMarker(endSpace.point, "终点", colors.testEnd, endSpace.name);
    }
  }
  drawPersonSettings();
}

function pathMidpoint(points) {
  if (!points?.length) return null;
  if (points.length === 1) return clonePoint(points[0]);
  const total = pathLength(points);
  let walked = 0;
  for (let index = 1; index < points.length; index += 1) {
    const leg = distance(points[index - 1], points[index]);
    if (walked + leg >= total / 2) {
      const ratio = leg ? (total / 2 - walked) / leg : 0;
      return {
        x: points[index - 1].x + (points[index].x - points[index - 1].x) * ratio,
        y: points[index - 1].y + (points[index].y - points[index - 1].y) * ratio,
      };
    }
    walked += leg;
  }
  return clonePoint(points.at(-1));
}

function signPrefixForInstallType(type) {
  return {
    hanging: "吊牌",
    wall: "墙牌",
    film: "贴膜",
    standing: "立牌",
  }[type] ?? "导向";
}

function signTypeShortLabel(type) {
  return {
    hanging: "吊牌",
    wall: "墙牌",
    film: "贴膜",
    standing: "立牌",
  }[type] ?? "导向";
}

function signOrdinal(sign) {
  const index = state.signs.findIndex((item) => item.id === sign.id);
  return index >= 0 ? index + 1 : state.signs.indexOf(sign) + 1;
}

function signNumberLabel(sign) {
  return `导向${signOrdinal(sign)}，${signTypeShortLabel(sign.installType)}`;
}

function signAssociationLines(sign) {
  normalizeSignFaces(sign);
  const faces = sign.installType === "hanging" ? ["front", "back"] : ["front"];
  return faces.flatMap((face) => {
    const destinations = signDestinationsForFace(sign, face);
    return signActionOrder
      .map((action) => {
        const names = (destinations[action] || [])
          .map((id) => spaceById(id)?.name)
          .filter(Boolean);
        const facePrefix = sign.installType === "hanging" ? `${face === "front" ? "正面" : "背面"} · ` : "";
        return names.length ? `${facePrefix}${panelActionLabel(action)}：${names.join("、")}` : "";
      })
      .filter(Boolean);
  });
}

function nextSignNumber(installType) {
  const used = new Set(state.signs.filter((sign) => sign.installType === installType).map((sign) => sign.number));
  for (let i = 1; i <= 999; i += 1) {
    if (!used.has(String(i))) return String(i);
  }
  return String(state.signs.length + 1);
}

function composeSignDefaultText(installType, number) {
  return `${signPrefixForInstallType(installType)}${number}`;
}

function spaceTypeLabel(type) {
  return spaceTypeLabels[type] ?? "空间";
}

function numberForIndex(type, index) {
  if (["meeting_room", "training_room", "lab"].includes(type)) return String(index).padStart(2, "0");
  if (["work_area", "discussion_pod"].includes(type)) return lettersForIndex(index);
  if (type === "live_room") return `L${String(index).padStart(2, "0")}`;
  if (["elevator_lobby", "stairwell", "pantry"].includes(type)) return `${index}#`;
  return "";
}

function indexFromNumber(type, number) {
  const value = String(number || "").trim();
  if (!value) return 0;
  if (["meeting_room", "training_room"].includes(type)) return /^\d+$/.test(value) ? Number(value) : 0;
  if (type === "lab") {
    const match = value.match(/^L?(\d+)$/i);
    return match ? Number(match[1]) : 0;
  }
  if (["work_area", "discussion_pod"].includes(type)) {
    if (!/^[A-Z]+$/i.test(value)) return 0;
    return value
      .toUpperCase()
      .split("")
      .reduce((total, char) => total * 26 + char.charCodeAt(0) - 64, 0);
  }
  if (type === "live_room") {
    const match = value.match(/^L(\d+)$/i);
    return match ? Number(match[1]) : 0;
  }
  if (["elevator_lobby", "stairwell", "pantry"].includes(type)) {
    const match = value.match(/^(\d+)#$/);
    return match ? Number(match[1]) : 0;
  }
  return 0;
}

function lettersForIndex(index) {
  let n = index;
  let label = "";
  while (n > 0) {
    n -= 1;
    label = String.fromCharCode(65 + (n % 26)) + label;
    n = Math.floor(n / 26);
  }
  return label;
}

function nextSpaceNumber(type) {
  if (!numberedSpaceTypes.has(type)) return "";
  const maxIndex = state.spaces
    .filter((space) => space.type === type)
    .reduce((max, space) => Math.max(max, indexFromNumber(type, space.number)), 0);
  return numberForIndex(type, maxIndex + 1);
}

function resolveSpaceNumber(type, requested, excludeId = null) {
  if (!numberedSpaceTypes.has(type)) return "";
  if (optionalNumberedSpaceTypes.has(type)) return requested || "";
  return requested || nextSpaceNumber(type);
}

function populateSpaceNumbers(type, selected = "") {
  const current = selected || (optionalNumberedSpaceTypes.has(type) ? "" : nextSpaceNumber(type));
  spaceNumberInput.innerHTML = "";
  const auto = document.createElement("option");
  auto.value = "";
  auto.textContent = optionalNumberedSpaceTypes.has(type)
    ? "无编号（默认）"
    : numberedSpaceTypes.has(type) ? "自动编号" : "无编号";
  spaceNumberInput.appendChild(auto);

  if (numberedSpaceTypes.has(type)) {
    if (type === "elevator_lobby") {
      for (const value of elevatorDirectionNumbers) {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = value;
        spaceNumberInput.appendChild(option);
      }
    }
    for (let i = 1; i <= 40; i += 1) {
      const value = numberForIndex(type, i);
      const option = document.createElement("option");
      option.value = value;
      option.textContent = value;
      spaceNumberInput.appendChild(option);
    }
  }

  spaceNumberInput.value = current;
}

function composeSpaceName(type, number, customName = "") {
  const custom = customName.trim();
  if (custom) return custom;
  const label = spaceTypeLabel(type);
  if (type === "elevator_lobby" && elevatorDirectionNumbers.includes(number)) return `${number}${label}`;
  return number ? `${label} ${number}` : label;
}

function selectedSpace() {
  return state.spaces.find((space) => space.id === state.selectedSpaceId) ?? null;
}

function spaceShownInFields() {
  const type = spaceTypeInput.value || "elevator_lobby";
  const number = numberedSpaceTypes.has(type) ? spaceNumberInput.value : "";
  const customName = spaceNameInput.value.trim();
  const name = composeSpaceName(type, number, customName);
  const selected = selectedSpace();
  if (selected
    && selected.type === type
    && (selected.number || "") === number
    && (selected.customName || "") === customName) {
    return selected;
  }
  return state.spaces.find((space) => space.type === type
    && (space.number || "") === number
    && (space.customName || "") === customName)
    || state.spaces.find((space) => space.name === name)
    || null;
}

function syncSpaceFields() {
  const space = selectedSpace();
  if (!space) return;
  spaceTypeInput.value = space.type;
  populateSpaceNumbers(space.type, space.number || "");
  spaceNameInput.value = space.customName || "";
}

function drawIntersections() {
  const hits = [];
  for (let i = 0; i < state.segments.length; i += 1) {
    for (let j = i + 1; j < state.segments.length; j += 1) {
      const hit = lineIntersection(state.segments[i].a, state.segments[i].b, state.segments[j].a, state.segments[j].b);
      if (hit) hits.push(hit);
    }
  }
  state.segments.forEach((segment) => hits.push(segment.a, segment.b));
  hits.forEach((hit) => drawNode(hit, "#ffffff", "#111111", 4));
}

function drawScaleCalibrations() {
  if (state.tool !== "scale") return;
  ctx.save();
  ctx.lineCap = "butt";
  ctx.lineJoin = "miter";
    ctx.font = canvasFont(12, 600);
  for (const sample of state.scaleCalibration.samples || []) {
    ctx.strokeStyle = "#1378d4";
    ctx.lineWidth = visualSize(3);
    ctx.setLineDash([]);
    ctx.beginPath();
    ctx.moveTo(sample.a.x, sample.a.y);
    ctx.lineTo(sample.b.x, sample.b.y);
    ctx.stroke();
    drawNode(sample.a, "#ffffff", "#1378d4", 4);
    drawNode(sample.b, "#ffffff", "#1378d4", 4);
    const mid = { x: (sample.a.x + sample.b.x) / 2, y: (sample.a.y + sample.b.y) / 2 };
    drawLabelBox([`${sample.meters}米`], mid.x + 8, mid.y - 22, "#1378d4", { font: canvasFont(12) });
  }
  const pending = state.scaleCalibration.pendingLine;
  if (pending) {
    ctx.strokeStyle = "#e36a21";
    ctx.lineWidth = visualSize(3);
    ctx.setLineDash([visualSize(7), visualSize(5)]);
    ctx.beginPath();
    ctx.moveTo(pending.a.x, pending.a.y);
    ctx.lineTo(pending.b.x, pending.b.y);
    ctx.stroke();
    drawNode(pending.a, "#ffffff", "#e36a21", 4);
    drawNode(pending.b, "#ffffff", "#e36a21", 4);
  }
  if (state.currentStart && state.pointer) {
    ctx.strokeStyle = "#e36a21";
    ctx.lineWidth = visualSize(2);
    ctx.setLineDash([visualSize(7), visualSize(5)]);
    ctx.beginPath();
    ctx.moveTo(state.currentStart.x, state.currentStart.y);
    ctx.lineTo(state.pointer.x, state.pointer.y);
    ctx.stroke();
  }
  ctx.restore();
}

function drawGuides() {
  if (!state.guides.length || !["scale", "route", "edit"].includes(state.tool)) return;
  ctx.save();
  ctx.strokeStyle = "rgba(227, 106, 33, 0.75)";
  ctx.lineWidth = visualSize(1);
  ctx.setLineDash([visualSize(7), visualSize(7)]);
  for (const guide of state.guides) {
    ctx.beginPath();
    ctx.moveTo(guide.a.x, guide.a.y);
    ctx.lineTo(guide.b.x, guide.b.y);
    ctx.stroke();
  }
  ctx.restore();
}

function redraw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  syncBasePreview();
  if (state.layers.base && state.baseCanvas && baseImagePreview?.hidden) {
    ctx.save();
    ctx.globalAlpha = state.baseOpacity;
    ctx.drawImage(state.baseCanvas, 0, 0);
    ctx.restore();
  }

  drawWalkableSurface();
  if (state.layers.routes) state.segments.forEach((segment) => drawSegment(segment));
  if (state.currentStart && state.pointer) {
    drawSegment({
      id: "preview",
      type: state.routeType,
      width: defaultWidths[state.routeType],
      a: state.currentStart,
      b: state.pointer,
    }, true);
  }
  if (state.layers.routes && state.tool !== "width") drawIntersections();
  drawWidthLabels();
  drawWidthArrows();
  drawSpaceInfo();
  drawSigns();
  drawScaleCalibrations();
  drawSignPlacementPreview();
  drawPathfindingTest();
  drawGuides();
  if (state.snapPoint) drawNode(state.snapPoint, "#ffe082", "#111111", 8);
}

function finishCurrentLine() {
  state.currentStart = null;
  state.pointer = null;
  state.snapPoint = null;
  state.guides = [];
  state.selectedSpaceId = null;
  state.selectedEquivalentPointId = null;
  state.selectedSignId = null;
  hideCanvasInlineEditors();
  syncScaleControls();
  updateStatus();
  redraw();
}

function updateStatus() {
  const primaryCount = state.segments.filter((segment) => segment.type === "primary").length;
  const secondaryCount = state.segments.filter((segment) => segment.type === "secondary").length;
  const selectedCount = state.selectedIds.size;
  const current = state.currentStart
    ? state.tool === "scale"
      ? `请选择第二个点完成 ${state.scaleCalibration.selectedMeters} 米标定线`
      : "请选择第二个点完成直线段"
    : state.tool === "width"
      ? "宽度模式：点击线段后拖拽边缘箭头"
      : state.tool === "sign"
        ? state.signSubMode === "info"
          ? "导向信息：选择导向点后添加方向和空间信息"
          : "导向信息：选择类型后点击图面布置标识"
      : state.tool === "info"
        ? "空间信息：点击信息界面添加或选中点位"
      : state.tool === "person"
        ? "人物设定：调节视距和视角"
      : state.tool === "test"
        ? "寻路测试：设置起点和终点"
      : state.tool === "optimal"
        ? "最优路径：沿动线生成最近路径"
      : state.tool === "simulate"
        ? "模拟路径：按人物视野、标识信息和动线规则生成实际路径"
      : state.tool === "simulationLog"
        ? `模拟记录：${state.test.simulationLog?.length || 0} 个步骤`
      : state.tool === "feedback"
        ? "模拟结果：选择路线编号查看单条路径和问题反馈"
      : state.tool === "edit"
        ? "选择调整：可拖拽线段或端点"
        : "请选择左侧工具开始操作";
  const startCount = state.test.startMode === "space" ? state.test.startSpaceIds.length : Number(Boolean(state.test.start));
  const endCount = state.test.endSpaceIds.length;
  const startLabel = startCount > 1
    ? `${startCount} 个空间起点`
    : state.test.start
    ? state.test.startSpaceId
      ? spaceById(state.test.startSpaceId)?.name || "空间起点"
      : "自由起点"
    : "未设置";
  const endLabel = endCount > 1 ? `${endCount} 个空间终点` : spaceById(state.test.endSpaceId)?.name || "未设置";
  const optimalLabel = state.test.routeResults.length > 1
    ? `${state.test.routeResults.filter((result) => result.optimalPath.length).length} 条路线`
    : state.test.optimalPath.length ? `${state.test.optimalPath.length} 个路径点` : "未生成";
  const problemLabel = state.test.problemPoints.length ? `${state.test.problemPoints.length} 个` : "无";
  setStatus(
      `底图：${state.imageName || state.fileStatus}\n` +
      `比例尺：${pixelsPerMeter() ? `1米 = ${pixelsPerMeter().toFixed(2)} px（${state.scaleCalibration.samples.length} 个样本）` : "未标定"}\n` +
      `平面信息图：${state.infoMapName || "未导入"}\n` +
      `主动线段：${primaryCount} 条\n` +
      `次动线段：${secondaryCount} 条\n` +
      `已选线段：${selectedCount} 条\n` +
      `空间信息：${state.spaces.length} 个\n` +
      `导向信息：${state.signs.length} 个\n` +
      `寻路起点：${startLabel}\n` +
      `寻路终点：${endLabel}\n` +
      `最优路径：${optimalLabel}\n` +
      `问题点：${problemLabel}\n` +
      current,
  );
}

function loadBaseFile(file) {
  const isImage = file.type.startsWith("image/");
  state.imageName = file.name;
  if (!isImage) {
    state.image = null;
    state.baseCanvas = null;
    baseImagePreview.removeAttribute("src");
    baseImagePreview.hidden = true;
    canvas.width = 0;
    canvas.height = 0;
    state.fileStatus = `${file.name} 已导入，需接入 PDF / DXF 转图片服务后生成灰度底图`;
    emptyState.classList.remove("hidden");
    updateStatus();
    return;
  }

  const url = URL.createObjectURL(file);
  const img = new Image();
  img.onload = () => {
    state.image = img;
    baseImagePreview.src = url;
    state.fileStatus = state.baseGrayscale ? "已生成灰度底图" : "已导入彩色底图";
    fitCanvasToViewport(img);
    buildBaseMap();
    emptyState.classList.add("hidden");
    updateStatus();
    redraw();
  };
  img.src = url;
}

function loadInfoFile(file) {
  state.infoMapName = file.name;
  setTool("info");
  setStatus(
    `平面信息图：${file.name}\n` +
      "当前先进入人工审核模式：点击已确认的信息界面添加起点、目的地或空间信息。",
  );
}

function imageRecordToDataUrl(record) {
  if (record.dataUrl) return Promise.resolve(record.dataUrl);
  if (!record.element?.complete) return Promise.resolve("");
  const imageCanvas = document.createElement("canvas");
  imageCanvas.width = record.element.naturalWidth || 1;
  imageCanvas.height = record.element.naturalHeight || 1;
  imageCanvas.getContext("2d").drawImage(record.element, 0, 0);
  return Promise.resolve(imageCanvas.toDataURL(record.type || "image/png"));
}

async function serializeProject() {
  const signs = [];
  for (const sign of state.signs) {
    normalizeSignFaces(sign);
    const serializeImages = async (records) => Promise.all((records || []).map(async (image) => ({
      name: image.name,
      type: image.type,
      dataUrl: await imageRecordToDataUrl(image),
    })));
    const imagesByFace = {
      front: await serializeImages(sign.imagesByFace.front),
      back: await serializeImages(sign.imagesByFace.back),
    };
    signs.push({
      ...sign,
      destinationsByFace: normalizeSignFaces(sign),
      images: imagesByFace.front,
      imagesByFace,
    });
  }

  return {
    version: 2,
    savedAt: new Date().toISOString(),
    base: {
      imageName: state.imageName,
      fileStatus: state.fileStatus,
      infoMapName: state.infoMapName,
      interfaceConfirmed: state.interfaceConfirmed,
      grayscale: state.baseGrayscale,
      opacity: state.baseOpacity,
      canvas: { width: canvas.width, height: canvas.height, scale: Number(canvas.dataset.scale || "1") },
      baseDataUrl: state.baseCanvas ? state.baseCanvas.toDataURL("image/png") : "",
    },
    routeType: state.routeType,
    scaleCalibration: structuredClone(state.scaleCalibration),
    segments: state.segments,
    spaces: state.spaces,
    spaceEquivalentPoints: state.spaceEquivalentPoints,
    signs,
    test: state.test,
    layers: state.layers,
    show: {
      spaceLabels: showSpaceLabelsInput.checked,
      signLabels: showSignLabelsInput.checked,
      signInfoLabels: showSignInfoLabelsInput.checked,
      widthLabels: showWidthLabelsInput.checked,
    },
  };
}

function restoreImageRecord(image) {
  const element = new Image();
  element.onload = redraw;
  element.src = image.dataUrl || image.url || "";
  return { ...image, url: image.dataUrl || image.url || "", element };
}

function restoreProject(project) {
  state.imageName = project.base?.imageName || "";
  state.fileStatus = project.base?.fileStatus || "已导入项目";
  state.infoMapName = project.base?.infoMapName || "";
  state.interfaceConfirmed = Boolean(project.base?.interfaceConfirmed);
  state.routeType = project.routeType || "primary";
  state.scaleCalibration = {
    mode: project.scaleCalibration?.mode === "quick" ? "quick" : "custom",
    selectedMeters: Number(project.scaleCalibration?.selectedMeters) || 2,
    samples: structuredClone(project.scaleCalibration?.samples || []),
    pendingLine: null,
    drawingEnabled: false,
  };
  state.segments = structuredClone(project.segments || []);
  state.spaces = structuredClone(project.spaces || []);
  state.spaceEquivalentPoints = structuredClone(project.spaceEquivalentPoints || []);
  state.signs = (project.signs || []).map((sign) => ({
    ...sign,
    panelAction: sign.panelAction || "straight",
    destinationsByAction: normalizeSignDestinations(sign),
    hangingFacing: sign.installType === "hanging" ? sign.hangingFacing || "upDown" : sign.hangingFacing || "",
    imagesByFace: {
      front: (sign.imagesByFace?.front || sign.images || []).map(restoreImageRecord),
      back: (sign.imagesByFace?.back || []).map(restoreImageRecord),
    },
    images: (sign.imagesByFace?.front || sign.images || []).map(restoreImageRecord),
  }));
  state.signs.forEach(normalizeSignFaces);
  state.test = {
    ...state.test,
    ...(structuredClone(project.test || {})),
  };
  state.test.person = {
    visionDistance: 140,
    normalAngle: 90,
    decisionAngle: 180,
    demoPoint: null,
    demoSegmentId: null,
    heading: 0,
    ...(state.test.person || {}),
  };
  state.test.problemPoints = state.test.problemPoints || [];
  state.test.infoEvents = state.test.infoEvents || [];
  state.test.simulationLog = state.test.simulationLog || [];
  state.test.actualPath = state.test.actualPath || [];
  state.test.optimalPath = state.test.optimalPath || [];
  state.test.startSpaceIds = state.test.startSpaceIds || (state.test.startSpaceId ? [state.test.startSpaceId] : []);
  state.test.endSpaceIds = state.test.endSpaceIds || (state.test.endSpaceId ? [state.test.endSpaceId] : []);
  state.test.startMultiSelect = Boolean(project.test?.startMultiSelect ?? state.test.startSpaceIds.length > 1);
  state.test.endMultiSelect = Boolean(project.test?.endMultiSelect ?? state.test.endSpaceIds.length > 1);
  state.test.routeResults = state.test.routeResults || [];
  state.test.activeRouteId = state.test.activeRouteId || "";
  state.test.focusedRouteId = state.test.focusedRouteId || "";
  state.test.selectedResultRouteIds = Array.isArray(state.test.selectedResultRouteIds)
    ? state.test.selectedResultRouteIds
    : [];
  state.test.showPathLabels = state.test.showPathLabels !== false;
  state.test.failureDistanceMultiplier = Math.max(1, Number(state.test.failureDistanceMultiplier) || 5);
  state.test.expandedFailureDestinations = Array.isArray(state.test.expandedFailureDestinations)
    ? state.test.expandedFailureDestinations
    : [];
  state.test.useDefaultHeading = state.test.useDefaultHeading !== false;
  state.test.startHeading = Number.isFinite(Number(state.test.startHeading)) ? Number(state.test.startHeading) : 0;
  state.layers = { ...state.layers, ...(project.layers || {}) };
  state.selectedIds.clear();
  state.selectedSpaceId = null;
  state.selectedEquivalentPointId = null;
  state.selectedSignId = null;
  state.currentStart = null;
  state.pointer = null;
  state.snapPoint = null;

  const savedCanvas = project.base?.canvas;
  canvas.width = savedCanvas?.width || canvas.width || 1;
  canvas.height = savedCanvas?.height || canvas.height || 1;
  canvas.dataset.scale = String(savedCanvas?.scale || 1);
  state.baseGrayscale = project.base?.grayscale !== false;
  state.baseOpacity = clamp(Number(project.base?.opacity ?? 1), 0, 1);
  syncBaseControls();
  syncScaleControls();

  Object.entries(layerInputs).forEach(([key, input]) => {
    input.checked = state.layers[key] !== false;
  });
  showSpaceLabelsInput.checked = Boolean(project.show?.spaceLabels);
  addEquivalentSpacePointsInput.checked = false;
  showSignLabelsInput.checked = Boolean(project.show?.signLabels);
  showSignInfoLabelsInput.checked = Boolean(project.show?.signInfoLabels ?? project.show?.signPanels);
  showWidthLabelsInput.checked = project.show?.widthLabels !== false;
  showPathLabelsInput.checked = state.test.showPathLabels;
  syncPersonInputs();
  syncStartHeadingControls();
  updateSimulationPanels();

  if (project.base?.baseDataUrl) {
    const img = new Image();
    img.onload = () => {
      state.image = img;
      baseImagePreview.src = project.base.baseDataUrl;
      const restoredWidth = canvas.width || img.naturalWidth || 1;
      const restoredHeight = canvas.height || img.naturalHeight || 1;
      fitCanvasToViewport(img);
      const sx = canvas.width / restoredWidth;
      const sy = canvas.height / restoredHeight;
      if (Math.abs(sx - 1) > 0.001 || Math.abs(sy - 1) > 0.001) {
        scaleExistingGeometry(sx, sy);
      }
      const restored = document.createElement("canvas");
      restored.width = canvas.width;
      restored.height = canvas.height;
      const restoredContext = restored.getContext("2d");
      restoredContext.imageSmoothingEnabled = true;
      restoredContext.imageSmoothingQuality = "high";
      restoredContext.drawImage(img, 0, 0, restored.width, restored.height);
      state.baseCanvas = restored;
      emptyState.classList.add("hidden");
      refreshSignTargets();
      refreshTestSpaceOptions();
      setRouteType(state.routeType);
      setTool("route");
      updateStatus();
      redraw();
    };
    img.src = project.base.baseDataUrl;
  } else {
    state.image = null;
    state.baseCanvas = null;
    baseImagePreview.removeAttribute("src");
    baseImagePreview.hidden = true;
    emptyState.classList.toggle("hidden", Boolean(state.segments.length));
    refreshSignTargets();
    refreshTestSpaceOptions();
    setRouteType(state.routeType);
    setTool("route");
    updateStatus();
    redraw();
  }
}

function addSpaceAt(point) {
  const snap = nearestInformationInterface(point);
  if (!snap) {
    setStatus("还没有可吸附的信息界面。请先调宽度并确认行走范围。");
    return;
  }
  const type = spaceTypeInput.value || "elevator_lobby";
  const number = state.spaceNumberOverride
    ? resolveSpaceNumber(type, spaceNumberInput.value)
    : resolveSpaceNumber(type, "");
  const customName = spaceNameInput.value;
  const name = composeSpaceName(type, number, customName);
  const space = {
    id: `space-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    name,
    type,
    number,
    customName: customName.trim(),
    point: clonePoint(snap.point),
    segmentId: snap.segmentId,
    source: state.infoMapName ? "review-from-plan" : "manual",
  };
  recordDrawingChange("info");
  state.spaces.push(space);
  state.selectedSpaceId = space.id;
  state.selectedEquivalentPointId = null;
  state.spaceNumberOverride = false;
  syncSpaceFields();
  refreshTestSpaceOptions();
  updateStatus();
  redraw();
}

function addEquivalentSpacePointAt(point) {
  const source = spaceShownInFields();
  if (!source) {
    const type = spaceTypeInput.value || "elevator_lobby";
    const number = numberedSpaceTypes.has(type) ? spaceNumberInput.value : "";
    const name = composeSpaceName(type, number, spaceNameInput.value);
    setStatus(`还没有正式的「${name}」空间点，请先添加一个基础空间点。`);
    return;
  }
  const snap = nearestInformationInterface(point);
  if (!snap) {
    setStatus("还没有可吸附的信息界面。请先调宽度并确认行走范围。");
    return;
  }
  recordDrawingChange("info");
  const equivalentPoint = {
    id: `space-equivalent-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    spaceId: source.id,
    point: clonePoint(snap.point),
    segmentId: snap.segmentId,
  };
  state.spaceEquivalentPoints.push(equivalentPoint);
  state.selectedEquivalentPointId = equivalentPoint.id;
  clearComputedTestPaths();
  setStatus(`已增加「${source.name}」的空间等效点。可继续点击添加。`);
  redraw();
}

function updateSelectedSpaceFromFields() {
  const space = selectedSpace();
  if (!space) return;
  recordDrawingChange("info");
  space.type = spaceTypeInput.value;
  space.number = resolveSpaceNumber(space.type, spaceNumberInput.value, space.id);
  space.customName = spaceNameInput.value.trim();
  space.name = composeSpaceName(space.type, space.number, space.customName);
  if ((state.test.startSpaceIds || []).includes(space.id)) {
    if (state.test.startSpaceId === space.id) {
      state.test.start = { source: "space", spaceId: space.id, point: clonePoint(space.point) };
    }
  }
  if ((state.test.startSpaceIds || []).includes(space.id) || (state.test.endSpaceIds || []).includes(space.id)) {
    clearComputedTestPaths();
  }
  refreshTestSpaceOptions();
  updateStatus();
  redraw();
}

function refreshSignTargets() {
  renderSignAssociationEditor();
}

function refreshTestSpaceOptions() {
  freeStartMode.classList.toggle("active", state.test.startMode === "free");
  spaceStartMode.classList.toggle("active", state.test.startMode === "space");
  testStartSelect.disabled = state.test.startMode !== "space";
  testStartDropdown.hidden = state.test.startMode !== "space";
  startMultiSelectInput.closest(".selectionModeToggle").hidden = state.test.startMode !== "space";
  selectAllStartsBtn.closest(".selectAllSpaces").hidden = state.test.startMode !== "space";
  startMultiSelectInput.checked = Boolean(state.test.startMultiSelect);
  endMultiSelectInput.checked = Boolean(state.test.endMultiSelect);
  const validIds = new Set(state.spaces.map((space) => space.id));
  state.test.startSpaceIds = (state.test.startSpaceIds || []).filter((id) => validIds.has(id));
  state.test.endSpaceIds = (state.test.endSpaceIds || []).filter((id) => validIds.has(id));
  if (!state.test.startMultiSelect) state.test.startSpaceIds = state.test.startSpaceIds.slice(0, 1);
  if (!state.test.endMultiSelect) state.test.endSpaceIds = state.test.endSpaceIds.slice(0, 1);
  if (!state.test.startSpaceIds.length && validIds.has(state.test.startSpaceId)) {
    state.test.startSpaceIds = [state.test.startSpaceId];
  }
  if (!state.test.endSpaceIds.length && validIds.has(state.test.endSpaceId)) {
    state.test.endSpaceIds = [state.test.endSpaceId];
  }
  const currentStart = state.test.startSpaceIds[0] || "";
  const currentEnd = state.test.endSpaceIds[0] || "";
  const fill = (select, placeholder) => {
    select.innerHTML = "";
    const empty = document.createElement("option");
    empty.value = "";
    empty.textContent = placeholder;
    select.appendChild(empty);
    for (const space of state.spaces) {
      const option = document.createElement("option");
      option.value = space.id;
      option.textContent = space.name;
      select.appendChild(option);
    }
  };

  fill(testStartSelect, "选择起点空间");
  fill(testEndSelect, "选择终点空间");
  const hasStart = validIds.has(currentStart);
  const hasEnd = validIds.has(currentEnd);
  if (!hasStart && state.test.start?.source === "space") state.test.start = null;
  state.test.startSpaceId = hasStart ? currentStart : "";
  if (state.test.startSpaceId && state.test.start?.source === "space") {
    state.test.start = {
      source: "space",
      spaceId: state.test.startSpaceId,
      point: clonePoint(spaceById(state.test.startSpaceId).point),
    };
  }
  state.test.endSpaceId = hasEnd ? currentEnd : "";
  testStartSelect.value = state.test.startSpaceId;
  testEndSelect.value = state.test.endSpaceId;
  renderTestSpaceChecklist(testStartChecklist, "start");
  renderTestSpaceChecklist(testEndChecklist, "end");
  const allStartSpacesSelected = state.spaces.length > 0 && state.test.startSpaceIds.length === state.spaces.length;
  const allEndSpacesSelected = state.spaces.length > 0 && state.test.endSpaceIds.length === state.spaces.length;
  selectAllStartsBtn.checked = allStartSpacesSelected;
  selectAllEndsBtn.checked = allEndSpacesSelected;
  selectAllStartsBtn.indeterminate = state.test.startSpaceIds.length > 0 && !allStartSpacesSelected;
  selectAllEndsBtn.indeterminate = state.test.endSpaceIds.length > 0 && !allEndSpacesSelected;
  selectAllStartsBtn.disabled = state.spaces.length === 0;
  selectAllEndsBtn.disabled = state.spaces.length === 0;
}

function removeSpacesById(ids) {
  const idSet = new Set(ids);
  const affectsTest = (state.test.startSpaceIds || []).some((id) => idSet.has(id))
    || (state.test.endSpaceIds || []).some((id) => idSet.has(id));
  state.spaces = state.spaces.filter((space) => !idSet.has(space.id));
  state.spaceEquivalentPoints = state.spaceEquivalentPoints.filter((point) => !idSet.has(point.spaceId));
  if (!state.spaceEquivalentPoints.some((point) => point.id === state.selectedEquivalentPointId)) {
    state.selectedEquivalentPointId = null;
  }
  state.test.startSpaceIds = (state.test.startSpaceIds || []).filter((id) => !idSet.has(id));
  state.test.endSpaceIds = (state.test.endSpaceIds || []).filter((id) => !idSet.has(id));
  if (idSet.has(state.test.startSpaceId)) {
    state.test.start = null;
    state.test.startSpaceId = "";
  }
  if (idSet.has(state.test.endSpaceId)) state.test.endSpaceId = "";
  state.signs.forEach((sign) => {
    if (idSet.has(sign.targetSpaceId)) sign.targetSpaceId = "";
    normalizeSignFaces(sign);
    for (const face of ["front", "back"]) {
      signActionOrder.forEach((action) => {
        sign.destinationsByFace[face][action] = (sign.destinationsByFace[face][action] || []).filter((id) => !idSet.has(id));
      });
    }
    sign.destinationsByAction = sign.destinationsByFace.front;
  });
  if (affectsTest) clearComputedTestPaths();
  refreshSignTargets();
  refreshTestSpaceOptions();
}

function removeEquivalentSpacePointsById(ids) {
  const idSet = new Set(ids);
  state.spaceEquivalentPoints = state.spaceEquivalentPoints.filter((point) => !idSet.has(point.id));
  if (idSet.has(state.selectedEquivalentPointId)) state.selectedEquivalentPointId = null;
  clearComputedTestPaths();
}

function selectedSign() {
  return state.signs.find((sign) => sign.id === state.selectedSignId) ?? null;
}

function signDisplayName(sign) {
  return sign ? signNumberLabel(sign) : "标识";
}

function spaceGroupKey(space) {
  if (["meeting_room", "training_room", "lab"].includes(space.type)) return "meeting";
  if (space.type === "discussion_pod") return "discussion";
  return "other";
}

function renderTestSpaceChecklist(container, role) {
  if (!container) return;
  container.innerHTML = "";
  if (!state.spaces.length) {
    container.innerHTML = '<div class="placeholderText">还没有空间信息点。</div>';
    updateTestDropdownLabels();
    return;
  }
  const selected = new Set(role === "start" ? state.test.startSpaceIds : state.test.endSpaceIds);
  const isMultiple = role === "start" ? state.test.startMultiSelect : state.test.endMultiSelect;
  const groups = [
    { key: "meeting", title: "会议室 / 培训室 / 实验室" },
    { key: "discussion", title: "讨论舱" },
    { key: "other", title: "其他" },
  ];
  for (const group of groups) {
    const column = document.createElement("section");
    column.className = "testSpaceGroup";
    const heading = document.createElement("h3");
    heading.textContent = group.title;
    column.appendChild(heading);
    const spaces = sortSpacesForSignPicker(
      state.spaces.filter((space) => spaceGroupKey(space) === group.key),
      group.key,
    );
    if (!spaces.length) {
      const empty = document.createElement("div");
      empty.className = "placeholderText";
      empty.textContent = "暂无";
      column.appendChild(empty);
    }
    for (const space of spaces) {
      if (!isMultiple) {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "singleSpaceChoice";
        button.classList.toggle("active", selected.has(space.id));
        button.textContent = space.name;
        button.addEventListener("click", () => {
          if (role === "start") {
            setTestStartMode("space");
            setSpaceTestStart(space.id);
            testStartDropdown.open = false;
          } else {
            setTestEnd(space.id);
            testEndDropdown.open = false;
          }
          refreshTestSpaceOptions();
        });
        column.appendChild(button);
        continue;
      }
      const label = document.createElement("label");
      label.className = "check compact spaceChoice";
      const input = document.createElement("input");
      input.type = "checkbox";
      input.checked = selected.has(space.id);
      input.addEventListener("change", () => {
        const ids = new Set(role === "start" ? state.test.startSpaceIds : state.test.endSpaceIds);
        if (input.checked) ids.add(space.id);
        else ids.delete(space.id);
        if (role === "start") {
          setTestStartMode("space");
          state.test.startSpaceIds = Array.from(ids);
          state.test.startSpaceId = state.test.startSpaceIds[0] || "";
          const first = spaceById(state.test.startSpaceId);
          state.test.start = first ? { source: "space", spaceId: first.id, point: clonePoint(first.point) } : null;
        } else {
          state.test.endSpaceIds = Array.from(ids);
          state.test.endSpaceId = state.test.endSpaceIds[0] || "";
        }
        clearComputedTestPaths();
        refreshTestSpaceOptions();
        updateStatus();
        redraw();
      });
      const text = document.createElement("span");
      text.textContent = space.name;
      label.append(input, text);
      column.appendChild(label);
    }
    container.appendChild(column);
  }
  updateTestDropdownLabels();
}

function updateTestDropdownLabels() {
  const startNames = (state.test.startSpaceIds || []).map((id) => spaceById(id)?.name).filter(Boolean);
  const endNames = (state.test.endSpaceIds || []).map((id) => spaceById(id)?.name).filter(Boolean);
  testStartDropdownLabel.textContent = startNames.length
    ? state.test.startMultiSelect
      ? `已选 ${startNames.length} 个起点：${startNames.slice(0, 2).join("、")}${startNames.length > 2 ? "…" : ""}`
      : startNames[0]
    : "选择空间起点";
  testEndDropdownLabel.textContent = endNames.length
    ? state.test.endMultiSelect
      ? `已选 ${endNames.length} 个终点：${endNames.slice(0, 2).join("、")}${endNames.length > 2 ? "…" : ""}`
      : endNames[0]
    : "选择终点空间";
}

function otherSpaceRank(space) {
  return {
    work_area: 1,
    elevator_lobby: 2,
    stairwell: 3,
    pantry: 4,
    restroom: 5,
    male_restroom: 5,
    female_restroom: 5,
  }[space.type] || 9;
}

function spaceSortValue(space) {
  const index = indexFromNumber(space.type, space.number);
  return Number.isFinite(index) && index > 0 ? index : 9999;
}

function sortSpacesForSignPicker(spaces, group) {
  return spaces.slice().sort((a, b) => {
    if (group === "other") {
      return otherSpaceRank(a) - otherSpaceRank(b)
        || spaceTypeLabel(a.type).localeCompare(spaceTypeLabel(b.type), "zh-Hans")
        || spaceSortValue(a) - spaceSortValue(b)
        || a.name.localeCompare(b.name, "zh-Hans");
    }
    return spaceTypeLabel(a.type).localeCompare(spaceTypeLabel(b.type), "zh-Hans")
      || spaceSortValue(a) - spaceSortValue(b)
      || a.name.localeCompare(b.name, "zh-Hans");
  });
}

function locationUsingSpace(sign, spaceId, currentFace, currentAction) {
  const faces = sign.installType === "hanging" ? ["front", "back"] : ["front"];
  for (const face of faces) {
    const destinations = signDestinationsForFace(sign, face);
    const action = signActionOrder.find((candidate) => (
      (face !== currentFace || candidate !== currentAction)
      && (destinations[candidate] || []).includes(spaceId)
    ));
    if (action) return { face, action };
  }
  return null;
}

function renderSignAssociationEditor() {
  const sign = selectedSign();
  if (!signAssociationPanel) return;
  const canEditInfo = state.tool === "sign" && state.signSubMode === "info";
  signAssociationPanel.hidden = !canEditInfo || !sign;
  signAssociationEmpty.hidden = Boolean(sign);
  signAssociationEditor.hidden = !canEditInfo || !sign;
  if (!canEditInfo || !sign) return;

  normalizeSignFaces(sign);
  if (sign.installType !== "hanging") state.signAssociationFace = "front";
  const face = state.signAssociationFace || "front";
  const destinations = signDestinationsForFace(sign, face);
  signAssociationTitle.textContent = `${signDisplayName(sign)} 设置`;
  signAssociationSubtitle.textContent = sign.installType === "hanging"
    ? "分别设置吊牌正面和背面的方向及空间信息"
    : "为空间信息指定这个标识上对应的方向";
  document.querySelectorAll("[data-sign-face-panel]").forEach((panel) => {
    panel.hidden = sign.installType !== "hanging" && panel.dataset.signFacePanel === "back";
  });
  const frontTitle = document.querySelector('[data-sign-face-title="front"]');
  const backTitle = document.querySelector('[data-sign-face-title="back"]');
  const hangingFaceNotes = sign.hangingFacing === "leftRight"
    ? { front: "朝上", back: "朝下" }
    : { front: "朝左", back: "朝右" };
  if (frontTitle) frontTitle.textContent = sign.installType === "hanging"
    ? `正面（${hangingFaceNotes.front}）指向`
    : "标识指向";
  if (backTitle) backTitle.textContent = sign.installType === "hanging"
    ? `背面（${hangingFaceNotes.back}）指向`
    : "背面指向";
  signImageFaceButtons.forEach((button) => {
    const faceName = button.dataset.signImageFace || "front";
    button.textContent = sign.installType === "hanging"
      ? `${faceName === "back" ? "背面" : "正面"}图片（${hangingFaceNotes[faceName]}）`
      : `${faceName === "back" ? "背面" : "正面"}图片`;
  });
  signDirectionButtons.forEach((button) => {
    const action = button.dataset.signAction;
    const buttonFace = button.dataset.signFace || "front";
    const faceDestinations = signDestinationsForFace(sign, buttonFace);
    const count = faceDestinations[action]?.length || 0;
    button.classList.toggle("active", state.signAssociationFace === buttonFace && state.signAssociationAction === action);
    button.title = count ? `已关联 ${count} 个空间` : "未关联空间";
    button.dataset.count = String(count);
  });

  const action = state.signAssociationAction || "straight";
  signSpacePickerTitle.textContent = `${sign.installType === "hanging" ? `${face === "front" ? "正面" : "背面"} · ` : ""}${panelActionLabel(action)} 指向的空间`;
  signSpaceChecklist.innerHTML = "";
  if (!state.spaces.length) {
    signSpaceChecklist.innerHTML = '<div class="placeholderText">还没有空间信息点。</div>';
    return;
  }
  const selectedIds = new Set(destinations[action] || []);
  const groups = [
    { key: "meeting", title: "会议室 / 培训室 / 实验室" },
    { key: "discussion", title: "讨论舱" },
    { key: "other", title: "其他信息" },
  ];
  for (const group of groups) {
    const column = document.createElement("section");
    column.className = "spaceColumn";
    const heading = document.createElement("h3");
    heading.textContent = group.title;
    column.appendChild(heading);
    const groupSpaces = sortSpacesForSignPicker(state.spaces.filter((space) => spaceGroupKey(space) === group.key), group.key);
    if (!groupSpaces.length) {
      const empty = document.createElement("div");
      empty.className = "placeholderText";
      empty.textContent = "暂无";
      column.appendChild(empty);
      signSpaceChecklist.appendChild(column);
      continue;
    }
    for (const space of groupSpaces) {
      const occupied = locationUsingSpace(sign, space.id, face, action);
      const label = document.createElement("label");
      label.className = `check compact spaceChoice${occupied ? " disabled" : ""}`;
      const input = document.createElement("input");
      input.type = "checkbox";
      input.value = space.id;
      input.checked = selectedIds.has(space.id);
      input.disabled = Boolean(occupied);
      input.addEventListener("change", () => {
        recordDrawingChange("sign");
        const next = new Set(signDestinationsForFace(sign, face)[action] || []);
        if (input.checked) next.add(space.id);
        else next.delete(space.id);
        sign.destinationsByFace[face][action] = Array.from(next);
        sign.destinationsByAction = sign.destinationsByFace.front;
        sign.targetSpaceId = "";
        sign.customText = "";
        sign.text = composeSignDefaultText(sign.installType, sign.number);
        clearSimulationResults();
        renderSignAssociationEditor();
        updateStatus();
        redraw();
      });
      const text = document.createElement("span");
      text.textContent = occupied
        ? `${space.name}（已在${occupied.face === "back" ? "背面" : sign.installType === "hanging" ? "正面" : ""}${panelActionLabel(occupied.action)}）`
        : space.name;
      label.append(input, text);
      column.appendChild(label);
    }
    signSpaceChecklist.appendChild(column);
  }
}

function syncSignFields() {
  const sign = selectedSign();
  if (!sign) {
    renderSignAssociationEditor();
    return;
  }
  normalizeSignFaces(sign);
  signInstallTypeInput.value = sign.installType;
  signHangingFacingInput.value = sign.hangingFacing || "upDown";
  syncHangingFacingField();
  syncSignImageFaceControls();
  renderSignAssociationEditor();
}

function addSignAt(point) {
  const installType = signInstallTypeInput.value || "wall";
  const snap = snapForSign(point, installType);
  if (!snap) {
    setStatus("还没有可吸附的动线或信息界面。请先画动线、调宽度并确认行走范围。");
    return;
  }
  const orientation = orientationTowardWalkable(snap.point, snap.segmentId);
  const number = nextSignNumber(installType);
  const sign = {
    id: `sign-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    installType,
    number,
    text: composeSignDefaultText(installType, number),
    customText: "",
    targetSpaceId: "",
    panelAction: state.signAssociationAction || "straight",
    destinationsByAction: {
      straight: [],
      leftFront: [],
      rightFront: [],
      back: [],
      left: [],
      right: [],
    },
    destinationsByFace: {
      front: emptySignDestinations(),
      back: emptySignDestinations(),
    },
    images: [],
    imagesByFace: { front: [], back: [] },
    point: clonePoint(snap.point),
    segmentId: snap.segmentId,
    angle: orientation.angle,
    hangingFacing: installType === "hanging" ? signHangingFacingInput.value || "upDown" : "",
    source: "manual",
  };
  recordDrawingChange("sign");
  state.signs.push(sign);
  state.selectedSignId = sign.id;
  clearSimulationResults();
  syncSignFields();
  updateStatus();
  redraw();
}

function updateSelectedSignFromFields() {
  const sign = selectedSign();
  if (!sign) return;
  recordDrawingChange("sign");
  const oldInstallType = sign.installType;
  sign.installType = signInstallTypeInput.value;
  if (oldInstallType !== sign.installType) {
    sign.number = nextSignNumber(sign.installType);
  }
  sign.hangingFacing = sign.installType === "hanging" ? signHangingFacingInput.value || "upDown" : "";
  sign.panelAction = state.signAssociationAction || sign.panelAction || "straight";
  sign.customText = "";
  sign.text = composeSignDefaultText(sign.installType, sign.number);
  normalizeSignFaces(sign);
  syncSignImageFaceControls();
  const snap = snapForSign(sign.point, sign.installType);
  if (snap) {
    sign.point = clonePoint(snap.point);
    sign.segmentId = snap.segmentId;
    sign.angle = orientationTowardWalkable(sign.point, sign.segmentId).angle;
  }
  clearSimulationResults();
  updateStatus();
  renderSignAssociationEditor();
  redraw();
}

function startDrag(event) {
  const point = canvasPoint(event);
  if (state.tool === "sign") {
    const sign = hitTestSign(point);
    if (!sign) return;
    state.selectedSignId = sign.id;
    state.signAssociationPicking = false;
    syncSignFields();
    recordDrawingChange("sign");
    state.drag = { kind: "sign", signId: sign.id };
    state.didDrag = false;
    canvas.classList.add("dragging");
    redraw();
    return;
  }

  if (state.tool === "info") {
    const equivalentPoint = hitTestEquivalentSpacePoint(point);
    if (equivalentPoint) {
      state.selectedEquivalentPointId = equivalentPoint.id;
      recordDrawingChange("info");
      state.drag = { kind: "equivalent-space", equivalentPointId: equivalentPoint.id };
      state.didDrag = false;
      canvas.classList.add("dragging");
      redraw();
      return;
    }
    const space = hitTestSpace(point);
    if (!space) return;
    state.selectedSpaceId = space.id;
    state.selectedEquivalentPointId = null;
    syncSpaceFields();
    recordDrawingChange("info");
    state.drag = { kind: "space", spaceId: space.id };
    state.didDrag = false;
    canvas.classList.add("dragging");
    redraw();
    return;
  }

  const widthLabelHit = state.tool === "width" ? hitTestWidthLabel(point) : null;
  if (widthLabelHit) {
    state.hover = { kind: "segment", segment: widthLabelHit };
    return;
  }

  const arrowHit = state.tool === "width" ? hitTestWidthArrow(point) : null;
  if (arrowHit) {
    if (!state.selectedIds.has(arrowHit.segment.id)) selectOnly(arrowHit.segment.id);
    const arrow = widthArrowForSegment(arrowHit.segment);
    recordDrawingChange("width");
    state.drag = {
      kind: "width",
      segmentId: arrowHit.segment.id,
      arrow,
      widths: new Map(selectedSegments().map((segment) => [segment.id, segment.width])),
    };
    canvas.classList.add("dragging");
    updateStatus();
    redraw();
    return;
  }

  const hit = hitTest(point);
  state.hover = hit;

  if (!hit) {
    if (!event.shiftKey) state.selectedIds.clear();
    updateWidthInput();
    redraw();
    return;
  }

  if (hit.kind === "segment") {
    if (event.shiftKey) toggleSelection(hit.segment.id);
    else if (!state.selectedIds.has(hit.segment.id)) selectOnly(hit.segment.id);
  } else if (!event.shiftKey) {
    selectOnly(hit.segment.id);
  }

  if (state.tool === "edit") {
    recordDrawingChange("edit");
    const linkedA = connectedEndpointRefs(hit.segment.id, hit.segment.a);
    const linkedB = connectedEndpointRefs(hit.segment.id, hit.segment.b);
    state.drag = {
      kind: hit.kind,
      segmentId: hit.segment.id,
      endpoint: hit.endpoint,
      last: point,
      start: clonePoint(point),
      originalA: clonePoint(hit.segment.a),
      originalB: clonePoint(hit.segment.b),
      linkedA,
      linkedB,
    };
  }

  if (state.tool === "edit") canvas.classList.add("dragging");
  updateStatus();
  redraw();
}

function updateDrag(event) {
  const point = canvasPoint(event);
  if (!state.drag) {
    state.pointer = point;
    state.hover = hitTest(point);
    state.hoverSpaceId = hitTestSpace(point)?.id ?? null;
    state.hoverEquivalentPointId = hitTestEquivalentSpacePoint(point)?.id ?? null;
    state.hoverSignId = hitTestSign(point)?.id ?? null;
    if (state.tool === "scale" && state.currentStart) {
      state.pointer = scaleCalibrationPoint(point);
    } else if (state.tool === "route" && state.currentStart) {
      state.pointer = applyPointSnaps(point, state.currentStart, null, event.shiftKey);
    }
    redraw();
    return;
  }

  if (state.drag.kind === "endpoint") {
    const segment = state.segments.find((item) => item.id === state.drag.segmentId);
    if (!segment) return;
    const fixedEndpoint = state.drag.endpoint === "a" ? segment.b : segment.a;
    segment[state.drag.endpoint] = applyPointSnaps(point, fixedEndpoint, segment.id, event.shiftKey);
    moveConnectedEndpoints(
      state.drag.endpoint === "a" ? state.drag.linkedA : state.drag.linkedB,
      segment[state.drag.endpoint],
    );
    clearComputedTestPaths();
  }

  if (state.drag.kind === "segment") {
    const segment = state.segments.find((item) => item.id === state.drag.segmentId);
    if (!segment) return;
    let delta = { x: point.x - state.drag.start.x, y: point.y - state.drag.start.y };
    if (event.shiftKey) delta = snapAngle({ x: 0, y: 0 }, delta, true);
    let proposedA = { x: state.drag.originalA.x + delta.x, y: state.drag.originalA.y + delta.y };
    let proposedB = { x: state.drag.originalB.x + delta.x, y: state.drag.originalB.y + delta.y };
    const snappedA = applyEditPositionSnaps(proposedA, proposedB, segment.id);
    const correctionA = { x: snappedA.point.x - proposedA.x, y: snappedA.point.y - proposedA.y };
    const snappedB = applyEditPositionSnaps(proposedB, proposedA, segment.id);
    const correctionB = { x: snappedB.point.x - proposedB.x, y: snappedB.point.y - proposedB.y };
    const useA = snappedA.snapped && (!snappedB.snapped
      || Math.hypot(correctionA.x, correctionA.y) <= Math.hypot(correctionB.x, correctionB.y));
    const correction = useA ? correctionA : snappedB.snapped ? correctionB : { x: 0, y: 0 };
    proposedA = { x: proposedA.x + correction.x, y: proposedA.y + correction.y };
    proposedB = { x: proposedB.x + correction.x, y: proposedB.y + correction.y };
    if (useA) applyEditPositionSnaps(proposedA, proposedB, segment.id);
    segment.a = proposedA;
    segment.b = proposedB;
    moveConnectedEndpoints(state.drag.linkedA, proposedA);
    moveConnectedEndpoints(state.drag.linkedB, proposedB);
    state.drag.last = point;
    clearComputedTestPaths();
  }

  if (state.drag.kind === "width") {
    const active = state.segments.find((item) => item.id === state.drag.segmentId);
    if (!active) return;
    const maximumWidth = maximumSegmentWidth();
    const arrow = widthArrowForSegment(active);
    const signed = (point.x - arrow.mid.x) * arrow.nx + (point.y - arrow.mid.y) * arrow.ny;
    const targetWidth = clamp((signed - 18) * 2, 0, maximumWidth);
    const startWidth = state.drag.widths.get(active.id) ?? active.width;
    const delta = targetWidth - startWidth;
    for (const segment of selectedSegments()) {
      const startWidth = state.drag.widths.get(segment.id) ?? segment.width;
      segment.width = clamp(startWidth + delta, 0, maximumWidth);
    }
    updateWidthInput();
  }

  if (state.drag.kind === "space") {
    const space = state.spaces.find((item) => item.id === state.drag.spaceId);
    const snap = nearestInformationInterface(point);
    if (space && snap) {
      space.point = clonePoint(snap.point);
      space.segmentId = snap.segmentId;
      if (state.test.startSpaceId === space.id) {
        state.test.start = { source: "space", spaceId: space.id, point: clonePoint(space.point) };
      }
      if ((state.test.startSpaceIds || []).includes(space.id) || (state.test.endSpaceIds || []).includes(space.id)) {
        clearComputedTestPaths();
      }
      state.didDrag = true;
    }
  }

  if (state.drag.kind === "equivalent-space") {
    const equivalentPoint = state.spaceEquivalentPoints.find((item) => item.id === state.drag.equivalentPointId);
    const snap = nearestInformationInterface(point);
    if (equivalentPoint && snap) {
      equivalentPoint.point = clonePoint(snap.point);
      equivalentPoint.segmentId = snap.segmentId;
      clearComputedTestPaths();
      state.didDrag = true;
    }
  }

  if (state.drag.kind === "sign") {
    const sign = state.signs.find((item) => item.id === state.drag.signId);
    const snap = sign ? snapForSign(point, sign.installType) : null;
    if (sign && snap) {
      const orientation = orientationTowardWalkable(snap.point, snap.segmentId);
      sign.point = clonePoint(snap.point);
      sign.segmentId = snap.segmentId;
      sign.angle = orientation.angle;
      clearSimulationResults();
      state.didDrag = true;
    }
  }

  updateStatus();
  redraw();
}

function endDrag() {
  if (!state.drag) return;
  state.drag = null;
  canvas.classList.remove("dragging");
  splitSegmentsAtInteriorEndpoints();
  updateWidthInput();
  updateStatus();
  redraw();
}

function moveSelectedSegments(dx, dy) {
  const selected = selectedSegments();
  if (!selected.length) return;
  recordDrawingChange("edit");
  selected.forEach((segment) => {
    segment.a.x += dx;
    segment.a.y += dy;
    segment.b.x += dx;
    segment.b.y += dy;
  });
  clearComputedTestPaths();
  splitSegmentsAtInteriorEndpoints();
  updateStatus();
  redraw();
}

baseInput.addEventListener("change", (event) => {
  const file = event.target.files?.[0];
  if (!file) return;
  loadBaseFile(file);
});

projectInput.addEventListener("change", (event) => {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      restoreProject(JSON.parse(String(reader.result || "{}")));
    } catch (error) {
      setStatus("项目文件无法读取，请确认是保存项目导出的 JSON 文件。");
    }
  };
  reader.readAsText(file);
});

saveProjectBtn.addEventListener("click", async () => {
  const project = await serializeProject();
  const blob = new Blob([JSON.stringify(project, null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  const name = state.imageName ? state.imageName.replace(/\.[^.]+$/, "") : "wayfinding";
  link.download = `${name}.wayfinding-project.json`;
  link.click();
});

infoInput.addEventListener("change", (event) => {
  const file = event.target.files?.[0];
  if (!file) return;
  loadInfoFile(file);
});

toggleGrayscaleBtn.addEventListener("click", () => {
  if (!state.image) {
    setStatus("请先导入一张图片，再转换灰度。");
    return;
  }
  state.baseGrayscale = !state.baseGrayscale;
  state.fileStatus = state.baseGrayscale ? "已生成灰度底图" : "已显示彩色底图";
  buildBaseMap();
  syncBaseControls();
  updateStatus();
  redraw();
});

baseOpacityInput.addEventListener("input", () => {
  state.baseOpacity = clamp(Number(baseOpacityInput.value) / 100, 0, 1);
  syncBaseControls();
  redraw();
});

canvas.addEventListener("mousemove", (event) => {
  if (!state.image && !state.baseCanvas) return;
  updateDrag(event);
});

canvas.addEventListener("mousedown", (event) => {
  if ((!state.image && !state.baseCanvas) || ["scale", "route", "person", "test", "optimal", "simulate", "simulationLog", "feedback"].includes(state.tool)) return;
  startDrag(event);
});

window.addEventListener("mouseup", endDrag);

canvas.addEventListener("click", (event) => {
  if (state.tool === "scale") {
    if (!state.scaleCalibration.drawingEnabled) {
      setStatus("请先点击“绘制图上距离”或选择2米、5米、10米快捷距离。");
      return;
    }
    const raw = canvasPoint(event);
    if (!state.currentStart) {
      state.currentStart = clonePoint(raw);
      state.pointer = null;
      state.guides = [];
    } else {
      const end = scaleCalibrationPoint(raw);
      if (distance(state.currentStart, end) >= 4) {
        state.scaleCalibration.pendingLine = {
          a: clonePoint(state.currentStart),
          b: clonePoint(end),
        };
      }
      state.currentStart = null;
      state.pointer = null;
      state.guides = [];
      state.scaleCalibration.drawingEnabled = false;
      syncScaleControls();
      syncPersonInputs();
      if (state.scaleCalibration.mode === "custom") showScaleInlineEditor();
    }
    updateStatus();
    redraw();
    return;
  }

  if (["edit", "width"].includes(state.tool)) {
    const point = canvasPoint(event);
    if (state.tool === "width") {
      const labelSegment = hitTestWidthLabel(point);
      if (labelSegment) {
        openWidthInlineEditor(labelSegment);
        return;
      }
    }
    const arrowHit = state.tool === "width" ? hitTestWidthArrow(point) : null;
    const hit = arrowHit ?? hitTest(point);
    if (!hit) {
      hideCanvasInlineEditors();
      state.selectedIds.clear();
      updateWidthInput();
      updateStatus();
      redraw();
    }
    return;
  }

  if (state.tool === "test") {
    const point = canvasPoint(event);
    const space = hitTestSpace(point, 18);
    if (state.test.startMode === "space") {
      if (space && !state.test.startSpaceId) {
        setSpaceTestStart(space.id);
      } else if (space) {
        setTestEnd(space.id);
      }
    } else if (space) {
      setTestEnd(space.id);
    } else {
      setFreeTestStart(point);
    }
    updateStatus();
    redraw();
    return;
  }

  if (state.tool === "person") {
    const snap = nearestRouteCenter(canvasPoint(event));
    if (snap) {
      const segment = state.segments.find((item) => item.id === snap.segmentId);
      const vector = segment ? segmentVector(segment) : { dx: 1, dy: 0 };
      state.test.person.demoPoint = clonePoint(snap.point);
      state.test.person.demoSegmentId = snap.segmentId;
      state.test.person.heading = Math.atan2(vector.dy, vector.dx);
      updateStatus();
      redraw();
    } else {
      setStatus("还没有动线，无法放置人物视野示意点。");
    }
    return;
  }

  if (state.tool === "sign") {
    if (state.didDrag) {
      state.didDrag = false;
      return;
    }
    const point = canvasPoint(event);
    const sign = hitTestSign(point);
    if (sign) {
      state.selectedSignId = sign.id;
      state.signAssociationPicking = false;
      syncSignFields();
    } else if (state.signSubMode === "placement") {
      addSignAt(point);
    } else {
      state.selectedSignId = null;
      renderSignAssociationEditor();
    }
    updateStatus();
    redraw();
    return;
  }

  if (state.tool === "info") {
    if (state.didDrag) {
      state.didDrag = false;
      return;
    }
    const point = canvasPoint(event);
    const equivalentPoint = hitTestEquivalentSpacePoint(point);
    if (equivalentPoint) {
      state.selectedEquivalentPointId = equivalentPoint.id;
      updateStatus();
      redraw();
      return;
    }
    const space = hitTestSpace(point);
    if (space) {
      state.selectedSpaceId = space.id;
      state.selectedEquivalentPointId = null;
      syncSpaceFields();
    } else if (addEquivalentSpacePointsInput.checked) {
      addEquivalentSpacePointAt(point);
    } else {
      addSpaceAt(point);
    }
    updateStatus();
    redraw();
    return;
  }

  if ((!state.image && !state.baseCanvas) || state.tool !== "route") return;
  const raw = canvasPoint(event);
  if (!state.currentStart) {
    state.currentStart = applyPointSnaps(raw);
    state.pointer = null;
  } else {
    const end = applyPointSnaps(raw, state.currentStart, null, event.shiftKey);
    addSegment(state.currentStart, end);
    state.currentStart = null;
    state.pointer = null;
    state.snapPoint = null;
  }
  updateStatus();
  redraw();
});

baseMode.addEventListener("click", () => {
  if (state.tool === "base" && !basePanel.hidden) {
    basePanel.hidden = true;
    return;
  }
  setTool("base");
});
scaleMode.addEventListener("click", () => {
  if (state.tool === "scale" && !scalePanel.hidden) {
    scalePanel.hidden = true;
    return;
  }
  setTool("scale");
  syncScaleControls();
});
customScaleModeBtn.addEventListener("click", () => setScaleCalibrationMode("custom"));
quickScaleModeBtn.addEventListener("click", () => setScaleCalibrationMode("quick"));
scaleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.scaleCalibration.mode = "quick";
    state.scaleCalibration.selectedMeters = Number(button.dataset.scaleMeters) || 2;
    state.scaleCalibration.pendingLine = null;
    state.scaleCalibration.drawingEnabled = true;
    state.currentStart = null;
    state.pointer = null;
    state.guides = [];
    syncScaleControls();
    updateStatus();
    redraw();
  });
});
drawScaleReferenceBtn.addEventListener("click", () => {
  state.scaleCalibration.mode = "custom";
  state.scaleCalibration.pendingLine = null;
  state.scaleCalibration.drawingEnabled = true;
  state.currentStart = null;
  state.pointer = null;
  state.guides = [];
  setStatus("请在图面点击两个点绘制图上距离；方向会自动吸附到正交或45度。 ");
  syncScaleControls();
  redraw();
});
addScaleReferenceBtn.addEventListener("click", () => {
  state.scaleCalibration.mode = "custom";
  state.scaleCalibration.pendingLine = null;
  state.scaleCalibration.drawingEnabled = true;
  state.currentStart = null;
  state.pointer = null;
  state.guides = [];
  hideCanvasInlineEditors();
  syncScaleControls();
  updateStatus();
  redraw();
});
scaleActualDistanceInput.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") return;
  event.preventDefault();
  if (!commitScaleReference(scaleActualDistanceInput.value)) {
    setStatus("请输入大于0的实际距离，单位为米。");
  }
});
clearScaleBtn.addEventListener("click", () => {
  if (!state.scaleCalibration.samples.length && !state.scaleCalibration.pendingLine) return;
  recordDrawingChange("scale");
  state.scaleCalibration.samples = [];
  state.scaleCalibration.pendingLine = null;
  state.scaleCalibration.drawingEnabled = false;
  state.currentStart = null;
  state.pointer = null;
  state.guides = [];
  clearSimulationResults();
  syncScaleControls();
  syncPersonInputs();
  updateWidthInput();
  updateStatus();
  redraw();
});

routeMode.addEventListener("click", () => {
  if (["route", "edit"].includes(state.tool) && !routePanel.hidden) {
    routePanel.hidden = true;
    return;
  }
  setTool("route");
});
routeDrawMode.addEventListener("click", () => setTool("route"));
editMode.addEventListener("click", () => setTool("edit"));
widthMode.addEventListener("click", () => {
  if (state.tool === "width" && !widthPanel.hidden) {
    widthPanel.hidden = true;
    return;
  }
  setTool("width");
});
infoMode.addEventListener("click", () => {
  if (state.tool === "info" && !spacePanel.hidden) {
    spacePanel.hidden = true;
    return;
  }
  setTool("info");
});
signMode.addEventListener("click", () => {
  if (state.tool === "sign" && !signPanel.hidden) {
    signPanel.hidden = true;
    return;
  }
  refreshSignTargets();
  setTool("sign");
});
signPlacementModeBtn.addEventListener("click", () => setSignSubMode("placement"));
signInfoModeBtn.addEventListener("click", () => setSignSubMode("info"));
personMode.addEventListener("click", () => {
  if (state.tool === "person" && !personPanel.hidden) {
    personPanel.hidden = true;
    return;
  }
  syncPersonInputs();
  setTool("person");
});
testMode.addEventListener("click", () => {
  if (state.tool === "test" && !testPanel.hidden) {
    testPanel.hidden = true;
    return;
  }
  refreshTestSpaceOptions();
  setTool("test");
});
optimalMode.addEventListener("click", () => {
  if (state.tool === "optimal" && !optimalPanel.hidden) {
    optimalPanel.hidden = true;
    return;
  }
  setTool("optimal");
  computeOptimalPath({ silent: true });
});
simulateMode.addEventListener("click", () => {
  if (state.tool === "simulate" && !simulatePanel.hidden) {
    simulatePanel.hidden = true;
    return;
  }
  setTool("simulate");
});
simulationLogMode.addEventListener("click", () => {
  if (state.tool === "simulationLog" && !simulationLogPanel.hidden) {
    simulationLogPanel.hidden = true;
    return;
  }
  setTool("simulationLog");
});
feedbackMode.addEventListener("click", () => {
  if (state.tool === "feedback" && !feedbackPanel.hidden) {
    feedbackPanel.hidden = true;
    return;
  }
  setTool("feedback");
});
primaryMode.addEventListener("click", () => setRouteType("primary"));
secondaryMode.addEventListener("click", () => setRouteType("secondary"));
freeStartMode.addEventListener("click", () => setTestStartMode("free"));
spaceStartMode.addEventListener("click", () => setTestStartMode("space"));
startMultiSelectInput.addEventListener("change", () => {
  setTestStartMode("space");
  setTestSelectionMode("start", startMultiSelectInput.checked);
});
endMultiSelectInput.addEventListener("change", () => {
  setTestSelectionMode("end", endMultiSelectInput.checked);
});
function toggleAllTestSpaces(role) {
  const idsKey = role === "start" ? "startSpaceIds" : "endSpaceIds";
  const multiKey = role === "start" ? "startMultiSelect" : "endMultiSelect";
  const allSelected = state.spaces.length > 0 && state.test[idsKey].length === state.spaces.length;
  state.test[multiKey] = true;
  state.test[idsKey] = allSelected ? [] : state.spaces.map((space) => space.id);
  if (role === "start") {
    setTestStartMode("space");
    state.test.startSpaceId = state.test.startSpaceIds[0] || "";
    const first = spaceById(state.test.startSpaceId);
    state.test.start = first ? { source: "space", spaceId: first.id, point: clonePoint(first.point) } : null;
  } else {
    state.test.endSpaceId = state.test.endSpaceIds[0] || "";
  }
  clearComputedTestPaths();
  refreshTestSpaceOptions();
  updateStatus();
  redraw();
}
selectAllStartsBtn.addEventListener("change", () => toggleAllTestSpaces("start"));
selectAllEndsBtn.addEventListener("change", () => toggleAllTestSpaces("end"));
testStartSelect.addEventListener("change", () => {
  setTestStartMode("space");
  setSpaceTestStart(testStartSelect.value);
});
testEndSelect.addEventListener("change", () => setTestEnd(testEndSelect.value));
useDefaultHeadingInput.addEventListener("change", () => setUseDefaultHeading(useDefaultHeadingInput.checked));
startHeadingButtons.forEach((button) => {
  button.addEventListener("click", () => setStartHeading(button.dataset.startHeading));
});
clearTestPointsBtn.addEventListener("click", clearTestPoints);
buildOptimalPathBtn.addEventListener("click", () => computeOptimalPath());
runSimulationBtn.addEventListener("click", runSimulation);
if (failureDistanceMultiplierInput && refreshSimulationResultsBtn) {
  refreshSimulationResultsBtn.addEventListener("click", () => {
    const previousValue = Math.max(1, Number(state.test.failureDistanceMultiplier) || 5);
    const nextValue = Math.max(1, Number(failureDistanceMultiplierInput.value) || previousValue);
    state.test.failureDistanceMultiplier = nextValue;
    failureDistanceMultiplierInput.value = String(nextValue);
    const hasSimulation = (state.test.routeResults || []).some((result) => result.simulated);
    if (hasSimulation) runSimulation();
    else updateSimulationPanels();
  });
}
clearSimulationBtn.addEventListener("click", () => {
  clearSimulationResults();
  state.test.focusedRouteId = "";
  state.test.selectedResultRouteIds = [];
  state.test.routeResults = (state.test.routeResults || []).map((result) => ({
    ...result,
    actualPath: [],
    problemPoints: [],
    infoEvents: [],
    simulationLog: [],
    readSignIds: [],
    success: false,
    simulated: false,
  }));
  updateStatus();
  redraw();
});
showPathLabelsInput.addEventListener("change", () => {
  state.test.showPathLabels = showPathLabelsInput.checked;
  redraw();
});
[
  [visionDistanceRange, visionDistanceValue, "visionDistance"],
  [normalAngleRange, normalAngleValue, "normalAngle"],
  [decisionAngleRange, decisionAngleValue, "decisionAngle"],
].forEach(([range, input, key]) => {
  range.addEventListener("input", () => setPersonParam(key, range.value));
  const commitInput = () => {
    if (input.value.trim() === "") {
      syncPersonInputs();
      return;
    }
    setPersonParam(key, input.value);
  };
  input.addEventListener("change", commitInput);
  input.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    commitInput();
    input.blur();
  });
});
finishLineBtn.addEventListener("click", finishCurrentLine);

confirmInterfaceBtn.addEventListener("click", () => {
  if (!state.segments.length) {
    setStatus("还没有可确认的行走范围。请先画动线并调宽度。");
    return;
  }
  recordDrawingChange("width");
  const weldedCount = weldNearbySegmentEndpoints();
  state.interfaceConfirmed = true;
  state.selectedIds.clear();
  setTool("info");
  setStatus(weldedCount
    ? `已自动焊接 ${weldedCount} 处相邻端点，并确认行走范围。`
    : "已检查端点连接并确认行走范围，没有发现需要焊接的近邻端点。");
});

undoBtn.addEventListener("click", () => {
  if (drawingHistory[state.tool]) {
    if (!undoDrawingChange(state.tool)) setStatus("当前栏目还没有可以撤销的操作。");
    return;
  }
  if (state.tool === "info") {
    if (state.selectedSpaceId) {
      removeSpacesById([state.selectedSpaceId]);
      state.selectedSpaceId = null;
    } else {
      const last = state.spaces.at(-1);
      if (last) removeSpacesById([last.id]);
    }
    updateStatus();
    redraw();
    return;
  }
  if (state.tool === "sign") {
    if (state.selectedSignId) {
      state.signs = state.signs.filter((sign) => sign.id !== state.selectedSignId);
      state.selectedSignId = null;
    } else {
      state.signs.pop();
    }
    clearSimulationResults();
    updateStatus();
    redraw();
    return;
  }
  if (state.tool === "test") {
    if (state.test.endSpaceId) {
      state.test.endSpaceId = "";
      testEndSelect.value = "";
    } else if (state.test.start) {
      state.test.start = null;
      state.test.startSpaceId = "";
      testStartSelect.value = "";
    }
    clearComputedTestPaths();
    updateStatus();
    redraw();
    return;
  }
  if (state.tool === "optimal") {
    clearComputedTestPaths();
    updateStatus();
    redraw();
    return;
  }
  if (state.tool === "width") {
    const targets = selectedSegments().length ? selectedSegments() : state.segments.slice(-1);
    targets.forEach((segment) => {
      segment.width = defaultWidths[segment.type];
    });
    updateWidthInput();
    updateStatus();
    redraw();
    return;
  }
  if (!["route", "edit"].includes(state.tool)) return;
  if (state.currentStart) {
    state.currentStart = null;
    state.pointer = null;
  } else if (state.selectedIds.size) {
    state.segments = state.segments.filter((segment) => !state.selectedIds.has(segment.id));
    state.selectedIds.clear();
  } else {
    state.segments.pop();
  }
  updateWidthInput();
  updateStatus();
  redraw();
});

clearBtn.addEventListener("click", () => {
  if (state.tool === "info") {
    recordDrawingChange("info");
    removeSpacesById(state.spaces.map((space) => space.id));
    state.spaceEquivalentPoints = [];
    state.selectedSpaceId = null;
    state.selectedEquivalentPointId = null;
    updateStatus();
    redraw();
    return;
  }
  if (state.tool === "sign") {
    recordDrawingChange("sign");
    state.signs = [];
    state.selectedSignId = null;
    updateStatus();
    redraw();
    return;
  }
  if (state.tool === "test") {
    clearTestPoints();
    return;
  }
  if (state.tool === "optimal") {
    clearComputedTestPaths();
    updateStatus();
    redraw();
    return;
  }
  if (state.tool === "width") {
    recordDrawingChange("width");
    selectedSegments().forEach((segment) => {
      segment.width = defaultWidths[segment.type];
    });
  } else {
    recordDrawingChange(state.tool === "edit" ? "edit" : "route");
    state.segments = [];
    state.currentStart = null;
    state.selectedIds.clear();
  }
  updateWidthInput();
  updateStatus();
  redraw();
});

spaceNameInput.addEventListener("input", () => {
  updateSelectedSpaceFromFields();
  refreshSignTargets();
  refreshTestSpaceOptions();
});
spaceTypeInput.addEventListener("change", () => {
  state.spaceNumberOverride = false;
  populateSpaceNumbers(spaceTypeInput.value);
  updateSelectedSpaceFromFields();
  refreshSignTargets();
  refreshTestSpaceOptions();
});
spaceNumberInput.addEventListener("change", () => {
  state.spaceNumberOverride = Boolean(spaceNumberInput.value);
  updateSelectedSpaceFromFields();
  refreshSignTargets();
  refreshTestSpaceOptions();
});
showSpaceLabelsInput.addEventListener("change", redraw);
addEquivalentSpacePointsInput.addEventListener("change", () => {
  if (addEquivalentSpacePointsInput.checked) {
    const source = spaceShownInFields();
    const type = spaceTypeInput.value || "elevator_lobby";
    const number = numberedSpaceTypes.has(type) ? spaceNumberInput.value : "";
    const name = source?.name || composeSpaceName(type, number, spaceNameInput.value);
    setStatus(source
      ? `正在增加「${name}」的空间等效点，可在信息界面上连续点击。`
      : `当前显示「${name}」。请先添加一个正式空间点，之后即可直接增加它的等效点。`);
  } else {
    state.selectedEquivalentPointId = null;
    setStatus("已退出空间等效点模式，继续按当前空间类型添加空间信息。");
  }
  redraw();
});
showSignLabelsInput.addEventListener("change", redraw);
showSignInfoLabelsInput.addEventListener("change", redraw);
showWidthLabelsInput.addEventListener("change", () => {
  if (!showWidthLabelsInput.checked) hideCanvasInlineEditors();
  redraw();
});
signInstallTypeInput.addEventListener("change", () => {
  syncHangingFacingField();
  updateSelectedSignFromFields();
  redraw();
});
signHangingFacingInput.addEventListener("change", updateSelectedSignFromFields);
signDirectionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.signAssociationFace = button.dataset.signFace || "front";
    state.signAssociationAction = button.dataset.signAction || "straight";
    state.signAssociationPicking = false;
    const sign = selectedSign();
    if (sign) {
      sign.panelAction = state.signAssociationAction;
      normalizeSignFaces(sign);
    }
    renderSignAssociationEditor();
    redraw();
  });
});
signImageFaceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.signAssociationFace = button.dataset.signImageFace || "front";
    syncSignImageFaceControls();
    renderSignAssociationEditor();
  });
});
confirmSignDirectionBtn.addEventListener("click", () => {
  state.signAssociationPicking = false;
  renderSignAssociationEditor();
});
finishSignAssociationBtn.addEventListener("click", () => {
  state.signAssociationPicking = false;
  state.selectedSignId = null;
  renderSignAssociationEditor();
  setStatus("导向标识的方向和目的地已关联。");
  redraw();
});
signAssociationImport.addEventListener("change", (event) => {
  const file = event.target.files?.[0];
  if (!file) return;
  setStatus(`已选择「${file.name}」。导向关联导入格式我们下一步确认后接入解析。`);
  event.target.value = "";
});
Object.entries(layerInputs).forEach(([key, input]) => {
  input.addEventListener("change", () => {
    state.layers[key] = input.checked;
    redraw();
  });
});

deleteSpaceBtn.addEventListener("click", () => {
  if (!state.selectedSpaceId && !state.selectedEquivalentPointId) return;
  recordDrawingChange("info");
  if (state.selectedEquivalentPointId) {
    removeEquivalentSpacePointsById([state.selectedEquivalentPointId]);
    updateStatus();
    redraw();
    return;
  }
  removeSpacesById([state.selectedSpaceId]);
  state.selectedSpaceId = null;
  spaceNameInput.value = "";
  spaceNumberInput.value = "";
  updateStatus();
  redraw();
});

deleteSignBtn.addEventListener("click", () => {
  if (!state.selectedSignId) return;
  recordDrawingChange("sign");
  state.signs = state.signs.filter((sign) => sign.id !== state.selectedSignId);
  state.selectedSignId = null;
  state.signAssociationPicking = false;
  clearSimulationResults();
  renderSignAssociationEditor();
  updateStatus();
  redraw();
});

function applyWidthValue(value) {
  const numericValue = Number(value);
  if (!Number.isFinite(numericValue)) return false;
  const selected = selectedSegments();
  if (!selected.length) return false;
  const pixelWidth = pixelsFromDistanceInput(numericValue);
  const maximumWidth = maximumSegmentWidth();
  recordDrawingChange("width");
  selected.forEach((segment) => {
    segment.width = clamp(pixelWidth, 0, maximumWidth);
  });
  updateWidthInput();
  updateStatus();
  redraw();
  return true;
}

applyWidthBtn.addEventListener("click", () => {
  applyWidthValue(widthInput.value);
});
widthInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") applyWidthBtn.click();
});
widthInlineInput.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") return;
  event.preventDefault();
  if (applyWidthValue(widthInlineInput.value)) hideCanvasInlineEditors();
});

exportBtn.addEventListener("click", () => {
  const scale = Number(canvas.dataset.scale || "1");
  const normalizePoint = (point) => ({
    x: Math.round(point.x / scale),
    y: Math.round(point.y / scale),
  });
  const data = {
    base: {
      file: state.imageName,
      status: state.fileStatus,
      infoMap: state.infoMapName,
      interfaceConfirmed: state.interfaceConfirmed,
      canvas: { width: canvas.width, height: canvas.height, scale },
      grayscale: state.baseGrayscale,
      opacity: state.baseOpacity,
    },
    segments: state.segments.map((segment, index) => ({
      id: `segment-${index + 1}`,
      type: segment.type,
      width: Math.round(segment.width / scale),
      a: normalizePoint(segment.a),
      b: normalizePoint(segment.b),
    })),
    spaces: state.spaces.map((space, index) => ({
      id: `space-${index + 1}`,
      name: space.name,
      type: space.type,
      number: space.number,
      customName: space.customName,
      source: space.source,
      segmentId: space.segmentId,
      point: normalizePoint(space.point),
    })),
    spaceEquivalentPoints: state.spaceEquivalentPoints.map((point, index) => ({
      id: `space-equivalent-${index + 1}`,
      spaceId: point.spaceId,
      segmentId: point.segmentId,
      point: normalizePoint(point.point),
    })),
    signs: state.signs.map((sign, index) => ({
      id: `sign-${index + 1}`,
      installType: sign.installType,
      number: sign.number,
      hangingFacing: sign.hangingFacing || "",
      panelAction: sign.panelAction || "straight",
      destinationsByAction: normalizeSignDestinations(sign),
      destinationsByFace: normalizeSignFaces(sign),
      text: sign.text,
      customText: sign.customText,
      targetSpaceId: sign.targetSpaceId,
      segmentId: sign.segmentId,
      angle: sign.angle,
      images: (sign.images || []).map((image) => ({ name: image.name, type: image.type })),
      imagesByFace: {
        front: (sign.imagesByFace?.front || sign.images || []).map((image) => ({ name: image.name, type: image.type })),
        back: (sign.imagesByFace?.back || []).map((image) => ({ name: image.name, type: image.type })),
      },
      point: normalizePoint(sign.point),
    })),
    test: {
      startMode: state.test.startMode,
      startMultiSelect: state.test.startMultiSelect,
      startSpaceIds: [...state.test.startSpaceIds],
      start: state.test.start
        ? {
            source: state.test.start.source,
            spaceId: state.test.start.spaceId || "",
            point: normalizePoint(state.test.start.point),
          }
        : null,
      endSpaceId: state.test.endSpaceId,
      endSpaceIds: [...state.test.endSpaceIds],
      endMultiSelect: state.test.endMultiSelect,
    },
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "route-segment-demo.json";
  link.click();
});

exportBaseBtn.addEventListener("click", () => {
  if (!state.baseCanvas) {
    setStatus("还没有可导出的底图。请先导入图片，或接入 PDF / DXF 转换后再导出。");
    return;
  }
  const exportCanvas = document.createElement("canvas");
  exportCanvas.width = state.baseCanvas.width;
  exportCanvas.height = state.baseCanvas.height;
  const exportContext = exportCanvas.getContext("2d");
  exportContext.globalAlpha = state.baseOpacity;
  exportContext.drawImage(state.baseCanvas, 0, 0);
  const link = document.createElement("a");
  link.href = exportCanvas.toDataURL("image/png");
  link.download = `${state.imageName.replace(/\.[^.]+$/, "") || "base-map"}-${state.baseGrayscale ? "gray" : "color"}.png`;
  link.click();
});

document.addEventListener("keydown", (event) => {
  const editingText = ["INPUT", "TEXTAREA"].includes(document.activeElement?.tagName);
  if (!editingText && state.tool === "scale" && state.scaleCalibration.mode === "quick"
    && state.scaleCalibration.pendingLine && event.key === "Enter") {
    event.preventDefault();
    commitScaleReference(state.scaleCalibration.selectedMeters);
    return;
  }
  if (!editingText && state.tool === "sign" && state.selectedSignId && event.key === "Enter") {
    event.preventDefault();
    finishSignAssociationBtn.click();
    return;
  }
  if (!editingText && state.tool === "edit" && ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)) {
    event.preventDefault();
    const step = event.shiftKey ? 10 : 1;
    const delta = {
      ArrowUp: [0, -step],
      ArrowDown: [0, step],
      ArrowLeft: [-step, 0],
      ArrowRight: [step, 0],
    }[event.key];
    moveSelectedSegments(delta[0], delta[1]);
    return;
  }
  if (!editingText && state.tool === "edit" && ["Backspace", "Delete"].includes(event.key)) {
    event.preventDefault();
    const deleted = deleteSelectedSegments();
    if (deleted) setStatus(`已删除 ${deleted} 条动线，请重新确认行走范围。`);
    return;
  }
  if (event.key === "Escape") finishCurrentLine();
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "z") {
    event.preventDefault();
    if (event.shiftKey && drawingHistory[state.tool]) redoDrawingChange(state.tool);
    else undoBtn.click();
  }
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "y") {
    event.preventDefault();
    if (drawingHistory[state.tool] && !redoDrawingChange(state.tool)) {
      setStatus("当前栏目还没有可以返回的撤销操作。");
    }
  }
  if (!editingText && state.tool === "info" && ["Backspace", "Delete"].includes(event.key)) {
    event.preventDefault();
    deleteSpaceBtn.click();
  }
  if (!editingText && state.tool === "sign" && ["Backspace", "Delete"].includes(event.key)) {
    event.preventDefault();
    deleteSignBtn.click();
  }
});

window.addEventListener("resize", () => {
  window.clearTimeout(state.resizeTimer);
  state.resizeTimer = window.setTimeout(refitBaseMap, 150);
});

if (!CanvasRenderingContext2D.prototype.roundRect) {
  CanvasRenderingContext2D.prototype.roundRect = function roundRect(x, y, width, height, radius) {
    this.moveTo(x + radius, y);
    this.lineTo(x + width - radius, y);
    this.quadraticCurveTo(x + width, y, x + width, y + radius);
    this.lineTo(x + width, y + height - radius);
    this.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    this.lineTo(x + radius, y + height);
    this.quadraticCurveTo(x, y + height, x, y + height - radius);
    this.lineTo(x, y + radius);
    this.quadraticCurveTo(x, y, x + radius, y);
  };
}

if (window.lucide) window.lucide.createIcons();
setRouteType("primary");
populateSpaceNumbers(spaceTypeInput.value);
syncBaseControls();
refreshTestSpaceOptions();
syncPersonInputs();
syncHangingFacingField();
syncStartHeadingControls();
updateSimulationPanels();
updateStatus();
redraw();
