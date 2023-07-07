# LINT rules:

The following is a breakdown of lint rules that are indicated in the `.eslintrc` file. Most of these coincide with the
Air-Bnb ruleset, however, rather than just extending that ruleset, the actual rules were included, so that it is clear
what all the rules are and the reason they might be used.

## [`@typescript-eslint/adjacent-overload-signatures`](https://typescript-eslint.io/rules/adjacent-overload-signatures/)
- **What it does:** Enforces that overload signatures are grouped together.
- **Why:** Improves code readability.

## [`@typescript-eslint/ban-ts-comment`](https://typescript-eslint.io/rules/ban-ts-comment/)
- **What it does:** Bans the use of TypeScript suppression comments like `// @ts-ignore` or `// @ts-nocheck`.
- **Why:** These comments suppress TypeScript error reports, which can hide real issues in the code.

## [`@typescript-eslint/ban-types`](https://typescript-eslint.io/rules/ban-types/)
- **What it does:** Bans specific types that are considered problematic.
- **Why:** Some types, like `Object`, `{}`, or `Function`, can lead to unexpected behavior or bugs.

## [`@typescript-eslint/no-array-constructor`](https://typescript-eslint.io/rules/no-array-constructor/) / [`no-array-constructor`](https://eslint.org/docs/latest/rules/no-array-constructor)
- **What it does:** Disallows the use of the `Array` constructor to create a new array.
- **Why:** Using the `Array` constructor can lead to confusion and unexpected behavior. It's recommended to use array literals instead.

## [`@typescript-eslint/no-empty-function`](https://typescript-eslint.io/rules/no-empty-function/) / [`no-empty-function`](https://eslint.org/docs/latest/rules/no-empty-function)
- **What it does:** Disallows empty functions.
- **Why:** Empty functions can be confusing because it's not clear what their purpose is. The base rule is turned off because the TypeScript-specific rule covers more cases.

## [`@typescript-eslint/no-empty-interface`](https://typescript-eslint.io/rules/no-empty-interface/)
- **What it does:** Disallows the declaration of empty interfaces.
- **Why:** Empty interfaces are often an indicator of missing type information.

## [`@typescript-eslint/no-explicit-any`](https://typescript-eslint.io/rules/no-explicit-any/)
- **What it does:** Disallows usage of the `any` type.
- **Why:** The `any` type bypasses TypeScript's type checking and can lead to runtime errors.

## [`@typescript-eslint/no-extra-non-null-assertion`](https://typescript-eslint.io/rules/no-extra-non-null-assertion/)
- **What it does:** Disallows unnecessary non-null assertions.
- **Why:** Unnecessary non-null assertions do not affect runtime behavior but can confuse readers.

## [`@typescript-eslint/no-extra-semi`](https://typescript-eslint.io/rules/no-extra-semi/) / [`no-extra-semi`](https://eslint.org/docs/latest/rules/no-extra-semi)
- **What it does:** Disallows unnecessary semicolons.
- **Why:** Unnecessary semicolons can lead to confusion and inconsistencies in the code. The base rule is turned off because the TypeScript-specific rule covers more cases.

## [`@typescript-eslint/no-inferrable-types`](https://typescript-eslint.io/rules/no-inferrable-types/)
- **What it does:** Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean.
- **Why:** These types can be inferred by TypeScript, so explicitly declaring them is unnecessary and can lead to more verbose code.

## [`@typescript-eslint/no-misused-new`](https://typescript-eslint.io/rules/no-misused-new/)
- **What it does:** Disallows the use of `new` for non-constructor functions and the use of `new` or `constructor` outside of a class.
- **Why:** Misusing `new` can lead to unexpected behavior and errors.

## [`@typescript-eslint/no-non-null-asserted-optional-chain`](https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain/)
- **What it does:** Disallows non-null assertions on the result of an optional chain expression.
- **Why:** Non-null assertions cancel the benefits of optional chaining and can lead to runtime errors if the value is null or undefined.

## [`@typescript-eslint/no-non-null-assertion`](https://typescript-eslint.io/rules/no-non-null-assertion/)
- **What it does:** Disallows non-null assertions using the `!` postfix operator.
- **Why:** Non-null assertions can lead to runtime errors if the value is null or undefined. It's safer to handle these cases explicitly.

## [`@typescript-eslint/no-this-alias`](https://typescript-eslint.io/rules/no-this-alias/)
- **What it does:** Disallows aliasing `this`.
- **Why:** Alias `this` can be confusing and is often an indicator of a design problem.

## [`@typescript-eslint/no-unnecessary-type-constraint`](https://typescript-eslint.io/rules/no-unnecessary-type-constraint/)
- **What it does:** Disallows unnecessary constraints on a generic type.
- **Why:** Unnecessary type constraints can lead to more verbose and less flexible code.

## [`@typescript-eslint/no-unused-vars`](https://typescript-eslint.io/rules/no-unused-vars/) / [`no-unused-vars`](https://eslint.org/docs/latest/rules/no-unused-vars)
- **What it does:** Disallows variables that are declared but not used. The `{vars: 'all', args: 'after-used', ignoreRestSiblings: true}` option configures the rule to check all variables and arguments for usage, but ignore rest sibling variables.
- **Why:** Unused variables can lead to confusion and unnecessary code. The base rule is turned off because the TypeScript-specific rule covers more cases.

## [`@typescript-eslint/no-var-requires`](https://typescript-eslint.io/rules/no-var-requires/)
- **What it does:** Disallows the use of `require` statements except in import statements.
- **Why:** In TypeScript, `import` statements are the preferred way to bring in external modules. Using `require` can lead to less idiomatic code.

## [`@typescript-eslint/prefer-as-const`](https://typescript-eslint.io/rules/prefer-as-const/)
- **What it does:** Prefers a literal type assertion `as const` over literal or primitive type annotations.
- **Why:** The `as const` assertion is more concise and doesn't allow the literal to be widened to the primitive type.

## [`@typescript-eslint/prefer-namespace-keyword`](https://typescript-eslint.io/rules/prefer-namespace-keyword/)
- **What it does:** Prefers the use of the `namespace` keyword instead of `module` to declare custom TypeScript modules.
- **Why:** The `namespace` keyword is more modern and is the preferred way to declare custom TypeScript modules.

## [`@typescript-eslint/triple-slash-reference`](https://typescript-eslint.io/rules/triple-slash-reference/)
- **What it does:** Disallows triple slash references that import types, `/// <reference types="" />`. These should be replaced with ES2015 `import` statements.
- **Why:** ES2015 `import` statements are the preferred way to import types. Triple slash references are considered outdated.

## [`accessor-pairs`](https://eslint.org/docs/latest/rules/accessor-pairs)
- **What it does:** Enforces getter/setter pairs in objects.
- **Why:** Having getters without setters and vice versa can lead to unexpected behavior.

## [`array-bracket-newline`](https://eslint.org/docs/latest/rules/array-bracket-newline)
- **What it does:** Enforces line breaks between array brackets.
- **Why:** Consistent line breaks can make the code more readable.

## [`array-bracket-spacing`](https://eslint.org/docs/latest/rules/array-bracket-spacing)
- **What it does:** Disallows spacing inside array brackets.
- **Why:** Consistent spacing can make the code more readable.

## [`array-callback-return`](https://eslint.org/docs/latest/rules/array-callback-return)
- **What it does:** Enforces that array method callbacks return a value.
- **Why:** Array methods like `map`, `filter`, and `reduce` expect the callback to return a value. Not doing so can lead to unexpected results.

## [`array-element-newline`](https://eslint.org/docs/latest/rules/array-element-newline)
- **What it does:** Enforces line breaks between array elements.
- **Why:** Consistent line breaks can make the code more readable.

## [`arrow-body-style`](https://eslint.org/docs/latest/rules/arrow-body-style)
- **What it does:** Requires braces around arrow function bodies only when necessary.
- **Why:** This can make the code more concise when the arrow function body consists of a single expression.

## [`arrow-parens`](https://eslint.org/docs/latest/rules/arrow-parens)
- **What it does:** Requires parentheses around arrow function arguments.
- **Why:** This can make the code more readable, especially when the arguments include complex expressions.

## [`arrow-spacing`](https://eslint.org/docs/latest/rules/arrow-spacing)
- **What it does:** Requires spaces before and after the arrow (`=>`) in arrow functions.
- **Why:** Consistent spacing can make the code more readable.

## [`block-scoped-var`](https://eslint.org/docs/latest/rules/block-scoped-var)
- **What it does:** Enforces the usage of variables within the scope they are defined.
- **Why:** Variables should be used within their scope to prevent errors and improve code readability.

## [`block-spacing`](https://eslint.org/docs/latest/rules/block-spacing)
- **What it does:** Requires spaces inside of blocks after opening and before closing braces.
- **Why:** Consistent spacing can make the code more readable.

## [`brace-style`](https://eslint.org/docs/latest/rules/brace-style)
- **What it does:** Enforces a specific brace style for blocks.
- **Why:** Consistent brace style can make the code more readable.

## [`camelcase`](https://eslint.org/docs/latest/rules/camelcase)
- **What it does:** Enforces camelcase naming convention.
- **Why:** Camelcase is a common naming convention in JavaScript and can make the code more readable.

## [`class-methods-use-this`](https://eslint.org/docs/latest/rules/class-methods-use-this)
- **What it does:** Enforces that class methods utilize `this`.
- **Why:** If a class method does not use `this`, it can often be made into a static function.

## [`comma-dangle`](https://eslint.org/docs/latest/rules/comma-dangle)
- **What it does:** Requires trailing commas when the last element or property is in a different line than the closing `]` or `}`.
- **Why:** Trailing commas can make version control diffs cleaner and editing the code easier.

## [`comma-spacing`](https://eslint.org/docs/latest/rules/comma-spacing)
- **What it does:** Enforces spacing around commas.
- **Why:** Consistent spacing can make the code more readable.

