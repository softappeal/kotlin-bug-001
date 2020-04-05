package bug

typealias DoSomething = () -> Unit

val DoPrint: DoSomething = { println("print") }
