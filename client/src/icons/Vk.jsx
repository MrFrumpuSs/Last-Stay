import React from 'react';

const Vk = ({width, height, color, ...props}) => {
    return (
        <svg {...props} width={width} height={height} viewBox='0 0 64 65' fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M59.5282 16.9971C59.9354 15.6239 59.487 14.6386 57.5801 14.6719L51.2394 14.7825C49.64 14.8105 48.9166 15.6927 48.5018 16.6301C48.5018 16.6301 45.3786 24.6295 40.9137 29.8584C39.4625 31.3734 38.7944 31.8816 37.9941 31.8956C37.5631 31.9031 36.9999 31.4164 36.9761 30.0518L36.754 17.3305C36.7259 15.7177 36.2213 14.9817 34.8665 15.0054L24.8947 15.1794C23.9091 15.1966 23.3071 15.952 23.3201 16.6966C23.3471 18.2476 25.6311 18.5807 25.9527 22.9194L26.1174 32.356C26.1531 34.4034 25.7964 34.7839 24.9901 34.7979C22.8361 34.8355 17.4648 26.9226 14.1673 17.8567C13.5255 16.0609 12.8937 15.3889 11.2931 15.4168L4.89184 15.5286C3.04545 15.5608 2.75307 16.4343 2.76932 17.3653C2.79857 19.041 5.09978 27.4412 13.1731 38.4716C18.5379 46.0081 26.0568 49.9777 32.7656 49.8606C36.8289 49.7896 37.3042 48.85 37.2771 47.299L37.1764 41.5286C37.1439 39.6676 37.5078 39.3512 38.8009 39.3287C39.7234 39.3126 41.3945 39.7788 45.2129 43.3745C49.5966 47.6423 50.3698 49.6151 52.7707 49.5731L59.1102 49.4625C60.9566 49.4303 61.8024 48.4841 61.2782 46.6936C60.6935 44.9041 58.5547 42.3351 55.7921 39.2804C54.2846 37.5699 52.0354 35.6847 51.3423 34.7655C50.3981 33.5406 50.6352 33.0399 51.2925 31.9117C51.2307 31.9128 58.7941 20.7329 59.5281 16.9923" fill={color}/>
        </svg>
    );
}

export default Vk;