## [`comma-style`](https://eslint.org/docs/latest/rules/comma-style)
- **What it does:** Enforces a specific placement for commas.
- **Why:** Consistent comma placement can make the code more readable.

## [`complexity`](https://eslint.org/docs/latest/rules/complexity)
- **What it does:** Limits the cyclomatic complexity of code.
- **Why:** High cyclomatic complexity can make code hard to understand and maintain.
- Default level is usually 20, however, complexity higher than 10 is usually considered bad practice, so set to 8.

## [`computed-property-spacing`](https://eslint.org/docs/latest/rules/computed-property-spacing)
- **What it does:** Disallows spacing inside computed property brackets.
- **Why:** Consistent spacing can make the code more readable.

## [`consistent-return`](https://eslint.org/docs/latest/rules/consistent-return)
- **What it does:** Requires function to either always return a value or never return a value.
- **Why:** Having some code paths that return a value and others that do not can be confusing and might be a sign of a mistake in the code.

## [`constructor-super`](https://eslint.org/docs/latest/rules/constructor-super)
- **What it does:** Requires `super()` calls in constructors of derived classes.
- **Why:** Not calling `super()` in a derived class constructor can lead to a reference error.

## [`curly`](https://eslint.org/docs/latest/rules/curly)
- **What it does:** Enforces consistent brace style for all control statements.
- **Why:** Consistent brace style can make the code more readable and reduce the chance of making mistakes.

## [`default-case`](https://eslint.org/docs/latest/rules/default-case)
- **What it does:** Requires `default` case in `switch` statements.
- **Why:** A `default` case in a `switch` statement is often useful for handling unexpected input.

## [`default-case-last`](https://eslint.org/docs/latest/rules/default-case-last)
- **What it does:** Enforces that the `default` case in a `switch` statement is the last case.
- **Why:** Having the `default` case last can make the code more readable and logical.

## [`default-param-last`](https://eslint.org/docs/latest/rules/default-param-last)
- **What it does:** Enforces default parameters to be last.
- **Why:** Having default parameters last can make the code more readable and logical.

## [`dot-notation`](https://eslint.org/docs/latest/rules/dot-notation)
- **What it does:** Enforces the use of dot notation whenever possible.
- **Why:** Dot notation is often more readable and concise than bracket notation.

## [`dot-location`](https://eslint.org/docs/latest/rules/dot-location)
- **What it does:** Enforces consistent newlines before and after dots.
- **Why:** Consistent dot placement can make the code more readable.

## [`eol-last`](https://eslint.org/docs/latest/rules/eol-last)
- **What it does:** Requires a newline at the end of files.
- **Why:** A newline at the end of files can make version control diffs cleaner and editing the code easier.

## [`eqeqeq`](https://eslint.org/docs/latest/rules/eqeqeq)
- **What it does:** Requires the use of `===` and `!==`.
- **Why:** Using `===` and `!==` can prevent type coercion errors.

## [`for-direction`](https://eslint.org/docs/latest/rules/for-direction)
- **What it does:** Enforces "for" loop update clause moving the counter in the right direction.
- **Why:** This rule prevents infinite loops from occurring due to counter logic errors in "for" loops.

## [`fp/no-arguments`](https://github.com/jfmengels/eslint-plugin-fp/blob/master/docs/rules/no-arguments.md)
- **What it does:** Disallows the use of `arguments` in functions.
- **Why:** The `arguments` object is not an array, but rather an array-like object. It can lead to confusion and is not as flexible as rest parameters. In functional programming, it's recommended to use rest parameters instead.

## [`fp/no-class`](https://github.com/jfmengels/eslint-plugin-fp/blob/master/docs/rules/no-class.md)
- **What it does:** Disallows the use of `class` declarations and expressions.
- **Why:** The functional programming paradigm encourages the use of pure functions over classes. Classes can introduce state and side effects, which can make code harder to reason about and test.

## [`fp/no-delete`](https://github.com/jfmengels/eslint-plugin-fp/blob/master/docs/rules/no-delete.md)
- **What it does:** Disallows the use of the `delete` operator.
- **Why:** The `delete` operator mutates an object by removing a property from it, which is against the principles of functional programming.

## [`fp/no-loops`](https://github.com/jfmengels/eslint-plugin-fp/blob/master/docs/rules/no-loops.md)
- **What it does:** Disallows the use of loops.
- **Why:** In functional programming, it's recommended to use functions like `map`, `filter`, and `reduce` instead of loops. These functions express the intent more clearly and are less prone to errors caused by mutable state.

## [`fp/no-mutating-assign`](https://github.com/jfmengels/eslint-plugin-fp/blob/master/docs/rules/no-mutating-assign.md)
- **What it does:** Disallows the use of `Object.assign` with a target object that is not `{}`.
- **Why:** This is because `Object.assign` mutates the target object, which is against the principles of functional programming.

## [`fp/no-mutating-methods`](https://github.com/jfmengels/eslint-plugin-fp/blob/master/docs/rules/no-mutating-methods.md)
- **What it does:** Disallows the use of mutating methods like `push`, `pop`, `shift`, `unshift`, `reverse`, `splice`, `sort`, and `delete`. The `{allowedObjects: ['_']}` option allows the use of mutating methods on the `_` object, which is often used as a placeholder for lodash or underscore.
- **Why:** Mutating methods can lead to unpredictable behavior and are against the principles of functional programming.

## [`fp/no-this`](https://github.com/jfmengels/eslint-plugin-fp/blob/master/docs/rules/no-this.md)
- **What it does:** Disallows the use of `this`.
- **Why:** In functional programming, `this` is avoided because it refers to the context in which a function is called, which can lead to unpredictable behavior.

## [`function-call-argument-newline`](https://eslint.org/docs/latest/rules/function-call-argument-newline)
- **What it does:** Enforces consistent line breaks between function call arguments.
- **Why:** Consistent line breaks can make the code more readable.

## [`func-call-spacing`](https://eslint.org/docs/latest/rules/func-call-spacing)
- **What it does:** Disallows spacing between function and its invocation.
- **Why:** Consistent spacing can make the code more readable.

## [`func-name-matching`](https://eslint.org/docs/latest/rules/func-name-matching)
- **What it does:** Requires function declarations to have a name that matches the name of the variable or property to which they are assigned.
- **Why:** Matching names can make the code more readable and can be useful for debugging.
- This rule is turned off because there are often use cases for renaming functions to prevent ambiguity.

## [`func-names`](https://eslint.org/docs/latest/rules/func-names)
- **What it does:** Requires named function expressions.
- **Why:** Named function expressions can make the code more readable and can be useful for debugging.

## [`func-style`](https://eslint.org/docs/latest/rules/func-style)
- **What it does:** Enforces a specific style for function declarations and expressions.
- **Why:** Consistent function style can make the code more readable.
- This rule is turned off because there are other rules that affect this.

## [`function-paren-newline`](https://eslint.org/docs/latest/rules/function-paren-newline)
- **What it does:** Enforces consistent line breaks inside function parentheses.
- **Why:** Consistent line breaks can make the code more readable.

## [`generator-star-spacing`](https://eslint.org/docs/latest/rules/generator-star-spacing)
- **What it does:** Requires no space before and a space after the `*` in generator functions.
- **Why:** Consistent spacing can make the code more readable.

## [`getter-return`](https://eslint.org/docs/latest/rules/getter-return)
- **What it does:** Enforces getter functions to always return a value. Implicit returns are allowed.
- **Why:** Getter functions without a return statement are a common source of bugs.

## [`global-require`](https://eslint.org/docs/latest/rules/global-require)
- **What it does:** Disallows `require` calls to be mixed with regular variable declarations.
- **Why:** This rule aims to ensure `require` calls are made in the top level of a module's scope. This makes dependencies more visible and easier to manage.

## [`grouped-accessor-pairs`](https://eslint.org/docs/latest/rules/grouped-accessor-pairs)
- **What it does:** Requires grouped definitions of accessor functions in object literals and classes.
- **Why:** Getters and setters that are not grouped near each other can be difficult to follow.

## [`guard-for-in`](https://eslint.org/docs/latest/rules/guard-for-in)
- **What it does:** Requires `for-in` loops to include an `if` statement.
- **Why:** This rule aims to prevent bugs from prototype pollution by ensuring that properties are not directly taken from the prototype chain.

## [`id-denylist`](https://eslint.org/docs/latest/rules/id-denylist)
- **What it does:** Disallows specific identifiers.
- **Why:** Certain generic names could be hard to understand when maintaining code.
- This rule is off by default, however, this can be set later if a good reason is found for doing so.

## [`id-length`](https://eslint.org/docs/latest/rules/id-length)
- **What it does:** Enforces minimum and maximum identifier lengths.
- **Why:** This can prevent the use of overly short or long identifiers.
- This rule currently specifies a range of 3-16 characters. If this is too limiting, it can be changed later.

## [`implicit-arrow-linebreak`](https://eslint.org/docs/latest/rules/implicit-arrow-linebreak)
- **What it does:** Requires the arrow function body to be on the same line as the arrow (`=>`).
- **Why:** Consistent line breaks can make the code more readable.

## [`import/default`](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/default.md)
- **What it does:** Ensures that a default import corresponds to a default export in the imported module.
- **Why:** Importing a default export that doesn't exist can lead to runtime errors.

## [`import/dynamic-import-chunkname`](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/dynamic-import-chunkname.md)
- **What it does:** Enforces a specific format for chunknames in dynamic `import` statements.
- **Why:** This can be useful for ensuring a consistent naming convention for chunks.
- This rule is turned off because there are currently no plans to use Webpack for the build. If that changes, this rule can be revisited.

## [`import/export`](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/export.md)
- **What it does:** Ensures that all exports are valid.
- **Why:** Invalid exports can lead to issues when the module is imported.

## [`import/exports-last`](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/exports-last.md)
- **What it does:** Requires that all `export` statements be at the bottom of the file.
- **Why:** Having all `export` statements at the bottom of the file can make the code easier to read and maintain.

