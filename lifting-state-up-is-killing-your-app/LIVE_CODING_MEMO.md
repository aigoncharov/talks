1. Describe initial setup. Talk briefly about `useState`.
1. Increase `size`. Introduce CPU throttling.
1. Decrease `size`. Add `console.log` to `Cell`.
1. Add keys. Talk briefly about implicit and explicit keys.
1. Introduce React DevTools. Inspect "Ranked" chart. Show why `Cell` is being re-rendered.
1. Keep `setContent` the same. Make `Cell` accept `rowI`, `cellI`. Make `setContent` use a callback to update state.
1. Go to React DevTools. Show that now parent is being re-rendered. Add `memo`.
1. Show console prints what we want now. Show in React DevTools how much time we spend at rendering `App`.
1. Add `Field` without subscription.
1. Show `setCell` is being called, but not rendered.
1. Introduce `forceRender`. Add subscriptions.
1. Examine React DevTools.
1. Talk about unsubscribing and memory leak.
1. Add context and put the field in there.
1. Remind about premature optimizations.
