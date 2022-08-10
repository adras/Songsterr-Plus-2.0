import {
	N as t,
	u as e,
	O as s,
	P as i,
	Q as o,
	U as a,
	W as n,
	X as l,
	Y as r,
	Z as p,
	$ as u,
	a0 as h,
	a1 as d,
	a2 as c,
	a3 as m,
	a4 as y,
	a5 as f,
	a6 as $,
	a7 as g,
	a8 as x,
	a9 as _,
	aa as b,
	ab as v,
	ac as L,
	ad as N,
	x as S,
	A as k,
	y as T,
	ae as w,
	af as E,
	ag as P,
	ah as M,
	ai as C,
	aj as D,
	ak as X,
	al as I,
	am as z,
	an as A,
	ao as B,
	ap as F,
	aq as R,
	ar as V,
	as as O,
	at as U,
	au as H,
	av as K,
	aw as W,
	ax as Y,
	ay as q,
	az as Q,
	aA as G,
	aB as j,
	aC as Z,
	aD as J,
	aE as tt,
	aF as te,
	aG as ts,
	aH as ti,
	aI as to,
	aJ as ta,
	aK as tn,
	aL as tl,
	aM as tr,
	aN as tp,
	aO as tu,
	aP as th,
	T as td,
	C as tc,
	aQ as tm,
	aR as ty,
	aS as tf,
	aT as t$,
	aU as tg,
	aV as tx,
	aW as t_,
	aX as tb,
	aY as tv,
	aZ as tL,
	a_ as t9,
	a$ as tN,
	b0 as tS,
	b1 as tk,
	b2 as t0,
	r as tT,
	b3 as tw,
	b4 as tE,
	t as tP,
	L as tM,
	b5 as t3,
	b6 as tC,
	b7 as tD,
	b8 as tX,
	b9 as t2,
	w as tI,
	ba as t1,
	bb as tz,
	v as tA,
} from "./index.26929406.js";
import {
	d as tB,
	a as tF,
	c as tR,
	y as tV,
	e as tO,
	p as t5,
	_ as t4,
	E as tU,
	T as tH,
	s as t6,
	F as tK,
} from "./preact.3d0be470.js";
import {
	P as tW,
	C as tY,
	a as tq,
	b as t7,
	_ as tQ,
	d as t8,
	F as tG,
	S as tj,
	e as tZ,
} from "./Capo.87fe9508.js";
import { g as tJ, a as et } from "./gplay.d7ca5cae.js";
import {
	N as ee,
	a as es,
	A as ei,
	L as eo,
	S as ea,
} from "./NetworkError.68352ffe.js";
import { S as en } from "./SWW.b59fc4e2.js";
class el extends tB {
	constructor() {
		super(), (this.state = { isFailed: !1 });
	}
	componentDidCatch(t) {
		this.setState({ isFailed: !0 }),
			this.props.dispatch("cursor/failed", { error: t });
	}
	render() {
		return this.state.isFailed ? null : this.props.children;
	}
}
var er = t(el);
let ep = "Ckd11i",
	eu = "Ckdzh",
	eh = "Ckd22n",
	ed = "Ckd11i Ckduv",
	ec = "Ckdte",
	em = {
		btn: "Ckd11i",
		shape: "Ckdzh",
		bg: "Ckd22n",
		active: "Ckd11i Ckduv",
		badge: "Ckdte",
	};
function ey(t) {
	let {
			reference: s,
			firstLineLayoutHeigth: i,
			handlePitchshift: o,
			isActive: a,
			isPitchshiftToStandard: n,
			lock: l,
		} = t,
		{
			player: { pitchShift: r },
		} = e("player"),
		p = "Shift pitch (R)";
	0 !== r
		? (p = "Pitch shifted (R)")
		: n && (p = "Pitch can be shifted to match standard tuning (R)");
	let u = 5 * (Math.abs(r).toString(10).length - 1) + (r > 0 ? 2 : 0);
	return tF(
		"g",
		{
			vectorEffect: "non-scaling-stroke",
			transform: `translate(-8 ${i - 47})`,
			className: a ? em.active : em.btn,
			onClick: o,
			"data-tab-button": "tuning-button",
		},
		tF("title", null, p),
		tF("rect", {
			x: 0,
			y: 3,
			rx: 4,
			ry: 4,
			width: 25,
			height: 23,
			filter: "url(#svg_shadow)",
			className: em.bg,
			ref: s,
		}),
		tF("path", {
			d: "M9.7 19.1h-6m2-2l-2 2 2 2m10-2h6m-2 2l2-2-2-2",
			"stroke-width": "1.3",
		}),
		tF("path", {
			d: "M9.7 7.1v7s0 3 3 3 3-3 3-3v-7m-3 10v5",
			"stroke-width": "1.6",
		}),
		(n || 0 !== r) &&
			tF("rect", {
				x: 18,
				y: 0,
				width: 13 + u,
				height: 13,
				rx: 6.5,
				ry: 6.5,
				className: em.badge,
			}),
		0 !== r && tF("text", { x: 20, y: 9.5 }, `${r > 0 ? "+" : ""}${r}`),
		l &&
			tF(
				"g",
				{ transform: "translate(-17, -12)" },
				tF("circle", {
					className: em.bg,
					cx: "16.5",
					cy: "15.5",
					r: "8.5",
					filter: "url(#svg_shadow_light)",
				}),
				tF("path", {
					className: em.lock,
					d: "M14.2 14.3v-1.1c0-1.4 1-2.5 2.3-2.5 1.3 0 2.3 1.1 2.3 2.5v1.1m-5.3 0h6a.5.5 0 0 1 .5.5v4.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5v-4.5a.5.5 0 0 1 .5-.5z",
				}),
				tF("circle", { className: em.shape, cx: 16.5, cy: 17, r: 0.8 })
			)
	);
}
let ef = "M7 12h5v5h2v-5h5v-2h-5v-5h-2v5h-5v2z",
	e$ = "M7.5 12h11v-2h-11v2z";
function eg(t) {
	let { up: e } = t;
	return tF(
		"svg",
		{ width: "44", height: "46", role: "img" },
		tF("rect", { width: 44, height: 46, rx: 4, ry: 4 }),
		tF("path", {
			d: e ? "M7 12h5v5h2v-5h5v-2h-5v-5h-2v5h-5v2z" : "M7.5 12h11v-2h-11v2z",
		})
	);
}
let ex = "B7uxe",
	e_ = "B7uxe B7u2i3",
	eb = "B7u2d7",
	ev = "B7u1gz",
	eL = "B7u2d7 B7u12o",
	e9 = "B7u2d7 B7u15f",
	eN = "B7u2lu",
	eS = "B7u2xf",
	ek = "B7u1a5",
	e0 = "B7u1jq",
	eT = "B7u1jq B7u2yh",
	ew = "B7u1jq B7u2yh B7u6z",
	eE = "B7u1jq B7u1fq",
	eP = "B7u1b6",
	eM = {
		pitchshift: "B7uxe",
		pitchshiftMobile: "B7uxe B7u2i3",
		pitchshiftSection: "B7u2d7",
		separator: "B7u1gz",
		tuneControls: "B7u2d7 B7u12o",
		currentTuning: "B7u2d7 B7u15f",
		currentTuningHeader: "B7u2lu",
		currentTuningFiller: "B7u2xf",
		tuningString: "B7u1a5",
		button: "B7u1jq",
		quickButton: "B7u1jq B7u2yh",
		disabledButton: "B7u1jq B7u2yh B7u6z",
		updown: "B7u1jq B7u1fq",
		currentPitch: "B7u1b6",
	},
	e3 = 12,
	eC = -12,
	eD = (t) =>
		t.current &&
		(n(t.current.instrumentId) || l(t.current.instrumentId)) &&
		t.current.tuning;
class eX extends tB {
	constructor(t) {
		super(t),
			(this.keyMap = {
				enter: this.hidePopup,
				left: this.tuneDown,
				down: this.tuneDown,
				up: this.tuneUp,
				right: this.tuneUp,
			});
	}
	hidePopup = (t) => {
		t.preventDefault(), this.props.dispatch("layer/hide");
	};
	componentDidMount() {
		window.hotKeysManager.bind(this.keyMap, { onPopup: !0 });
	}
	componentWillUnmount() {
		window.hotKeysManager.unbind(this.keyMap, { onPopup: !0 });
		let { player: t, ensureLineVisibility: e, part: i } = this.props;
		if (e && i.current) {
			let o = s(i.current, t.audio.getCursor(), "left");
			o && e(null, o.measureLayout.lineLayout, !1);
		}
	}
	tuneUp = (t) => {
		t.preventDefault();
		let { pitchShift: e } = this.props.player;
		e < 12 && i(this.props.store, e + 1);
	};
	tuneDown = (t) => {
		t.preventDefault();
		let { pitchShift: e } = this.props.player;
		e > -12 && i(this.props.store, e - 1);
	};
	reset = (t) => {
		t.preventDefault(), i(this.props.store, 0);
	};
	renderCurrentTuning = () => {
		if (eD(this.props.part)) {
			let t = this.props.part.current.tuning.map(
				(t) => t + this.props.player.pitchShift
			);
			return tF(
				"div",
				{ className: eM.currentTuning, "aria-label": "Current tuning" },
				tF("div", { className: eM.currentTuningHeader }, "CURRENT TUNING"),
				tF("div", { id: "tuning", className: eM.tuningString }, o(t))
			);
		}
		return null;
	};
	renderQuickButton = () => {
		if (0 !== this.props.player.pitchShift)
			return tF(
				"button",
				{
					className: eM.quickButton,
					onClick: this.reset,
					role: "button",
					"aria-label": "Restore original tuning",
				},
				"Restore original tuning"
			);
		if (eD(this.props.part)) {
			let t = a(
				this.props.part.current.instrumentId,
				this.props.part.current.tuning
			);
			if (t && 0 !== t.pitch) {
				let e = t.tuningName;
				return (
					"STANDARD TUNING" === e && (e = "Standard tuning"),
					tF(
						"button",
						{
							className: eM.quickButton,
							role: "button",
							"aria-label": "Quick shift pitch",
							onClick: () => {
								i(this.props.store, t.pitch);
							},
						},
						`Convert to ${e}`
					)
				);
			}
		}
		return tF(
			"button",
			{
				className: eM.disabledButton,
				role: "button",
				disabled: !0,
				"aria-label": "Restore original tuning",
			},
			"Restore original tuning"
		);
	};
	render() {
		let t = this.renderQuickButton(),
			e = this.renderCurrentTuning(),
			{ pitchShift: s } = this.props.player,
			{ tab: i, tuningButton: o, mobile: a } = this.props,
			n = 0,
			l = 0,
			r = eM.pitchshift;
		if (a) (n = -71), (l = -235), (r = eM.pitchshiftMobile);
		else if (((n = this.props.firstLineLayoutHeigth - 58), (l = 55), i && o)) {
			let p = i.getBoundingClientRect(),
				u = o.getBoundingClientRect();
			(l = u.left - p.left + u.width + 21),
				(n = u.top + u.height - p.top - 77.5);
		}
		return tF(
			"div",
			{
				className: r,
				title: "You can use arrow keys",
				role: "dialog",
				"aria-label": "Shift Pitch",
				style: { top: `${n}px`, left: `${l}px` },
			},
			e || tF("div", { className: eM.currentTuningFiller }),
			tF(
				"div",
				{ className: eM.tuneControls },
				tF(
					"button",
					{
						className: eM.updown,
						onClick: this.tuneDown,
						disabled: s <= -12,
						"aria-label": "Step down",
					},
					tF(eg, { up: !1 })
				),
				tF(
					"span",
					{ className: eM.currentPitch, "aria-label": "Current pitch" },
					(s > 0 ? "+" : "") + s
				),
				tF(
					"button",
					{
						className: eM.updown,
						onClick: this.tuneUp,
						disabled: s >= 12,
						"aria-label": "Step up",
					},
					tF(eg, { up: !0 })
				)
			),
			t
		);
	}
}
var e2 = t(eX, "player", "part");
let eI = "Cpkq8",
	e1 = "Cpk9f",
	ez = "Cpk2r",
	eA = "Cpk19q",
	eB = "Cpk34y",
	eF = {
		wrap: "Cpkq8",
		shadow: "Cpk9f",
		body: "Cpk2r",
		loading: "Cpk19q",
		icon: "Cpk34y",
	};
function eR(t) {
	return Math.round(1e4 * t) / 1e4;
}
function eV(t, e, s) {
	let i = t / 2,
		o = eR(i * s),
		a = eR(i);
	return `M 0,${o}
     Q 0,0 ${a},0 q ${a},0 ${a},${o}
     v ${eR(e - 2 * o)}
     q 0,${o} -${a},${o} q -${a},0 -${a},-${o}
     v -${eR(e - 2 * o)}`;
}
function eO(t, e, s, i, o, a, n) {
	let l = s * i,
		r = s * o,
		p = s * a,
		u = s * n,
		h = Math.atan2(l, s / 2),
		d = Math.sin(h),
		c = Math.cos(h),
		m = p * d,
		y = p * c,
		f = u * d,
		$ = u * c;
	return `M ${eR(t + y)},${eR(e + m)}
     Q ${eR(t)},${eR(e)} ${eR(t + r)},${eR(e)}
     L ${eR(t + s - r)},${eR(e)}
     Q ${eR(t + s)},${eR(e)} ${eR(t + s - y)},${eR(e + m)}
     L ${eR(t + s / 2 + $)},${eR(e + l - f)}
     Q ${eR(t + s / 2)},${eR(e + l)} ${eR(t + s / 2 - $)},${eR(e + l - f)}
     z`;
}
function e5(t) {
	let { width: e, height: s } = t,
		i = 1 * e,
		o = eO((e - i) / 2, 0.33 * e, i, 0.95, 0.45, 0.6, 0.3),
		a = eV(e, s, 1.3);
	return tF(
		tR,
		null,
		tF("path", {
			className: eF.shadow,
			filter: "url(#CursorShadow)",
			d: a,
			key: "shadow",
		}),
		tF("path", { className: eF.body, d: a, key: "body" }),
		tF("path", { className: eF.icon, d: o, key: "path" })
	);
}
function e4(t, e) {
	let s = t.measureLayout,
		i = e.measureLayout;
	return s !== i
		? s.lineLayout !== i.lineLayout || s.measure.index + 1 !== i.measure.index
		: t.x >= e.x;
}
let eU = (t) => t.player.shouldPlay && t.player.canPlay,
	eH = b / 2,
	e6 = (t, e, s, i) => {
		let o = f(s);
		if (1 !== t) {
			for (let a of ((o = 0), i)) {
				if (a === s.line) break;
				o += Math.round(t * a.layout.height);
			}
			o = o / t + s.layers.height;
		}
		return eW(t, e, o);
	},
	eK = (t, e, s, i) => eW(t, e, f(s)),
	eW = (t, e, s) => {
		let i = x;
		return (
			(1 === t ? "" : `scale(${t}) `) +
			` translate3d(${e - $ / 2 + eH}px, ${s - i}px, 0)`
		);
	};