## [`import/extensions`](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/extensions.md)
- **What it does:** Enforces or disallows file extensions in `import` statements.
- **Why:** Having consistent `import` statements can make the code easier to read and maintain.

## [`import/first`](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/first.md)
- **What it does:** Requires that all `import` statements be at the top of the file.
- **Why:** Having all `import` statements at the top of the file makes the dependencies of the module clear.

## [`import/group-exports`](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/group-exports.md)
- **What it does:** Requires that multiple exports be grouped into a single `export` statement.
- **Why:** Grouping exports can make the code more concise.

## [`import/max-dependencies`](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/max-dependencies.md)
- **What it does:** Limits the maximum number of dependencies a module can have.
- **Why:** Modules with too many dependencies can be hard to understand and maintain.

## [`import/named`](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/named.md)
- **What it does:** Ensures that a named import corresponds to a named export in the imported module.
- **Why:** Importing a named export that doesn't exist can lead to runtime errors.

## [`import/namespace`](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/namespace.md)
- **What it does:** Ensures that a namespace import corresponds to a module that exports an object with properties.
- **Why:** Importing a namespace from a module that doesn't export an object can lead to runtime errors.

## [`import/newline-after-import`](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/newline-after-import.md)
- **What it does:** Enforces a newline after the last `import` statement in a group.
- **Why:** This can improve readability by visually separating `import` statements from the rest of the code.

## [`import/no-absolute-path`](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-absolute-path.md)
- **What it does:** Disallows `import` statements with absolute paths.
- **Why:** Absolute paths can be less portable and harder to maintain than relative paths.

## [`import/no-amd`](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-amd.md)
- **What it does:** Disallows the use of AMD `define` and `require`.
- **Why:** In ES6 modules, `import` and `export` are the preferred way to handle modules. AMD is considered outdated.

## [`import/no-anonymous-default-export`](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-anonymous-default-export.md)
- **What it does:** Disallows anonymous values as default exports.
- **Why:** Anonymous default exports can make it harder to identify the exported value.

## [`import/no-cycle`](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-cycle.md)
- **What it does:** Disallows circular dependencies between modules.
- **Why:** Circular dependencies can lead to initialization issues and can make the code harder to understand and maintain.

## [`import/no-deprecated`](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-deprecated.md)
- **What it does:** Disallows the use of deprecated symbols from imported modules.
- **Why:** Using deprecated symbols can lead to issues in the future when the symbols are removed.

## [`import/no-duplicates`](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-duplicates.md)
- **What it does:** Disallows duplicate `import` statements for the same module.
- **Why:** Duplicate `import` statements can lead to confusion and are unnecessary.

## [`import/no-dynamic-require`](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-dynamic-require.md)
- **What it does:** Disallows `require` statements with dynamic expressions.
- **Why:** Dynamic `require` can make the dependencies of a module unclear and can lead to issues with static analysis tools.

## [`import/no-extraneous-dependencies`](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-extraneous-dependencies.md)
- **What it does:** Disallows the use of modules that are not listed as dependencies in the project's `package.json`.
- **Why:** Using modules that are not listed as dependencies can lead to errors in production when the modules are not installed.

## [`import/no-import-module-exports`](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-import-module-exports.md)
- **What it does:** Disallows the use of `import` and `module.exports` in the same file.
- **Why:** Mixing `import` and `module.exports` can be confusing and is considered a bad practice.

## [`import/no-mutable-exports`](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-mutable-exports.md)
- **What it does:** Disallows the mutation of exported values.
- **Why:** Mutating exports can lead to unpredictable behavior and is considered a bad practice.

## [`import/no-named-as-default`](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-as-default.md)
- **What it does:** Disallows the use of a named export as the default export.
- **Why:** This can be confusing because when the module is imported, it might not be clear whether the default or named export is being used.

## [`import/no-named-as-default-member`](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-as-default-member.md)
- **What it does:** Disallows the use of a named export as a property on the default export.
- **Why:** This can be confusing because it might not be clear whether the property refers to the named export or a property of the default export.

## [`import/no-named-default`](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-default.md)
- **What it does:** Disallows the use of the `default` keyword as a named import.
- **Why:** The `default` keyword is reserved for default exports and should not be used as a named import.

## [`import/no-namespace`](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-namespace.md)
- **What it does:** Disallows `import * as name` syntax.
- **Why:** This syntax imports all exports from a module, which can lead to less clear code. 

## [`import/no-relative-packages`](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-relative-packages.md)
- **What it does:** Disallows importing packages from relative paths.
- **Why:** Importing packages from relative paths can be confusing and is considered a bad practice.

## [`import/no-restricted-paths`](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-restricted-paths.md)
- **What it does:** Disallows `import` statements that import modules from restricted paths.
- **Why:** This can be useful for enforcing a specific directory structure.
- We currently have no restricted paths, so leaving off, however, leaving here in case we have a reason to set any

## [`import/no-self-import`](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-self-import.md)
- **What it does:** Disallows a module from importing itself.
- **Why:** Importing a module from itself can lead to a circular dependency, which can cause runtime errors.

## [`import/no-unassigned-import`](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unassigned-import.md)
- **What it does:** Disallows `import` statements that only have side effects.
- **Why:** `import` statements that only have side effects can be confusing and can lead to unexpected behavior.

## [`import/no-unresolved`](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unresolved.md)
- **What it does:** Ensures that an import path is correct and resolvable. The `{commonjs: true, caseSensitive: true, caseSensitiveStrict: false}` option configures the rule to apply to CommonJS `require` calls and to be case-sensitive.
- **Why:** Incorrect or unresolvable import paths can lead to runtime errors.

## [`import/no-unused-modules`](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unused-modules.md)
- **What it does:** Disallows modules that are not used.
- **Why:** Unused modules can lead to unnecessary code.

## [`import/no-useless-path-segments`](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-useless-path-segments.md)
- **What it does:** Disallows unnecessary path segments in `import` and `require` statements.
- **Why:** Unnecessary path segments can make `import` and `require` statements harder to read and maintain.

## [`import/no-webpack-loader-syntax`](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-webpack-loader-syntax.md)
- **What it does:** Disallows Webpack loader syntax in `import` statements.
- **Why:** Webpack loader syntax in `import` statements ties the code to Webpack, which can make it less portable.

## [`import/order`](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md)
- **What it does:** Enforces a convention in the order of `import` statements.
- **Why:** Having a consistent order for `import` statements can make the code easier to read and maintain.

## [`import/prefer-default-export`](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/prefer-default-export.md)
- **What it does:** Enforces that modules with a single export should use a default export rather than a named export.
- **Why:** This can make importing the module more straightforward.

## [`indent`](https://eslint.org/docs/latest/rules/indent)
- **What it does:** Enforces consistent indentation.
- **Why:** Consistent indentation can make the code more readable.

## [`init-declarations`](https://eslint.org/docs/latest/rules/init-declarations)
- **What it does:** Requires variables to be initialized in their declarations.
- **Why:** Initializing variables in their declarations can prevent errors due to hoisting and can make the code more readable.

## [`jsx-quotes`](https://eslint.org/docs/latest/rules/jsx-quotes)
- **What it does:** Enforces the use of double quotes for JSX attribute values.
- **Why:** Consistent quote style can make the code more readable.

## [`key-spacing`](https://eslint.org/docs/latest/rules/key-spacing)
- **What it does:** Enforces consistent spacing between keys and values in object literal properties.
- **Why:** Consistent spacing can make the code more readable.

## [`keyword-spacing`](https://eslint.org/docs/latest/rules/keyword-spacing)
- **What it does:** Enforces consistent spacing before and after keywords.
- **Why:** Consistent spacing can make the code more readable.

## [`line-comment-position`](https://eslint.org/docs/latest/rules/line-comment-position)
- **What it does:** Enforces a specific position for line comments.
- **Why:** Consistent comment position can make the code more readable.
- Leaving this as off for now, we can change later if there is a reason. It seems likely that there are times when it is
  preferable to have comments beside code and times when it is more preferable to have it above.

## [`linebreak-style`](https://eslint.org/docs/latest/rules/linebreak-style)
- **What it does:** Enforces consistent linebreak style.
- **Why:** Consistent linebreak style can make the code more readable and can prevent issues in different environments.

## [`lines-between-class-members`](https://eslint.org/docs/latest/rules/lines-between-class-members)
- **What it does:** Requires empty lines between class members.
- **Why:** Empty lines between class members can make the code more readable.

## [`lines-around-comment`](https://eslint.org/docs/latest/rules/lines-around-comment)
- **What it does:** Requires empty lines before and/or after comments.
- **Why:** Empty lines around comments can make the code more readable.
- Leaving this off. Can be changed later if there is a good use case.

## [`lines-around-directive`](https://eslint.org/docs/latest/rules/lines-around-directive)
- **What it does:** Requires empty lines before and after directive statements (like `'use strict'`).
- **Why:** Empty lines around directive statements can make the code more readable.

## [`max-classes-per-file`](https://eslint.org/docs/latest/rules/max-classes-per-file)
- **What it does:** Limits the number of classes that can be in a file to 1.
- **Why:** Having too many classes in a file can make the code harder to understand and maintain.

## [`max-depth`](https://eslint.org/docs/latest/rules/max-depth)
- **What it does:** Enforces a maximum depth that blocks can be nested.
- **Why:** Limiting block depth can make the code more readable.

## [`max-len`](https://eslint.org/docs/latest/rules/max-len)
- **What it does:** Enforces a maximum line length.
- **Why:** Limiting line length can make the code more readable.

## [`max-lines`](https://eslint.org/docs/latest/rules/max-lines)
- **What it does:** Enforces a maximum number of lines per file.
- **Why:** Limiting the number of lines per file can make the code more manageable.

## [`max-lines-per-function`](https://eslint.org/docs/latest/rules/max-lines-per-function)
- **What it does:** Enforces a maximum number of lines per function.
- **Why:** Limiting the number of lines per function can make the code more manageable.

