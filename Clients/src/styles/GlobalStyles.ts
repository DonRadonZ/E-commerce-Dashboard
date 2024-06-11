import { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`
:root {

    &,&.light-mode {
        /* Gray */
        --color-gray-0 : #fff;
        --color-gray-50 : #f9fafb;
        --color-gray-100 : #f3f4f6;
        --color-gray-200 : #e5e7eb;
        --color-gray-300 : #d1d5db;
        --color-gray-400 : #9ca3af;
        --color-gray-500 : #6b7280;
        --color-gray-600 : #4b5563;
        --color-gray-700 : #374151;
        --color-gray-800 : #1f2937;
        --color-gray-900 : #111827;

        --color-sky-100: #e0f2fe;
        --color-sky-700: #0369a1;
        --color-teal-100: #ccfbf1;
        --color-teal-700: #0f766e;
        --color-amber-100: #fef3c7;
        --color-amber-700: #b45309;
        --color-neutral-100: #f5f5f5;
        --color-neutral-700: #404040;
        --color-green-100: #dcfce7;
        --color-green-700: #15803d;


        --color-red-100: #fee2e2;
        --color-red-700: #b91c1c;

        --backdrop-color: rgba(255, 255, 255, 0.1);

        --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
        --shadow-md: 0 1px 2px rgba(0, 0, 0, 0.06);
        --shadow-lg: 0 1px 2px rgba(0, 0, 0, 0.12);

        --image-grayscale: 0;
        --image-opacity: 100%;

    }

    &.dark-mode {
        --color-gray-0 : #18212f;
        --color-gray-50 : #111827;
        --color-gray-100 : #1f2937;
        --color-gray-200 : #374151;
        --color-gray-300 : #4b5563;
        --color-gray-400 : #6b7280;
        --color-gray-500 : #9ca3af;
        --color-gray-600 : #d1d5db;
        --color-gray-700 : #e5e7eb;
        --color-gray-800 : #f3f4f6;
        --color-gray-900 : #f9fafb;

        --color-sky-100: #0369a1;
        --color-sky-700: #e0f2fe;
        --color-teal-100: #0f766e;
        --color-teal-700: #ccfbf1;
        --color-amber-100: #b45309;
        --color-amber-700: #fef3c7;
        --color-neutral-100: #404040;
        --color-neutral-700: #f5f5f5;
        --color-green-100: #15803d;
        --color-green-700: #dcfce7;
        
        --color-red-100: #fee2e2;
        --color-red-700: #b91c1c;
        --color-red-800: #991b1b;

        --backdrop-color: rgba(0, 0, 0, 0.3);

        --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
        --shadow-md: 0 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
        --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);

        --image-grayscale: 10%;
        --image-opacity: 90%;
    }

    --border-radius-tiny: 3px;
    --border-radius-sm: 5px;
    --border-radius-md: 7px;
    --border-radius-lg: 9px; 

    /* Cyan */
    --color-brand-50: #ecfeff;
    --color-brand-100: #cffafe;
    --color-brand-200: #a5f3fc;
    --color-brand-300: #67e8f9;
    --color-brand-400: #22d3ee;
    --color-brand-500: #06b6d4;
    --color-brand-600: #0891b2;
    --color-brand-700: #0e7490;
    --color-brand-800: #155e75;
    --color-brand-900: #164e63;

}

*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

    transition: background-color 0.3s, border 0.3s;
}

html{
    font-size: 62.5%;
}

body {
    font-family: "Poppins", sans-serif;
    color: var(--color-gray-700);

    transition: color 0.3s, background-color 0.3s;
    min-height: 100vh;
    line-height: 1.5;
    font-size: 1.6rem;
}

input,
button,
textarea,
select{
    font: inherit;
    color: inherit;
}

button {
    cursor: pointer;
}

*:disabled {
    cursor: not-allowed;
}

select:disabled,
input:disabled {
    background-color: var(--color-gray-200);
    color: var(--color-gray-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus{
    outline: 2px solid var(--color-brand-600);
    outline-offset: -1px;
}

/* Parent selector, finally 😃 */
button:has(svg) {
    line-height: 0;
}

a {
    color: inherit;
    text-decoration: none;
}

ul {
    list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
    overflow-wrap: break-word;
    hyphens: auto;
}

img{
    max-width: 100%;
    /* dark mode */
    filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
}
`;

export default GlobalStyles