class eY extends tB {
	el = tV();
	constructor(t) {
		super(t),
			(this.state = { scale: t.scale }),
			(this.animationPlayId = void 0),
			(this.keyMap = {
				backspace: this.handleBackspace,
				left: this.handleLeft,
				down: this.handleDown,
				up: this.handleUp,
				right: this.handleRight,
			}),
			(this.tempoIndex = 0),
			(this.pause = !0),
			(this.layout = null),
			(this.layoutTimestamp = 0),
			(this.nextLayout = null),
			(this.nextLayoutTimestamp = 0),
			(this.formatTransform =
				"iOS" === this.props.browser.family ||
				"Safari" === this.props.browser.family
					? e6
					: eK);
	}
	componentDidMount() {
		this.animationSeek(),
			window.hotKeysManager.bind(this.keyMap, { onTab: !0 }),
			window.hotKeysManager.bindMeta(
				"shift+right",
				this.handleShiftLoopRight,
				"onTab"
			),
			window.hotKeysManager.bindMeta(
				"shift+left",
				this.handleShiftLoopLeft,
				"onTab"
			),
			window.hotKeysManager.bindMeta(
				"shift+down",
				this.handleShiftLoopRight,
				"onTab"
			),
			window.hotKeysManager.bindMeta(
				"shift+up",
				this.handleShiftLoopLeft,
				"onTab"
			);
	}
	componentDidUpdate(t) {
		let e = this.props,
			s = e.part !== t.part || e.lines !== t.lines,
			i = e.player.position.cursor !== t.player.position.cursor;
		(s || i) &&
			((this.layout = null),
			(this.layoutTimestamp = 0),
			(this.nextLayout = null),
			(this.nextLayoutTimestamp = 0));
		let o =
			e.scale !== t.scale ||
			s ||
			i ||
			e.player.speed !== t.player.speed ||
			e.player.type !== t.player.type ||
			e.player.pitchShift !== t.player.pitchShift ||
			eU(e) !== eU(t);
		if (o) {
			let a = this.animationSeek;
			eU(t)
				? (a = eU(e) ? this.animationRestart : this.animationPause)
				: eU(e) && (a = this.animationPlay),
				a.call(this);
		}
	}
	componentWillUnmount() {
		(this.pause = !0),
			this.animationPlayId && cancelAnimationFrame(this.animationPlayId),
			window.hotKeysManager.unbindMeta("shift+right", "onTab"),
			window.hotKeysManager.unbindMeta("shift+left", "onTab"),
			window.hotKeysManager.unbindMeta("shift+down", "onTab"),
			window.hotKeysManager.unbindMeta("shift+up", "onTab"),
			window.hotKeysManager.unbind(this.keyMap, { onTab: !0 });
	}
	applyCursorCoordinates(t) {
		let { el: e, layout: s, nextLayout: i, layoutTimestamp: o } = this,
			{ scale: a, lines: n } = this.props,
			l;
		if (i && e4(s, i)) {
			let r = s.absoluteLoopRightX - s.absoluteX,
				p = i.absoluteX - i.absoluteLoopLeftX,
				u = (s.duration * r) / (r + p),
				h = s.duration - u;
			l = (t) => {
				let l = t - o;
				e.current.style.transform =
					l < u
						? this.formatTransform(
								a,
								s.absoluteX + (r * l) / u,
								s.measureLayout.lineLayout,
								n
						  )
						: this.formatTransform(
								a,
								i.absoluteLoopLeftX + (p * (l - u)) / h,
								i.measureLayout.lineLayout,
								n
						  );
			};
		} else {
			let d = i
				? i.absoluteX - s.absoluteX
				: s.absoluteLoopRightX - s.absoluteX;
			l = (t) => {
				e.current.style.transform = this.formatTransform(
					a,
					s.absoluteX + (d * (t - o)) / s.duration,
					s.measureLayout.lineLayout,
					n
				);
			};
		}
		return l(t), l;
	}
	updateCurrentTempo(t) {
		let e = this.props.part.tempos,
			s = (s) =>
				e[s].timestamp <= t && (s === e.length - 1 || t < e[s + 1].timestamp);
		this.tempoIndex >= e.length && (this.tempoIndex = 0),
			s(this.tempoIndex) ||
				((this.tempoIndex = e.findIndex((t, e) => s(e))),
				-1 === this.tempoIndex && (this.tempoIndex = 0),
				this.props.dispatch("player/tempoApply", e[this.tempoIndex].tempo));
	}
	findLayoutUnderCursor(t) {
		if (
			!this.layout ||
			!(
				this.layoutTimestamp <= t &&
				t < this.layoutTimestamp + this.layout.duration
			)
		) {
			let e = r(this.props.part, t),
				{ timeline: s, timestamps: i } = this.props.part;
			(this.layoutTimestamp = i[e]),
				(this.layout = s.get(this.layoutTimestamp));
			let o = e < i.length - 1 ? i[e + 1] : null,
				a = this.props.player.position.loopEnd;
			return (
				0 !== a &&
					(null === o || o >= a - 1e-15) &&
					(o = this.props.player.position.loopStart),
				(this.nextLayout = null !== o ? s.get(o) : null),
				!0
			);
		}
		return !1;
	}
	animationSeek() {
		let t = this.props.player.audio.getCursor();
		this.findLayoutUnderCursor(t),
			this.applyCursorCoordinates(t),
			this.updateCurrentTempo(t);
	}
	animationPlay() {
		this.animationPlayId && cancelAnimationFrame(this.animationPlayId);
		let t = !1,
			e = this.props.player.audio.getCursor();
		this.findLayoutUnderCursor(e);
		let s = this.applyCursorCoordinates(e),
			i = null,
			o = () => {
				let t = this.layout.absoluteLoopRightX - this.layout.absoluteX,
					e = this.nextLayout.absoluteX - this.nextLayout.absoluteLoopLeftX,
					s = ((this.layout.duration * t) / (t + e)) * 0.8;
				return (i = (t) =>
					!!this.layout &&
					!!this.nextLayout &&
					t - this.layoutTimestamp > s &&
					(this.props.ensureLineVisibility(
						this.layout.measureLayout.lineLayout,
						this.nextLayout.measureLayout.lineLayout,
						!1
					),
					(i = null),
					!0));
			};
		(this.nextLayout && e4(this.layout, this.nextLayout) && o()(e)) ||
			this.props.ensureLineVisibility(
				null,
				this.layout.measureLayout.lineLayout,
				!1
			);
		let a = window.requestAnimationFrame,
			n = () => {
				try {
					if (
						(!t && this.props.player.audio.isPositionChanged() && (t = !0), t)
					) {
						let e = this.props.player.audio.getCursor();
						s && s(e),
							i && i(e),
							this.findLayoutUnderCursor(e) &&
								((s = this.applyCursorCoordinates(e)),
								this.nextLayout && e4(this.layout, this.nextLayout) && o(),
								!this.nextLayout &&
									e >= g(this.layout) - 1e-15 &&
									(this.stopPlayback(), (this.pause = !0))),
							this.updateCurrentTempo(e);
					}
					this.pause || (this.animationPlayId = a(n));
				} catch (l) {
					console.error(l);
				}
			};
		(this.pause = !1), (this.animationPlayId = a(n));
	}
	animationPause() {
		this.pause = !0;
	}
	animationRestart() {
		this.animationPlayId && cancelAnimationFrame(this.animationPlayId),
			(this.layout = null),
			(this.layoutTimestamp = 0),
			(this.nextLayout = null),
			(this.nextLayoutTimestamp = 0),
			this.animationPlay();
	}
	stopPlayback = () => {
		this.props.dispatch("player/togglePlay", !1);
	};
	moveTo(t) {
		let e = p(t).beatsLayouts;
		this.props.dispatch("player/moveCursor", {
			cursor: u(e[0]),
			loopStart: this.props.player.position.loopStart,
			loopEnd: this.props.player.position.loopEnd,
		});
	}
	handleBackspace = (t) => {
		t.preventDefault();
		let { loopStart: e, loopEnd: s } = this.props.player.position;
		this.props.dispatch("player/moveCursor", {
			cursor: e,
			loopStart: e,
			loopEnd: s,
		});
	};
	handleLeft = (t) => {
		t.preventDefault();
		let { part: e } = this.props,
			{ loopStart: i, loopEnd: o } = this.props.player.position,
			a = s(e, this.props.player.audio.getCursor(), "left"),
			n = a.measureLayout.measure.index,
			l = a.measureLayout.beatsLayouts[0],
			r = i;
		if (a !== l) {
			let d = u(l);
			r = d > i ? d : i;
		} else if (n > 0) {
			l = p(e.measures[n - 1]).beatsLayouts[0];
			let c = u(l),
				m = h(l);
			r = 0 === o || i <= c ? c : i <= m ? m : i;
		}
		this.props.dispatch("player/moveCursor", {
			cursor: r,
			loopStart: i,
			loopEnd: o,
		}),
			l &&
				this.props.ensureLineVisibility(null, l.measureLayout.lineLayout, !1);
	};
	handleRight = (t) => {
		t.preventDefault();
		let { part: e } = this.props,
			{ loopStart: i, loopEnd: o } = this.props.player.position,
			a = s(e, this.props.player.audio.getCursor(), "left"),
			n = a.measureLayout.measure.index,
			l = null,
			r;
		if (n < e.measures.length - 1) {
			r = p(e.measures[n + 1]).beatsLayouts[0];
			let d = u(r),
				c = h(r);
			0 === o || c < o ? (l = c) : d < o && (l = d);
		}
		null !== l &&
			(this.props.dispatch("player/moveCursor", {
				cursor: l,
				loopStart: i,
				loopEnd: o,
			}),
			r &&
				this.props.ensureLineVisibility(null, r.measureLayout.lineLayout, !1));
	};
	handleUp = (t) => {
		t.preventDefault();
		let { part: e } = this.props,
			{ loopStart: i, loopEnd: o } = this.props.player.position,
			a = s(e, this.props.player.audio.getCursor(), "left"),
			n = a.measureLayout.lineLayout.line.index;
		if (n > 0) {
			let l = this.props.lines[n - 1],
				r = d(l, a.absoluteX, "left"),
				p = null,
				c = u(r),
				m = h(r);
			0 === o || i <= c ? (p = c) : i <= m && (p = m),
				null !== p &&
					(this.props.dispatch("player/moveCursor", {
						cursor: p,
						loopStart: i,
						loopEnd: o,
					}),
					this.props.ensureLineVisibility(
						null,
						r.measureLayout.lineLayout,
						!1
					));
		}
	};
	handleDown = (t) => {
		t.preventDefault();
		let { part: e } = this.props,
			{ loopStart: i, loopEnd: o } = this.props.player.position,
			a = s(e, this.props.player.audio.getCursor(), "left"),
			n = a.measureLayout.lineLayout.line.index;
		if (n < this.props.lines.length - 1) {
			let l = this.props.lines[n + 1],
				r = d(l, a.absoluteX, "left"),
				p = null,
				c = u(r),
				m = h(r);
			0 === o || m < o ? (p = m) : c < o && (p = c),
				p &&
					(this.props.dispatch("player/moveCursor", {
						cursor: p,
						loopStart: i,
						loopEnd: o,
					}),
					this.props.ensureLineVisibility(
						null,
						r.measureLayout.lineLayout,
						!1
					));
		}
	};
	handleShiftLoopRight = (t) => {
		t.preventDefault(), t.stopPropagation();
		let { part: e } = this.props,
			{ loopStart: i, loopEnd: o } = this.props.player.position;
		if (0 === o) return;
		let a = s(e, o, "left"),
			n = a.measureLayout.measure,
			l = this.props.part.measures[n.index + 1];
		if (!l) return;
		let r = p(l).beatsLayouts,
			u,
			h;
		if (o < c(r[0])) u = c((h = r[0]));
		else {
			let d = m(l).beatsLayouts;
			u = y((h = d[d.length - 1]));
		}
		let f = this.props.player.audio.getCursor();
		this.props.dispatch("player/moveCursor", {
			cursor: f,
			loopStart: i,
			loopEnd: u,
		}),
			this.props.ensureLineVisibility(null, h.measureLayout.lineLayout, !1);
	};
	handleShiftLoopLeft = (t) => {
		t.preventDefault(), t.stopPropagation();
		let { part: e } = this.props,
			{ loopStart: i, loopEnd: o } = this.props.player.position;
		if (0 === o) return;
		let a = s(e, o, "left"),
			n = a.measureLayout.measure,
			l = this.props.part.measures[n.index - 1];
		if (!l) return;
		let r = p(n).beatsLayouts,
			u,
			h;
		if (
			(o > c(r[0])
				? (u = c((h = r[0])))
				: ((h = p(l).beatsLayouts[0]), (u = c(h))),
			i >= u)
		)
			return;
		let d = this.props.player.audio.getCursor();
		this.props.dispatch("player/moveCursor", {
			cursor: d,
			loopStart: i,
			loopEnd: u,
		}),
			this.props.ensureLineVisibility(null, l.layouts[0].lineLayout, !1);
	};
	render() {
		let t = this.props.lines[0].layout.intervalSize,
			e = $,
			s = (this.props.part.strings - 1) * t + (x + _),
			i = !(this.props.player.canPlay || this.props.route.isPanel);
		return tF(
			"div",
			{ className: eF.wrap, ref: this.el },
			!this.props.hidden &&
				tF(
					"svg",
					{ width: e, height: s, className: i ? eF.loading : eF.normal },
					tF(
						"defs",
						{},
						tF(
							"filter",
							{ id: "CursorShadow", x: "-40%", width: "180%" },
							tF("feGaussianBlur", { in: "SourceGraphic", stdDeviation: "2" }),
							tF("feOffset", { dx: "0", dy: "2" })
						)
					),
					tF(e5, { width: e, height: s })
				)
		);
	}
}
var eq = t(eY, "player", "route", "browser");
let e7 = "Cgh21m",
	eQ = "Cgh2b2",
	e8 = "Cgh1j0",
	eG = "Cgh16l",
	ej = "Cgh2v6",
	eZ = {
		background: "Cgh21m",
		loop: "Cgh2b2",
		shape: "Cgh1j0",
		area: "Cgh16l",
		icon: "Cgh2v6",
	},
	eJ = 10,
	st = 27;
class se extends tB {
	render() {
		let { x: t, layout: e, handle: s } = this.props,
			i = e.measureLayout.lineLayout,
			o = v(i) + 10,
			a = L(i) - 20,
			n = `translate(${t},${o})`,
			l = "left" === s ? "matrix(-1,0,0,1,1,0)" : "",
			r = Math.floor(a / 2);
		return tF(
			"g",
			{ className: eZ.loop, transform: n, "data-loop-handle": s },
			tF("path", {
				d: `M0 ${r - 12}q15 0 15 12t-15 12m1 0v${r - 12}h-2 v-${a}h2z`,
				className: eZ.shape,
				transform: l,
			}),
			tF("path", {
				d: `M8 ${r - 4.5}l-4.5 4.5l4.5 4.5`,
				className: eZ.icon,
				transform: l,
			}),
			tF("rect", {
				x: -10,
				y: -1,
				height: a,
				width: 27,
				transform: l,
				className: eZ.area,
			})
		);
	}
}
class ss extends tB {
	render() {
		let { leftLayout: t, rightLayout: e, lines: s } = this.props,
			i = t.absoluteLoopLeftX,
			o = e.absoluteLoopRightX,
			a = t.measureLayout.lineLayout,
			n = e.measureLayout.lineLayout,
			l = eZ.background;
		if (a === n)
			return tF("rect", {
				className: l,
				rx: 3,
				height: L(a),
				x: i,
				y: v(a),
				width: o - i + 1,
			});
		let r = a.line.index,
			p = n.line.index,
			u = p - r,
			h = Array(u + 1);
		(h[0] = tF("rect", {
			className: l,
			rx: 3,
			height: L(a),
			x: i,
			y: v(a),
			width: a.maxX - i,
			key: r,
		})),
			(h[u] = tF("rect", {
				className: l,
				rx: 3,
				height: L(n),
				x: n.minX,
				y: v(n),
				width: o - n.minX,
				key: p,
			}));
		for (let d = r + 1; d < p; d++) {
			let c = s[d].layout;
			h[d - r] = tF("rect", {
				className: l,
				rx: 3,
				height: L(c),
				x: c.minX,
				y: v(c),
				width: c.maxX,
				key: d,
			});
		}
		return tF("g", null, h);
	}
}
let si = 5,
	so = 100,
	sa = "scrollBehavior" in document.documentElement.style,
	sn = (t) => 0.5 * (1 - Math.cos(Math.PI * t));
class sl {
	constructor() {
		(this.y = 0),
			(this.startY = 0),
			(this.startTime = 0),
			(this.scrollId = void 0);
	}
	scroll(t, e, s) {
		if (
			(this.scrollId &&
				(cancelAnimationFrame(this.scrollId), (this.scrollId = void 0)),
			sa)
		)
			window.scrollTo({ left: 0, top: t, behavior: e ? "auto" : "smooth" });
		else {
			let i =
				s ||
				(window.visualViewport
					? window.visualViewport.pageTop
					: window.scrollY);
			if (e || 5 >= Math.abs(t - i)) window.scrollTo(0, t);
			else {
				(this.y = t), (this.startY = i), (this.startTime = N());
				let o = window.requestAnimationFrame;
				this.scrollId = o(this.animationLoop);
			}
		}
	}
	animationLoop = () => {
		let t = sn(Math.min((N() - this.startTime) / 100, 1)),
			e = this.startY + (this.y - this.startY) * t;
		if ((window.scrollTo(0, e), e !== this.y)) {
			let s = window.requestAnimationFrame;
			this.scrollId = s(this.animationLoop);
		} else this.scrollId = void 0;
	};
	unmount() {
		this.scrollId &&
			(cancelAnimationFrame(this.scrollId), (this.scrollId = void 0));
	}
}
let sr = "Cvj28d",
	sp = "Cvj28d Cvj2ff",
	su = "Cvj28d Cvj2ff Cvj350",
	sh = "Cvj28d Cvj1dp",
	sd = "Cvjo4",
	sc = "Cvj23g",
	sm = "Cvj1mq",
	sy = "Cvj28d Cvj2k8",
	sf = {
		popup: "Cvj28d",
		popupRight: "Cvj28d Cvj2ff",
		popupMobile: "Cvj28d Cvj2ff Cvj350",
		popupLeftTop: "Cvj28d Cvj1dp",
		link: "Cvjo4",
		title: "Cvj23g",
		text: "Cvj1mq",
		popupTop: "Cvj28d Cvj2k8",
	};
function s$(t) {
	let {
			title: e,
			mobile: s,
			leftOffset: i,
			topOffset: o,
			horizontal: a,
			device: n,
		} = t,
		l = (s && sf.popupMobile) || (a ? sf.popupTop : sf.popupRight),
		r = {};
	void 0 !== i &&
		void 0 !== o &&
		((r = { top: `${o}px`, left: `${i}px` }), (l = sf.popupLeftTop));
	let p = "subscribe in the app";
	return (
		S(n.os) && (p = "buy in the app"),
		tF(
			"div",
			{ role: "dialog", className: l, style: r },
			tF(
				k,
				{
					source: "popup",
					attrs: { className: sf.link, "aria-label": `${e} ${p}` },
				},
				tF(
					"div",
					null,
					tF("div", { className: sf.title }, e),
					tF("div", { className: sf.text }, p)
				),
				S(n.os)
					? tF("img", { src: tJ, width: 160, height: 47, alt: "Google Play" })
					: tF("img", { src: et, width: 160, height: 53, alt: "AppStore" })
			)
		)
	);
}
function sg(t) {
	let { tab: s, tuningButton: i } = t,
		{ device: o } = e("device"),
		a = 0,
		n = 0;
	if (s && i) {
		let l = s.getBoundingClientRect(),
			r = i.getBoundingClientRect();
		(a = r.left - l.left + r.width + 21),
			(n = r.top - l.top - (23 - r.height) - 14.5),
			n < 2 && (n = 2);
	}
	return S(o.os) || T(o.os)
		? tF(s$, { title: "Pitch Shift", device: o, leftOffset: a, topOffset: n })
		: tF(tW, {
				title: "Pitch Shift",
				classPrefix: "pitchshift",
				leftOffset: a,
				topOffset: n,
		  });
}
let sx = "Ceg2uy",
	s_ = "Ceg2gt",
	sb = "Ceg9t",
	sv = "Ceghf",
	sL = "Ceg19o",
	s9 = "Ceg2im",
	sN = {
		editor: "Ceg2uy",
		correction: "Ceg2gt",
		keyboard: "Ceg9t",
		digit: "Ceghf",
		remove: "Ceg19o",
		zero: "Ceg2im",
	},
	sS,
	sk = () => {
		clearTimeout(sS), (sS = null);
	},
	s0 = 24,
	sT;
class sw extends tB {
	formClick = (t) => {
		t.preventDefault(), t.stopPropagation();
	};
	keyHandler = (t) => {
		let { tabEditor: e, dispatch: s } = this.props;
		if (sS && 1 === e.fret.length && "0" !== e.fret) {
			let i = `${e.fret}${t}`;
			if ((sk(), 24 >= +i)) {
				s("tabEditor/changeNote", i);
				return;
			}
		}
		s("tabEditor/changeNote", t), (sS = setTimeout(() => (sS = null), 1e3));
	};
	onDigit = (t) => {
		t.preventDefault(), t.stopPropagation(), this.keyHandler(t.key);
	};
	onDeadNote = (t) => {
		t.preventDefault(),
			t.stopPropagation(),
			sk(),
			this.props.dispatch("tabEditor/changeNote", "X");
	};
	onMobileKeyboard = (t) => () => this.keyHandler(t);
	onBackspace = () => {
		this.props.dispatch("tabEditor/changeNote", ""), sk();
	};
	onRight = () => {
		let { scale: t, dispatch: e } = this.props;
		e("tabEditor/formMove", { scale: t, direction: "right" });
	};
	onLeft = () => {
		let { scale: t, dispatch: e } = this.props;
		e("tabEditor/formMove", { scale: t, direction: "left" });
	};
	onUp = (t) => {
		t.preventDefault(), t.stopPropagation();
		let { scale: e, dispatch: s } = this.props;
		s("tabEditor/formMove", { scale: e, direction: "up" });
	};
	onDown = (t) => {
		t.preventDefault(), t.stopPropagation();
		let { scale: e, dispatch: s } = this.props;
		s("tabEditor/formMove", { scale: e, direction: "down" });
	};
	onEscape = () => {
		this.props.dispatch("layer/hide");
	};
	constructor(t) {
		super(t);
		let { device: e } = t;
		(sT = w(e) || S(e.os) || T(e.os)),
			(this.keyMap = {
				right: this.onRight,
				left: this.onLeft,
				up: this.onUp,
				down: this.onDown,
				enter: this.onRight,
				backspace: this.onBackspace,
				delete: this.onBackspace,
				escape: this.onEscape,
				"digits*": this.onDigit,
				"numpad*": this.onDigit,
				x: this.onDeadNote,
			});
	}
	componentDidMount() {
		window.hotKeysManager.bind(this.keyMap, { onPopup: !0 });
	}
	componentWillUnmount() {
		window.hotKeysManager.unbind(this.keyMap, { onPopup: !0 }), sk();
	}
	componentDidUpdate(t) {
		(t.tabEditor.formX !== this.props.tabEditor.formX ||
			t.tabEditor.formY !== this.props.tabEditor.formY) &&
			sk();
	}
	render() {
		let { tabEditor: t, scale: e } = this.props,
			s = {
				top: t.formY - 1,
				left: t.formX + 2.5,
				display: t.positioned ? "block" : "none",
				transform: `scale(${e})`,
				transformOrigin: "left 0px",
			};
		0 !== t.voice && (s.color = "#868686"),
			t.fret !== t.originalFret && "" !== t.fret && (s.color = "#ff3130");
		let i = {
			top: t.formY + 31 * e,
			left: t.formX - 64 * e,
			display: t.positioned ? "flex" : "none",
			transform: `scale(${e})`,
			transformOrigin: "left 0px",
		};
		return tF(
			tR,
			null,
			tF(
				"div",
				{
					id: "note-editor",
					className: sN.editor,
					style: s,
					tabIndex: -1,
					onMouseUp: this.formClick,
				},
				"" === t.fret && "" !== t.originalFret
					? tF(
							tR,
							{},
							t.originalFret,
							tF(
								"svg",
								{ className: sN.correction, width: 25, height: 23 },
								tF("line", { x1: 6, y1: 4, x2: 14, y2: 15 })
							)
					  )
					: t.fret
			),
			sT &&
				tF(
					"div",
					{ className: sN.keyboard, style: i },
					tF(
						"button",
						{ className: sN.remove, onClick: this.onBackspace },
						"<-"
					),
					["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((t) =>
						tF(
							"button",
							{
								key: t,
								className: sN.digit,
								onClick: this.onMobileKeyboard(t),
							},
							t
						)
					),
					tF(
						"button",
						{ className: sN.zero, onClick: this.onMobileKeyboard("0") },
						"0"
					)
				)
		);
	}
}
var sE = t(sw, "tabEditor", "device");
let sP = "D28105",
	sM = "D28105 D2813e",
	s3 = "D28105 D2813e D282yy",
	sC = "D28105 D28iz",
	sD = "D281qz",
	sX = {
		tablature: "D28105",
		tablatureFullscreen: "D28105 D2813e",
		tablatureFullscreenFree: "D28105 D2813e D282yy",
		tablatureFree: "D28105 D28iz",
		handlers: "D281qz",
	},
	s2 = "d418f",
	sI = "d41sr",
	s1 = "d41bt",
	sz = "d42bj",
	sA = {
		exitActive: "d418f",
		enterActive: "d41sr",
		enter: "d41bt",
		exit: "d42bj",
	};