## [`max-nested-callbacks`](https://eslint.org/docs/latest/rules/max-nested-callbacks)
- **What it does:** Enforces a maximum depth that callbacks can be nested.
- **Why:** Limiting callback depth can make the code more readable and can prevent overly complex code.

## [`max-params`](https://eslint.org/docs/latest/rules/max-params)
- **What it does:** Enforces a maximum number of parameters in function definitions.
- **Why:** Limiting the number of parameters can make the code more manageable and can prevent overly complex functions.

## [`max-statements`](https://eslint.org/docs/latest/rules/max-statements)
- **What it does:** Enforces a maximum number of statements allowed in function blocks.
- **Why:** Limiting the number of statements can make the code more manageable and can prevent overly complex functions.

## [`max-statements-per-line`](https://eslint.org/docs/latest/rules/max-statements-per-line)
- **What it does:** Enforces a maximum number of statements allowed per line.
- **Why:** Limiting the number of statements per line can make the code more readable.

## [`multiline-comment-style`](https://eslint.org/docs/latest/rules/multiline-comment-style)
- **What it does:** Enforces a particular style for multiline comments.
- **Why:** Consistent comment style can make the code more readable.
- Leaving off, as there are often use cases for either style.

## [`multiline-ternary`](https://eslint.org/docs/latest/rules/multiline-ternary)
- **What it does:** Enforces newlines between operands of a ternary expression if the expression spans multiple lines.
- **Why:** Consistent line breaks can make the code more readable.

## [`new-cap`](https://eslint.org/docs/latest/rules/new-cap)
- **What it does:** Requires constructor names to start with a capital letter.
- **Why:** This convention differentiates constructors from other functions.

## [`new-parens`](https://eslint.org/docs/latest/rules/new-parens)
- **What it does:** Requires parentheses when invoking a constructor with no arguments.
- **Why:** This can make the code more readable and can prevent potential errors in some JavaScript engines.

## [`newline-per-chained-call`](https://eslint.org/docs/latest/rules/newline-per-chained-call)
- **What it does:** Requires a newline after each call in a method chain if the method chain spans multiple lines.
- **Why:** Consistent line breaks can make the code more readable.

## [`no-alert`](https://eslint.org/docs/latest/rules/no-alert)
- **What it does:** Disallows the use of `alert`, `confirm`, and `prompt`.
- **Why:** These functions are often used for debugging and are not appropriate for production code.

## [`no-async-promise-executor`](https://eslint.org/docs/latest/rules/no-async-promise-executor)
- **What it does:** Disallows using an async function as a Promise executor.
- **Why:** Using an async function as a Promise executor can lead to unexpected behavior.

## [`no-await-in-loop`](https://eslint.org/docs/latest/rules/no-await-in-loop)
- **What it does:** Disallows `await` inside of loops.
- **Why:** Using `await` inside a loop can lead to sequential execution of promises, which can slow down performance. It's usually better to use `Promise.all()` for concurrent execution.

## [`no-bitwise`](https://eslint.org/docs/latest/rules/no-bitwise)
- **What it does:** Disallows bitwise operators.
- **Why:** Bitwise operators are often typos and can be confusing to read.

## [`no-buffer-constructor`](https://eslint.org/docs/latest/rules/no-buffer-constructor)
- **What it does:** Disallows use of the `Buffer()` constructor.
- **Why:** The `Buffer()` constructor has several issues and is considered a security risk. It's recommended to use `Buffer.from()`, `Buffer.alloc()`, and `Buffer.allocUnsafe()` instead.

## [`no-caller`](https://eslint.org/docs/latest/rules/no-caller)
- **What it does:** Disallows the use of `arguments.caller` and `arguments.callee`.
- **Why:** These properties are deprecated and can make code harder to understand and maintain.

## [`no-case-declarations`](https://eslint.org/docs/latest/rules/no-case-declarations)
- **What it does:** Disallows lexical declarations in case clauses.
- **Why:** Lexical declarations in case clauses can lead to unexpected behavior due to how the JavaScript scoping rules work.

## [`no-class-assign`](https://eslint.org/docs/latest/rules/no-class-assign)
- **What it does:** Disallows reassigning class declarations.
- **Why:** Reassigning class declarations can lead to unexpected behavior.

## [`no-compare-neg-zero`](https://eslint.org/docs/latest/rules/no-compare-neg-zero)
- **What it does:** Disallows comparing against -0.
- **Why:** Comparing against -0 can lead to unexpected behavior because -0 and +0 are treated as the same.

## [`no-cond-assign`](https://eslint.org/docs/latest/rules/no-cond-assign)
- **What it does:** Disallows assignment operators in conditional expressions.
- **Why:** Assignments in conditionals can be easily confused with equality checks, leading to potential bugs.

## [`no-confusing-arrow`](https://eslint.org/docs/latest/rules/no-confusing-arrow)
- **What it does:** Disallows arrow functions where they could be confused with comparisons.
- **Why:** This can prevent confusion and errors in code reading and editing.

## [`no-console`](https://eslint.org/docs/latest/rules/no-console)
- **What it does:** Disallows the use of `console`.
- **Why:** Using `console` can lead to unintended output in the console, which can be particularly problematic in production environments.

## [`no-const-assign`](https://eslint.org/docs/latest/rules/no-const-assign)
- **What it does:** Disallows reassigning `const` variables.
- **Why:** `const` variables are read-only, so reassigning them leads to a syntax error.

## [`no-constant-condition`](https://eslint.org/docs/latest/rules/no-constant-condition)
- **What it does:** Disallows constant expressions in conditions.
- **Why:** Constant conditions usually indicate a mistake in the code.

## [`no-constructor-return`](https://eslint.org/docs/latest/rules/no-constructor-return)
- **What it does:** Disallows returning a value from a constructor.
- **Why:** Returning a value from a constructor can be a source of confusion and bugs.

## [`no-continue`](https://eslint.org/docs/latest/rules/no-continue)
- **What it does:** Disallows `continue` statements.
- **Why:** `continue` statements can make the control flow of the code more difficult to understand.

## [`no-control-regex`](https://eslint.org/docs/latest/rules/no-control-regex)
- **What it does:** Disallows control characters in regular expressions.
- **Why:** Control characters in regular expressions can make them hard to read and understand.

## [`no-debugger`](https://eslint.org/docs/latest/rules/no-debugger)
- **What it does:** Disallows the use of `debugger`.
- **Why:** Leaving debugger statements in the code can cause the browser to stop executing code, which is not desirable in a production environment.

## [`no-delete-var`](https://eslint.org/docs/latest/rules/no-delete-var)
- **What it does:** Disallows deleting variables.
- **Why:** Deleting variables can lead to unexpected behavior.

## [`no-div-regex`](https://eslint.org/docs/latest/rules/no-div-regex)
- **What it does:** Disallows division operators explicitly at the beginning of regular expressions.
- **Why:** This rule aims to prevent confusion between division and regular expressions.

## [`no-dupe-args`](https://eslint.org/docs/latest/rules/no-dupe-args)
- **What it does:** Disallows duplicate arguments in function definitions.
- **Why:** Duplicate arguments in function definitions can lead to unexpected behavior.

## [`no-dupe-class-members`](https://eslint.org/docs/latest/rules/no-dupe-class-members)
- **What it does:** Disallows duplicate class members.
- **Why:** Duplicate class members can lead to unexpected behavior.

## [`no-duplicate-imports`](https://eslint.org/docs/latest/rules/no-duplicate-imports)
- **What it does:** Disallows duplicate `import` statements for the same module.
- **Why:** Duplicate `import` statements can lead to confusion and are unnecessary.

## [`no-dupe-else-if`](https://eslint.org/docs/latest/rules/no-dupe-else-if)
- **What it does:** Disallows duplicate conditions in if-else-if chains.
- **Why:** Duplicate conditions in if-else-if chains can lead to unexpected behavior.

## [`no-dupe-keys`](https://eslint.org/docs/latest/rules/no-dupe-keys)
- **What it does:** Disallows duplicate keys in object literals.
- **Why:** Duplicate keys in object literals can lead to unexpected behavior.

## [`no-duplicate-case`](https://eslint.org/docs/latest/rules/no-duplicate-case)
- **What it does:** Disallows duplicate case labels in switch statements.
- **Why:** Duplicate case labels in switch statements can lead to unexpected behavior.

## [`no-else-return`](https://eslint.org/docs/latest/rules/no-else-return)
- **What it does:** Disallows `else` blocks following `if` blocks ending with a `return` statement.
- **Why:** This rule can make the code more readable by making it clear that the `else` is unnecessary.

## [`no-empty`](https://eslint.org/docs/latest/rules/no-empty)
- **What it does:** Disallows empty block statements.
- **Why:** Empty blocks can be confusing because it looks like part of the code is missing.

## [`no-empty-character-class`](https://eslint.org/docs/latest/rules/no-empty-character-class)
- **What it does:** Disallows empty character classes in regular expressions.
- **Why:** Empty character classes in regular expressions can lead to unexpected matches.

## [`no-empty-pattern`](https://eslint.org/docs/latest/rules/no-empty-pattern)
- **What it does:** Disallows empty destructuring patterns.
- **Why:** Empty destructuring patterns can be a source of confusion and bugs.

## [`no-eq-null`](https://eslint.org/docs/latest/rules/no-eq-null)
- **What it does:** Disallows `null` comparisons without type-checking operators.
- **Why:** This rule aims to prevent bugs from type coercion.

## [`no-eval`](https://eslint.org/docs/latest/rules/no-eval)
- **What it does:** Disallows the use of `eval()`.
- **Why:** `eval()` can be dangerous as it allows arbitrary code execution and can lead to code injection attacks.

## [`no-ex-assign`](https://eslint.org/docs/latest/rules/no-ex-assign)
- **What it does:** Disallows reassigning exceptions in catch clauses.
- **Why:** Reassigning exceptions in catch clauses can lead to unexpected behavior.

