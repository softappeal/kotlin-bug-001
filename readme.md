### Kotlin compiler generates invalid code depending on file names on any platform except for JVM.

See https://youtrack.jetbrains.com/issue/KT-38017.

- The Kotlin compiler generates incorrect code for JS and Windows platform. JVM works fine.

- If file A.kt is renamed to C.kt, code runs fine on any platform.

- The difference between the [invalid generated JS code](bug-test-AB.js) and the [correct generated JS code](bug-test-BC.js) is:

    invalid
    ```
    DoIt = doIt(DoPrint);
    DoPrint = DoPrint$lambda;
    ```
    
    correct
    ```
    DoPrint = DoPrint$lambda;
    DoIt = doIt(DoPrint);
    ```
  
    So, obviously the statement ordering is wrong.