async function sB(t) {
	return "IntersectionObserver" in window
		? new Promise((e) => {
				let s = new IntersectionObserver((t) => {
					s.disconnect(), e(t[0].boundingClientRect);
				});
				s.observe(t);
		  })
		: t.getBoundingClientRect();
}
let sF = "C351",
	sR = { text: "C351" };
function sV(t) {
	let { text: e, layout: s, xoffset: i } = t,
		o = e.layer;
	if (o) {
		let a = s ? o.x1 - s.absoluteX : o.x1,
			n = -1 * o.y;
		return tO("text", {
			className: sR.text,
			x: a + i,
			y: n,
			dy: "-0.25em",
			children: e.text,
		});
	}
	return null;
}
let sO =
		"M5.5 23.5C3.25 26 2.25 28 2.25 29.25s1.25 3 3.25 5.5l-.75 1C4 35.25 2 34.25 1 35.25S.5 38.5 2.25 40l-.75 1c-2.95-2.03-5.25-5.25-3.75-7.5s4.25-.75 4.5-.5l-4.5-6.25c2-1.75 3-3.5 3-5s-.5-2.75-2-4.5H.5z",
	s5 =
		"M.5 36h-1.5l3-10.25c-2 .75-4 1.5-5.77-.6a2.38 2.38 0 1 1 4-.4.25.25 0 0 0 .25.25",
	s4 = "c1.25-.25 2.75-2.25 3-2.75h1z",
	sU =
		"c.7-.25 1.25-.5 2-1.5l1.5-5.25c-2 .75-4 1.5-5.77-.6a2.38 2.38 0 1 1 4-.4.25.25 0 0 0 .25.25",
	sH = "M6-3.7C6-2 4.9-1.1 4.9-1.1a3 2.1-27 1 1 0-3V-17h1.2z",
	s6 = `${s5}${s4}`,
	sK = `${s5}${sU}${s4}`,
	sW = `${s5}${sU}${sU}${s4}`,
	sY = `${s5}${sU}${sU}${sU}${s4}`,
	sq = `${s5}${sU}${sU}${sU}${sU}${s4}`,
	s7 = "M0-4l9 8m0-8l-9 8",
	sQ = "M-2-7l6.5-4l6.5 4",
	s8 = "M-2-7h8l5 -5",
	sG = "M0 3l4.7-7 4.7 7z",
	sj = "M5-4.5l5 4-5 4-5-4 5-4z",
	sZ = "M10.8 0a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 12.4 0z",
	sJ = `${sZ}${s7}`,
	it = `${sZ}M9-4L0 4`,
	ie =
		"M9.2-3c1 1.9-.4 4.1-2.9 5.4-2.4 1.3-4.9 1.2-6-.8-1-1.9.4-4.3 2.9-5.5 2.4-1.3 4.9-1 6 .9z",
	is = `${ie}M-3-6L12 5`,
	ii = "M-4 0l16 0";
function io(t) {
	let e = t.line.layout.intervalSize,
		s = t.line.strings,
		i = (s <= 4 ? e : 0) - 2 * (e - 12),
		o = 0 !== i ? `translate(0, ${-i})` : void 0,
		a = [
			tO("ellipse", { id: "dot", cx: 10, cy: 17.5 - i, rx: 1.5, ry: 1.5 }),
			tO("rect", { id: "rest1", y: 24 - i, x: -6, width: 12, height: 6 }),
			tO("rect", { id: "rest2", y: 18 - i, x: -6, width: 12, height: 6 }),
			tO("path", {
				id: "rest4",
				transform: o,
				d: "M5.5 23.5C3.25 26 2.25 28 2.25 29.25s1.25 3 3.25 5.5l-.75 1C4 35.25 2 34.25 1 35.25S.5 38.5 2.25 40l-.75 1c-2.95-2.03-5.25-5.25-3.75-7.5s4.25-.75 4.5-.5l-4.5-6.25c2-1.75 3-3.5 3-5s-.5-2.75-2-4.5H.5z",
			}),
			tO("path", { id: "rest8", transform: o, d: s6 }),
			tO("path", { id: "rest16", transform: o, d: sK }),
			tO("path", { id: "rest32", transform: o, d: sW }),
			tO("path", { id: "rest64", transform: o, d: sY }),
			tO("path", { id: "rest128", transform: o, d: sq }),
			tO("path", {
				id: "tempo",
				d: "M6-3.7C6-2 4.9-1.1 4.9-1.1a3 2.1-27 1 1 0-3V-17h1.2z",
			}),
		],
		n = !this.props.part.usedDrums;
	return tO("defs", {
		children: n
			? a
			: [
					...a,
					tO("path", { id: "drumCross", d: s7 }),
					tO("path", {
						id: "drumHat",
						d: "M-2-7l6.5-4l6.5 4",
						style: "fill: none",
					}),
					tO("path", {
						id: "drumHatEdge",
						d: "M-2-7h8l5 -5",
						style: "fill: none",
					}),
					tO("path", { id: "drumTriangle", d: "M0 3l4.7-7 4.7 7z" }),
					tO("path", { id: "drumRhomb", d: "M5-4.5l5 4-5 4-5-4 5-4z" }),
					tO("path", { id: "drumCircleCross", d: sJ, style: "fill: none" }),
					tO("path", { id: "drumCircleStroke", d: it, style: "fill: none" }),
					tO("path", { id: "drum", d: ie }),
					tO("path", { id: "drumStroke", d: is }),
					tO("path", { id: "extraLine", d: "M-4 0l16 0" }),
			  ],
	});
}
let ia = "bh1o4",
	il = "bh162",
	ir = "bh162 bhth",
	ip = { text: "bh1o4", line: "bh162", dotted: "bh162 bhth" },
	iu = 46;
function ih(t) {
	let { layer: e } = t,
		{ x1: s, x2: i, y: o } = e,
		a = i - s,
		n = s,
		l = -1 * o - 2,
		r = [
			tO(
				"text",
				{ className: ip.text, x: n, y: l, children: "let ring" },
				"let ring"
			),
		];
	return (
		a > 46 &&
			(r.push(
				tO(
					"line",
					{
						className: ip.dotted,
						x1: 46 + n,
						y1: -3 + l,
						x2: a - 2 + n,
						y2: -3 + l,
					},
					"dotted"
				)
			),
			r.push(
				tO(
					"line",
					{ className: ip.line, x1: a + n, y1: 1 + l, x2: a + n, y2: -7 + l },
					"line"
				)
			)),
		tO(tR, { children: r })
	);
}
let id = "C4a2yy",
	ic = "C4a2ve",
	im = "C4a2ve C4a1op",
	iy = { text: "C4a2yy", line: "C4a2ve", dotted: "C4a2ve C4a1op" },
	i$ = 35;
function ig(t) {
	let { layer: e } = t,
		{ x1: s, x2: i, y: o } = e,
		a = s,
		n = -1 * o - 2,
		l = i - s,
		r = [tF("text", { className: iy.text, x: a, y: n, key: "pm" }, "P. M.")];
	return (
		l > 35 &&
			(r.push(
				tF("line", {
					className: iy.dotted,
					x1: 35 + a,
					y1: -3 + n,
					x2: l - 2 + a,
					y2: -3 + n,
					key: "dotted",
				})
			),
			r.push(
				tF("line", {
					className: iy.line,
					x1: l + a,
					y1: 1 + n,
					x2: l + a,
					y2: -7 + n,
					key: "line",
				})
			)),
		tF(tR, null, r)
	);
}
let ix = "q71wu",
	i_ = "q72a",
	ib = "q72a q712i",
	iv = { text: "q71wu", line: "q72a", dotted: "q72a q712i" },
	iL = 40;
function i9(t) {
	let { layer: e, effectValue: s } = t,
		{ x1: i, x2: o, y: a } = e,
		n = o - i,
		l = i,
		r = -1 * a - 2,
		p = "Harm.";
	switch (s) {
		case "artificial":
			p = "A. H.";
			break;
		case "semi":
			p = "S. H.";
			break;
		case "tapped":
			p = "T. H.";
			break;
		case "pinch":
			p = "P. H.";
	}
	let u = [
		tO("text", { className: iv.text, x: l, y: r, children: p }, "Harm."),
	];
	return (
		n > 40 &&
			(u.push(
				tO(
					"line",
					{
						className: iv.dotted,
						x1: 40 + l,
						y1: -3 + r,
						x2: n - 2 + l,
						y2: -3 + r,
					},
					"dotted"
				)
			),
			u.push(
				tO(
					"line",
					{ className: iv.line, x1: n + l, y1: 1 + r, x2: n + l, y2: -7 + r },
					"line"
				)
			)),
		tO(tR, { children: u })
	);
}
let iN = "C0x28",
	iS = { path: "C0x28" },
	ik = 5.5,
	i0 = 14,
	iT = 2,
	iw = 3;
function iE(t, e, s, i) {
	let o = `M${e} ${s + 4}l3-3.5`,
		a = `v${i ? 2 : 1}.8l-3 3.5`;
	for (let n = 0; n < t; n++)
		(o += "a.5.5 0 0 1 .7 0l2.3 2a.5.5 0 0 0 .7 0l1.8-2"),
			(a += "a.5.5 0 0 1-.7 0l-2.3-2a.5.5 0 0 0-.7 0l-1.8 2");
	return o + a + "z";
}
function iP(t) {
	let { layer: e, wide: s } = t,
		{ x1: i, x2: o, y: a } = e,
		n = o - i,
		l = iE(n > 14 ? Math.floor((n - 3) / 5.5) : 2, i, -(a + 6), s);
	return tO("path", { className: iS.path, d: l });
}
class iM extends tB {
	renderEffect = (t, e) => {
		let s = {
			layer: t.layer,
			key: `${t.effect}-${this.props.line.index}-${e}`,
			line: this.props.line,
			effectValue: t.effectValue,
		};
		switch (t.effect) {
			case "letRing":
				return tF(ih, s);
			case "palmMute":
				return tF(ig, s);
			case "harmonic":
				return tF(i9, s);
			case "vibrato":
				return tF(iP, { ...s, wide: !1 });
			case "wideVibrato":
				return tF(iP, { ...s, wide: !0 });
			default:
				return null;
		}
	};
	render() {
		return tF(tR, null, this.props.line.effects.map(this.renderEffect));
	}
}
function i3(t, e) {
	return () => t;
}
let iC = (t) => i3(0);
function iD(t) {
	let { note: e, beat: s, part: i, x: o, edited: a, platform: n } = t,
		{ intervalSize: l } = s.layout.measureLayout.lineLayout;
	if (!E(e) && (!a || (a && e.bogus))) return null;
	let r = `translate(${o}, 0)`;
	if (s.rest) {
		if (s.layout.usedStrings || (0 !== s.voice && s.layout.usedRest))
			return null;
		let p = P[`rest${s.voice}`],
			u = tO(
				"use",
				{ className: p, xlinkHref: `#rest${s.type}`, transform: r },
				"rest"
			);
		if (s.dotted) {
			let h = tO(
				"use",
				{ className: p, xlinkHref: "#dot", transform: r },
				"dot"
			);
			return tO(tR, { children: [u, h] });
		}
		return u;
	}
	if (i.usedDrums && i.isDrumStdOn) {
		let d = P[`drums${s.voice}`],
			c = `translate(${o}, ${0.5 + l * e.string})`,
			m = e.orientation ? c : c + " translate(-10, 0)";
		return tO(tR, {
			children: [
				(e.string <= -1 || e.string >= 5) &&
					tO(M, {
						noteString: e.string,
						className: C.strings,
						noteTransform: m,
						intervalSize: l,
					}),
				1 !== s.type &&
					tO("path", {
						className: P[`stick${s.voice}`],
						transform: c,
						d: D(e.fret, e.string, l),
					}),
				(e.tie || e.ghost) &&
					tO("text", { x: o - 6, y: l * e.string + iC()(n) + 5 }, "("),
				tO(X, { fret: e.fret, className: d, transform: m }),
				(e.tie || e.ghost) &&
					tO("text", { x: o + 11, y: l * e.string + iC()(n) + 5 }, ")"),
			],
		});
	}
	let y = "",
		f = 0,
		$ = i.usedDrums;
	if ($) {
		let g = i.usedDrums.get(e.fret);
		g && ((y = g.name || "*"), (f = g.string || 0));
	} else (y = e.dead ? "X" : e.fret.toString()), (f = e.string);
	let x = P[`${$ ? "vDrum" : "voice"}${s.voice}`];
	a && (x = `${x} ${P.edited}`);
	let _ = {
			className: x,
			x: o,
			y: l * f + iC()(n),
			children: e.tie || e.ghost ? `(${y})` : y,
			style: {},
		},
		b = tO("text", _, "text");
	if (e.harmonic) {
		let v = tO(
			"path",
			{
				className: P.harmonic,
				transform: `translate(${o - 17}, ${-3.5 + l * f} )`,
				d: "M 0,3.5 L 3.5,0 7,3.5 3.5,7 Z",
			},
			"harmonic"
		);
		return tO(tR, { children: [v, b] });
	}
	return b;
}
let iX = "B642k5",
	i2 = { slur: "B642k5" };
function iI(t, e, s, i, o, a) {
	let n = e ? A(e, B) : 0,
		l = o - n - (s ? A(s, B) : 0),
		r = Math.min(Math.floor(l / 3), 10),
		p = Math.max(a - 4, 3),
		u = p - 1;
	return `M${n + t} ${a * i - 7}c${r}-${p} ${l - r}-${p} ${l} 0c-${r}-${u}-${
		l - r
	}-${u}-${l} 0z`;
}
function i1(t) {
	let { x: e, start: s, end: i, slicingMode: o } = t;
	if (i) {
		let a = I(i).beat,
			n = z(i).beat,
			l = z(i).note;
		if (n.layout && a.layout) {
			let r = o.getTieSlurPathLength(a, n, !0),
				{ intervalSize: p } = a.layout.measureLayout.lineLayout;
			return tO("path", {
				className: i2.slur,
				d: iI(e - r, null, l, l.string, r, p),
			});
		}
	} else if (s) {
		let u = I(s).beat,
			h = z(s).beat,
			d = I(s).note,
			c = z(s).note;
		if (h.layout && u.layout) {
			let m = o.areBeatsInSameSlice(u, h),
				y = o.getTieSlurPathLength(u, h, !1),
				{ intervalSize: f } = u.layout.measureLayout.lineLayout;
			return tO("path", {
				className: i2.slur,
				d: iI(e, d, m ? c : null, d.string, y, f),
			});
		}
	}
	return null;
}
let iz = "Bbl9p",
	iA = { tie: "Bbl9p" };
function iB(t, e, s, i, o, a) {
	let n = e ? A(e, F) : 0,
		l = o - n - (s ? A(s, F) : 0),
		r = Math.min(Math.floor(l / 3), 10),
		p = Math.max(a - 5, 3),
		u = p - 1;
	return `M${n + t} ${a * i + 7}c${r} ${p} ${l - r} ${p} ${l} 0c-${r} ${u}-${
		l - r
	} ${u}-${l} 0z`;
}
function iF(t) {
	let { x: e, start: s, end: i, slicingMode: o } = t;
	if (i) {
		let a = I(i).beat,
			n = z(i).beat,
			l = z(i).note;
		if (n.layout && a.layout) {
			let r = o.getTieSlurPathLength(a, n, !0),
				p = l.string,
				{ intervalSize: u } = a.layout.measureLayout.lineLayout;
			return tO("path", { className: iA.tie, d: iB(e - r, null, l, p, r, u) });
		}
	}
	if (s) {
		let h = I(s).beat,
			d = z(s).beat,
			c = I(s).note,
			m = z(s).note;
		if (d.layout && h.layout) {
			let y = o.areBeatsInSameSlice(h, d),
				f = o.getTieSlurPathLength(h, d, !1),
				{ intervalSize: $ } = h.layout.measureLayout.lineLayout,
				g = c.string;
			return tO("path", {
				className: iA.tie,
				d: iB(e, c, y ? m : null, g, f, $),
			});
		}
	}
	return null;
}
function iR(t, e) {
	if ((t.x1 === t.x2 && t.y1 === t.y2) || (e.x1 === e.x2 && e.y1 === e.y2))
		return null;
	let s = (e.y2 - e.y1) * (t.x2 - t.x1) - (e.x2 - e.x1) * (t.y2 - t.y1);
	if (0 === s) return null;
	let i = ((e.x2 - e.x1) * (t.y1 - e.y1) - (e.y2 - e.y1) * (t.x1 - e.x1)) / s,
		o = ((t.x2 - t.x1) * (t.y1 - e.y1) - (t.y2 - t.y1) * (t.x1 - e.x1)) / s;
	if (i < 0 || i > 1 || o < 0 || o > 1) return null;
	let a = t.x1 + i * (t.x2 - t.x1),
		n = t.y1 + i * (t.y2 - t.y1);
	return { x: a, y: n };
}
function iV(t, e, s) {
	let i = iR(t, { x1: e, y1: 1e3, x2: e, y2: -1e3 }),
		o = iR(t, { x1: s, y1: 1e3, x2: s, y2: -1e3 });
	return {
		x1: i ? i.x : t.x1,
		y1: i ? i.y : t.y1,
		x2: o ? o.x : t.x2,
		y2: o ? o.y : t.y2,
	};
}
let iO = "zy1tz",
	i5 = { slide: "zy1tz" };
function i4(t) {
	let { x: e, cfx: s, note: i } = t,
		{ intervalSize: o } = i.beat.layout.measureLayout.lineLayout,
		a = I(s).beat,
		n = z(s).beat;
	if (!n.layout || !a.layout) return null;
	let l = I(s).note,
		r = z(s).note,
		p = l.string,
		u = l.fret >= r.fret ? -2 : 2,
		h = R(a, i.beat),
		d = R(a, a),
		c = R(a, n),
		m = {
			x1: e + d - h + A(l, V),
			y1: o * p + u,
			x2: e + c - h - A(r, V),
			y2: o * p - u,
		},
		y = iV(m, U(i.beat.layout), O(i.beat.layout));
	return tO("line", { className: i5.slide, ...y });
}
let iU = "Bxm1ag",
	iH = { arrow: "Bxm1ag" };
function i6(t) {
	let { x: e, y: s, up: i } = t;
	return tO("path", {
		className: iH.arrow,
		d: `M ${e},${s} l 2,${i ? 5 : -5} -4,0 2,${i ? -5 : 5}`,
	});
}
let iK = "C9k1hh",
	iW = "C9k17",
	iY = { up: "C9k1hh", down: "C9k17" },
	iq = ["\xbc", "\xbd", "\xbe"],
	i7 = i3(4),
	iQ = i3(11);