## [`no-extend-native`](https://eslint.org/docs/latest/rules/no-extend-native)
- **What it does:** Disallows extending native JavaScript objects.
- **Why:** Extending native JavaScript objects can lead to unexpected behavior and conflicts with future versions of JavaScript.

## [`no-extra-bind`](https://eslint.org/docs/latest/rules/no-extra-bind)
- **What it does:** Disallows unnecessary function binding.
- **Why:** Unnecessary function binding can lead to unnecessary memory usage and slower performance.

## [`no-extra-boolean-cast`](https://eslint.org/docs/latest/rules/no-extra-boolean-cast)
- **What it does:** Disallows unnecessary boolean casts.
- **Why:** Unnecessary boolean casts can be confusing and they are often an indication of a mistake in the code.

## [`no-extra-label`](https://eslint.org/docs/latest/rules/no-extra-label)
- **What it does:** Disallows unnecessary labels.
- **Why:** Unnecessary labels can be confusing and lead to poorly structured code.

## [`no-extra-parens`](https://eslint.org/docs/latest/rules/no-extra-parens)
- **What it does:** Disallows unnecessary parentheses.
- **Why:** Unnecessary parentheses can be confusing and they are often an indication of a mistake in the code.

## [`no-fallthrough`](https://eslint.org/docs/latest/rules/no-fallthrough)
- **What it does:** Disallows fallthrough of `case` statements in `switch` statements.
- **Why:** Fallthrough in `switch` statements can be a source of errors and confusion.

## [`no-floating-decimal`](https://eslint.org/docs/latest/rules/no-floating-decimal)
- **What it does:** Disallows floating decimals in numeric literals.
- **Why:** Floating decimals can be confusing and lead to errors.

## [`no-func-assign`](https://eslint.org/docs/latest/rules/no-func-assign)
- **What it does:** Disallows reassigning function declarations.
- **Why:** Reassigning function declarations can lead to unexpected behavior.

## [`no-global-assign`](https://eslint.org/docs/latest/rules/no-global-assign)
- **What it does:** Disallows assignments to native objects or read-only global variables.
- **Why:** Assignments to native objects or read-only global variables can lead to unexpected behavior.

## [`no-implicit-coercion`](https://eslint.org/docs/latest/rules/no-implicit-coercion)
- **What it does:** Disallows the type conversions with shorter notations.
- **Why:** Shorter notations for type conversion can be confusing and lead to errors.

## [`no-implicit-globals`](https://eslint.org/docs/latest/rules/no-implicit-globals)
- **What it does:** Disallows variable and function declarations in the global scope.
- **Why:** Implicit global variables and functions can lead to unexpected behavior.

## [`no-implied-eval`](https://eslint.org/docs/latest/rules/no-implied-eval)
- **What it does:** Disallows the use of `eval()`-like methods.
- **Why:** `eval()` and similar methods can be dangerous as they allow arbitrary code execution and can lead to code injection attacks.

## [`no-import-assign`](https://eslint.org/docs/latest/rules/no-import-assign)
- **What it does:** Disallows assigning to imported bindings.
- **Why:** Assigning to imported bindings can lead to unexpected behavior.

## [`no-inner-declarations`](https://eslint.org/docs/latest/rules/no-inner-declarations)
- **What it does:** Disallows variable or function declarations in nested blocks.
- **Why:** Moving function declarations to the program or function body root prevents behavior differences between browsers.

## [`no-invalid-regexp`](https://eslint.org/docs/latest/rules/no-invalid-regexp)
- **What it does:** Disallows invalid regular expression strings in `RegExp` constructors.
- **Why:** Invalid regular expressions can lead to unexpected behavior.

## [`no-invalid-this`](https://eslint.org/docs/latest/rules/no-invalid-this)
- **What it does:** Disallows `this` keywords outside of classes or class-like objects.
- **Why:** Using `this` outside of classes or class-like objects can be confusing and lead to errors.

## [`no-irregular-whitespace`](https://eslint.org/docs/latest/rules/no-irregular-whitespace)
- **What it does:** Disallows irregular whitespace.
- **Why:** Irregular whitespaces can cause visual noise, diffs, and other issues.

## [`no-iterator`](https://eslint.org/docs/latest/rules/no-iterator)
- **What it does:** Disallows the use of the `__iterator__` property.
- **Why:** The `__iterator__` property is not widely supported and can lead to compatibility issues.

## [`no-label-var`](https://eslint.org/docs/latest/rules/no-label-var)
- **What it does:** Disallows labels that share a name with a variable.
- **Why:** Labels that share a name with a variable can be confusing.

## [`no-labels`](https://eslint.org/docs/latest/rules/no-labels)
- **What it does:** Disallows labeled statements.
- **Why:** Labeled statements are rarely used in JavaScript and can be confusing and lead to poorly structured code.

## [`no-lone-blocks`](https://eslint.org/docs/latest/rules/no-lone-blocks)
- **What it does:** Disallows unnecessary nested blocks.
- **Why:** Unnecessary nested blocks can lead to confusion and are often a sign of a mistake in the code.

## [`no-lonely-if`](https://eslint.org/docs/latest/rules/no-lonely-if)
- **What it does:** Disallows `if` statements as the only statement in `else` blocks.
- **Why:** This can make the code more readable and can often be simplified to an `else if` statement.

## [`no-loop-func`](https://eslint.org/docs/latest/rules/no-loop-func)
- **What it does:** Disallows function declarations and expressions inside loop statements.
- **Why:** Functions declared inside loops can lead to confusing behavior as the function does not have a unique scope for each loop iteration.

## [`no-magic-numbers`](https://eslint.org/docs/latest/rules/no-magic-numbers)
- **What it does:** Disallows the use of magic numbers.
- **Why:** Magic numbers are numbers that occur multiple time in code without clear meaning. They can make code hard to understand and maintain.

## [`no-misleading-character-class`](https://eslint.org/docs/latest/rules/no-misleading-character-class)
- **What it does:** Disallows characters which are made with multiple code points in character class syntax.
- **Why:** Characters that are made with multiple code points can be misleading and result in errors.

## [`no-mixed-operators`](https://eslint.org/docs/latest/rules/no-mixed-operators)
- **What it does:** Disallows mixed binary operators without parentheses.
- **Why:** Mixing operators can be confusing due to different precedence levels.

## [`no-mixed-spaces-and-tabs`](https://eslint.org/docs/latest/rules/no-mixed-spaces-and-tabs)
- **What it does:** Disallows mixed spaces and tabs for indentation.
- **Why:** Consistent indentation can make the code more readable.

## [`no-multi-assign`](https://eslint.org/docs/latest/rules/no-multi-assign)
- **What it does:** Disallows using multiple assignments in a single statement.
- **Why:** Multiple assignments in a single statement can be confusing to read.

## [`no-multi-spaces`](https://eslint.org/docs/latest/rules/no-multi-spaces)
- **What it does:** Disallows multiple spaces.
- **Why:** Multiple spaces can make the code harder to read and understand.

## [`no-multi-str`](https://eslint.org/docs/latest/rules/no-multi-str)
- **What it does:** Disallows multiline strings.
- **Why:** Multiline strings can be a source of errors and confusion.

## [`no-multiple-empty-lines`](https://eslint.org/docs/latest/rules/no-multiple-empty-lines)
- **What it does:** Disallows multiple empty lines.
- **Why:** Consistent spacing can make the code more readable.

## [`no-native-reassign`](https://eslint.org/docs/latest/rules/no-native-reassign)
- **What it does:** Disallows assignments to native objects.
- **Why:** Assignments to native objects can lead to unexpected behavior.

## [`no-negated-condition`](https://eslint.org/docs/latest/rules/no-negated-condition)
- **What it does:** Disallows negated conditions in `if` statements.
- **Why:** Negated conditions can be more difficult to understand and less efficient than non-negated ones.

## [`no-negated-in-lhs`](https://eslint.org/docs/latest/rules/no-negated-in-lhs)
- **What it does:** Disallows negating the left operand in `in` expressions.
- **Why:** Negating the left operand of `in` expressions can be confusing and lead to errors.

## [`no-nested-ternary`](https://eslint.org/docs/latest/rules/no-nested-ternary)
- **What it does:** Disallows nested ternary expressions.
- **Why:** Nested ternary expressions can be difficult to read and understand.

## [`no-new`](https://eslint.org/docs/latest/rules/no-new)
- **What it does:** Disallows the use of constructor functions for side-effect.
- **Why:** Using constructor functions for side-effect can be confusing and lead to errors.

## [`no-new-func`](https://eslint.org/docs/latest/rules/no-new-func)
- **What it does:** Disallows the use of the `new Function()` syntax.
- **Why:** The `new Function()` syntax is similar to `eval()`, allowing arbitrary code execution, which can lead to code injection attacks.

## [`no-new-object`](https://eslint.org/docs/latest/rules/no-new-object)
- **What it does:** Disallows the use of the `Object` constructor.
- **Why:** Using object literal syntax (`{}`) is generally more concise and readable.

## [`no-new-require`](https://eslint.org/docs/latest/rules/no-new-require)
- **What it does:** Disallows use of new operators with the `require` function.
- **Why:** Using a `new` operator with a `require` statement is not a recommended pattern in Node.js.

## [`no-new-symbol`](https://eslint.org/docs/latest/rules/no-new-symbol)
- **What it does:** Disallows `new` operators with the `Symbol` object.
- **Why:** The `Symbol` object is not a constructor, so using `new` with it leads to a runtime error.

## [`no-new-wrappers`](https://eslint.org/docs/latest/rules/no-new-wrappers)
- **What it does:** Disallows creating new instances of `String`, `Number`, and `Boolean`.
- **Why:** Primitive types in JavaScript should not be used as constructors.

