import React from 'react';

const Blog = () => {
    return (
        <div className='w-[65%] text-base mx-auto space-y-10 mt-40'>
            <div className=' border rounded-md bg-[#F9FAFF] p-8'>
                <p className='text-3xl mb-4'>
                    a. When should you use context API?
                </p> <br />
                <p>
                    Ans:
                    The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. <br /> <br />

                    Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult. If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context.
                    <br /><br /><br />
                    For example, consider a Page component that passes a user and avatarSize prop several levels down so that deeply nested Link and Avatar components can read it:
                    <br />
                    It might feel redundant to pass down the user and avatarSize props through many levels if in the end only the Avatar component really needs it. It’s also annoying that whenever the Avatar component needs more props from the top, you have to add them at all the intermediate levels too.
                    <br /><br />
                    One way to solve this issue without context is to pass down the Avatar component itself so that the intermediate components don’t need to know about the user or avatarSize props.
                    <br /> <br />
                    React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.
                </p>
            </div>
            <div className=' border rounded-md bg-[#F9FAFF] p-8'>
                <p className='text-3xl mb-4'>
                    b. What is a custom hook?
                </p> <br />
                <p>
                    Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications. Usually, if there is a requirement to add a feature, one can install a third-party library and solve the problem. But what if there is no such library with hooks that can be used? This problem is solved by using custom React JS hooks.
                    <br /> <br /> <br />

                    A custom hook is a special JavaScript function whose name starts with ‘use’ and can be used to call other hooks. Let’s take a look at some major differences between a custom React JS hook and React JS components:
                    <br />

                    <ul className='list list-disc list-outside p-6'>
                        <li>A custom hook does not require a specific signature.</li>
                        <li>A software developer can choose what argument the custom hook has and what should the argument return.</li>
                        <li>A custom hook always starts with the name ‘use’.</li>
                    </ul>

                    <br />
                    Unlike a React component, a custom Hook doesn’t need to have a specific signature. We can decide what it takes as arguments, and what, if anything, it should return. In other words, it’s just like a normal function. Its name should always start with use so that you can tell at a glance that the rules of Hooks apply to it.
                </p>
            </div>
            <div className=' border rounded-md bg-[#F9FAFF] p-8'>
                <p className='text-3xl mb-4'>
                    c.  What is useRef?
                </p> <br />
                <p>
                    useRef is a React Hook that lets you reference a value that’s not needed for rendering. The useRef allows to directly create a reference to the DOM element in the functional component.
                    It can be used to store a mutable value that does not cause a re-render when updated. <br /> <br /> <br />
                    <p className='text-2xl font-semibold'>Reference:</p> <br />

                    <p>
                        <span className='font-semibold'>useRef(initialValue)</span> <br /> <br />
                        Call useRef at the top level of your component to declare a ref.
                    </p> <br />
                    <p>
                        <span className='font-semibold'>Parameters</span> <br /> <br />
                        initialValue: The value you want the ref object’s current property to be initially. It can be a value of any type. This argument is ignored after the initial render.
                    </p> <br />
                    <p>
                        <span className='font-semibold'>Return</span> <br /> <br />
                        useRef returns an object with a single property:
                        <ul className='list list-disc list-outside p-6'>
                            <li>
                                current: Initially, it’s set to the initialValue you have passed. You can later set it to something else. If you pass the ref object to React as a ref attribute to a JSX node, React will set its current property.
                            </li>
                        </ul>
                        On the next renders, useRef will return the same object.

                        <br /> <br /> <br />
                        With the help of refs we can have direct access to React elements and not just DOM nodes and that we don’t always need the props or the state to modify the child component. Generally, refs are used when the interaction between either React element or DOM nodes cannot be achieved using the mechanisms of state and prop.
                    </p>
                </p>

            </div>
            <div className=' border rounded-md bg-[#F9FAFF] p-8'>
                <p className='text-3xl mb-4'>
                    d.   What is useMemo?
                </p>
                <br />
                <p>
                    React has a built-in hook called useMemo that allows you to memoize expensive functions so that you can avoid calling them on every render. You simple pass in a function and an array of inputs and useMemo will only recompute the memoized value when one of the inputs has changed.

                    useMemo lets you cache the result of a calculation between re-renders.
                </p> <br /> <br />


                <p className='text-2xl font-semibold'>Reference:</p> <br />

                <p className='mb-8 mt-4'>
                    <span className='rounded-md p-4 px-8 bg-white'> useMemo(calculateValue, dependencies)</span>
                </p> <br />

                <p>
                    <span className='font-semibold'>Parameters</span> 
                    <ul className='list list-disc list-outside p-6 space-y-5'>
                        <li>
                            calculateValue: The function calculating the value that you want to cache. It should be pure, should take no arguments, and should return a value of any type. React will call your function during the initial render. On next renders, React will return the same value again if the dependencies have not changed since the last render. Otherwise, it will call calculateValue, return its result, and store it so it can be reused later.
                        </li>
                        <li>
                            dependencies: The list of all reactive values referenced inside of the calculateValue code. Reactive values include props, state, and all the variables and functions declared directly inside your component body. If your linter is configured for React, it will verify that every reactive value is correctly specified as a dependency. The list of dependencies must have a constant number of items and be written inline like [dep1, dep2, dep3].
                        </li>
                    </ul>
                </p> <br />
                <p className='mb-8'>
                <span className='font-semibold'>Return</span> <br /> <br />
                    On the initial render, useMemo returns the result of calling calculateValue with no arguments. <br />

                    During next renders, it will either return an already stored value from the last render (if the dependencies haven’t changed), or call calculateValue again, and return the result that calculateValue has returned.
                </p> <br />


                {/* <p>
                    During initial rendering, useMemo(compute, dependencies) invokes compute, memoizes the calculation result, and returns it to the component.
                    If the dependencies don't change during the next renderings, then useMemo() doesn't invoke compute, but returns the memoized value.
                    But if the dependencies change during re-rendering, then useMemo() invokes compute, memoizes the new value, and returns it.
                </p> <br /> <br /> */}



                If you have a large codebase and your application is slow, then you can check whether there are any unnecessary renders on the page or not. If so, restrict them with the useMemo hook; this speeds up your app and makes it more efficient.

            </div>

        </div>
    );
};

export default Blog;