function i8(t) {
	if (100 === t) return "full";
	if (t) {
		let e = "",
			s = Math.floor(t / 100);
		s && (e += s);
		let i = t % 100;
		return i >= 25 && (e += iq[Math.floor(i / 25) - 1]), e;
	}
	return "";
}
function iG(t) {
	let { x: e, y: s, up: i, tone: o, platform: a } = t;
	return tO("text", {
		className: i ? iY.up : iY.down,
		x: e,
		y: i ? s - i7(a) : s + iQ(a),
		children: i8(o),
	});
}
let ij = "Cs020",
	iZ = "Cs04d",
	iJ = "Cs04d Cs0dp",
	ot = { prebend: "Cs020", path: "Cs04d", hold: "Cs04d Cs0dp" };
function oe(t, e, s, i, o, a) {
	return [
		tO(
			"line",
			{ className: ot.prebend, x1: s, y1: i + W, x2: s, y2: o },
			`prebend-${t}`
		),
		tO(i6, { x: s, y: o, up: !0 }, `arrow-${t}`),
		tO(iG, { tone: e, x: s, y: o, up: !0, platform: a }, `y-${t}`),
	];
}
function os(t, e, s, i, o, a) {
	return e <= 0
		? null
		: [
				tO(
					"line",
					{ className: ot.hold, x1: s, y1: i, x2: o, y2: a },
					`hold-${t}`
				),
		  ];
}
function oi(t, e) {
	if (!t) return !1;
	let s = I(t).note,
		i = s.bend;
	if (!i) return !1;
	let o = i.points,
		a = o.length;
	return !(a < 1) && o[a - 1].tone === e;
}
function oo(t) {
	if (!t) return !1;
	let e = I(t).note,
		s = e.bend;
	if (!s) return !1;
	let i = s.points,
		o = i.length;
	if (o < 2) return !1;
	let a = i[o - 2].tone,
		n = i[o - 1].tone;
	return n === a;
}
function oa(t, e, s, i, o, a, n, l, r, p) {
	let u = r < n,
		h = e.prevNoteOnString,
		d = h && !!h.bendEnd,
		c = h && (!!h.bendStart || !!h.bendPart || !!h.bendEnd),
		m = h && oo(h.bendEnd) && oi(h.bendEnd, 0),
		y = e.tie && d && !m && oi(h.bendEnd, s) && 0 !== s,
		f = o !== a || 0 !== s || (y && c) ? 0 : A(e, K),
		$ = [
			tO(
				"path",
				{
					className: ot.path,
					d: `M${a + f},${n}Q${l},${n} ${l},${u ? r + 4 : r - 4}`,
				},
				`bend-${t}`
			),
			tO(i6, { x: l, y: r, up: u }, `arrow-${t}`),
		];
	return (
		0 !== i &&
			$.push(tO(iG, { tone: i, x: l, y: r, up: u, platform: p }, `y-${t}`)),
		$
	);
}
function on(t, e, s, i, o) {
	return {
		elements: e ? [...t.elements, e] : t.elements,
		prevTone: s,
		prevX: i,
		prevY: o,
	};
}
function ol(t, e, s, i, o) {
	let a = H + i * t.string;
	return function (i, n, l) {
		let { tone: r, position: p } = n,
			u = 0 === r ? a : H - r / Y;
		if (0 === l) {
			if (!t.tie && 0 !== r) {
				let h = oe(l, r, e, a, u, o);
				return on(i, h, r, e, u);
			}
			return on(i, null, r, e, 0 !== r ? u : a);
		}
		let { prevTone: d, prevX: c, prevY: m } = i,
			y = (s * p) / 60 + e;
		if (r === d) {
			let f = os(l, r, c, u, y, u);
			return on(i, f, r, y, u);
		}
		let $ = oa(l, t, d, r, e, c, m, y, u, o);
		return on(i, $, r, y, u);
	};
}
function or(t) {
	let { cfx: e, note: s, slicingMode: i, x: o, platform: a } = t,
		n = I(e).note,
		l = n.bend;
	if (!l) return null;
	let { x1: r, x2: p } = i.getBendCoordinates(e, s),
		u = s.beat.layout.measureLayout.lineLayout.intervalSize,
		{ elements: h } = l.points.reduce(ol(n, r + o, p - r, u, a), {
			elements: [],
			prevTone: 0,
			prevX: 0,
			prevY: 0,
		});
	return tO(tR, { children: h });
}
let op = "ls209",
	ou = { lyrics: "ls209" };
function oh(t) {
	let { lyrics: e, x: s } = t,
		i = e.layer;
	if (i) {
		let o = q(e) + s + i.diff;
		return tO("text", {
			className: ou.lyrics,
			x: o,
			y: i.y + i.height,
			children: e.text,
		});
	}
	return null;
}
let od = 15;
function oc(t) {
	let { note: e, x: s, type: i } = t,
		{ intervalSize: o } = e.beat.layout.measureLayout.lineLayout,
		a = e.string,
		n = "left" === i ? -1 : 1,
		l = "upwards" === e.rightSlide ? 1 : -1;
	"left" === i && (l = "above" === e.leftSlide ? 1 : -1);
	let r = A(e, V);
	return tO("line", {
		className: i5.slide,
		x1: n * r + s,
		y1: o * a + 2 * l,
		x2: n * (r + 15) + s,
		y2: o * a - 2 * l,
	});
}
let om = "Cge206",
	oy = "Cgen4",
	of = "Cge2e0",
	o$ = { note: "Cge206", correction: "Cgen4", background: "Cge2e0" };
function og(t) {
	let { fret: e, x: s, string: i, originalFret: o, intervalSize: a } = t;
	if ("" === o) {
		let n = e.length >= 2 ? 11.5 : 7.5;
		return tO(tR, {
			children: [
				tO("line", {
					className: o$.background,
					x1: s - n,
					y1: a * i,
					x2: s + n,
					y2: a * i,
				}),
				tO("text", {
					className: o$.note,
					x: s,
					y: a * i,
					children: e,
					"data-fret": e,
				}),
			],
		});
	}
	let l = 10;
	return (
		e.length >= 2 && (l += 3),
		o.length >= 2 && (l += 4),
		tO(tR, {
			children: [
				"" !== e &&
					tO("text", {
						className: o$.note,
						x: s + l,
						y: a * i - 4,
						children: e,
						"data-fret": e,
					}),
				tO("line", {
					className: o$.correction,
					x1: s - 4,
					y1: a * i - 7,
					x2: s + 4,
					y2: a * i + 4,
				}),
			],
		})
	);
}
let ox = "ek2k6",
	o_ = "ek2wd",
	ob = "ek188",
	ov = "ek188 ekfs",
	oL = "ek2i4",
	o9 = "ek2i4 ek2z7",
	oN = "ek2zh",
	oS = "ek2ic",
	ok = "ekka",
	o0 = "ek2wg",
	oT = {
		chord: "ek2k6",
		hat: "ek2wd",
		tapping: "ek188",
		tappingSecondVoice: "ek188 ekfs",
		accentuated: "ek2i4",
		accentuatedSecondVoice: "ek2i4 ek2z7",
		staccato: "ek2zh",
		staccatoSecondVoice: "ek2ic",
		arrowLine: "ekka",
		arrowPolygon: "ek2wg",
	},
	ow = 30,
	oE = 4;
function oP(t) {
	let { up: e, min: s, max: i, xoffset: o, intervalSize: a } = t,
		n = (i - s + 1) * a,
		l = e ? 4 : n - 4,
		r = e ? 0 : n,
		p = (s - 0.5) * a,
		u = o - 15;
	return tO(tR, {
		children: [
			tO(
				"line",
				{
					className: oT.arrowLine,
					x1: 4 + u,
					y1: p,
					x2: 4 + u,
					y2: (i + 0.5) * a,
				},
				"line"
			),
			tO(
				"polygon",
				{
					className: oT.arrowPolygon,
					points: `${4 + u},${r + p} ${0 + u},${l + p} ${8 + u},${l + p} ${
						4 + u
					},${r + p}`,
				},
				"polygon"
			),
		],
	});
}
function oM(t) {
	let e = [],
		{
			layout: s,
			part: i,
			measure: o,
			slicingMode: a,
			measureEditorData: n,
			platform: l,
			x: r,
		} = t,
		p = r + s.x;
	for (let u of s.beats)
		if (u.lyrics)
			for (let h of u.lyrics)
				e.push(tO(oh, { lyrics: h, x: p }, `lyrics${u.index}`));
		else {
			u.text &&
				e.push(
					tO(sV, { text: u.text, layout: s, xoffset: p }, `text${u.index}`)
				);
			let d = u.tappingWithLayer;
			d &&
				d.layer &&
				e.push(
					tO(
						"text",
						{
							className: oT.tapping,
							y: -1 * d.layer.y,
							x: Math.max(-1 * Math.floor(d.width / 2) + p, -15),
							dy: "-0.25em",
							children: d.text,
						},
						`tap${u.index}`
					)
				);
			let c = u.chord;
			c &&
				c.layer &&
				e.push(
					tO(
						"text",
						{
							className: oT.chord,
							y: -1 * c.layer.y,
							x: Math.max(-1 * Math.floor(c.width / 2) + p, -15),
							dy: "-0.25em",
							children: c.text,
						},
						`chord${u.index}`
					)
				);
			let m = Number.MAX_VALUE,
				y = 0;
			if (!o.rest) {
				if (i.usedDrums) {
					let f = u.notes
						.filter((t) => !t.bogus)
						.map((t) => ({ string: Math.floor(2 * t.string), note: t }));
					f.sort((t, e) => t.string - e.string);
					let $ = null;
					for (let g of f)
						(g.note.orientation =
							!($ && 1 >= Math.abs(g.string - $.string)) ||
							!$.note.orientation),
							($ = g);
				}
				u.hat &&
					i.isDrumStdOn &&
					e.push(
						tO(
							"path",
							{ className: oT.hat, d: `M${p - 2}${-u.hat.layer.y}h8l5 -5` },
							`hat${u.index}`
						)
					);
				let x =
						n && n.find((t) => t.beatNum === u.index && t.voice === u.voice),
					_ = x && x.editedNotes;
				for (let b of (u.staccato &&
					u.staccato.layer.visible &&
					e.push(
						tO(
							"circle",
							{
								className: u.staccato.layer.voice
									? oT.staccatoSecondVoice
									: oT.staccato,
								cx: p,
								cy: -u.staccato.layer.y - 5,
								r: 2,
							},
							`st${u.index}`
						)
					),
				u.accentuated &&
					u.accentuated.layer.visible &&
					e.push(
						tO(
							"path",
							{
								className: u.accentuated.layer.voice
									? oT.accentuatedSecondVoice
									: oT.accentuated,
								d: `m${p - 5}${-u.accentuated.layer.y - 2}l9-3l-9-3`,
							},
							`acc${u.index}`
						)
					),
				u.heavyAccentuated &&
					u.heavyAccentuated.layer.visible &&
					e.push(
						tO(
							"path",
							{
								className: u.heavyAccentuated.layer.voice
									? oT.accentuatedSecondVoice
									: oT.accentuated,
								d: `m${p - 4}${
									-u.heavyAccentuated.layer.y - 2
								}l3-8h1l3,7.5h-1l-3-7.5m-0.5,1l3,7`,
							},
							`hacc${u.index}`
						)
					),
				u.notes)) {
					(u.upStroke || u.downStroke) &&
						!b.tie &&
						((m = Math.min(m, b.string)), (y = Math.max(y, b.string))),
						e.push(
							tO(
								iD,
								{
									note: b,
									beat: u,
									part: i,
									x: p,
									platform: l,
									edited: _ && !!_.find((t) => t.string === b.string),
								},
								`note${u.index}-${b.index}-voice${u.voice}`
							)
						),
						b.tieStart &&
							e.push(
								tO(
									iF,
									{ start: b.tieStart, slicingMode: a, x: p },
									`tie${u.index}-${b.index}`
								)
							),
						b.tieEnd &&
							Q(b.tieEnd) &&
							e.push(
								tO(
									iF,
									{ end: b.tieEnd, slicingMode: a, x: p },
									`tieEnd${u.index}-${b.index}`
								)
							),
						b.slurStart &&
							e.push(
								tO(
									i1,
									{ start: b.slurStart, slicingMode: a, x: p },
									`slur${u.index}-${b.index}`
								)
							),
						b.slurEnd &&
							Q(b.slurEnd) &&
							e.push(
								tO(
									i1,
									{ end: b.slurEnd, slicingMode: a, x: p },
									`slurEnd${u.index}-${b.index}`
								)
							),
						b.leftSlide &&
							e.push(
								tO(oc, {
									note: b,
									type: "left",
									key: `slideShortLeft${u.index}-${b.index}`,
									x: p,
								})
							),
						b.rightSlide &&
							"shift" !== b.rightSlide &&
							"legato" !== b.rightSlide &&
							e.push(
								tO(oc, {
									note: b,
									type: "right",
									key: `slideShortRight${u.index}-${b.index}`,
									x: p,
								})
							),
						b.slideStart &&
							e.push(
								tO(
									i4,
									{ note: b, cfx: b.slideStart, x: p },
									`slide${u.index}-${b.index}`
								)
							),
						b.slideEnd &&
							Q(b.slideEnd) &&
							e.push(
								tO(
									i4,
									{ note: b, cfx: b.slideEnd, x: p },
									`slideEnd${u.index}-${b.index}`
								)
							);
					let v = a.bendsForNote(b);
					for (let L = 0; L < v.length; L++) {
						let N = v[L];
						a.shouldDrawBendOnNote(N, b) &&
							e.push(
								tO(
									or,
									{ cfx: N, note: b, slicingMode: a, x: p, platform: l },
									`bend${u.index}-${b.index}-${L}`
								)
							);
					}
				}
				if (_) {
					let S = s.measureLayout.lineLayout.intervalSize;
					_.forEach((t) =>
						e.push(
							tO(
								og,
								{
									x: p,
									fret: t.fret,
									originalFret: t.originalFret,
									string: t.string,
									intervalSize: S,
								},
								`editedNote${u.index}-${t.string}`
							)
						)
					);
				}
				if (!i.usedDrums && (u.upStroke || u.downStroke) && m < y) {
					let k = s.measureLayout.lineLayout.intervalSize;
					e.push(
						tO(
							oP,
							{ up: !!u.upStroke, min: m, max: y, xoffset: p, intervalSize: k },
							`stroke${u.index}`
						)
					);
				}
			}
		}
	return tO(tR, { children: e });
}
let o3 = "rw256",
	oC = "rw2jc",
	oD = "rw33j",
	oX = { path: "rw256", text: "rw2jc", line: "rw33j" },
	o2 =
		"M8.8 0v23.84c0 .88-.3 1.71-.91 2.46A5.15 5.15 0 0 1 5.66 28c-.9.4-1.8.6-2.65.6a3.03 3.03 0 0 1-2.05-.65 2.43 2.43 0 0 1-.96-1.8 4 4 0 0 1 .96-2.4 7.74 7.74 0 0 1 2.29-1.81c.8-.42 1.69-.64 2.6-.64.89 0 1.64.24 2.23.7V0z",
	oI =
		"M8.82.02c.61 4.89 2.63 5.65 5.08 8.82a9.48 9.48 0 0 1 2.08 5.6c0 2-.84 4.4-2.52 7.24h-.48c1.45-3.1 2.26-5.33 2.08-7.26-.4-4.36-4.43-6.63-6.26-6.61L8.07 0l.75.02z",
	o1 = "M37 27v-1h10v1zm0 3v-1h10v1z",
	oz = "M.8 0h15v3.5H.8z",
	oA = "M8.8 0h7v3.5h-7z",
	oB = "M51 7V4h9m7 0h9v3";
function oF(t) {
	let {
		tripletFeel: { feel: e, layer: s },
		x: i,
	} = t;
	if (!s) return null;
	let { y: o } = s,
		a = "off" === e,
		n = "16th" === e;
	return tF(
		"g",
		{ transform: `translate(${i},-${o + 42})` },
		tF("path", { d: o2, transform: "translate(10,10)", className: oX.path }),
		tF("path", { d: o2, transform: "translate(25,10)", className: oX.path }),
		tF("path", { d: oz, transform: "translate(18,10)", className: oX.path }),
		n &&
			tF("path", { d: oz, transform: "translate(18,15)", className: oX.path }),
		tF("path", { d: o2, transform: "translate(48,10)", className: oX.path }),
		tF("path", { d: o2, transform: "translate(63,10)", className: oX.path }),
		(a || n) &&
			tF("path", { d: oz, transform: "translate(56,10)", className: oX.path }),
		n &&
			tF("path", {
				d: "M8.8 0h7v3.5h-7z",
				transform: "translate(56,15)",
				className: oX.path,
			}),
		"8th" === e &&
			tF("path", {
				d: "M8.82.02c.61 4.89 2.63 5.65 5.08 8.82a9.48 9.48 0 0 1 2.08 5.6c0 2-.84 4.4-2.52 7.24h-.48c1.45-3.1 2.26-5.33 2.08-7.26-.4-4.36-4.43-6.63-6.26-6.61L8.07 0l.75.02z",
				transform: "translate(63,10)",
				className: oX.path,
			}),
		!a && tF("text", { className: oX.text, x: 64, y: 0 }, 3),
		!a && tF("path", { className: oX.line, d: "M51 7V4h9m7 0h9v3" }),
		tF("path", { d: "M37 27v-1h10v1zm0 3v-1h10v1z", className: oX.path })
	);
}
let oR = "Gy73",
	oV = "Gy2no",
	oO = "Gy8f",
	o5 = "Gy1lf",
	o4 = "Gy1fk",
	oU = "Gy1ax",
	oH = "Gy4w",
	o6 = "Gybj",
	oK = {
		voice0: "Gy73",
		voice1: "Gy2no",
		voice2: "Gy8f",
		voice3: "Gy1lf",
		"voice0-tremolo": "Gy1fk",
		"voice1-tremolo": "Gy1ax",
		"voice2-tremolo": "Gy4w",
		"voice3-tremolo": "Gybj",
	},
	oW = 4,
	oY = 8;
function oq(t) {
	let { voice: e, beats: s, x: i, y: o, tremoloOffset: a } = t;
	if (e.hasSameRhythm) return null;
	let n = j + a,
		l = n / 2,
		r = "",
		p = "",
		u = 0,
		h = [],
		d = [, , , ,],
		c = !1,
		m = 0;
	for (let y of s) {
		let f = y.layout.x;
		1 !== y.type &&
			(r +=
				2 === y.type
					? `M${i + f},${o + l + 2}v${l}`
					: `M${i + f},${o + 2}v${n}`);
		let $ = 0,
			g = oY;
		if (
			(y.beamStart ? (c = !0) : y.beamStop && (c = !1), c && m < s.length - 1)
		) {
			let x = s[m + 1],
				_ = Math.min(y.type, x.type);
			for (y.tupletStop && (_ = Math.min(_, oY)); g <= _; ) {
				let b = d[$];
				b
					? (b.length += x.layout.x - y.layout.x)
					: ((b = { x: f, length: x.layout.x - y.layout.x }), (d[$] = b)),
					$++,
					(g *= 2);
			}
		}
		let v = $,
			L = $ < u || y.tupletStop || y.beamStop;
		for (; $ < u; $++, g *= 2) {
			let N = d[$];
			(d[$] = void 0),
				N && (r += `M${i + N.x},${o + n - G * $}v2h${N.length}v-2z`);
		}
		for (; g <= y.type; $++, g *= 2)
			r += `M${i + f},${o + n - G * $}v2h${L ? "-7" : "7"}v-2z`;
		if (
			(y.dotted &&
				1 !== y.type &&
				(r += `M${i + f + 4},${o + n - G * $}v2h2v-2z`),
			y.tremolo)
		)
			for (let S = 0; S < y.tremolo.type; S++)
				p += `M${i + f - 5},${o + 6 + 3 * S}l10-3z`;
		(u = v), m++;
	}
	if (r.length) {
		let k = `voice${e.index}`;
		h.push(tO("path", { className: oK[k], d: r }));
	}
	if (p.length) {
		let T = `voice${e.index}-tremolo`;
		h.push(tO("path", { className: oK[T], d: p }));
	}
	return h.length ? tO(tR, { children: h }) : null;
}
let o7 = "Bhq244",
	oQ = "Bhq1lk",
	o8 = "Bhq8x",
	oG = "Bhq1hy",
	oj = "Bhq13i",
	oZ = "Bhq2w3",
	oJ = {
		path: "Bhq244",
		text: "Bhq1lk",
		voice0: "Bhq8x",
		voice1: "Bhq1hy",
		voice2: "Bhq13i",
		voice3: "Bhq2w3",
	},
	at = i3(9);