## [`no-nonoctal-decimal-escape`](https://eslint.org/docs/latest/rules/no-nonoctal-decimal-escape)
- **What it does:** Disallows non-octal decimal escape sequences in string literals.
- **Why:** Non-octal decimal escape sequences can be a source of confusion and errors.

## [`no-obj-calls`](https://eslint.org/docs/latest/rules/no-obj-calls)
- **What it does:** Disallows calling global object properties as functions.
- **Why:** Calling global object properties as functions can lead to unexpected behavior.

## [`no-octal`](https://eslint.org/docs/latest/rules/no-octal)
- **What it does:** Disallows octal literals.
- **Why:** Octal literals are deprecated and can lead to unexpected behavior.

## [`no-octal-escape`](https://eslint.org/docs/latest/rules/no-octal-escape)
- **What it does:** Disallows octal escape sequences in string literals.
- **Why:** Octal escape sequences are deprecated and can lead to unexpected behavior.

## [`no-param-reassign`](https://eslint.org/docs/latest/rules/no-param-reassign)
- **What it does:** Disallows reassigning function parameters.
- **Why:** Reassigning parameters can lead to unexpected behavior, especially when accessing the `arguments` object.

## [`no-path-concat`](https://eslint.org/docs/latest/rules/no-path-concat)
- **What it does:** Disallows string concatenation with `__dirname` and `__filename`.
- **Why:** This rule aims to prevent issues on Windows where paths can contain backslashes.

## [`no-plusplus`](https://eslint.org/docs/latest/rules/no-plusplus)
- **What it does:** Disallows the use of the `++` and `--` operators.
- **Why:** These operators can be confusing and can lead to unexpected behavior due to automatic semicolon insertion.

## [`no-process-env`](https://eslint.org/docs/latest/rules/no-process-env)
- **What it does:** Disallows the use of `process.env`.
- **Why:** This rule aims to prevent global dependencies.

## [`no-process-exit`](https://eslint.org/docs/latest/rules/no-process-exit)
- **What it does:** Disallows the use of `process.exit()`.
- **Why:** Using `process.exit()` can often force a process to terminate in an unclean state.

## [`no-promise-executor-return`](https://eslint.org/docs/latest/rules/no-promise-executor-return)
- **What it does:** Disallows returning values from Promise executor functions.
- **Why:** A return value from a Promise executor function cannot be read or used, so it's likely a mistake if a value is being returned.

## [`no-proto`](https://eslint.org/docs/latest/rules/no-proto)
- **What it does:** Disallows the use of the `__proto__` property.
- **Why:** The `__proto__` property is deprecated and can lead to unexpected behavior.

## [`no-prototype-builtins`](https://eslint.org/docs/latest/rules/no-prototype-builtins)
- **What it does:** Disallows calling some `Object.prototype` methods directly on objects.
- **Why:** Calling `Object.prototype` methods directly on objects can cause issues when an object has a property with the same name as a method, like `hasOwnProperty`, `propertyIsEnumerable`, and `isPrototypeOf`.

## [`no-redeclare`](https://eslint.org/docs/latest/rules/no-redeclare)
- **What it does:** Disallows declaring a variable that has already been declared.
- **Why:** Redeclaring a variable can be a source of confusion and errors.

## [`no-regex-spaces`](https://eslint.org/docs/latest/rules/no-regex-spaces)
- **What it does:** Disallows multiple spaces in regular expressions.
- **Why:** Multiple spaces in regular expressions can be hard to see and can lead to errors.

## [`no-restricted-exports`](https://eslint.org/docs/latest/rules/no-restricted-exports)
- **What it does:** Disallows specific named exports.
- **Why:** This can prevent confusion and errors when importing these named exports.

## [`no-restricted-globals`](https://eslint.org/docs/latest/rules/no-restricted-globals)
- **What it does:** Disallows specific global variables.
- **Why:** Some global variables can be confusing or can lead to errors. For example, the global `isFinite` function is different from `Number.isFinite`.

## [`no-restricted-imports`](https://eslint.org/docs/latest/rules/no-restricted-imports)
- **What it does:** Disallows `import` statements for specific modules.
- **Why:** This can be useful for preventing the use of certain modules.
- Leaving this here, but off, as we might have a use for it at some point.

## [`no-restricted-modules`](https://eslint.org/docs/latest/rules/no-restricted-modules)
- **What it does:** Disallows specific modules.
- **Why:** This rule allows you to specify modules that you don't want to use in your application.
- Leaving off, but in project as there may be a use for this

## [`no-restricted-properties`](https://eslint.org/docs/latest/rules/no-restricted-properties)
- **What it does:** Disallows certain properties on certain objects.
- **Why:** Some properties can lead to unexpected behavior or are deprecated.

## [`no-restricted-syntax`](https://eslint.org/docs/latest/rules/no-restricted-syntax)
- **What it does:** Disallows specified syntax.
- **Why:** Certain syntax can lead to confusing or error-prone code.

## [`no-return-assign`](https://eslint.org/docs/latest/rules/no-return-assign)
- **What it does:** Disallows assignments in return statements.
- **Why:** Assignments in return statements can be a source of confusion and errors.

## [`no-return-await`](https://eslint.org/docs/latest/rules/no-return-await)
- **What it does:** Disallows unnecessary `return await`.
- **Why:** Using `return await` inside an async function is redundant and can lead to slower performance due to the extra promise creation.

## [`no-script-url`](https://eslint.org/docs/latest/rules/no-script-url)
- **What it does:** Disallows `javascript:` urls.
- **Why:** `javascript:` urls can lead to code injection attacks.

## [`no-self-assign`](https://eslint.org/docs/latest/rules/no-self-assign)
- **What it does:** Disallows assignments where both sides are exactly the same.
- **Why:** Self-assignments have no effect and can be a source of confusion and errors.

## [`no-self-compare`](https://eslint.org/docs/latest/rules/no-self-compare)
- **What it does:** Disallows comparing a variable to itself.
- **Why:** Comparing a variable to itself is usually a mistake or unnecessary, as it will always be true unless the variable is `NaN`.

## [`no-sequences`](https://eslint.org/docs/latest/rules/no-sequences)
- **What it does:** Disallows the use of the comma operator.
- **Why:** The comma operator can be confusing and lead to errors.

## [`no-setter-return`](https://eslint.org/docs/latest/rules/no-setter-return)
- **What it does:** Disallows returning a value from a setter.
- **Why:** Returning a value from a setter does not have any effect, as the value will be lost.

## [`no-shadow`](https://eslint.org/docs/latest/rules/no-shadow)
- **What it does:** Disallows variable declarations from shadowing variables declared in the outer scope.
- **Why:** Variable shadowing can be confusing and can lead to errors.

## [`no-shadow-restricted-names`](https://eslint.org/docs/latest/rules/no-shadow-restricted-names)
- **What it does:** Disallows identifiers from shadowing restricted names.
- **Why:** Shadowing restricted names can lead to unexpected behavior.

## [`no-sparse-arrays`](https://eslint.org/docs/latest/rules/no-sparse-arrays)
- **What it does:** Disallows sparse arrays.
- **Why:** Sparse arrays can lead to unexpected behavior.

## [`no-spaced-func`](https://eslint.org/docs/latest/rules/no-spaced-func)
- **What it does:** Disallows a space between a function name and the opening parenthesis in a function call.
- **Why:** Consistent spacing can make the code more readable.

## [`no-tabs`](https://eslint.org/docs/latest/rules/no-tabs)
- **What it does:** Disallows tabs for indentation.
- **Why:** Consistent indentation can make the code more readable.

## [`no-template-curly-in-string`](https://eslint.org/docs/latest/rules/no-template-curly-in-string)
- **What it does:** Disallows template literal placeholder syntax in regular strings.
- **Why:** Template literal placeholder syntax in regular strings can be a sign of a mistake or misunderstanding.

## [`no-this-before-super`](https://eslint.org/docs/latest/rules/no-this-before-super)
- **What it does:** Disallows the use of `this`/`super` before calling `super()` in constructors.
- **Why:** Using `this`/`super` before calling `super()` in a derived class constructor leads to a reference error.

## [`no-throw-literal`](https://eslint.org/docs/latest/rules/no-throw-literal)
- **What it does:** Requires `throw` statements to include an error object.
- **Why:** Throwing literals can lead to less informative error messages and make debugging more difficult.

## [`no-trailing-spaces`](https://eslint.org/docs/latest/rules/no-trailing-spaces)
- **What it does:** Disallows trailing whitespace at the end of lines.
- **Why:** Trailing whitespace can lead to unnecessary changes in source control and can make the code less clean.

## [`no-undef`](https://eslint.org/docs/latest/rules/no-undef)
- **What it does:** Disallows the use of undeclared variables.
- **Why:** Using undeclared variables can lead to runtime errors.

## [`no-undef-init`](https://eslint.org/docs/latest/rules/no-undef-init)
- **What it does:** Disallows initializing variables to `undefined`.
- **Why:** Variables are `undefined` by default, so initializing them to `undefined` is unnecessary.

## [`no-undefined`](https://eslint.org/docs/latest/rules/no-undefined)
- **What it does:** Disallows the use of `undefined`.
- **Why:** Using `undefined` directly can be confusing because it's not clear whether a variable is actually `undefined` or it was just never declared.

## [`no-underscore-dangle`](https://eslint.org/docs/latest/rules/no-underscore-dangle)
- **What it does:** Disallows dangling underscores in identifiers.
- **Why:** Dangling underscores can be confusing and can lead to naming collisions with JavaScript's internal object properties.

## [`no-unexpected-multiline`](https://eslint.org/docs/latest/rules/no-unexpected-multiline)
- **What it does:** Disallows confusing multiline expressions.
- **Why:** Multiline expressions can be a source of confusion and bugs.

## [`no-unneeded-ternary`](https://eslint.org/docs/latest/rules/no-unneeded-ternary)
- **What it does:** Disallows ternary operators when simpler alternatives exist.
- **Why:** Simpler code can be easier to read and understand.

