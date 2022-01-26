import { l as e, g as t } from './index.0e02c5ee.js'
import './preact.89f2d999.js'
function a () {
  return !1
}
async function r (a, r) {
  const {
    meta: { songId: n, partId: p, current: s },
    player: { speed: i }
  } = a.get()
  if (i === r || !s) return
  const c = t(i) !== t(r)
  try {
    c && a.dispatch('player/suspend', 'speed'),
      a.dispatch('player/changeSpeed', { speed: r }),
      c && -1 !== n && -1 !== p && (await e(a, n, p, s.revisionId))
  } finally {
    const e = a.get()
    c &&
      e.meta.current &&
      t(r) === t(e.player.speed) &&
      n === e.meta.songId &&
      p === e.meta.partId &&
      s.revisionId === e.meta.current.revisionId &&
      a.dispatch('player/resume', 'speed')
  }
}
async function n (e, t) {
  e.get().player.pitchShift !== t && e.dispatch('player/changePitch', t)
}
async function p (t, a) {
  const {
    meta: { current: r, songId: n, partId: p },
    player: { type: s, audio: i }
  } = t.get()
  if (s === a || !r) return
  const c = !('mute' === a && i.hasSingleTrack)
  try {
    t.dispatch('player/suspend', 'type'),
      t.dispatch('player/changeType', { type: a }),
      c && -1 !== n && -1 !== p && (await e(t, n, p, r.revisionId))
  } finally {
    const e = t.get()
    e.meta.current &&
      a === e.player.type &&
      n === e.meta.songId &&
      p === e.meta.partId &&
      r.revisionId === e.meta.current.revisionId &&
      t.dispatch('player/resume', 'type')
  }
}
async function s (e) {
  e.dispatch('player/toggleLoop')
}
export {
  a as demo,
  n as plusChangePitch,
  r as plusChangeSpeed,
  p as plusChangeType,
  s as plusToggleLoop
}
//# sourceMappingURL=playerPlus.73cf87e1.js.map