function ae(t) {
	let {
			tuplet: e,
			voice: s,
			start: i,
			stop: o,
			platform: a,
			x: n,
			y: l,
			tremoloOffset: r,
		} = t,
		p = i.layout.x + n,
		u = o.layout.x - i.layout.x,
		h = Math.round(u / 2),
		d = e > 9 ? 8 : 5,
		c = `M 0,0 L 0,6 ${h - d},6 M ${h + d},6 L ${u},6 ${u},0`;
	l += Z - 2 + r;
	let m = `voice${s.index}`;
	return tO("g", {
		className: oJ[m],
		transform: `translate(${p},${l})`,
		children: [
			tO("text", { className: oJ.text, x: h, y: at(a), children: e }),
			tO("path", { className: oJ.path, d: c }),
		],
	});
}
let as = "Chi2a3",
	ai = "Chi2up",
	ao = { path: "Chi2a3", text: "Chi2up" };
function aa(t) {
	let { layer: e, alternateEnding: s } = t.alternateEnding;
	if (e) {
		let { x1: i, x2: o, y: a } = e,
			n = t.x;
		return tF(
			"g",
			{ transform: `translate(${n},${-1 * a - 14})` },
			tF("text", { className: ao.text, x: 4, y: "14" }, s.join(",")),
			tF("path", { className: ao.path, d: `M 1,14 L 1,0 ${o - i - 6},0` })
		);
	}
	return null;
}
let an = "kw1ty",
	al = { marker: "kw1ty" };
function ar(t) {
	let { marker: e, x: s } = t,
		i = e.layer;
	return i
		? tO("text", {
				className: al.marker,
				x: s,
				y: -1 * i.y,
				dy: "-0.25em",
				children: e.text,
		  })
		: null;
}
let ap = "Bjniz",
	au = "Bjnch",
	ah = "Bjn2ws",
	ad = "Bjnzo",
	ac = { rect: "Bjniz", dot: "Bjnch", number: "Bjn2ws", path: "Bjnzo" };
function am(t) {
	let { line: e, x: s } = t,
		{ intervalSize: i } = e.layout,
		o = (e.strings - 1) * i;
	return tF(
		"g",
		{ className: "Rep", transform: `translate(${s},0)` },
		tF("rect", { className: ac.rect, width: 4, height: o }),
		tF("path", { className: ac.path, d: `M 8,0 L 8,${o}` }),
		tF("ellipse", {
			className: ac.dot,
			cx: 13,
			cy: Math.floor(o / 3),
			rx: 2,
			ry: 2,
		}),
		tF("ellipse", {
			className: ac.dot,
			cx: 13,
			cy: Math.floor((2 * o) / 3),
			rx: 2,
			ry: 2,
		})
	);
}
function ay(t) {
	let { line: e, measureLayout: s, x: i } = t,
		{ intervalSize: o } = e.layout,
		a = (e.strings - 1) * o,
		n = s.measure.repeat;
	return tF(
		"g",
		{ transform: `translate(${s.width - 18 + i},0)` },
		n > 2 && tF("text", { className: ac.number, x: 2.5, y: -2 }, n + "x"),
		tF("rect", { className: ac.rect, x: 14, width: 4, height: a }),
		tF("path", { className: ac.path, d: `M 11,0 L 11,${a}` }),
		tF("ellipse", {
			className: ac.dot,
			cx: 6,
			cy: Math.floor(a / 3),
			rx: 2,
			ry: 2,
		}),
		tF("ellipse", {
			className: ac.dot,
			cx: 6,
			cy: Math.floor((2 * a) / 3),
			rx: 2,
			ry: 2,
		})
	);
}
let af = "Cpu2zi",
	a$ = "Cpu351",
	ag = "Cpu1y8",
	ax = "Cpujn",
	a_ = {
		number: "Cpu2zi",
		signature: "Cpu351",
		tempo: "Cpu1y8",
		tempoText: "Cpujn",
	},
	ab = i3(-8),
	av = i3(21);
function aL(t) {
	let {
			measureLayout: e,
			line: s,
			part: i,
			slicingMode: o,
			measureEditorData: a,
			platform: n,
		} = t,
		l = e.measure,
		r = e.x,
		u = e.lineLayout.intervalSize,
		h = p(l) === e,
		d = m(l) === e,
		c = [];
	if (h) {
		c.push(
			tO(
				"text",
				{ className: a_.number, x: 3 + r, y: -7.2, children: l.index + 1 },
				"number"
			)
		),
			l.repeatStart && c.push(tO(am, { line: s, x: r }, "repeatStart"));
		let y = l.tripletFeelWithLayer;
		y && c.push(tO(oF, { tripletFeel: y, x: r }, "tripletFeel"));
	}
	for (let f of (d &&
		l.repeat &&
		c.push(tO(ay, { line: s, measureLayout: e, x: r }, "repeat")),
	l.alternateEndingWithLayer &&
		c.push(
			tO(
				aa,
				{ alternateEnding: l.alternateEndingWithLayer, x: r },
				"alternateEnding"
			)
		),
	h &&
		l.markerWithLayer &&
		c.push(tO(ar, { marker: l.markerWithLayer, x: r }, "marker")),
	e.tempoLayouts.values())) {
		let { tempo: $, layer: g } = f;
		$ &&
			g &&
			c.push(
				tO(
					"g",
					{
						className: a_.tempo,
						transform: `translate(${g.x1},${-1 * g.y})`,
						children: [
							tO("use", { xlinkHref: "#tempo" }),
							tO("text", {
								className: a_.tempoText,
								y: -3,
								x: 8,
								children: `=${$.bpm}`,
							}),
						],
					},
					"tempo"
				)
			);
	}
	let x = 0;
	for (let _ of e.beatsLayouts)
		c.push(
			tO(
				oM,
				{
					layout: _,
					part: i,
					measure: l,
					slicingMode: o,
					x: r,
					measureEditorData: a,
					platform: n,
				},
				`beat${x}`
			)
		),
			x++;
	if (h && l.hasSignature) {
		let b = Math.floor((i.strings / 2) * u);
		c.push(
			tO(
				"text",
				{
					className: a_.signature,
					x: e.signatureOffset + r,
					y: b + ab(n),
					children: l.signature[0],
				},
				"t1"
			)
		),
			c.push(
				tO(
					"text",
					{
						className: a_.signature,
						x: e.signatureOffset + r,
						y: b + av(n),
						children: l.signature[1],
					},
					"t2"
				)
			);
	}
	if (l.rhythmLines) {
		let v = 0,
			L = u * s.strings;
		for (let N of l.voices)
			if (!(N.hasSameRhythm || N.rest)) {
				let S = e.beatsLayouts
						.map((t) => t.beats.find((t) => t.voice == N.index))
						.filter(Boolean),
					k = s.rhythmEffects.tremolo.get(N.index) || !1,
					T = s.rhythmEffects.tremolo.get(N.index) || !1,
					w = S.some((t) => t.type > 8),
					E = k && w ? J : 0,
					P = T ? tt : 0,
					M = E + P,
					C = L + N.index * (Z + M);
				c.push(
					tO(
						oq,
						{ voice: N, beats: S, x: r, y: C, tremoloOffset: E },
						`rhythm${N.index}`
					)
				),
					(L = C);
				let D = 0,
					X = null;
				for (let I of S)
					I &&
						(I.tupletStart && ((D = I.tuplet), (X = I)),
						D &&
							X &&
							I.tupletStop &&
							(c.push(
								tO(
									ae,
									{
										tuplet: D,
										start: X,
										stop: I,
										voice: N,
										platform: n,
										x: r,
										y: C,
										tremoloOffset: E,
									},
									`tuplet${v}`
								)
							),
							(D = 0),
							v++));
			}
	}
	return tO(tR, { children: c });
}
let a9 = (t, e) => t + `H${e.x}m${e.w},0`;
function aN(t) {
	let { line: e, hasTuning: s, slicingMode: i, part: o } = t,
		{ intervalSize: a } = e.layout,
		n = e.spaces,
		l = a * (e.strings - 1),
		r = "",
		u = e.layout.measureLayouts;
	for (let h = s ? 1 : 0; h < u.length; h++) {
		let d = u[h];
		p(d.measure) === d && (r += `M${d.x},0v${l}`);
	}
	let c = u[0].x,
		y = i.stringLineMaxX(e);
	if (o.usedDrums && o.isDrumStdOn)
		for (let f = 0; f < e.strings; f++) r += `M${c},${a * f} H${y}`;
	else
		for (let $ = 0; $ < e.strings; $++)
			r += `M${c},${a * $}` + n[$].reduce(a9, "") + `H${y}`;
	let g = e.layout.measureLayouts[e.layout.measureLayouts.length - 1];
	return (
		m(g.measure) === g && (r += `M${y},0v${l}`),
		tO("path", { className: C.strings, d: r })
	);
}
let aS = "D38xz",
	ak = { tuning: "D38xz" },
	a0 = i3(5);
function aT(t) {
	let { tuning: e, platform: s, intervalSize: i } = t;
	return e
		? tF(
				tR,
				null,
				te(e, !1).map((t, e) =>
					tF(
						"text",
						{ x: a0(s), y: 1 + e * i, key: e, className: ak.tuning },
						t
					)
				)
		  )
		: null;
}
let aw = "Cw81bf",
	aE = { line: "Cw81bf" };
function aP(t) {
	let {
			inlineDefs: e,
			line: s,
			noPadding: i,
			part: o,
			tuning: a,
			slicingMode: n,
			lazy: l,
			tabEditorData: r,
			platform: p,
		} = t,
		u = n.expectedSliceWidth(s.layout.unscaledWidth) + (i ? 0 : b),
		{ intervalSize: h } = s.layout,
		d = "http://www.w3.org/2000/svg",
		c = s.layout.height,
		m = `${i ? 0 : -b / 2} -${s.layout.layers.height} ${u} ${c}`;
	if (!p) {
		let [y, f] = t5(s.index < 5),
			$ = tV();
		if (
			(t4(() => {
				if (!y) {
					if (l)
						try {
							let t = new IntersectionObserver(
								(t) => {
									t[0].isIntersecting && f(!0);
								},
								{ rootMargin: "0px 0px 500px 0px" }
							);
							return $.current && t.observe($.current), () => t.disconnect();
						} catch (e) {
							requestAnimationFrame(() => f(!0));
						}
					else ts(() => f(!0), 50);
				}
			}, [y, l]),
			!y)
		)
			return tO(
				"svg",
				{
					xmlns: d,
					version: "1.1",
					ref: $,
					width: u,
					viewBox: m,
					className: aE.line,
				},
				"line-stub" + s.index
			);
	}
	let g = s.capo,
		x = !!a;
	return tO(
		"svg",
		{
			xmlns: d,
			version: "1.1",
			width: u,
			viewBox: m,
			className: aE.line,
			children: [
				e && tO(io, { part: o, line: s }),
				x && tO(aT, { tuning: a, platform: p, intervalSize: h }),
				!!g && !p && tO(tY, g),
				tO(aN, { line: s, hasTuning: x, slicingMode: n, part: o }),
				...s.hangingText.map((t, e) =>
					tO(sV, { text: t, layout: void 0, xoffset: 0 }, e.toString())
				),
				tO(iM, { line: s }),
				...s.layout.measureLayouts.map((t) =>
					tO(
						aL,
						{
							measureLayout: t,
							line: s,
							part: o,
							slicingMode: n,
							measureEditorData:
								r && r[t.measure.index] && r[t.measure.index].beats,
							platform: p,
						},
						t.measure.index.toString() + t.x.toString()
					)
				),
			],
		},
		"line" + s.index
	);
}
let aM = tU((t) => {
		let {
			lines: e,
			part: s,
			tuning: i,
			slicingMode: o,
			lazy: a,
			tabEditorData: n,
			platform: l,
		} = t;
		return tO(tR, {
			children: e.map((t) =>
				tO(
					aP,
					{
						line: t,
						part: s,
						tuning: 0 === t.index && i,
						inlineDefs: 0 === t.index,
						slicingMode: o,
						tabEditorData: n,
						lazy: a,
						platform: l,
					},
					t.index.toString()
				)
			),
		});
	}),
	a3 = b / 2,
	aC = 0,
	aD = 7,
	aX = 48,
	a2 = 48,
	aI = { animationStyles: sA };