## [`no-unmodified-loop-condition`](https://eslint.org/docs/latest/rules/no-unmodified-loop-condition)
- **What it does:** Disallows unmodified loop conditions.
- **Why:** Unmodified loop conditions can lead to infinite loops.

## [`no-unreachable`](https://eslint.org/docs/latest/rules/no-unreachable)
- **What it does:** Disallows unreachable code after `return`, `throw`, `continue`, and `break` statements.
- **Why:** Unreachable code is code that will never be executed, which is likely a mistake.

## [`no-unreachable-loop`](https://eslint.org/docs/latest/rules/no-unreachable-loop)
- **What it does:** Disallows loops with a body that allows only one iteration.
- **Why:** Loops that can’t be iterated more than once can be a sign of a mistake or misunderstanding.

## [`no-unsafe-finally`](https://eslint.org/docs/latest/rules/no-unsafe-finally)
- **What it does:** Disallows control flow statements in `finally` blocks.
- **Why:** Control flow statements, like `return`, `throw`, `break`, and `continue`, can cause unexpected behavior when used in a `finally` block.

## [`no-unsafe-negation`](https://eslint.org/docs/latest/rules/no-unsafe-negation)
- **What it does:** Disallows negating the left operand of relational operators.
- **Why:** Negating the left operand of relational operators can be confusing and lead to errors.

## [`no-unsafe-optional-chaining`](https://eslint.org/docs/latest/rules/no-unsafe-optional-chaining)
- **What it does:** Disallows optional chaining expressions mixed with logical comparisons, which can lead to unexpected results due to short-circuiting.
- **Why:** Optional chaining can be a source of confusion when mixed with logical comparisons.

## [`no-unused-expressions`](https://eslint.org/docs/latest/rules/no-unused-expressions)
- **What it does:** Disallows unused expressions.
- **Why:** Unused expressions can be a sign of an unnecessary operation or a mistake in the code.

## [`no-unused-labels`](https://eslint.org/docs/latest/rules/no-unused-labels)
- **What it does:** Disallows unused labels.
- **Why:** Unused labels can be a sign of code that is unnecessary and can be removed.

## [`no-unused-private-class-members`](https://eslint.org/docs/latest/rules/no-unused-private-class-members)
- **What it does:** Disallows unused private class members.
- **Why:** Unused private class members can be a sign of code that is unnecessary and can be removed.

## [`no-use-before-define`](https://eslint.org/docs/latest/rules/no-use-before-define)
- **What it does:** Disallows the use of variables before they are defined.
- **Why:** Using variables before they are defined can lead to runtime errors due to hoisting.

## [`no-useless-backreference`](https://eslint.org/docs/latest/rules/no-useless-backreference)
- **What it does:** Disallows unnecessary backreferences in regular expressions.
- **Why:** Unnecessary backreferences can be confusing and lead to errors.

## [`no-useless-call`](https://eslint.org/docs/latest/rules/no-useless-call)
- **What it does:** Disallows unnecessary calls to `.call()` and `.apply()`.
- **Why:** Unnecessary calls to `.call()` and `.apply()` can be confusing and lead to slower performance.

## [`no-useless-catch`](https://eslint.org/docs/latest/rules/no-useless-catch)
- **What it does:** Disallows unnecessary catch clauses.
- **Why:** Unnecessary catch clauses can be a source of confusion and errors.

## [`no-useless-computed-key`](https://eslint.org/docs/latest/rules/no-useless-computed-key)
- **What it does:** Disallows unnecessary computed property keys in objects and classes.
- **Why:** Unnecessary computed property keys can lead to more verbose and less readable code.

## [`no-useless-concat`](https://eslint.org/docs/latest/rules/no-useless-concat)
- **What it does:** Disallows unnecessary concatenation of literals or template literals.
- **Why:** Unnecessary concatenation can be a source of confusion and can often be simplified.

## [`no-useless-constructor`](https://eslint.org/docs/latest/rules/no-useless-constructor)
- **What it does:** Disallows unnecessary constructors.
- **Why:** Unnecessary constructors can lead to more verbose and less readable code.

## [`no-useless-escape`](https://eslint.org/docs/latest/rules/no-useless-escape)
- **What it does:** Disallows unnecessary escape characters.
- **Why:** Unnecessary escape characters can be a source of confusion and errors.

## [`no-useless-rename`](https://eslint.org/docs/latest/rules/no-useless-rename)
- **What it does:** Disallows renaming `import`, `export`, and destructured assignments to the same name.
- **Why:** Renaming to the same name is unnecessary and can lead to more verbose code.

## [`no-useless-return`](https://eslint.org/docs/latest/rules/no-useless-return)
- **What it does:** Disallows unnecessary return statements.
- **Why:** Unnecessary return statements can be a source of confusion and can often be removed.

## [`no-var`](https://eslint.org/docs/latest/rules/no-var)
- **What it does:** Disallows `var` declarations.
- **Why:** `let` and `const` are block-scoped and are generally safer and more flexible than `var`.

## [`no-void`](https://eslint.org/docs/latest/rules/no-void)
- **What it does:** Disallows the use of the `void` operator.
- **Why:** The `void` operator is often misunderstood and can lead to confusing code.

## [`no-warning-comments`](https://eslint.org/docs/latest/rules/no-warning-comments)
- **What it does:** Disallows specified warning terms in comments.
- **Why:** Warning comments can be a sign of code that needs to be fixed or improved.

## [`no-whitespace-before-property`](https://eslint.org/docs/latest/rules/no-whitespace-before-property)
- **What it does:** Disallows whitespace before properties.
- **Why:** Consistent spacing can make the code more readable.

## [`no-with`](https://eslint.org/docs/latest/rules/no-with)
- **What it does:** Disallows the use of the `with` statement.
- **Why:** The `with` statement can lead to confusing scope issues and is discouraged in modern JavaScript.

## [`nonblock-statement-body-position`](https://eslint.org/docs/latest/rules/nonblock-statement-body-position)
- **What it does:** Enforces the position of single-line statements in control structures.
- **Why:** Consistent positioning can make the code more readable.

## [`object-curly-spacing`](https://eslint.org/docs/latest/rules/object-curly-spacing)
- **What it does:** Requires spacing inside of curly braces in objects.
- **Why:** Consistent spacing can make the code more readable.

## [`object-curly-newline`](https://eslint.org/docs/latest/rules/object-curly-newline)
- **What it does:** Enforces consistent line breaks inside braces.
- **Why:** Consistent line breaks can make the code more readable.

## [`object-property-newline`](https://eslint.org/docs/latest/rules/object-property-newline)
- **What it does:** Enforces placing object properties on separate lines.
- **Why:** Consistent line breaks can make the code more readable.

## [`object-shorthand`](https://eslint.org/docs/latest/rules/object-shorthand)
- **What it does:** Requires or disallows object literal shorthand syntax.
- **Why:** Object literal shorthand syntax is more concise and is considered more idiomatic.

## [`one-var`](https://eslint.org/docs/latest/rules/one-var)
- **What it does:** Enforces that each variable is declared separately.
- **Why:** Declaring each variable separately can make the code more readable and easier to modify.

## [`one-var-declaration-per-line`](https://eslint.org/docs/latest/rules/one-var-declaration-per-line)
- **What it does:** Requires that each variable declaration is on a new line.
- **Why:** Consistent line breaks can make the code more readable.

## [`operator-assignment`](https://eslint.org/docs/latest/rules/operator-assignment)
- **What it does:** Requires assignment operators to be used when possible.
- **Why:** Using assignment operators can make the code more concise.

## [`operator-linebreak`](https://eslint.org/docs/latest/rules/operator-linebreak)
- **What it does:** Enforces consistent linebreak style for operators.
- **Why:** Consistent line breaks can make the code more readable.

## [`padded-blocks`](https://eslint.org/docs/latest/rules/padded-blocks)
- **What it does:** Disallows padding within blocks.
- **Why:** Removing unnecessary whitespace can make the code more readable.

## [`padding-line-between-statements`](https://eslint.org/docs/latest/rules/padding-line-between-statements)
- **What it does:** Requires or disallows blank lines between statements.
- **Why:** Consistent spacing can make the code more readable.

## [`prefer-arrow-callback`](https://eslint.org/docs/latest/rules/prefer-arrow-callback)
- **What it does:** Requires using arrow functions for callbacks.
- **Why:** Arrow functions are more concise and their `this` is lexically bound, which can prevent errors.

## [`prefer-const`](https://eslint.org/docs/latest/rules/prefer-const)
- **What it does:** Requires `const` declarations for variables that are never reassigned after declared.
- **Why:** Using `const` can make the code clearer by signaling that a variable is never reassigned.

## [`prefer-destructuring`](https://eslint.org/docs/latest/rules/prefer-destructuring)
- **What it does:** Requires destructuring from arrays and/or objects where possible.
- **Why:** Destructuring can make the code more readable and can prevent unnecessary temporary variables.

## [`prefer-exponentiation-operator`](https://eslint.org/docs/latest/rules/prefer-exponentiation-operator)
- **What it does:** Requires the use of the exponentiation operator (`**`) instead of `Math.pow`.
- **Why:** The exponentiation operator can be more concise and easier to read.

## [`prefer-numeric-literals`](https://eslint.org/docs/latest/rules/prefer-numeric-literals)
- **What it does:** Disallows `parseInt()` in favor of binary, octal, and hexadecimal literals.
- **Why:** Numeric literals are more concise and perform better than `parseInt()`.

## [`prefer-object-spread`](https://eslint.org/docs/latest/rules/prefer-object-spread)
- **What it does:** Requires the use of object spread (`{...obj}`) instead of `Object.assign`.
- **Why:** Object spread syntax can be more concise and easier to read.

## [`prefer-promise-reject-errors`](https://eslint.org/docs/latest/rules/prefer-promise-reject-errors)
- **What it does:** Requires using Error objects as Promise rejection reasons.
- **Why:** Using Error objects as rejection reasons can provide more context and make debugging easier.

