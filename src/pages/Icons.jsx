import React from 'react';

type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  logo: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
      <rect width="256" height="256" fill="none" />
      <line
        x1="208"
        y1="128"
        x2="128"
        y2="208"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <line
        x1="192"
        y1="40"
        x2="40"
        y2="192"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </svg>
  ),
  twitter: (props: IconProps) => (
    <svg
      {...props}
      height="23"
      viewBox="0 0 1200 1227"
      width="23"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
    </svg>
  ),
  gitHub: (props: IconProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.377 18.705 6.851 6.28.479 11.371.14 15.273-.995l4.283-.575c5.33-.76 10.419-2.569 15.276-5.14 4.856-2.566 8.945-5.996 12.275-10.277 3.333-4.283 5.805-9.42 7.42-15.415 1.616-5.996 2.426-11.041 2.426-15.128.192-1.902.28-2.951.287-3.141.096-.193.144-.384.144-.569 0-2.286-1.711-4.283-5.14-5.996-3.423-1.718-7.707-2.048-12.85-1.995l-6.567.287c-7.996.763-15.846 1.332-23.562 1.712-7.706.381-14.893.476-21.555.287-6.662-.187-12.515-.521-17.554-1.001-5.042-.479-9.561-1.14-13.562-1.995-4.004-.856-8.086-2.19-12.275-3.999-4.19-1.808-8.465-4.378-12.847-7.71-4.38-3.333-8.516-7.706-12.418-13.133-3.903-5.421-7.042-11.18-9.419-17.274-2.376-6.092-3.569-11.419-3.569-15.986 0-10.851 3.615-19.985 10.848-27.407 7.231-7.423 15.886-11.138 25.98-11.138 4.758-.096 9.801.288 15.126 1l1.716.289c4.761.193 11.802.287 21.125.287 15.797 0 32.93-1.999 51.391-5.996 18.463-3.999 35.212-9.993 50.25-17.986 15.036-7.995 27.408-17.991 37.114-29.979zm-16.564 335.602c3.614 4.757 6.993 9.945 10.134 15.559 3.14 5.612 5.23 10.182 6.279 13.706 2.286 6.283 2.757 11.037 1.427 14.277-1.328 3.234-4.285 5.663-8.562 7.277-4.287 1.618-10.325 2.382-18.128 2.287-7.805 0-16.605-1.143-26.404-3.429-9.797-2.287-20.32-4.855-31.546-7.71-11.231-2.853-21.508-6.04-30.833-9.564-9.328-3.521-17.557-7.232-24.693-11.14-7.135-3.905-13.702-8.327-19.698-13.274-5.996-4.945-11.374-10.802-16.134-17.56-4.757-6.763-8.8-14.611-12.134-23.55-3.331-8.945-5.899-18.465-7.71-28.55-1.805-10.089-2.709-19.56-2.709-28.408 0-5.33.475-10.99 1.424-16.987 0-.575.191-1.14.573-1.712 3.046-5.708 8.753-11.371 17.129-16.989 8.374-5.613 18.083-10.183 29.125-13.706 11.04-3.521 23.6-6.473 37.682-8.852 14.082-2.376 28.405-3.571 42.968-3.571 11.422 0 22.178.953 32.264 2.855 10.089 1.903 18.893 4.807 26.41 8.711 7.521 3.903 13.988 8.187 19.414 12.85 5.427 4.664 10.229 9.614 14.415 14.843 4.185 5.238 7.898 11.042 11.136 17.416 3.239 6.373 5.801 13.654 7.708 21.845zm0 0"
      />
    </svg>
  ),
};

// // Example usage:
// const App = () => {
//   return (
//     <div>
//       <Icons.logo width="100" height="100" />
//       <Icons.twitter width="30" height="30" />
//       <Icons.gitHub width="30" height="30" />
//     </div>
//   );
// };

// export default App;