function a1(t, e) {
	return t ? Math.abs(e.x - t.x) + Math.abs(e.y - t.y) : 0;
}
function az(t) {
	return (e) => e === t;
}
let aA = "ontouchstart" in window;
function aB(t, e) {
	let { position: s } = t;
	ta(s, e.position) || e.dispatch("player/moveCursor", s);
}
class aF extends tB {
	constructor(t) {
		super(t),
			(this.lastMeasureIndex = void 0),
			(this.readyHack = !0),
			(this.state = {
				mirrorPosition: t.position,
				position: t.position,
				loopStartLayout: null,
				loopStartX: 0,
				loopEndLayout: null,
				loopEndX: 0,
				deltaLeftX: 0,
				deltaRightX: 0,
				isPitchshiftToStandard: !1,
			}),
			(this.lastTouch = null),
			(this.activeLoopHandle = void 0),
			(this.onTouchMoveTickId = void 0),
			(this.windowScroller = new sl()),
			(this.scrollToCursor = T(t.device.os)
				? () => setTimeout(this.scrollToCursorBase, 250)
				: this.scrollToCursorBase);
	}
	componentDidMount() {
		if (
			(this.props.print ||
				(0 === this.props.position.loopStart &&
					0 === this.props.position.loopEnd) ||
				aB(this.state, this.props),
			ti)
		) {
			let t = this.wrap;
			t &&
				(t.addEventListener(
					"touchstart",
					this.onTouchStart,
					!!window.PASSIVE && { passive: !1 }
				),
				t.addEventListener("mousedown", this.onTouchStart));
		}
		window.addEventListener("resize", this.viewportResizeDebounced),
			this.viewportResize().then(this.scrollToCursor);
	}
	scrollToCursorBase = () => {
		if (this.wrap) {
			let t = s(
				this.props.part,
				this.props.store.get().player.audio.getCursor(),
				"left"
			);
			t && this.ensureLineVisibility(null, t.measureLayout.lineLayout, !1);
		}
	};
	componentDidUpdate(t) {
		(0 !== this.props.position.loopStart ||
			0 !== this.props.position.loopEnd) &&
			aB(this.state, this.props),
			(t.lines !== this.props.lines ||
				t.scale !== this.props.scale ||
				t.plusAccess !== this.props.plusAccess) &&
				this.viewportResize().then(this.scrollToCursor);
	}
	componentWillUnmount() {
		let t = this.wrap;
		t &&
			(t.removeEventListener("touchstart", this.onTouchStart),
			t.removeEventListener("mousedown", this.onTouchStart)),
			window.removeEventListener("resize", this.viewportResizeDebounced),
			this.windowScroller.unmount();
	}
	viewportResize = async () => {
		let t = this.wrap;
		if (t) {
			let e = await sB(t);
			(this.pageX =
				e.left +
				a3 +
				(window.visualViewport
					? window.visualViewport.pageLeft
					: document.body.scrollLeft + document.documentElement.scrollLeft)),
				(this.pageY =
					e.top +
					0 +
					(window.visualViewport
						? window.visualViewport.pageTop
						: document.body.scrollTop + document.documentElement.scrollTop)),
				(this.clientHeight = window.visualViewport
					? window.visualViewport.height
					: document.documentElement.clientHeight);
		}
	};
	viewportResizeDebounced = to(this.viewportResize, 100);
	static getDerivedStateFromProps(t, e) {
		let i = e.position;
		ta(e.mirrorPosition, t.position) || (i = t.position);
		let o = e.loopStartLayout,
			r = e.loopStartX,
			p = !1,
			u = e.loopEndLayout,
			h = e.loopEndX,
			d = !1,
			{ tuning: c, instrumentId: m } = t.part,
			y = c && a(m, c),
			f = !1;
		return (
			(n(m) || l(m)) && y && 0 !== y.pitch && (f = !0),
			0 !== i.loopStart || 0 !== i.loopEnd
				? ((o && -1 !== o.occurrences.findIndex(az(i.loopStart))) ||
						((r = (o = s(t.part, i.loopStart, "left")).absoluteLoopLeftX),
						(p = !0)),
				  (u && -1 !== u.occurrences.findIndex(az(i.loopEnd - u.duration))) ||
						((h = (u = s(t.part, i.loopEnd, "right")).absoluteLoopRightX),
						(d = !0)),
				  (p || d) && (i = tn(t.part, i.cursor, o, u)))
				: ((o = null), (r = 0), (u = null), (h = 0)),
			{
				mirrorPosition: t.position,
				position: i,
				loopStartLayout: o,
				loopStartX: r,
				loopEndLayout: u,
				loopEndX: h,
				isPitchshiftToStandard: f,
			}
		);
	}
	onTouchStart = (t) => {
		if (aA && "mousedown" === t.type) return;
		if ("tab_editor" === this.props.layer) {
			this.handleTabEditor(t);
			return;
		}
		let e = t.target && t.target.getAttribute("data-annot-num"),
			s =
				t.target.parentElement &&
				t.target.parentElement.getAttribute("data-tab-button");
		if (null != s || null != e) return;
		if (this.props.layer) {
			this.props.dispatch("layer/hide"),
				t.preventDefault(),
				t.stopPropagation();
			return;
		}
		let i =
				t.target.parentElement &&
				t.target.parentElement.getAttribute("data-loop-handle"),
			o = this.getTouchPoint(t);
		if (((this.lastTouch = o), "left" === i || "right" === i)) {
			if (
				(t.preventDefault(),
				t.stopPropagation(),
				this.props.dispatch("player/changeLoop", !0),
				(this.activeLoopHandle = i),
				"left" === this.activeLoopHandle
					? this.setState((t) => ({ deltaLeftX: t.loopStartX - o.x }))
					: this.setState((t) => ({ deltaRightX: t.loopEndX - o.x })),
				!this.onTouchMoveTickId)
			) {
				let a = window.requestAnimationFrame;
				this.onTouchMoveTickId = a(this.onTouchMoveTick);
			}
			document.addEventListener(
				"touchmove",
				this.onTouchMove,
				!!window.PASSIVE && { passive: !1 }
			),
				document.addEventListener("mousemove", this.onTouchMove);
		}
		document.addEventListener("touchend", this.onTouchEnd),
			document.addEventListener("mouseup", this.onTouchEnd);
	};
	onTouchMove = (t) => {
		t.preventDefault(),
			t.stopPropagation(),
			(this.lastTouch = this.getTouchPoint(t));
	};
	limitX(t) {
		return Math.min(Math.max(t, 0), this.props.width - 1);
	}
	ensureLineVisibility = (t, e, s) =>
		ts(() => {
			let { showPitchshiftLayer: i } = this.props,
				o = window.visualViewport
					? window.visualViewport.pageTop
					: window.scrollY,
				a = this.props.scale,
				n = tl(),
				l = n ? 48 : 0,
				r = n ? 48 : 0,
				{ pageY: p, clientHeight: u } = this,
				h = o - p + l,
				d = o - p + u - r,
				c = d - h,
				m = e.line.index,
				y = this.props.lines;
			if (t && (t.maxY * a < h || d < t.y * a)) return;
			let f = o,
				{ loopStartLayout: $, loopEndLayout: g } = this.state;
			if (i) f = 0;
			else if ($ && g) {
				let x = e.y * a - h;
				if (x < 0) f = o + x;
				else if (
					((x = d - e.maxY * a) < 0 && (f = o - x),
					m < g.measureLayout.lineLayout.line.index)
				) {
					let _ = y[m + 1];
					if (_) {
						let b = e.y,
							v = _.layout.maxY;
						(v - b) * a < c && (x = d - v * a) < 0 && (f = o - x);
					}
				}
			} else if (0 === m) f = 0;
			else if (((f = e.y * a + p - l), m < y.length - 1)) {
				let L = y[m - 1],
					N = y[m + 1];
				if (L && N) {
					let S = L.layout.y,
						k = N.layout.maxY;
					(k - S) * a < c && (f = S * a + p - l);
				}
			}
			f !== o && this.windowScroller.scroll(f, s, o);
		});
	onTouchMoveTick = () => {
		this.lastTouch &&
			this.setState((t) => {
				let e = this.lastTouch;
				if (!e) throw Error("Wrong state during touch move");
				let s = {
					position: t.position,
					loopStartX: t.loopStartX,
					loopStartLayout: t.loopStartLayout,
					loopEndX: t.loopEndX,
					loopEndLayout: t.loopEndLayout,
				};
				{
					let { loopStartLayout: i, loopEndLayout: o } = s;
					if (!i || !o) throw Error("Wrong loop state");
					if ("left" === this.activeLoopHandle) {
						let a = { x: this.limitX(e.x + t.deltaLeftX), y: e.y },
							n = tr(this.props.lines, a, "left"),
							l = tp(n),
							r = tp(o);
						l < r || (l === r && a.x <= o.absoluteLoopLeftX)
							? ((s.loopStartLayout = n), (s.loopStartX = a.x))
							: ((s.loopStartLayout = s.loopEndLayout),
							  (s.loopStartX = i.absoluteLoopLeftX));
					} else {
						let p = { x: this.limitX(e.x + t.deltaRightX), y: e.y },
							u = tr(this.props.lines, p, "right"),
							h = tp(u),
							d = tp(i);
						h > d || (h === d && p.x >= i.absoluteLoopRightX)
							? ((s.loopEndLayout = u), (s.loopEndX = p.x))
							: ((s.loopEndLayout = s.loopStartLayout),
							  (s.loopEndX = o.absoluteLoopRightX));
					}
				}
				{
					let { loopStartLayout: c, loopEndLayout: m } = s;
					if (c && m && (c !== t.loopStartLayout || m !== t.loopEndLayout)) {
						let y = tn(
								this.props.part,
								s.position.cursor,
								c,
								m,
								this.activeLoopHandle
							),
							f = s.position;
						(f.cursor !== y.cursor ||
							f.loopStart !== y.loopStart ||
							f.loopEnd !== y.loopEnd) &&
							(s.position = y);
					}
				}
				return (this.lastTouch = null), s;
			});
		let t = window.requestAnimationFrame;
		this.onTouchMoveTickId = t(this.onTouchMoveTick);
	};
	onTouchEnd = (t) => {
		if (this.activeLoopHandle)
			document.removeEventListener("touchmove", this.onTouchMove),
				document.removeEventListener("mousemove", this.onTouchMove),
				t.preventDefault(),
				this.onTouchMoveTickId && cancelAnimationFrame(this.onTouchMoveTickId),
				(this.onTouchMoveTickId = void 0),
				(this.activeLoopHandle = void 0),
				this.setState(
					(t) => (
						this.props.dispatch("player/moveCursor", this.state.position),
						this.props.dispatch("player/changeLoop", !1),
						{
							loopStartX: t.loopStartLayout
								? t.loopStartLayout.absoluteLoopLeftX
								: 0,
							loopEndX: t.loopEndLayout
								? t.loopEndLayout.absoluteLoopRightX
								: 0,
						}
					)
				);
		else {
			let e = this.getTouchPoint(t),
				s = a1(this.lastTouch, e);
			s < 7 &&
				(t.preventDefault(),
				this.setState((t) => {
					let s = {
							position: t.position,
							loopStartX: t.loopStartX,
							loopStartLayout: t.loopStartLayout,
							loopEndX: t.loopEndX,
							loopEndLayout: t.loopEndLayout,
						},
						i = tr(this.props.lines, e);
					if (
						0 === this.props.position.loopStart &&
						0 === this.props.position.loopEnd
					)
						s.position = { cursor: u(i), loopStart: 0, loopEnd: 0 };
					else {
						let o = u(i),
							a = h(i);
						if (s.position.loopStart <= o && o < s.position.loopEnd)
							s.position = {
								cursor: o,
								loopStart: s.position.loopStart,
								loopEnd: s.position.loopEnd,
							};
						else if (s.position.loopStart <= a && a < s.position.loopEnd)
							s.position = {
								cursor: a,
								loopStart: s.position.loopStart,
								loopEnd: s.position.loopEnd,
							};
						else {
							let n = i.measureLayout.measure.layouts,
								l = n[0].beatsLayouts,
								r = n[n.length - 1].beatsLayouts;
							(s.loopStartLayout = l[0]),
								(s.loopEndLayout = r[r.length - 1]),
								(s.loopStartX = s.loopStartLayout.absoluteLoopLeftX),
								(s.loopEndX = s.loopEndLayout.absoluteLoopRightX),
								(s.position = {
									cursor: o,
									loopStart: c(s.loopStartLayout),
									loopEnd: y(s.loopEndLayout),
								});
						}
					}
					return (
						this.props.dispatch("player/moveCursor", s.position),
						this.ensureLineVisibility(null, i.measureLayout.lineLayout, !1),
						s
					);
				})),
				(this.lastTouch = null);
		}
		document.removeEventListener("touchend", this.onTouchEnd),
			document.removeEventListener("mouseup", this.onTouchEnd);
	};
	getTouchPoint(t) {
		let e = t.changedTouches ? t.changedTouches[0] : t,
			s = (e.pageX - this.pageX) / this.props.scale,
			i = (e.pageY - this.pageY) / this.props.scale;
		return { x: s, y: i };
	}
	handleTabEditor(t) {
		let e = this.getTouchPoint(t),
			s = tr(this.props.lines, e);
		this.props.setTabEditor({
			beatsLayout: s,
			touch: e,
			scale: this.props.scale,
		});
	}
	refWrap = (t) => {
		this.wrap = t;
	};
	refMain = (t) => {
		this.tab = t;
	};
	refTuning = (t) => {
		this.tuningButton = t;
	};
	render() {
		let {
				loopStartLayout: t,
				loopEndLayout: e,
				loopStartX: s,
				loopEndX: i,
				isPitchshiftToStandard: o,
			} = this.state,
			a = this.props.lines,
			n = this.props.scale,
			l = this.props.height,
			r = this.props.slicingMode,
			{
				part: p,
				plusAccess: u,
				isFullscreen: h,
				isSmallScreen: d,
				handlePitchshift: c,
				showPitchshiftPopup: m,
				showPitchshiftLayer: y,
				tuning: f,
				layer: $,
				tabEditorData: g,
			} = this.props,
			x = this.props.width,
			_ = `-${b / 2 - 0.5} -0.5 ${x} ${l}`,
			v = a[0].layout.layers.height,
			L = "tab_editor" === $;
		return tF(
			tR,
			null,
			tF(
				"section",
				{
					id: "tablature",
					className: u
						? h
							? sX.tablatureFullscreen
							: sX.tablature
						: h
						? sX.tablatureFullscreenFree
						: sX.tablatureFree,
					"data-id": u ? tu : th,
					role: "application",
					key: "main",
					ref: this.refMain,
				},
				0 !== n && L && tF(sE, { scale: n }),
				tF(aM, {
					part: p,
					lines: a,
					tuning: f,
					slicingMode: r,
					tabEditorData: g,
					lazy: !u,
				}),
				tF(
					er,
					null,
					0 !== n &&
						ti &&
						tF(eq, {
							scale: n,
							part: p,
							lines: a,
							hidden: L,
							ensureLineVisibility: this.ensureLineVisibility,
						}),
					tF(
						"svg",
						{
							width: x,
							viewBox: _,
							ref: this.refWrap,
							className: sX.handlers,
							preserveAspectRatio: "xMidYMid meet",
							id: "handler",
						},
						ti && t && e && tF(ss, { leftLayout: t, rightLayout: e, lines: a }),
						ti && t && tF(se, { x: s, layout: t, handle: "left" }),
						ti && e && tF(se, { x: i, layout: e, handle: "right" }),
						!d &&
							p.tuning &&
							tF(ey, {
								reference: this.refTuning,
								firstLineLayoutHeigth: v,
								handlePitchshift: c,
								isPitchshiftToStandard: o,
								isActive: m || y,
								lock: !u,
							})
					)
				),
				tF(
					td,
					null,
					!d &&
						m &&
						tF(
							tc,
							{ ...aI, key: "popup" },
							tF(sg, { tab: this.tab, tuningButton: this.tuningButton })
						),
					!d &&
						y &&
						tF(
							tc,
							{ ...aI, key: "layer" },
							tF(e2, {
								firstLineLayoutHeigth: v,
								ensureLineVisibility: this.ensureLineVisibility,
								tab: this.tab,
								tuningButton: this.tuningButton,
							})
						)
				)
			)
		);
	}
}
class aR extends tB {
	render() {
		let {
				onClick: t,
				pressed: e,
				title: s,
				titlePressed: i,
				name: o,
				instrumentId: a,
			} = this.props,
			n = "mixer-title-id";
		return tF(
			"button",
			{
				className: e ? tq.active : tq.button,
				onClick: t,
				id: "control-mixer",
				"aria-haspopup": !0,
				"aria-pressed": e,
			},
			tF(
				"svg",
				{
					className: tq.icon,
					width: 55,
					height: 55,
					viewBox: "-4 -4 55 55",
					role: "img",
					"aria-labelledby": n,
				},
				tF("title", { id: n }, e && i ? i : s),
				tF("circle", { className: tq.tag, cx: "7", cy: "39", r: "6" }),
				tF("circle", {
					className: tq.circle,
					cx: "22.5",
					cy: "22.5",
					r: "22.5",
					filter: "url(#svg_shadow)",
				}),
				tF(tm, {
					className: tq.shape,
					instrumentId: a,
					name: o,
					transform: "translate(9 9)",
				})
			)
		);
	}
}
let aV = "tl2yt",
	aO = "tl35",
	a5 = "tl276",
	a4 = "tl276 tl1lq",
	aU = "tl1aa",
	aH = "tl1aa tl294",
	a6 = "tl1aa tl1gg",
	aK = "tl1aa tl1ia",
	aW = "tl1aa tl1u0",
	aY = "tl1aa tl2uy",
	aq = "tl1aa tl2o2",
	a7 = "tl1aa tly0",
	aQ = "tl24a",
	a8 = "tl2wd",
	aG = "tl2wd tlca",
	aj = "tli0",
	aZ = "tl11g",
	aJ = "tl1sq",
	nt = "tl2b5",
	ne = "tl34n",
	ns = "tl33",
	ni = {
		speed: "tl2yt",
		pane: "tl35",
		bpm: "tl276",
		bpmOriginal: "tl276 tl1lq",
		caption: "tl1aa",
		caption25: "tl1aa tl294",
		caption50: "tl1aa tl1gg",
		caption75: "tl1aa tl1ia",
		caption100: "tl1aa tl1u0",
		caption125: "tl1aa tl2uy",
		caption150: "tl1aa tl2o2",
		caption175: "tl1aa tly0",
		ruler: "tl24a",
		button: "tl2wd",
		buttonAlt: "tl2wd tlca",
		handle: "tli0",
		tempo: "tl11g",
		exitActive: "tl1sq",
		enterActive: "tl2b5",
		enter: "tl34n",
		exit: "tl33",
	};
class no extends tB {
	constructor(t) {
		super(t);
		let e = t.player.speed,
			s = ty(e, t.player.tempo);
		(this.state = {
			speed: e,
			tempo: s,
			position: tf(e),
			active: !1,
			deltaLeftX: 0,
			deltaRightX: 0,
			rulerX: null,
			rulerY: null,
			rulerW: null,
			mirrorSpeed: 0,
			mirrorTempo: 0,
		}),
			(this.lastTouch = null),
			(this.keyMap = {
				enter: this.hidePopup,
				left: this.handleSlower,
				down: this.handleSlower,
				up: this.handleFaster,
				right: this.handleFaster,
				"+": this.bpmPlus,
				"-": this.bpmMinus,
			}),
			(this.onTouchMoveTickId = void 0);
	}
	hidePopup = (t) => {
		t.preventDefault(), this.props.dispatch("layer/hide");
	};
	static getDerivedStateFromProps(t, e) {
		if (e.mirrorSpeed !== t.player.speed || e.mirrorTempo !== t.player.tempo) {
			let s = t.player.speed,
				i = ty(s, t.player.tempo);
			return {
				speed: s,
				tempo: i,
				position: tf(s),
				mirrorSpeed: t.player.speed,
				mirrorTempo: t.player.tempo,
			};
		}
		return null;
	}
	componentDidMount() {
		let t = this.wrap;
		t &&
			(t.addEventListener("touchstart", this.onTouchStart, window.PASSIVE),
			t.addEventListener("mousedown", this.onTouchStart)),
			window.addEventListener("resize", this.onResize),
			window.hotKeysManager.bind(this.keyMap, { onPopup: !0 });
	}
	componentWillUnmount() {
		window.hotKeysManager.unbind(this.keyMap, { onPopup: !0 });
		let t = this.wrap;
		t &&
			(t.removeEventListener("touchstart", this.onTouchStart),
			t.removeEventListener("mousedown", this.onTouchStart)),
			document.removeEventListener("touchmove", this.onTouchMove),
			document.removeEventListener("mousemove", this.onTouchMove),
			document.removeEventListener("touchend", this.onTouchEnd),
			document.removeEventListener("mouseup", this.onTouchEnd),
			window.removeEventListener("resize", this.onResize),
			this.onTouchMoveTickId && cancelAnimationFrame(this.onTouchMoveTickId);
	}
	getPageCoordinates = () => {
		let { body: t, documentElement: e } = document,
			s = this.ruler;
		if (s && t && e) {
			let i = s.getBoundingClientRect(),
				o = i.left + t.scrollLeft + e.scrollLeft,
				a = i.top + t.scrollTop + e.scrollTop,
				n = i.width;
			return { rulerX: o, rulerY: a, rulerW: n };
		}
		throw Error("Wrong Usage");
	};
	onResize = to(() => this.setState(this.getPageCoordinates), 250);
	getNewPosition(t) {
		let e = t$((100 * t.x) / t.w);
		return tg(e, this.props.player.tempo);
	}
	handleFaster = (t) => {
		t.preventDefault(),
			this.setState(
				(t) => tx(t.speed, t.tempo, t.position, this.props.player.tempo),
				() => {
					this.dispatchSpeed(this.state.speed);
				}
			);
	};
	handleSlower = (t) => {
		t.preventDefault(),
			this.setState(
				(t) => t_(t.speed, t.tempo, t.position, this.props.player.tempo),
				() => {
					this.dispatchSpeed(this.state.speed);
				}
			);
	};
	dispatchSpeed = (t) => {
		tb(this.props.store, t);
	};
	getTouchPoint(t) {
		let { rulerX: e, rulerY: s, rulerW: i } = this.state;
		if (null === e || null === s || null === i) {
			let o = this.getPageCoordinates();
			this.setState(o), (e = o.rulerX), (s = o.rulerY), (i = o.rulerW);
		}
		let a = t.changedTouches ? t.changedTouches[0] : t;
		return { x: Math.max(Math.min(a.pageX - e, i), 0), w: i, y: a.pageY - s };
	}
	onTouchStart = (t) => {
		let e = this.getTouchPoint(t);
		if (((this.lastTouch = e), t.preventDefault(), !this.onTouchMoveTickId)) {
			let s = window.requestAnimationFrame;
			this.onTouchMoveTickId = s(this.onTouchMoveTick);
		}
		document.addEventListener("touchmove", this.onTouchMove, window.PASIVE),
			document.addEventListener("mousemove", this.onTouchMove),
			document.addEventListener("touchend", this.onTouchEnd),
			document.addEventListener("mouseup", this.onTouchEnd);
	};
	onTouchMove = (t) => {
		t.preventDefault(),
			t.stopPropagation(),
			(this.lastTouch = this.getTouchPoint(t));
	};
	onTouchMoveTick = () => {
		let t = this.lastTouch;
		if (t) {
			let e = this.getNewPosition(t);
			(this.state.tempo.bpm !== e.tempo.bpm ||
				this.state.tempo.type !== e.tempo.type ||
				this.state.speed !== e.speed ||
				this.state.position !== e.position) &&
				this.setState(e),
				(this.lastTouch = null);
		}
		let s = window.requestAnimationFrame;
		this.onTouchMoveTickId = s(this.onTouchMoveTick);
	};
	onTouchEnd = () => {
		document.removeEventListener("touchmove", this.onTouchMove),
			document.removeEventListener("mousemove", this.onTouchMove),
			document.removeEventListener("touchend", this.onTouchEnd),
			document.removeEventListener("mouseup", this.onTouchEnd),
			this.onTouchMoveTickId && cancelAnimationFrame(this.onTouchMoveTickId),
			(this.onTouchMoveTickId = void 0);
		let t = this.state.speed,
			e = this.lastTouch;
		if (e) {
			let s = this.getNewPosition(e);
			this.setState(s), (t = s.speed);
		}
		this.dispatchSpeed(t);
	};
	refWrap = (t) => {
		this.wrap = t;
	};
	refRuler = (t) => {
		this.ruler = t;
	};
	changeBpmState = (t) => {
		this.setState(
			(e) => tv(e.speed, e.tempo, e.position, this.props.player.tempo, t),
			() => {
				this.dispatchSpeed(this.state.speed);
			}
		);
	};
	bpmPlus = () => {
		this.changeBpmState(1);
	};
	bpmPlusKeyPress = (t) => {
		13 === t.keyCode &&
			(t.preventDefault(), t.stopPropagation(), this.changeBpmState(1));
	};
	bpmMinus = () => {
		this.changeBpmState(-1);
	};
	bpmMinusPress = (t) => {
		13 === t.keyCode &&
			(t.preventDefault(), t.stopPropagation(), this.changeBpmState(-1));
	};
	render() {
		let t = 100 === this.state.speed ? ni.buttonAlt : ni.button,
			e = 100 === this.state.speed ? ni.bpmOriginal : ni.bpm;
		return tF(
			"div",
			{ className: ni.speed, role: "dialog", "aria-label": "Speed" },
			tF(
				"div",
				{ className: e },
				tF(
					"button",
					{
						onClick: this.bpmMinus,
						onKeyDown: this.bpmMinusPress,
						title: "Alt+A",
					},
					tF(
						"svg",
						{ width: 12, height: 12, viewBox: "0 0 12 2" },
						tF("rect", {
							y: "2",
							width: "2",
							height: "12",
							transform: "rotate(-90 0 2)",
						})
					)
				),
				tF("span", { "aria-label": "Tempo" }, this.state.tempo.bpm, " bpm"),
				tF(
					"button",
					{
						onClick: this.bpmPlus,
						onKeyDown: this.bpmPlusKeyPress,
						title: "Alt+S",
					},
					tF(
						"svg",
						{ width: 12, height: 12, viewBox: "0 0 12 12" },
						tF("rect", { x: "5", width: "2", height: "12" }),
						tF("rect", {
							y: "7",
							width: "2",
							height: "12",
							transform: "rotate(-90 0 7)",
						})
					)
				)
			),
			tF(
				"div",
				{
					className: ni.pane,
					title: "You can use arrow keys",
					ref: this.refWrap,
				},
				tF("label", { className: ni.caption25 }, tF("span", null, "25%")),
				tF("label", { className: ni.caption50 }, tF("span", null, "50%")),
				tF("label", { className: ni.caption75 }, tF("span", null, "75%")),
				tF("label", { className: ni.caption100 }, tF("span", null, "100%")),
				tF("label", { className: ni.caption125 }, tF("span", null, "125%")),
				tF("label", { className: ni.caption150 }, tF("span", null, "150%")),
				tF("label", { className: ni.caption175 }, tF("span", null, "175%")),
				tF(
					"div",
					{ className: ni.ruler, ref: this.refRuler },
					tF(
						"div",
						{
							className: ni.handle,
							style: { left: this.state.position + "%" },
							role: "slider",
							"aria-valuenow": this.state.speed,
							"aria-valuemin": 25,
							"aria-valuemax": 175,
							"aria-valuetext": this.state.tempo.bpm + " bpm",
						},
						tF("div", { className: t })
					)
				)
			)
		);
	}
}
var na = t(no, "player");
function nn() {
	return tF(
		"svg",
		{ width: 54, height: 54, viewBox: "0 0 54 54" },
		tF("path", {
			d: "M8 0h38a8 8 0 0 1 8 8v38a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8a8 8 0 0 1 8-8z",
			fill: "#F1452D",
		}),
		tF("path", {
			d: "M23.5 31V12a3 3 0 0 1 3-3h1a3 3 0 0 1 3 3v19a3 3 0 0 1-3 3h-1a3 3 0 0 1-3-3zM23.5 42v-2a3 3 0 0 1 3-3h1a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-1a3 3 0 0 1-3-3z",
			fill: "#FDE3DF",
		})
	);
}
let nl = tL + " B0fs1",
	nr = tL + " B0f277",
	np = tL + " B0f2nd",
	nu = "B0f1ah",
	nh = "B0fqg",
	nd = "B0fqg B0f176",
	nc = "B0f102",
	nm = "B0f2sz",
	ny = {
		horizontalPopup: tL + " B0fs1",
		verticalPopup: tL + " B0f277",
		verticalLeftPopup: tL + " B0f2nd",
		link: "B0f1ah",
		basewrapper: "B0fqg",
		wrapper: "B0fqg B0f176",
		text: "B0f102",
		linkText: "B0f2sz",
	};