## [`prefer-named-capture-group`](https://eslint.org/docs/latest/rules/prefer-named-capture-group)
- **What it does:** Enforces using named capture group in regular expression.
- **Why:** Named capture groups can make regular expressions more readable and easier to maintain.

## [`prefer-reflect`](https://eslint.org/docs/latest/rules/prefer-reflect)
- **What it does:** Requires `Reflect` methods where applicable.
- **Why:** `Reflect` methods are more modern and have some advantages over their counterparts.
- Leaving this off for now, but we can consider if we have a reason to set this at a later date.

## [`prefer-regex-literals`](https://eslint.org/docs/latest/rules/prefer-regex-literals)
- **What it does:** Disallows the use of `RegExp` constructor in favor of regular expression literals.
- **Why:** Regular expression literals can be more readable and performant than using the `RegExp` constructor.

## [`prefer-rest-params`](https://eslint.org/docs/latest/rules/prefer-rest-params)
- **What it does:** Requires rest parameters instead of `arguments`.
- **Why:** Rest parameters are more modern and flexible than `arguments`.

## [`prefer-spread`](https://eslint.org/docs/latest/rules/prefer-spread)
- **What it does:** Requires spread operators instead of `.apply()`.
- **Why:** Spread operators are more modern and readable than `.apply()`.

## [`prefer-template`](https://eslint.org/docs/latest/rules/prefer-template)
- **What it does:** Requires template literals instead of string concatenation.
- **Why:** Template literals are more modern and flexible than string concatenation.

## [`quote-props`](https://eslint.org/docs/latest/rules/quote-props)
- **What it does:** Requires quotes around object literal property names as needed.
- **Why:** Consistent use of quotes can make the code more readable.

## [`quotes`](https://eslint.org/docs/latest/rules/quotes)
- **What it does:** Enforces the consistent use of single quotes.
- **Why:** Consistent use of quotes can make the code more readable.

## [`radix`](https://eslint.org/docs/latest/rules/radix)
- **What it does:** Enforces the use of the second argument for `parseInt()`.
- **Why:** Not using the second argument for `parseInt()` can lead to unexpected results if the input string starts with a '0'.

## [`require-atomic-updates`](https://eslint.org/docs/latest/rules/require-atomic-updates)
- **What it does:** Disallows assignments that can lead to race conditions due to usage of `await` or `yield`.
- **Why:** Race conditions can lead to unexpected behavior.

## [`require-await`](https://eslint.org/docs/latest/rules/require-await)
- **What it does:** Disallows async functions which have no `await` expression.
- **Why:** An async function without an `await` expression could be a sign of an error.

## [`require-jsdoc`](https://eslint.org/docs/latest/rules/require-jsdoc)
- **What it does:** Requires JSDoc comments.
- **Why:** JSDoc comments can provide useful information about the purpose and usage of the code.

## [`require-unicode-regexp`](https://eslint.org/docs/latest/rules/require-unicode-regexp)
- **What it does:** Enforces the use of `u` flag on RegExp.
- **Why:** The `u` flag makes the RegExp treat the pattern as a sequence of unicode code points.

## [`require-yield`](https://eslint.org/docs/latest/rules/require-yield)
- **What it does:** Requires generator functions to have a `yield` keyword.
- **Why:** A generator function without `yield` is likely a mistake.

## [`rest-spread-spacing`](https://eslint.org/docs/latest/rules/rest-spread-spacing)
- **What it does:** Disallows spacing between rest or spread operators and their expressions.
- **Why:** Consistent spacing can make the code more readable.

## [`semi`](https://eslint.org/docs/latest/rules/semi)
- **What it does:** Requires semicolons.
- **Why:** Consistent use of semicolons can make the code more readable.

## [`semi-spacing`](https://eslint.org/docs/latest/rules/semi-spacing)
- **What it does:** Enforces consistent spacing before and after semicolons.
- **Why:** Consistent spacing can make the code more readable.

## [`semi-style`](https://eslint.org/docs/latest/rules/semi-style)
- **What it does:** Enforces location of semicolons.
- **Why:** Consistent placement of semicolons can make the code more readable.

## [`sort-keys`](https://eslint.org/docs/latest/rules/sort-keys)
- **What it does:** Requires object keys to be sorted.
- **Why:** Sorting keys can make the code more readable and easier to maintain.

## [`sort-imports`](https://eslint.org/docs/latest/rules/sort-imports)
- **What it does:** Enforces a convention in the sorting of `import` statements.
- **Why:** Having a consistent order for `import` statements can make the code easier to read and maintain.

## [`sort-vars`](https://eslint.org/docs/latest/rules/sort-vars)
- **What it does:** Enforces variable sort order in declarations and initialized variables, ignoring case while sorting.
- **Why:** Sorting variables can make the code more readable and easier to maintain.

## [`space-before-blocks`](https://eslint.org/docs/latest/rules/space-before-blocks)
- **What it does:** Enforces consistent spacing before blocks.
- **Why:** Consistent spacing can make the code more readable.

## [`space-before-function-paren`](https://eslint.org/docs/latest/rules/space-before-function-paren)
- **What it does:** Enforces consistent spacing before function parenthesis. Always have a space for anonymous and async arrow functions, and never for named functions.
- **Why:** Consistent spacing can make the code more readable.

## [`space-in-parens`](https://eslint.org/docs/latest/rules/space-in-parens)
- **What it does:** Disallows spacing inside parentheses. No spaces are allowed.
- **Why:** Consistent spacing can make the code more readable.

## [`space-infix-ops`](https://eslint.org/docs/latest/rules/space-infix-ops)
- **What it does:** Requires spacing around infix operators.
- **Why:** Consistent spacing can make the code more readable and the code's intention clearer.

## [`space-unary-ops`](https://eslint.org/docs/latest/rules/space-unary-ops)
- **What it does:** Enforces consistent spacing before or after unary operators. Words must have space, nonwords must not have space.
- **Why:** Consistent spacing can make the code more readable.

## [`spaced-comment`](https://eslint.org/docs/latest/rules/spaced-comment)
- **What it does:** Enforces consistent spacing after the `//` or `/*` in a comment. Always requires a space except for `-` and `+`. Also, `=`, `!`, `/`, `:`, and `::` are markers that require space.
- **Why:** Consistent spacing can make the code more readable and comments more understandable.

## [`strict`](https://eslint.org/docs/latest/rules/strict)
- **What it does:** Requires or disallows strict mode directives. The `'never'` option disallows strict mode directives.
- **Why:** Strict mode can help catch common JavaScript pitfalls. However, in ECMAScript 6 modules, which TypeScript uses, strict mode is enabled by default, so the directive is unnecessary.

## [`switch-colon-spacing`](https://eslint.org/docs/latest/rules/switch-colon-spacing)
- **What it does:** Enforces consistent spacing around colons in switch statements. Requires space after the colon and no space before.
- **Why:** Consistent spacing can make the code more readable.

## [`symbol-description`](https://eslint.org/docs/latest/rules/symbol-description)
- **What it does:** Requires `Symbol` instances to be created with a description.
- **Why:** `Symbol` descriptions can make the code more readable and can be useful for debugging.

## [`template-curly-spacing`](https://eslint.org/docs/latest/rules/template-curly-spacing)
- **What it does:** Requires spacing inside of template string curly braces.
- **Why:** Consistent spacing can make the code more readable.

## [`template-tag-spacing`](https://eslint.org/docs/latest/rules/template-tag-spacing)
- **What it does:** Requires or disallows spacing between template tags and their literals. No space is allowed.
- **Why:** Consistent spacing can make the code more readable.

## [`unicode-bom`](https://eslint.org/docs/latest/rules/unicode-bom)
- **What it does:** Requires or disallows the Unicode Byte Order Mark (BOM). The BOM is never allowed.
- **Why:** The presence of a BOM can cause issues with some JavaScript engines.

## [`use-isnan`](https://eslint.org/docs/latest/rules/use-isnan)
- **What it does:** Requires calls to `isNaN()` when checking for `NaN`.
- **Why:** `NaN` is a special case in JavaScript and is the only value that is not equal to itself. Using `isNaN()` is the correct way to check for `NaN`.

## [`valid-jsdoc`](https://eslint.org/docs/latest/rules/valid-jsdoc)
- **What it does:** Enforces valid and consistent JSDoc comments.
- **Why:** JSDoc comments can improve code readability and provide useful information for developers.

## [`valid-typeof`](https://eslint.org/docs/latest/rules/valid-typeof)
- **What it does:** Enforces comparing `typeof` expressions against valid strings.
- **Why:** This rule prevents errors from comparing `typeof` expressions against incorrect values.

## [`vars-on-top`](https://eslint.org/docs/latest/rules/vars-on-top)
- **What it does:** Requires all `var` declarations to be at the top of their containing scope.
- **Why:** Hoisting can lead to unexpected behavior, and declaring `var`s at the top of their scope can make the code more predictable.

## [`wrap-iife`](https://eslint.org/docs/latest/rules/wrap-iife)
- **What it does:** Requires parentheses around immediate `function` invocations.
- **Why:** Wrapping immediate function invocations can make the code more readable and prevent errors in concatenation scenarios.

## [`wrap-regex`](https://eslint.org/docs/latest/rules/wrap-regex)
- **What it does:** Requires parenthesis around regex literals.
- **Why:** Parentheses can make the regular expression more readable.
- Leaving off for now, this can be reconsidered later if it seems like it would be better to add parens

## [`yield-star-spacing`](https://eslint.org/docs/latest/rules/yield-star-spacing)
- **What it does:** Requires spacing after the `*` in `yield*` expressions.
- **Why:** Consistent spacing can make the code more readable.

## [`yoda`](https://eslint.org/docs/latest/rules/yoda)
- **What it does:** Disallows "Yoda" conditions where the literal value of the condition comes first.
- **Why:** "Yoda" conditions can be harder to read and understand than traditional conditions.
