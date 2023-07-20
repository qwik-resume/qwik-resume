module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  globals: {},
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      generators: false,
      objectLiteralDuplicateProperties: false
    }
  },
  plugins: [
    "import",
    "fp",
    "@typescript-eslint"
  ],
  extends: ["prettier"], // This will override any 'formatting' rules in favor of prettier formatting
  rules: {
    "fp/no-class": ["error"],
    "fp/no-arguments": ["error"],
    "fp/no-delete": ["error"],
    "fp/no-loops": ["error"],
    "fp/no-mutating-assign": ["error"],
    "fp/no-mutating-methods": ["error", { allowedObjects: ["_"] }],
    "fp/no-this": ["error"],
    "@typescript-eslint/adjacent-overload-signatures": ["error"],
    "@typescript-eslint/ban-ts-comment": ["error"],
    "@typescript-eslint/ban-types": ["error"],
    "no-array-constructor": ["error"],
    "@typescript-eslint/no-array-constructor": ["error"],
    "no-empty-function": ["error"],
    "@typescript-eslint/no-empty-function": ["error"],
    "@typescript-eslint/no-empty-interface": ["error"],
    "@typescript-eslint/no-explicit-any": ["error"],
    "@typescript-eslint/no-extra-non-null-assertion": ["error"],
    "no-extra-semi": ["error"],
    "@typescript-eslint/no-extra-semi": ["error"],
    "@typescript-eslint/no-inferrable-types": ["error"],
    "@typescript-eslint/no-loss-of-precision": ["error"],
    "@typescript-eslint/no-misused-new": ["error"],
    "@typescript-eslint/no-namespace": ["error"],
    "@typescript-eslint/no-non-null-asserted-optional-chain": ["error"],
    "@typescript-eslint/no-non-null-assertion": ["error"],
    "@typescript-eslint/no-this-alias": ["error"],
    "@typescript-eslint/no-unnecessary-type-constraint": ["error"],
    "no-unused-vars": [
      "off",
      {
        vars: "all",
        args: "after-used",
        ignoreRestSiblings: true
      }
    ],
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        vars: "all",
        args: "after-used",
        ignoreRestSiblings: true
      }
    ],
    "@typescript-eslint/no-var-requires": ["error"],
    "@typescript-eslint/prefer-as-const": ["error"],
    "@typescript-eslint/prefer-namespace-keyword": ["error"],
    "@typescript-eslint/triple-slash-reference": ["error"],
    "strict": ["error", "never"],
    "import/no-unresolved": [
      "off", {
        commonjs: true,
        caseSensitive: true,
        caseSensitiveStrict: false
      }
    ],
    "import/named": ["error"],
    "import/default": ["error"],
    "import/namespace": ["error"],
    "import/export": ["error"],
    "import/no-named-as-default": ["error"],
    "import/no-named-as-default-member": ["error"],
    "import/no-deprecated": ["error"],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "test/**",
          "tests/**",
          "spec/**",
          "**/__tests__/**",
          "**/__mocks__/**",
          "test.{js,jsx}",
          "test-*.{js,jsx}",
          "**/*{.,_}{test,spec}.{js,jsx}",
          "**/jest.config.js",
          "**/jest.setup.js",
          "**/vue.config.js",
          "**/webpack.config.js",
          "**/webpack.config.*.js",
          "**/rollup.config.js",
          "**/rollup.config.*.js",
          "**/gulpfile.js",
          "**/gulpfile.*.js",
          "**/Gruntfile{,.js}",
          "**/protractor.conf.js",
          "**/protractor.conf.*.js",
          "**/karma.conf.js",
          "**/.eslintrc.js"
        ],
        optionalDependencies: false
      }
    ],
    "import/no-mutable-exports": ["error"],
    "import/no-amd": ["error"],
    "import/first": ["error"],
    "import/no-duplicates": ["error"],
    "import/extensions": [
      "error",
      "never"
    ],
    "import/order": [
      "error",
      {
        groups: [["builtin", "external", "internal"]],
        distinctGroup: true,
        warnOnUnassignedImports: false
      }
    ],
    "import/newline-after-import": ["error"],
    "import/prefer-default-export": ["off"],
    "import/no-restricted-paths": ["off"],
    "import/max-dependencies": ["error", { max: 10 }],
    "import/no-absolute-path": ["error"],
    "import/no-dynamic-require": ["error"],
    "import/no-webpack-loader-syntax": ["error"],
    "import/no-unassigned-import": ["error", { allow: ["**/*.css"] }],
    "import/no-named-default": ["error"],
    "import/no-anonymous-default-export": [
      "error",
      {
        allowArray: false,
        allowArrowFunction: false,
        allowAnonymousClass: false,
        allowAnonymousFunction: false,
        allowLiteral: false,
        allowObject: false
      }
    ],
    "import/exports-last": ["off"],
    "import/group-exports": ["off"],
    "import/no-self-import": ["error"],
    "import/no-cycle": [
      "error",
      {
        maxDepth: "∞",
        ignoreExternal: false,
        allowUnsafeDynamicCyclicDependency: false
      }
    ],
    "import/no-useless-path-segments": ["error", { commonjs: true }],
    "import/dynamic-import-chunkname": [
      "off",
      {
        importFunctions: [],
        webpackChunknameFormat: "[0-9a-zA-Z-_/.]+"
      }
    ],
    "import/no-unused-modules": [
      "off",
      {
        missingExports: true,
        unusedExports: true
      }
    ],
    "import/no-import-module-exports": ["error", { exceptions: [] }],
    "import/no-relative-packages": ["error"],
    "arrow-body-style": ["error", "as-needed", { requireReturnForObjectLiteral: false }],
    "arrow-parens": ["error", "always"],
    "arrow-spacing": [
      "error",
      {
        before: true,
        after: true
      }
    ],
    "constructor-super": ["error"],
    "generator-star-spacing": [
      "error",
      {
        before: false,
        after: true
      }
    ],
    "no-class-assign": ["error"],
    "no-confusing-arrow": [
      "error",
      {
        allowParens: true,
        onlyOneSimpleParam: false
      }
    ],
    "no-const-assign": ["error"],
    "no-dupe-class-members": ["error"],
    "no-duplicate-imports": ["error"],
    "no-new-symbol": ["error"],
    "no-restricted-exports": ["error", { restrictedNamedExports: ["default", "then"] }],
    "no-restricted-imports": [
      "off", {
        paths: [],
        patterns: []
      }
    ],
    "no-this-before-super": ["error"],
    "no-useless-computed-key": ["error"],
    "no-useless-constructor": ["error"],
    "no-useless-rename": [
      "error",
      {
        ignoreDestructuring: false,
        ignoreImport: false,
        ignoreExport: false
      }
    ],
    "no-var": ["error"],
    "object-shorthand": [
      "error", "always", {
        ignoreConstructors: false,
        avoidQuotes: true
      }
    ],
    "prefer-arrow-callback": [
      "error",
      {
        allowNamedFunctions: false,
        allowUnboundThis: true
      }
    ],
    "prefer-const": [
      "error",
      {
        destructuring: "any",
        ignoreReadBeforeAssign: true
      }
    ],
    "prefer-destructuring": [
      "error",
      {
        VariableDeclarator: {
          array: false,
          object: true
        },
        AssignmentExpression: {
          array: true,
          object: false
        }
      },
      {
        enforceForRenamedProperties: false
      }
    ],
    "prefer-numeric-literals": ["error"],
    "prefer-reflect": ["off"],
    "prefer-rest-params": ["error"],
    "prefer-spread": ["error"],
    "prefer-template": ["error"],
    "require-yield": ["error"],
    "rest-spread-spacing": ["error", "never"],
    "sort-imports": [
      "error",
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: [
          "none",
          "all",
          "single",
          "multiple"
        ]
      }
    ],
    "symbol-description": ["error"],
    "template-curly-spacing": ["error"],
    "yield-star-spacing": ["error", "after"],
    "init-declarations": ["error", "always"],
    "no-delete-var": ["error"],
    "no-label-var": ["error"],
    "no-restricted-globals": [
      "error",
      {
        name: "isFinite",
        message: "Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite"
      },
      {
        name: "isNaN",
        message: "Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan"
      },
      "addEventListener",
      "blur",
      "close",
      "closed",
      "confirm",
      "defaultStatus",
      "defaultstatus",
      "event",
      "external",
      "find",
      "focus",
      "frameElement",
      "frames",
      "history",
      "innerHeight",
      "innerWidth",
      "length",
      "location",
      "locationbar",
      "menubar",
      "moveBy",
      "moveTo",
      "name",
      "onblur",
      "onerror",
      "onfocus",
      "onload",
      "onresize",
      "onunload",
      "open",
      "opener",
      "opera",
      "outerHeight",
      "outerWidth",
      "pageXOffset",
      "pageYOffset",
      "parent",
      "print",
      "removeEventListener",
      "resizeBy",
      "resizeTo",
      "screen",
      "screenLeft",
      "screenTop",
      "screenX",
      "screenY",
      "scroll",
      "scrollbars",
      "scrollBy",
      "scrollTo",
      "scrollX",
      "scrollY",
      "self",
      "status",
      "statusbar",
      "stop",
      "toolbar",
      "top"
    ],
    "no-shadow": ["off"],
    "no-shadow-restricted-names": ["error"],
    "no-undef": ["error"],
    "no-undef-init": ["error"],
    "no-undefined": ["error"],
    "no-use-before-define": [
      "error",
      {
        functions: true,
        classes: true,
        variables: true
      }
    ],
    "array-bracket-newline": ["error", { multiline: true }],
    "array-element-newline": ["error", { multiline: true }],
    "array-bracket-spacing": ["error", "never"],
    "block-spacing": ["error", "always"],
    "brace-style": ["error", "1tbs", { allowSingleLine: true }],
    "camelcase": [
      "error",
      {
        properties: "never",
        ignoreDestructuring: false,
        ignoreImports: false,
        ignoreGlobals: false
      }
    ],
    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "always-multiline"
      }
    ],
    "comma-spacing": [
      "error",
      {
        before: false,
        after: true
      }
    ],
    "comma-style": [
      "error",
      "last",
      {
        exceptions: {
          ArrayExpression: false,
          ArrayPattern: false,
          ArrowFunctionExpression: false,
          CallExpression: false,
          FunctionDeclaration: false,
          FunctionExpression: false,
          ImportDeclaration: false,
          ObjectExpression: false,
          ObjectPattern: false,
          VariableDeclaration: false,
          NewExpression: false
        }
      }
    ],
    "computed-property-spacing": ["error", "never"],
    "eol-last": ["error", "always"],
    "function-call-argument-newline": ["error", "consistent"],
    "func-call-spacing": ["error", "never"],
    "func-name-matching": [
      "off", "always", {
        includeCommonJSModuleExports: false,
        considerPropertyDescriptor: true
      }
    ],
    "func-names": ["error"],
    "func-style": ["error", "expression"],
    "function-paren-newline": ["error", "multiline-arguments"],
    "id-denylist": ["off"],
    "id-length": [
      "error",
      {
        min: 3,
        max: 20,
        exceptions: [
          "id", // a common two letter value
          "e", // commonly used for event (use err or error for errors)
          "x", "y", "z", // common dimension or counting vars
          "i" // commonly used for index
        ],
        exceptionPatterns: [
          "[A-Z][A-Z0-9]*(_[A-Z0-9]+)*" // const pattern often used to be descriptive and might be longer
        ]
      }
    ],
    "implicit-arrow-linebreak": ["error", "beside"],
    "indent": [
      "error",
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        FunctionDeclaration: {
          parameters: 1,
          body: 1
        },
        FunctionExpression: {
          parameters: 1,
          body: 1
        },
        CallExpression: { arguments: 1 },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        ignoredNodes: [
          "JSXElement",
          "JSXElement > *",
          "JSXAttribute",
          "JSXIdentifier",
          "JSXNamespacedName",
          "JSXMemberExpression",
          "JSXSpreadAttribute",
          "JSXExpressionContainer",
          "JSXOpeningElement",
          "JSXClosingElement",
          "JSXFragment",
          "JSXOpeningFragment",
          "JSXClosingFragment",
          "JSXText",
          "JSXEmptyExpression",
          "JSXSpreadChild"
        ],
        ignoreComments: false,
        offsetTernaryExpressions: false
      }
    ],
    "jsx-quotes": ["error", "prefer-single"],
    "key-spacing": [
      "error",
      {
        beforeColon: false,
        afterColon: true
      }
    ],
    "keyword-spacing": [
      "error",
      {
        before: true,
        after: true,
        overrides: {
          return: { after: true },
          throw: { after: true },
          case: { after: true }
        }
      }
    ],
    "line-comment-position": [
      "off", {
        position: "above",
        ignorePattern: "",
        applyDefaultPatterns: true
      }
    ],
    "linebreak-style": ["error", "unix"],
    "lines-between-class-members": ["error", "always", { exceptAfterSingleLine: false }],
    "lines-around-comment": ["off"],
    "lines-around-directive": [
      "error",
      {
        before: "always",
        after: "always"
      }
    ],
    "max-depth": ["error", 4],
    "max-len": [
      "error",
      100,
      2,
      {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true
      }
    ],
    "max-lines": [
      "error",
      {
        max: 300,
        skipBlankLines: true,
        skipComments: true
      }
    ],
    "max-lines-per-function": [
      "error",
      {
        max: 50,
        skipBlankLines: true,
        skipComments: true,
        IIFEs: true
      }
    ],
    "max-nested-callbacks": ["error", 3],
    "max-params": ["error", 3],
    "max-statements": ["error", 10],
    "max-statements-per-line": ["error", { max: 1 }],
    "multiline-comment-style": ["off", "starred-block"],
    "multiline-ternary": ["error", "always-multiline"],
    "new-cap": [
      "error",
      {
        newIsCap: true,
        newIsCapExceptions: [],
        capIsNew: false,
        capIsNewExceptions: ["Immutable.Map", "Immutable.Set", "Immutable.List"],
        properties: true
      }
    ],
    "new-parens": ["error"],
    "newline-per-chained-call": ["error", { ignoreChainWithDepth: 4 }],
    "no-bitwise": ["error"],
    "no-continue": ["error"],
    "no-lonely-if": ["error"],
    "no-mixed-operators": [
      "error",
      {
        groups: [
          ["%", "**"],
          ["%", "+"],
          ["%", "-"],
          ["%", "*"],
          ["%", "/"],
          ["/", "*"],
          ["&", "|", "<<", ">>", ">>>"],
          ["==", "!=", "===", "!=="],
          ["&&", "||"]
        ],
        allowSamePrecedence: false
      }
    ],
    "no-mixed-spaces-and-tabs": ["error"],
    "no-multi-assign": ["error"],
    "no-multiple-empty-lines": [
      "error",
      {
        max: 1,
        maxBOF: 0,
        maxEOF: 0
      }
    ],
    "no-negated-condition": ["error"],
    "no-nested-ternary": ["error"],
    "no-new-object": ["error"],
    "no-plusplus": ["off"],
    "no-restricted-syntax": [
      "error",
      {
        selector: "ForInStatement",
        message: "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array."
      },
      {
        selector: "ForOfStatement",
        message: "iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations."
      },
      {
        selector: "LabeledStatement",
        message: "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand."
      },
      {
        selector: "WithStatement",
        message: "`with` is disallowed in strict mode because it makes code impossible to predict and optimize."
      }
    ],
    "no-spaced-func": ["error"],
    "no-tabs": ["error"],
    "no-trailing-spaces": [
      "error",
      {
        skipBlankLines: false,
        ignoreComments: false
      }
    ],
    "no-underscore-dangle": [
      "error",
      {
        allow: [],
        allowAfterThis: false,
        allowAfterSuper: false,
        enforceInMethodNames: true,
        allowAfterThisConstructor: false,
        allowFunctionParams: true,
        enforceInClassFields: false,
        allowInArrayDestructuring: true,
        allowInObjectDestructuring: true
      }
    ],
    "no-unneeded-ternary": ["error", { defaultAssignment: false }],
    "no-whitespace-before-property": ["error"],
    "nonblock-statement-body-position": ["error", "beside", { overrides: {} }],
    "object-curly-spacing": ["error", "always"],
    "object-curly-newline": [
      "error",
      {
        ObjectExpression: {
          minProperties: 4,
          multiline: true,
          consistent: true
        },
        ObjectPattern: {
          minProperties: 4,
          multiline: true,
          consistent: true
        },
        ImportDeclaration: {
          minProperties: 4,
          multiline: true,
          consistent: true
        },
        ExportDeclaration: {
          minProperties: 4,
          multiline: true,
          consistent: true
        }
      }
    ],
    "object-property-newline": [
      "error",
      {
        allowAllPropertiesOnSameLine: true,
        allowMultiplePropertiesPerLine: false
      }
    ],
    "one-var": ["error", "never"],
    "one-var-declaration-per-line": ["error", "always"],
    "operator-assignment": ["error", "always"],
    "operator-linebreak": ["error", "before", { overrides: { "=": "none" } }],
    "padded-blocks": [
      "error",
      {
        blocks: "never",
        classes: "never",
        switches: "never"
      },
      {
        allowSingleLineBlocks: true
      }
    ],
    "prefer-exponentiation-operator": ["error"],
    "prefer-object-spread": ["error"],
    "quote-props": [
      "error", "as-needed", {
        keywords: false,
        unnecessary: true,
        numbers: false
      }
    ],
    "quotes": ["error", "single", { avoidEscape: true }],
    "require-jsdoc": [
      "error",
      {
        require: {
          MethodDefinition: true,
          ArrowFunctionExpression: true,
          FunctionExpression: true
        }
      }
    ],
    "semi": ["error", "always"],
    "semi-spacing": [
      "error",
      {
        before: false,
        after: true
      }
    ],
    "semi-style": ["error", "last"],
    "sort-keys": [
      "off", "asc", {
        caseSensitive: false,
        natural: true,
        allowLineSeparatedGroups: true
      }
    ],
    "sort-vars": ["error", { ignoreCase: true }],
    "space-before-blocks": ["error"],
    "space-before-function-paren": [
      "error",
      {
        anonymous: "always",
        named: "never",
        asyncArrow: "always"
      }
    ],
    "space-in-parens": ["error", "never"],
    "space-infix-ops": ["error"],
    "space-unary-ops": [
      "error",
      {
        words: true,
        nonwords: false,
        overrides: {}
      }
    ],
    "spaced-comment": [
      "error",
      "always",
      {
        line: {
          exceptions: ["-", "+"],
          markers: ["=", "!", "/"]
        },
        block: {
          exceptions: ["-", "+"],
          markers: ["=", "!", ":", "::"],
          balanced: true
        }
      }
    ],
    "switch-colon-spacing": [
      "error",
      {
        after: true,
        before: false
      }
    ],
    "template-tag-spacing": ["error", "never"],
    "unicode-bom": ["error", "never"],
    "wrap-regex": ["off"],
    "global-require": ["error"],
    "no-buffer-constructor": ["error"],
    "no-new-require": ["error"],
    "no-path-concat": ["error"],
    "no-process-env": ["error"],
    "no-process-exit": ["error"],
    "no-restricted-modules": ["off"],
    "for-direction": ["error"],
    "getter-return": ["error", { allowImplicit: true }],
    "no-async-promise-executor": ["error"],
    "no-await-in-loop": ["error"],
    "no-compare-neg-zero": ["error"],
    "no-cond-assign": ["error", "always"],
    "no-console": ["error"],
    "no-constant-condition": ["error"],
    "no-control-regex": ["error"],
    "no-debugger": ["error"],
    "no-dupe-args": ["error"],
    "no-dupe-else-if": ["error"],
    "no-dupe-keys": ["error"],
    "no-duplicate-case": ["error"],
    "no-empty": ["error"],
    "no-empty-character-class": ["error"],
    "no-ex-assign": ["error"],
    "no-extra-boolean-cast": ["error"],
    "no-extra-parens": [
      "error",
      "all",
      {
        conditionalAssign: true,
        nestedBinaryExpressions: false,
        returnAssign: false,
        ignoreJSX: "all",
        enforceForArrowConditionals: false
      }
    ],
    "no-func-assign": ["error"],
    "no-import-assign": ["error"],
    "no-inner-declarations": ["error"],
    "no-invalid-regexp": ["error"],
    "no-irregular-whitespace": ["error"],
    "no-misleading-character-class": ["error"],
    "no-obj-calls": ["error"],
    "no-promise-executor-return": ["error"],
    "no-prototype-builtins": ["error"],
    "no-regex-spaces": ["error"],
    "no-setter-return": ["error"],
    "no-sparse-arrays": ["error"],
    "no-template-curly-in-string": ["error"],
    "no-unexpected-multiline": ["error"],
    "no-unreachable": ["error"],
    "no-unreachable-loop": ["error", { ignore: [] }],
    "no-unsafe-finally": ["error"],
    "no-unsafe-negation": ["error"],
    "no-unsafe-optional-chaining": ["error", { disallowArithmeticOperators: true }],
    "no-unused-private-class-members": ["error"],
    "no-useless-backreference": ["error"],
    "no-negated-in-lhs": ["error"],
    "require-atomic-updates": ["error"],
    "use-isnan": ["error"],
    "valid-typeof": ["error", { requireStringLiterals: true }],
    "accessor-pairs": ["error"],
    "array-callback-return": [
      "error",
      {
        allowImplicit: true,
        checkForEach: false
      }
    ],
    "block-scoped-var": ["error"],
    "complexity": ["error", 8],
    "class-methods-use-this": [
      "error",
      {
        exceptMethods: [],
        enforceForClassFields: true
      }
    ],
    "consistent-return": ["error"],
    "curly": ["error", "multi-line"],
    "default-case": ["error", { commentPattern: "^no default$" }],
    "default-case-last": ["error"],
    "default-param-last": ["error"],
    "dot-notation": [
      "error",
      {
        allowKeywords: true,
        allowPattern: ""
      }
    ],
    "dot-location": ["error", "property"],
    "eqeqeq": ["error", "always", { null: "ignore" }],
    "grouped-accessor-pairs": ["error"],
    "guard-for-in": ["error"],
    "max-classes-per-file": ["error", 1],
    "no-alert": ["error"],
    "no-caller": ["error"],
    "no-case-declarations": ["error"],
    "no-constructor-return": ["error"],
    "no-div-regex": ["error"],
    "no-else-return": ["error", { allowElseIf: false }],
    "no-empty-pattern": ["error"],
    "no-eq-null": ["off"],
    "no-eval": ["error"],
    "no-extend-native": ["error"],
    "no-extra-bind": ["error"],
    "no-extra-label": ["error"],
    "no-fallthrough": ["error"],
    "no-floating-decimal": ["error"],
    "no-global-assign": ["error", { exceptions: [] }],
    "no-native-reassign": ["off"],
    "no-implicit-coercion": [
      "off",
      {
        boolean: false,
        number: true,
        string: true,
        allow: []
      }
    ],
    "no-implicit-globals": ["off"],
    "no-implied-eval": ["error"],
    "no-invalid-this": ["off"],
    "no-iterator": ["error"],
    "no-labels": [
      "error",
      {
        allowLoop: false,
        allowSwitch: false
      }
    ],
    "no-lone-blocks": ["error"],
    "no-loop-func": ["error"],
    "no-magic-numbers": [
      "off",
      {
        ignore: [],
        ignoreArrayIndexes: true,
        enforceConst: true,
        detectObjects: false
      }
    ],
    "no-multi-spaces": ["error", { ignoreEOLComments: false }],
    "no-multi-str": ["error"],
    "no-new": ["error"],
    "no-new-func": ["error"],
    "no-new-wrappers": ["error"],
    "no-nonoctal-decimal-escape": ["error"],
    "no-octal": ["error"],
    "no-octal-escape": ["error"],
    "no-param-reassign": [
      "error",
      {
        props: true,
        ignorePropertyModificationsFor: [
          "acc",
          "accumulator",
          "e",
          "ctx",
          "context",
          "req",
          "request",
          "res",
          "response",
          "$scope",
          "staticContext"
        ]
      }
    ],
    "no-proto": ["error"],
    "no-redeclare": ["error"],
    "no-restricted-properties": [
      "error",
      {
        object: "arguments",
        property: "callee",
        message: "arguments.callee is deprecated"
      },
      {
        object: "global",
        property: "isFinite",
        message: "Please use Number.isFinite instead"
      },
      {
        object: "self",
        property: "isFinite",
        message: "Please use Number.isFinite instead"
      },
      {
        object: "window",
        property: "isFinite",
        message: "Please use Number.isFinite instead"
      },
      {
        object: "global",
        property: "isNaN",
        message: "Please use Number.isNaN instead"
      },
      {
        object: "self",
        property: "isNaN",
        message: "Please use Number.isNaN instead"
      },
      {
        object: "window",
        property: "isNaN",
        message: "Please use Number.isNaN instead"
      },
      {
        property: "__defineGetter__",
        message: "Please use Object.defineProperty instead."
      },
      {
        property: "__defineSetter__",
        message: "Please use Object.defineProperty instead."
      },
      {
        object: "Math",
        property: "pow",
        message: "Use the exponentiation operator (**) instead."
      }
    ],
    "no-return-assign": ["error", "except-parens"],
    "no-return-await": ["error"],
    "no-script-url": ["error"],
    "no-self-assign": ["error", { props: true }],
    "no-self-compare": ["error"],
    "no-sequences": ["error"],
    "no-throw-literal": ["error"],
    "no-unmodified-loop-condition": ["off"],
    "no-unused-expressions": [
      "error",
      {
        allowShortCircuit: false,
        allowTernary: false,
        allowTaggedTemplates: false,
        enforceForJSX: false
      }
    ],
    "no-unused-labels": ["error"],
    "no-useless-call": ["off"],
    "no-useless-catch": ["error"],
    "no-useless-concat": ["error"],
    "no-useless-escape": ["error"],
    "no-useless-return": ["error"],
    "no-void": ["error"],
    "no-warning-comments": [
      "off",
      {
        terms: ["todo", "fixme", "xxx"],
        location: "start"
      }
    ],
    "no-with": ["error"],
    "prefer-promise-reject-errors": ["error", { allowEmptyReject: true }],
    "prefer-named-capture-group": ["off"],
    "prefer-regex-literals": ["error", { disallowRedundantWrapping: true }],
    "radix": ["error"],
    "require-await": ["off"],
    "require-unicode-regexp": ["off"],
    "vars-on-top": ["error"],
    "wrap-iife": ["error", "outside", { functionPrototypeMethods: false }],
    "yoda": ["error"]
  },
  settings: {
    "import/resolver": {
      node: { extensions: [".mjs", ".js", ".ts", ".json"] }
    },
    "import/extensions": [".js", ".mjs", ".jsx", ".ts", ".tsx"],
    "import/core-modules": [],
    "import/ignore": ["node_modules", "\\.(coffee|scss|css|less|hbs|svg|json)$"]
  }
};