function nf(t, e) {
	return t ? ny.horizontalPopup : e ? ny.verticalLeftPopup : ny.verticalPopup;
}
function n$(t) {
	let { title: s, left: i, horizontal: o } = t,
		{ dispatch: a } = e(),
		n = tH(() => {
			a("layer/hide");
		}, [a]);
	return tF(
		"div",
		{ className: nf(o, i), role: "dialog" },
		tF(
			"div",
			{
				className: ny.link,
				"aria-label": `${s} mode has no effect`,
				onClick: n,
			},
			tF("span", { className: ny.wrapper }, tF(nn, null)),
			tF(
				"div",
				{ className: ny.text },
				"This song has only one",
				tF("br", null),
				`instrument track. ${s}`,
				tF("br", null),
				"mode has no effect."
			)
		)
	);
}
let ng = "Cv41lu",
	nx = "Cv42y1",
	n_ = "Cv4221",
	nb = "Cv41lu Cv41ex",
	nv = "Cv416g",
	nL = "Cv47k",
	n9 = "Cv426b",
	nN = "Cv41uq",
	nS = "Cv474",
	nk = "Cv42hl",
	n0 = "Cv42hl Cv42b3",
	nT = "Cv42hl Cv431z",
	nw = "Cv42hl Cv422p",
	nE = "Cv42hl Cv41go",
	nP = "Cv42e1",
	nM = "Cv42e1 Cv41vz",
	n3 = "Cv42e1 Cv4199",
	nC = "Cv42e1 Cv4oj",
	nD = "Cv42ut",
	nX = "Cv42ut Cv428v",
	n2 = {
		popup: "Cv41lu",
		mainContainer: "Cv42y1",
		divider: "Cv4221",
		popupExtended: "Cv41lu Cv41ex",
		helpContainer: "Cv416g",
		part: "Cv47k",
		navigation: "Cv426b",
		digits: "Cv41uq",
		rect: "Cv474",
		save: "Cv42hl",
		notLoggedIn: "Cv42hl Cv42b3",
		unset: "Cv42hl Cv431z",
		saving: "Cv42hl Cv422p",
		saved: "Cv42hl Cv41go",
		hint: "Cv42e1",
		hint0: "Cv42e1 Cv41vz",
		hint1: "Cv42e1 Cv4199",
		hint2: "Cv42e1 Cv4oj",
		helpTag: "Cv42ut",
		helpTagActive: "Cv42ut Cv428v",
	};
class nI extends tB {
	helpToggle = () => {
		let { helpActive: t } = this.state;
		this.setState({ helpActive: !t });
	};
	getActiveHint = (t, e) => {
		let { dispatch: s } = this.props;
		switch (t) {
			case 0:
				if (e)
					return [
						"Use ",
						tF(
							"span",
							{
								onClick(t) {
									t.preventDefault(),
										s("curiosity/event", {
											event: "Clicked a tab editor popup link",
											action: "Revisions",
										}),
										s("layer/show", "revisions");
								},
							},
							"revisons"
						),
						" for complex changes",
					];
				return [
					tF(
						"a",
						{
							href: "/a/wa/signin",
							onClick(t) {
								t.preventDefault(),
									s("curiosity/event", {
										event: "Clicked a tab editor popup link",
										action: "Sign In",
									}),
									s("navigate", "/a/wa/signin");
							},
						},
						"Sign up"
					),
					" to save changes for free.",
				];
			case 1:
				return "Tab corrections are private.";
			case 2:
				return "Corrections won’t affect the sound.";
			default:
				return null;
		}
	};
	onSave = (t) => {
		let { dispatch: e } = this.props;
		t.preventDefault(),
			e("curiosity/event", {
				event: "Clicked a tab editor popup link",
				action: "SignInButton",
			}),
			e("navigate", "/a/wa/signin");
	};
	constructor() {
		super();
		let t = t9();
		t || tN(),
			(this.state = { helpActive: !t, hintActiveId: 0, firstHintShowed: !1 });
	}
	componentDidMount() {
		this.hintTimer = setInterval(() => {
			let { hintActiveId: t } = this.state;
			this.setState({ hintActiveId: t < 2 ? t + 1 : 0, firstHintShowed: !0 });
		}, 7e3);
	}
	componentWillUnmount() {
		clearInterval(this.hintTimer);
	}
	render() {
		let { tabEditor: t, user: e } = this.props,
			{ helpActive: s, hintActiveId: i, firstHintShowed: o } = this.state,
			a = n2.unset,
			n = "Save",
			l = n2.hint;
		return (
			o && (l = n2[`hint${i}`]),
			e.isLoggedIn
				? "changes" === t.status || "saving" === t.status
					? ((a = n2.saving), (n = "Saving"))
					: "saved" === t.status && ((a = n2.saved), (n = "Saved"))
				: ((a = n2.notLoggedIn), (n = "Sign in & Save")),
			tF(
				"div",
				{ className: s ? n2.popupExtended : n2.popup },
				tF(
					"div",
					{
						className: s ? n2.helpTagActive : n2.helpTag,
						onClick: this.helpToggle,
					},
					tF("span", null, "?")
				),
				s &&
					tF(
						"div",
						{ className: n2.helpContainer },
						tF(
							"div",
							{ className: n2.part },
							tF("p", null, "Choose a note to edit with your mouse.")
						),
						tF(
							"div",
							{ className: n2.part },
							tF("p", null, "Navigate with"),
							tF(
								"svg",
								{ className: n2.navigation, width: 41, height: 27 },
								tF("rect", { x: 14 }),
								tF("rect", { x: 14, y: 14 }),
								tF("rect", { x: 28, y: 14 }),
								tF("rect", { y: 14 }),
								tF("path", { d: "M24 19.5H17L20.5 23.5L24 19.5Z" }),
								tF("path", { d: "M33 17V24L37 20.5L33 17Z" }),
								tF("path", { d: "M8 17V24L4 20.5L8 17Z" }),
								tF("path", { d: "M24 9H17L20.5 5L24 9Z" })
							)
						),
						tF(
							"div",
							{ className: n2.part },
							tF("p", null, "Edit with"),
							tF(
								"svg",
								{ className: n2.digits, width: 37, height: 13 },
								tF("rect", { className: n2.rect, x: 24 }),
								tF("rect", { className: n2.rect }),
								tF("rect", { x: 15, y: 6, height: 1, width: 7 }),
								tF("text", { x: 4, y: 10 }, 0),
								tF("text", { x: 28, y: 10 }, 9)
							)
						)
					),
				tF(
					"div",
					{ className: n2.mainContainer },
					tF("h3", {}, "TAB corrector"),
					tF(
						"button",
						{ className: a, onClick: e.isLoggedIn ? void 0 : this.onSave },
						tF("span", null, n)
					),
					tF("div", { className: n2.divider }),
					tF(
						"p",
						{ className: l, key: `hint${i}` },
						this.getActiveHint(i, e.isLoggedIn)
					)
				)
			)
		);
	}
}
var n1 = t(nI, "tabEditor", "user"),
	nz = "/static/media/voice.312219f3.svg";
let nA = "C0w33s",
	nB = "C0w3a",
	nF = "C0w1ij",
	nR = "C0w3a C0w13m",
	nV = "C0w3a C0w2bp",
	nO = "C0wz2",
	n5 = {
		popup: "C0w33s",
		button: "C0w3a",
		path: "C0w1ij",
		activeButton: "C0w3a C0w13m",
		disabledButton: "C0w3a C0w2bp",
		spacer: "C0wz2",
	};
class n4 extends tB {
	render() {
		let { dispatch: t } = this.props,
			{ metronomeType: e, voiceMetronomeAvailable: s } = this.props.player,
			i = "regular" === e ? n5.activeButton : n5.button,
			o = {};
		return (
			s
				? ((o.className = "voice" === e ? n5.activeButton : n5.button),
				  (o.onClick = () => t("player/changeMetronome:init", "voice")))
				: ((o.className = n5.disabledButton),
				  (o.disabled = !0),
				  (o.title = "Voice metronome is unavailable on this song")),
			tF(
				"div",
				{ className: n5.popup },
				tF(
					"button",
					{
						className: i,
						onClick: () => t("player/changeMetronome:init", "regular"),
					},
					tF(
						"svg",
						{ width: 34, height: 32, viewBox: "-6 0 26 20" },
						tF(
							"defs",
							null,
							tF(
								"filter",
								{
									id: "shadow_metro",
									x: "-10",
									y: "-10",
									width: "70",
									height: "80",
									filterUnits: "userSpaceOnUse",
									colorInterpolationFilters: "sRGB",
								},
								tF("feFlood", {
									floodOpacity: "0",
									result: "BackgroundImageFix",
								}),
								tF("feColorMatrix", {
									in: "SourceAlpha",
									type: "matrix",
									values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
									result: "hardAlpha",
								}),
								tF("feOffset", { dy: "2" }),
								tF("feGaussianBlur", { stdDeviation: "6" }),
								tF("feColorMatrix", {
									type: "matrix",
									values:
										"0 0 0 0 0.533333 0 0 0 0 0.901961 0 0 0 0 0 0 0 0 0.75 0",
								}),
								tF("feBlend", {
									mode: "normal",
									in2: "BackgroundImageFix",
									result: "effect1_dropShadow_4343_1308",
								}),
								tF("feBlend", {
									mode: "normal",
									in: "SourceGraphic",
									in2: "effect_shadow_metro",
									result: "shape",
								})
							)
						),
						tF("path", { d: t7 })
					),
					tF("p", null, "tick tock")
				),
				tF("div", { className: n5.spacer }),
				tF(
					"button",
					o,
					tF(
						"svg",
						{ width: 34, height: 32, viewBox: "0 0 34 28" },
						tF("use", { xlinkHref: `${nz}#icon`, className: n5.path })
					),
					tF("p", null, "one two")
				)
			)
		);
	}
}
var nU = t(n4, "player");
let nH = { animationStyles: tT };
class n6 extends tB {
	render() {
		let {
				device: t,
				plusAccess: e,
				layer: s,
				tadEditorWarning: i,
				speed: o,
			} = this.props,
			a = S(t.os) || T(t.os) || w(t),
			n = "mixer" === s,
			l = "speed" === s,
			r = "tab_editor" === s,
			p =
				this.props.isMetronome &&
				!["mixer", "plus_mute", "tab_editor", "plus_print"].includes(s),
			u = "solo" === this.props.type,
			h = "mute" === this.props.type,
			d = this.props.loop,
			c = this.props.isCountin,
			m = this.props.isMetronome,
			y = `${Math.round(o)}%`,
			f = !e,
			$ = !e,
			g = this.props.usedDrums ? tQ.panePlus2Secondary : tQ.panePlus2;
		return tF(
			"aside",
			{ id: "controls", className: g, "data-controls": "tablature" },
			tF("div", { className: tQ.handler }),
			tF(
				"div",
				{ className: tQ.centerGroup },
				tF(
					"div",
					{ className: tQ.item },
					tF(t8, {
						shouldPlay: this.props.shouldPlay,
						canPlay: this.props.canPlay,
						onClick: this.props.handlePlay,
						title: "Play (Space)",
						titlePressed: "Pause (Space)",
					})
				),
				tF(
					"div",
					{ className: tQ.item, id: "mixer-button" },
					tF(aR, {
						pressed: n,
						onClick: this.props.handleMixer,
						title: "Show tracks (T)",
						titlePressed: "Hide tracks (T)",
						instrumentId: this.props.track ? this.props.track.instrumentId : tS,
						name: this.props.track ? this.props.track.name : "",
					}),
					tF(td, null, n && tF(tc, nH, tF(tk, null)))
				),
				tF(
					"div",
					{ className: tQ.item },
					tF(tG, {
						icon: "speed",
						text: y,
						pressed: l,
						onClick: this.props.handleSpeed,
						title:
							"Open speed panel (S). Change tempo: (Alt+1–7) for 25%–175%, (Alt+S/A) for 1 bpm change",
						hasPopup: !0,
						lock: $,
					}),
					tF(
						td,
						null,
						"plus_speed" === s &&
							tF(
								tc,
								{ ...nH, key: "popup" },
								a
									? tF(s$, {
											title: "Tempo Control",
											device: t,
											horizontal: !0,
									  })
									: tF(tW, {
											title: "Tempo Control",
											horizontal: !0,
											classPrefix: "speed",
									  })
							),
						l && tF(tc, { ...nH, key: "layer" }, tF(na, null))
					)
				),
				tF(
					"div",
					{ className: tQ.item },
					tF(tG, {
						icon: "loop",
						pressed: d,
						onClick: this.props.handleLoop,
						title: "Turn loop mode on (L)",
						titlePressed: "Turn loop mode off (L)",
						hasPopup: f,
						lock: $,
					}),
					tF(
						td,
						null,
						"plus_loop" === s &&
							tF(
								tc,
								nH,
								a
									? tF(s$, { title: "Loop Mode", device: t, horizontal: !0 })
									: tF(tW, {
											title: "Loop Mode",
											horizontal: !0,
											classPrefix: "loop",
									  })
							)
					)
				),
				tF(
					"div",
					{ className: tQ.item },
					tF(tG, {
						icon: "solo",
						pressed: u,
						onClick: this.props.handleSolo,
						title: "Play current track solo (F)",
						titlePressed: "Play focus mix of all tracks (F)",
						hasPopup: f,
						lock: $,
					}),
					tF(
						td,
						null,
						"plus_solo" === s &&
							tF(
								tc,
								nH,
								a
									? tF(s$, { title: "Solo Mode", device: t, horizontal: !0 })
									: tF(tW, {
											title: "Solo Mode",
											horizontal: !0,
											classPrefix: "solo",
									  })
							),
						"solo_single" === s &&
							tF(tc, nH, tF(n$, { title: "Solo", horizontal: !0 }))
					)
				),
				tF(
					"div",
					{ className: tQ.item },
					tF(tG, {
						icon: "mute",
						pressed: h,
						onClick: this.props.handleMute,
						title: "Mute current track (M)",
						titlePressed: "Unmute current track (M)",
						hasPopup: f,
						lock: $,
					}),
					tF(
						td,
						null,
						"plus_mute" === s &&
							tF(
								tc,
								nH,
								a
									? tF(s$, { title: "Mute Mode", device: t, horizontal: !0 })
									: tF(tW, {
											title: "Mute Mode",
											horizontal: !0,
											classPrefix: "mute",
									  })
							)
					)
				),
				tF(
					"div",
					{ className: tQ.item },
					tF(tG, {
						icon: "countin",
						pressed: c,
						onClick: this.props.handleCountin,
						title: "Turn count-in mode on (C)",
						titlePressed: "Turn count-in mode off (C)",
					})
				),
				tF(
					"div",
					{ className: tQ.item },
					tF(tG, {
						icon: "metronome",
						pressed: m,
						onClick: this.props.handleMetronome,
						title: "Turn metronome on (N)",
						titlePressed: "Turn metronome off (N)",
					}),
					tF(td, null, p && tF(tc, { ...nH, key: "layer" }, tF(nU, null)))
				),
				!this.props.usedDrums &&
					tF(
						"div",
						{ className: tQ.item },
						tF(tG, {
							icon: "editor",
							pressed: r,
							onClick: this.props.handleTabEditor,
							title: "Turn tab corrector on (E)",
							titlePressed: "Turn tab corrector off (E)",
							warning: i,
						}),
						r && tF(tc, { ...nH, key: "tab-editor" }, tF(n1, null))
					),
				tF(
					"div",
					{ className: tQ.item },
					tF(tG, {
						icon: "print",
						onClick: this.props.handlePrint,
						title: "Print (P)",
						lock: $,
					}),
					tF(
						td,
						null,
						"plus_print" === s &&
							tF(
								tc,
								nH,
								tF(tW, {
									title: "Printing",
									horizontal: !0,
									classPrefix: "print",
								})
							)
					)
				),
				tF(
					"div",
					{ className: tQ.secondaryControls },
					tF(
						"div",
						{
							className: this.props.usedDrums
								? tQ.itemSmall
								: tQ.itemSmallHidden,
						},
						tF(tG, {
							icon: "help",
							pressed: s === tw,
							onClick: this.props.handleNotation,
							title: "Show drum notation",
							titlePressed: "Hide drum notation",
						}),
						this.props.usedDrums &&
							tF(t0, { usedDrums: this.props.usedDrums, horizontal: !0 })
					)
				)
			)
		);
	}
}
let nK = "B6714x",
	nW = "B67al",
	nY = "B6713d",
	nq = "B6711t",
	n7 = "B6731g",
	nQ = "B6731g B679r",
	n8 = "B67147",
	nG = {
		mobileSpeed: "B6714x",
		secondary: "B67al",
		controls: "B6713d",
		value: "B6711t",
		button: "B6731g",
		disabled: "B6731g B679r",
		switch: "B67147",
	},
	nj = 30,
	nZ = 170,
	nJ = 10;
