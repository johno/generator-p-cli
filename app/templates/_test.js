import test from 'ava'
import cp from 'child_process'

test.cb('<%= packageName %> does something awesome', t => {
  t.plan(1)

  cp.execFile('./index.js', (err, stdout, stderr) => {
    t.is(stdout.trim(), 'hello, world!')
    t.end()
  })
})
