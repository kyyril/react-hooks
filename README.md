## Table of Contents

1. [useState](#usestate)
2. [useReducer](#usereducer)
3. [comparison of useState and useReducer](#comparison-usestate-and-usereducer)
4. [Effect Hooks](#effect-hooks) 4.
   - [Diff](#effect-hooks--diff)
   - [useEffect](#useeffect)
   - [useLayoutEffect](#uselayouteffect)
   - [useInsertionEffect](#useinsertioneffect)
5. [Context Hooks](#context-hooks) 5.
   - [useContext](#usecontext)
6. [Ref Hooks](#ref-hooks)
   - [useRef](#useref)
   - [useImperativeHandle](#useimperativehandle)
7. [Performance Hooks](#performance-hooks)
   - [useMemo](#usememo)
   - [useCallback](#usecallback)
8. [Other Hooks](#other-hooks)
   - [useDebugValue](#usedebugvalue)
   - [useId](#useid)
9. [Custom Hook](#custom-hook) 9.

## Material

### useState
- Description:** A hook used to add local state to a function component.
- **Example:**
  ``jsx
  const [count, setCount] = useState(0);
  ```

### useReducer
- Description:** A hook used to handle complex state and more sophisticated update logic.
- **Example:**
  ``jsx
  const [state, dispatch] = useReducer(reducer, initialState);
  ```

### Comparison of useState and useReducer
- **Description:** A comparison between useState and useReducer to determine when to use one of them.

### Effect Hooks
#### Effect Hooks : Diff
- Description:** An explanation of the differences between various effect hooks.

#### useEffect
- Description:** A hook that allows you to perform a side effect inside a function component.
- **Example:**
  ``jsx
  useEffect() => {
    // side effect
  }, []);
  ```

#### useLayoutEffect
- **Description:** Similar to useEffect, but called synchronously after all DOM mutations.

#### useInsertionEffect
- Description:** Hook used to insert effects related to CSS-in-JS libraries.

### Context Hooks
#### useContext
- Description:** Hook used to access context values inside function components.
- **Example:**
  ``jsx
  const value = useContext(MyContext);
  ```

### Ref Hooks
#### useRef
- Description:** Hooks used to access DOM elements or store persisted values.
- **Example:**
  ``jsx
  const myRef = useRef(null);
  ```

#### useImperativeHandle
- Description:** A hook used to customize the ref instance received by the parent component.

### Performance Hooks
#### useMemo
- Description:** A hook used to optimize performance by memorizing computed values.
- **Example:**
  ``jsx
  const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
  ```

#### useCallback
- Description:** A hook that returns a memoized callback function, useful to avoid creating a new function on every render.
- **Example:**
  ``jsx
  const memoizedCallback = useCallback(() => {
    doSomething(a, b);
  }, [a, b]);
  ```

### Other Hooks
#### useDebugValue
- Description:** Hook used to display debug labels in React DevTools.

#### useId
- **Description:** Hook used to generate a unique ID for accessibility.

### Custom Hook
- Description:** How to create a custom hook that abstracts and reorganizes reusable logic.