class lt extends tB {
	constructor() {
		super(), (this.state = { mode: "percent" });
	}
	tuneUp = (t) => {
		t.preventDefault();
		let { store: e, player: s } = this.props,
			{ mode: i } = this.state,
			o,
			a;
		"percent" === i
			? ((o = 10), (a = Math.floor(s.speed / o) * o + o))
			: ((o = +(100 / s.tempo.bpm).toFixed(2)), (a = s.speed + o)),
			a <= 170 && a >= 30 && tb(e, a);
	};
	tuneDown = (t) => {
		t.preventDefault();
		let { store: e, player: s } = this.props,
			{ mode: i } = this.state,
			o,
			a;
		"percent" === i
			? ((o = 10), (a = Math.floor(s.speed / o) * o - o))
			: ((o = +(100 / s.tempo.bpm).toFixed(2)), (a = s.speed - o)),
			a <= 170 && a >= 30 && tb(e, a);
	};
	switchMode = () => {
		let { mode: t } = this.state;
		this.setState({ mode: "percent" === t ? "bpm" : "percent" });
	};
	render() {
		let { speed: t, tempo: e } = this.props.player,
			{ mode: s } = this.state,
			i = ty(t, e),
			o = Math.round(t),
			a = nG.disabled,
			n,
			l =
				"percent" === s
					? 10 * Math.floor(t / 10) - 10
					: t - +(100 / e.bpm).toFixed(2);
		l >= 30 && ((a = nG.button), (n = this.tuneDown));
		let r = nG.disabled,
			p,
			u =
				"percent" === s
					? 10 * Math.floor(t / 10) + 10
					: t + +(100 / e.bpm).toFixed(2);
		return (
			u <= 170 && ((r = nG.button), (p = this.tuneUp)),
			tF(
				"div",
				{ className: nG.mobileSpeed, role: "dialog", "aria-label": "Speed" },
				tF(
					"p",
					{ className: nG.secondary },
					"percent" === s ? `${i.bpm} bpm` : `${o}%`
				),
				tF(
					"div",
					{ className: nG.controls },
					tF("button", { className: a, onClick: n }, tF(eg, { up: !1 })),
					tF(
						"div",
						{ className: nG.value },
						tF("p", null, "percent" === s ? `${o}%` : i.bpm),
						"bpm" === s && tF("span", null, "bpm")
					),
					tF("button", { className: r, onClick: p }, tF(eg, { up: !0 }))
				),
				tF(
					"button",
					{ className: nG.switch, onClick: this.switchMode },
					`Switch to ${"percent" === s ? "bpm" : "%"}`
				)
			)
		);
	}
}
var le = t(lt, "player");
let ls = "n8g5",
	li = "n8n1",
	lo = "n885",
	la = "n885 n81jn",
	ln = "n82pa",
	ll = "n835f",
	lr = "n82pa n81e8",
	lp = "n82pa n813x",
	lu = "n81sz",
	lh = "n81sz n8on",
	ld = "n819i",
	lc = "n81z",
	lm = "n81yu",
	ly = "n82mi",
	lf = "n8kg",
	l$ = {
		controls: "n8g5",
		float: "n8n1",
		features: "n885",
		featuresActive: "n885 n81jn",
		item: "n82pa",
		tuningValue: "n835f",
		minimize: "n82pa n81e8",
		play: "n82pa n813x",
		button: "n81sz",
		active: "n81sz n8on",
		exitActive: "n819i",
		enterActive: "n81z",
		enter: "n81yu",
		exit: "n82mi",
		alt: "n8kg",
	},
	lg = { animationStyles: tP };
class lx extends tB {
	overflowTimer = null;
	minimizeClick = () => {
		let { minimized: t } = this.state;
		clearTimeout(this.overflowTimer),
			t
				? (this.setState({ minimized: !1 }),
				  (this.overflowTimer = setTimeout(() => {
						this.setState({ overflowVisible: !0 });
				  }, 500)))
				: (this.props.handleMinimize(),
				  this.setState({ minimized: !0, overflowVisible: !1 }));
	};
	componentWillUnmount() {
		clearTimeout(this.overflowTimer);
	}
	constructor() {
		super(), (this.state = { minimized: !0, overflowVisible: !1 });
	}
	render() {
		let {
				device: t,
				layer: e,
				shouldPlay: s,
				canPlay: i,
				pitchShift: o,
				pitchShiftAvailable: a,
				speed: n,
			} = this.props,
			{ minimized: l, overflowVisible: r } = this.state,
			p = "speed" === e,
			u = "pitchshift" === e,
			h =
				this.props.isMetronome &&
				!["mixer", "plus_mute", "tab_editor", "plus_print"].includes(e),
			d = "solo" === this.props.type,
			c = "mute" === this.props.type,
			m = this.props.speed !== tE || p,
			y = this.props.loop,
			f = this.props.isCountin,
			$ = this.props.isMetronome,
			g = !this.props.plusAccess,
			x = !this.props.plusAccess,
			_ = S(t.os) || T(t.os),
			b = { height: `${414 + 57 * (a ? 1 : 0)}px` },
			v = l$.features;
		l ? (b.height = "71px") : r && (v = l$.featuresActive);
		let L = `${Math.round(n)}%`;
		return tF(
			"footer",
			{ className: l$.controls, "data-controls": "tablature" },
			tF(
				"svg",
				{ width: 0, height: 0 },
				tF("defs", null, tF(tj, {}), tF(tZ, {}))
			),
			tF(
				"div",
				{ className: l$.alt, id: "alt-controls" },
				tF(t8, {
					shouldPlay: s,
					canPlay: i,
					onClick: this.props.handlePlay,
					title: "Play",
					hideDefs: !0,
				})
			),
			tF(
				"div",
				{ className: l$.float, id: "mobile-controls" },
				tF(
					"div",
					{ className: v, style: b },
					tF(
						"div",
						{ className: l$.minimize },
						tF(tG, {
							mobile: !0,
							icon: l ? "arrow" : "arrow-down",
							pressed: !1,
							onClick: this.minimizeClick,
							title: "Minimize",
							titlePressed: "Minimize",
						})
					),
					tF(
						"div",
						{ className: l$.item },
						tF(tG, {
							mobile: !0,
							icon: "speed",
							text: L,
							pressed: m,
							onClick: this.props.handleSpeed,
							title: "Change playback speed",
							hasPopup: g,
							lock: x,
						}),
						tF(
							td,
							null,
							"plus_speed" === e &&
								tF(
									tc,
									lg,
									_
										? tF(s$, { title: "Tempo Control", device: t, mobile: !0 })
										: tF(tW, { title: "Tempo Control", classPrefix: "speed" })
								),
							p && tF(tc, { ...lg, key: "layer" }, tF(le, null))
						)
					),
					tF(
						"div",
						{ className: l$.item },
						tF(tG, {
							mobile: !0,
							icon: "loop",
							pressed: y,
							onClick: this.props.handleLoop,
							title: "Turn loop mode on",
							titlePressed: "Turn loop mode off",
							hasPopup: g,
							lock: x,
						}),
						tF(
							td,
							null,
							"plus_loop" === e &&
								tF(
									tc,
									lg,
									_
										? tF(s$, { title: "Loop Mode", device: t, mobile: !0 })
										: tF(tW, { title: "Loop Mode", classPrefix: "loop" })
								)
						)
					),
					tF(
						"div",
						{ className: l$.item },
						tF(tG, {
							mobile: !0,
							icon: "solo",
							pressed: d,
							onClick: this.props.handleSolo,
							title: "Play the current track solo",
							titlePressed: "Play the focus mix of all tracks",
							hasPopup: g,
							lock: x,
						}),
						tF(
							td,
							null,
							"plus_solo" === e &&
								tF(
									tc,
									lg,
									_
										? tF(s$, { title: "Solo Mode", device: t, mobile: !0 })
										: tF(tW, { title: "Solo Mode", classPrefix: "solo" })
								),
							"solo_single" === e &&
								tF(tc, lg, tF(n$, { title: "Solo", horizontal: !0 }))
						)
					),
					tF(
						"div",
						{ className: l$.item },
						tF(tG, {
							mobile: !0,
							icon: "mute",
							pressed: c,
							onClick: this.props.handleMute,
							title: "Mute current track (M)",
							titlePressed: "Unmute current track (M)",
							hasPopup: g,
							lock: x,
						}),
						tF(
							td,
							null,
							"plus_mute" === e &&
								tF(
									tc,
									lg,
									_
										? tF(s$, { title: "Mute Mode", device: t, mobile: !0 })
										: tF(tW, { title: "Mute Mode", classPrefix: "mute" })
								)
						)
					),
					tF(
						"div",
						{ className: l$.item },
						tF(tG, {
							mobile: !0,
							icon: "countin",
							pressed: f,
							onClick: this.props.handleCountin,
							title: "Turn count-in mode on (C)",
							titlePressed: "Turn count-in mode off (C)",
						})
					),
					tF(
						"div",
						{ className: l$.item },
						tF(tG, {
							icon: "metronome",
							pressed: $,
							onClick: this.props.handleMetronome,
							title: "Turn metronome on (N)",
							titlePressed: "Turn metronome off (N)",
						}),
						tF(td, null, h && tF(tc, { ...lg, key: "layer" }, tF(nU, null)))
					),
					a &&
						tF(
							"div",
							{ className: l$.item },
							0 !== o &&
								tF(
									"div",
									{ className: l$.tuningValue },
									`${o > 0 ? "+" : ""}${o}`
								),
							tF(tG, {
								mobile: !0,
								icon: "tuning",
								pressed: 0 !== o || u,
								onClick: this.props.handlePitchshift,
								title: "Pitch Shift on",
								titlePressed: "Pitch Shift off",
								hasPopup: g,
								lock: x,
							}),
							tF(
								td,
								null,
								"plus_pitchshift" === e &&
									tF(
										tc,
										lg,
										_
											? tF(s$, { title: "Pitch Shift", device: t, mobile: !0 })
											: tF(tW, { title: "Pitch Shift", classPrefix: "pitch" })
									),
								u && tF(tc, { ...lg, key: "layer" }, tF(e2, { mobile: !0 }))
							)
						)
				),
				tF(
					"div",
					{ className: l$.play },
					tF(t8, {
						onClick: this.props.handlePlay,
						title: "Play",
						titlePressed: "Pause",
						shouldPlay: s,
						canPlay: i,
						hideDefs: !0,
					})
				)
			)
		);
	}
}
let l_ = "Brk2di",
	lb = "Brk2yo",
	lv = "Brk1b7",
	lL = { error: "Brk2di", title: "Brk2yo", subtitle: "Brk1b7" };
function l9() {
	return tF(
		"section",
		{ className: lL.error, role: "alert" },
		tF(
			"h1",
			{ className: lL.title },
			tF("span", null, "The song was successfully deleted!")
		),
		tF(
			"h2",
			{ className: lL.subtitle },
			"Try ",
			tF(tM, { to: "/" }, "searching"),
			" for other songs."
		)
	);
}
class lN extends tB {
	render() {
		return tF(
			"svg",
			{ width: 112, height: 112, viewBox: "0 0 112 112" },
			tF(
				"g",
				{
					fill: "none",
					fillRule: "evenodd",
					stroke: "#FD651A",
					"stroke-width": "11",
					transform: "translate(6 6)",
				},
				tF("circle", { cx: 50, cy: 50, r: 50 }),
				tF("path", { d: "M16.5 84.5l68-69", "stroke-linecap": "square" })
			)
		);
	}
}
function lS() {
	return tF(
		t3,
		{
			level: "notice",
			title:
				"Sorry this content has been removed in your country at the request of the underlying music publisher.",
			action:
				"We will work hard to license this content and make sure music creators get paid, which is our philosophy at Songsterr. In the meantime if you would like to provide us a comment we could share with the publisher, please do so.",
			reason: "license",
		},
		tF(lN, null)
	);
}
function lk(t) {
	let { meta: e, user: s, cursor: i, part: o, player: a, isDeleted: n } = t;
	if (e.loading || o.loading) return;
	let l = !!e.current,
		r = e.current && !!e.current.tracks,
		p = tC(e, s),
		u = l && tD.get(e.current, tX.MASTER),
		h = e.current && e.current.isBlocked;
	if (e.isNotFound || o.isNotFound) return tF(ee, null);
	if (n) return tF(l9, null);
	if (e.isNetworkFailed || o.isNetworkFailed) return tF(es, null);
	if (e.isFailed || o.isFailed) return tF(en, null);
	if (!e.allowedByLicense) return tF(lS, null);
	else if (l && !p && u.audioError) {
		let d = u.audioError,
			c = "Our virtual band was unable to play it O_o";
		return (
			d === t2.TOO_LONG && (c = "Its duration exceeds the 30 minutes limit"),
			tF(t3, {
				level: "error",
				title: "Sorry, playback is not possible on this song",
				action: c,
				reason: "audio",
			})
		);
	} else if (l && (!r || !p))
		return tF(t3, {
			level: "info",
			title: "Tab sound is being rendered",
			action: "On average it takes about 5 minutes to process a tab",
			reason: "render",
		});
	else if (!a.webworkerOperational)
		return tF(t3, {
			level: "info",
			title: "Sorry, playback is not possible on this song",
			action: "Probably there is not enough memory",
			reason: "webworker",
		});
	else if (!a.playbackAvailable || !ti)
		return tF(t3, {
			level: "info",
			title: "Sorry, playback is not supported in your browser",
			action: "Try to use latest Google Chrome",
			reason: a.playbackAvailable ? "animate" : "audio",
		});
	else if (a.isAudioNetworkFailed)
		return tF(t3, {
			level: "info",
			title: "Audio can't be loaded because of network error.",
			action: "Probably you are offline or connection was canceled",
			reason: "network",
		});
	else if (a.isAudioFailed)
		return tF(t3, {
			level: "error",
			title: "Sorry, but there are some problems with playback",
			action: "Please, try to reload page",
			reason: "playback",
		});
	else if (i.isFailed)
		return tF(t3, {
			level: "error",
			title: "Sorry, but there are some problems with cursor",
			action: "Please, try to reload page",
			reason: "cursor",
		});
	else if (h)
		return tF(t3, {
			level: "notice",
			title: "Sorry, but that revision was blocked",
			action: "Please let us know if you disagree with this decision",
			reason: "block",
		});
}
let l0 = "Bvj22a",
	lT = tI + " Bvj1o9",
	lw = "Bvj1b4",
	lE = { main: "Bvj22a", showroom: tI + " Bvj1o9", banner: "Bvj1b4" },
	lP = tU(() => {
		let t = t6(),
			{
				dispatch: s,
				device: i,
				ads: o,
			} = e("device", "ads", "route", "consent"),
			{ alt: a, event: n, link: l, image: r } = t1(i),
			p = () => s("curiosity/event", { event: n });
		return tF(
			"section",
			{ id: "showroom_bottom", className: lE.main, ref: t },
			tF(
				"div",
				{ className: lE.showroom, id: "Redesign_BTF_tab_page_320x50" },
				o.notsyFailed &&
					tF(
						"a",
						{ className: lE.link, onClick: p, href: l, target: "_blank" },
						tF("img", { src: r, className: lE.banner, alt: a })
					)
			)
		);
	}),
	lM = (t, e) => true || e.enabled,
	l3 = { onTab: !0 };
class lC extends tB {
	componentDidMount() {
		let t = window.hotKeysManager;
		t.bindOne("space", this.props.handlePlay, l3),
			t.bindOne("l", this.props.handleLoop, l3),
			t.bindOne("f", this.props.handleSolo, l3),
			t.bindOne("m", this.props.handleMute, l3),
			t.bindOne("r", this.props.handlePitchshift, l3),
			t.bindOne("t", this.props.handleMixer, l3),
			t.bindOne("s", this.props.handleSpeed, l3),
			t.bindOne("p", this.props.handlePrint, l3),
			t.bindOne("c", this.props.handleCountin, l3),
			t.bindOne("n", this.props.handleMetronome, l3),
			t.bindOne("e", this.props.handleTabEditor, l3),
			t.bindMeta("alt+s", this.props.handleIncreaseBpm, "global", "App", !0),
			t.bindMeta("alt+a", this.props.handleDecreaseBpm, "global", "App", !0),
			[
				{ key: "alt+1", speed: 25 },
				{ key: "alt+2", speed: 50 },
				{ key: "alt+3", speed: 75 },
				{ key: "alt+4", speed: 100 },
				{ key: "alt+5", speed: 125 },
				{ key: "alt+6", speed: 150 },
				{ key: "alt+7", speed: 175 },
			].forEach((e) => {
				t.bindMeta(
					e.key,
					this.props.handleChangeSpeed(e.speed),
					"global",
					"App",
					!0
				);
			});
	}
	componentWillUnmount() {
		let t = window.hotKeysManager;
		t.unbindOne("space", l3),
			t.unbindOne("l", l3),
			t.unbindOne("f", l3),
			t.unbindOne("m", l3),
			t.unbindOne("r", l3),
			t.unbindOne("t", l3),
			t.unbindOne("s", l3),
			t.unbindOne("p", l3),
			t.unbindOne("c", l3),
			t.unbindOne("n", l3),
			t.unbindOne("e", l3),
			this.resizeObserver && this.resizeObserver.disconnect();
	}
	render() {
		let {
				dispatch: t,
				user: e,
				demo: s,
				player: i,
				meta: o,
				part: a,
				cursor: n,
				screen: l,
				layer: { layer: r },
				device: p,
				route: u,
				isDeleted: h,
				tabEditor: d,
			} = this.props,
			c = u.isPanel,
			m = lM(e, s),
			y = l.isSmall,
			f = l.fullscreen,
			$ = tz(o),
			g = "saving" === d.status || "changes" === d.status,
			{ pitchShift: x } = i,
			_ = tK(
				() =>
					!!a.current &&
					!!a.current.tuning &&
					a.current.tuning.map((t) => t + x),
				[x, a]
			),
			b = o.allowedByLicense,
			v = !o.isFailed && !a.isFailed && b,
			L = v && !h && !!a.current && !!a.lines.lines.length,
			N = v && !h && (!a.current || !a.lines.lines.length),
			S = v && !m,
			k = v && !m && p.isPhone,
			T = tH((e) => t("tabEditor/setForm", e), []);
		return tF(
			"section",
			{
				className: f ? tA.tablatureFullscreen : tA.tablature,
				role: c ? "complementary" : "main",
			},
			tF(lk, { meta: o, user: e, cursor: n, part: a, player: i, isDeleted: h }),
			tF(y ? lx : n6, {
				...this.props,
				shouldPlay: i.shouldPlay,
				canPlay: i.canPlay || c,
				track: $,
				device: p,
				layer: r,
				plusAccess: m,
				loop: 0 !== i.position.loopEnd,
				type: i.type,
				speed: i.speed,
				pitchShift: i.pitchShift,
				pitchShiftAvailable: !a.current || !!a.current.tuning,
				isCountin: i.isCountin,
				isMetronome: i.isMetronome,
				tadEditorWarning: g,
				usedDrums: a.current && a.current.usedDrums,
			}),
			S && tF(ea, { key: "showroom", songId: o.songId }),
			tF(
				"div",
				{ class: tA.pane },
				N && tF(eo, null),
				L &&
					tO(
						aF,
						{
							dispatch: t,
							store: this.props.store,
							part: a.current,
							lines: a.lines.lines,
							height: a.lines.height,
							width: a.lines.width,
							scale: a.lines.scale,
							slicingMode: a.lines.slicingMode,
							isFullscreen: f,
							isSmallScreen: y,
							plusAccess: m,
							shouldPlay: i.shouldPlay,
							position: i.position,
							handlePitchshift: this.props.handlePitchshift,
							showPitchshiftPopup: "plus_pitchshift" === r,
							showPitchshiftLayer: "pitchshift" === r,
							tuning: _,
							layer: r,
							tabEditorData: d.data,
							setTabEditor: T,
							device: p,
							isLoggedIn: e.isLoggedIn,
						},
						a.lines.hash
					)
			),
			k && L && tF(lP, { key: "showroom-bottom" }),
			L && tF(ei, { withAds: S, device: p, copyright: !0 })
		);
	}
}
var lD = t(
	lC,
	"user",
	"demo",
	"player",
	"meta",
	"part",
	"cursor",
	"screen",
	"layer",
	"device",
	"route",
	"isDeleted",
	"tabEditor"
);
export { lD as default };
