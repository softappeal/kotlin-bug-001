package bug

import kotlin.test.*

fun doIt(doSomething: DoSomething): DoSomething = { doSomething() }

val DoIt: DoSomething = doIt(DoPrint)

class DoItTest {
    @Test
    fun test() {
        DoIt()
    }
}
