import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { DefaultComponentProps } from '@material-ui/core/OverridableComponent';

interface ResumeIconOwnProps {
    className?: string;
}

const ResumeIcon: React.FC<ResumeIconOwnProps> = (props) => {
    return <SvgIcon {...props}>
        <path style={{stroke:"none",fillRule:"nonzero",fill:"#F1BC19", fillOpacity:1}} d="M 18.71875 3.121094 C 18.71875 3.253906 18.613281 3.359375 18.480469 3.359375 C 18.347656 3.359375 18.238281 3.253906 18.238281 3.121094 C 18.238281 2.988281 18.347656 2.878906 18.480469 2.878906 C 18.613281 2.878906 18.71875 2.988281 18.71875 3.121094 Z "/>
        <path style={{stroke:"none",fillRule:"nonzero",fill:"#cfe7e0",fillOpacity:1}} d="M 20.878906 12 C 20.878906 16.902344 16.902344 20.878906 12 20.878906 C 7.097656 20.878906 3.121094 16.902344 3.121094 12 C 3.121094 7.097656 7.097656 3.121094 12 3.121094 C 16.902344 3.121094 20.878906 7.097656 20.878906 12 Z "/>
        <path style={{stroke:"none",fillRule:"nonzero",fill:"#F1BC19",fillOpacity:1}} d="M 20.878906 3.601563 C 20.878906 4.128906 20.449219 4.558594 19.921875 4.558594 C 19.390625 4.558594 18.960938 4.128906 18.960938 3.601563 C 18.960938 3.070313 19.390625 2.640625 19.921875 2.640625 C 20.449219 2.640625 20.878906 3.070313 20.878906 3.601563 Z "/>
        <path style={{stroke:"none",fillRule:"nonzero",fill:"#88AE45",fillOpacity:1}} d="M 21.359375 5.761719 C 21.359375 6.023438 21.144531 6.238281 20.878906 6.238281 C 20.613281 6.238281 20.398438 6.023438 20.398438 5.761719 C 20.398438 5.496094 20.613281 5.28125 20.878906 5.28125 C 21.144531 5.28125 21.359375 5.496094 21.359375 5.761719 Z "/>
        <path style={{stroke:"none",fillRule:"nonzero",fill:"#FBCD59",fillOpacity:1}} d="M 19.921875 18.238281 C 19.921875 18.503906 19.707031 18.71875 19.441406 18.71875 C 19.175781 18.71875 18.960938 18.503906 18.960938 18.238281 C 18.960938 17.976563 19.175781 17.761719 19.441406 17.761719 C 19.707031 17.761719 19.921875 17.976563 19.921875 18.238281 Z "/>
        <path style={{stroke:"none",fillRule:"nonzero",fill:"#FBCD59",fillOpacity:1}} d="M 4.558594 15.121094 C 4.558594 15.648438 4.128906 16.078125 3.601563 16.078125 C 3.070313 16.078125 2.640625 15.648438 2.640625 15.121094 C 2.640625 14.589844 3.070313 14.160156 3.601563 14.160156 C 4.128906 14.160156 4.558594 14.589844 4.558594 15.121094 Z "/>
        <path style={{stroke:"none",fillRule:"nonzero",fill:"#88AE45",fillOpacity:1}} d="M 6.480469 20.878906 C 6.480469 21.144531 6.265625 21.359375 6 21.359375 C 5.734375 21.359375 5.519531 21.144531 5.519531 20.878906 C 5.519531 20.613281 5.734375 20.398438 6 20.398438 C 6.265625 20.398438 6.480469 20.613281 6.480469 20.878906 Z "/>
        <path style={{stroke:"none",fillRule:"nonzero",fill:"#FFFFFF",fillOpacity:1}} d="M 5.039063 12.359375 C 5.039063 12.691406 4.769531 12.960938 4.441406 12.960938 C 4.109375 12.960938 3.839844 12.691406 3.839844 12.359375 C 3.839844 12.027344 4.109375 11.761719 4.441406 11.761719 C 4.769531 11.761719 5.039063 12.027344 5.039063 12.359375 Z "/>
        <path style={{stroke:"none",fillRule:"nonzero",fill:"#FFFFFF",fillOpacity:1}} d="M 19.441406 8.039063 C 19.441406 8.238281 19.277344 8.398438 19.078125 8.398438 C 18.882813 8.398438 18.71875 8.238281 18.71875 8.039063 C 18.71875 7.839844 18.882813 7.679688 19.078125 7.679688 C 19.277344 7.679688 19.441406 7.839844 19.441406 8.039063 Z "/>
        <path style={{stroke:"none",fillRule:"nonzero",fill:"#EDF7F5",fillOpacity:1}} d="M 8.644531 18.070313 C 7.941406 18.070313 7.367188 17.527344 7.367188 16.859375 L 7.367188 7.140625 C 7.367188 6.472656 7.941406 5.929688 8.644531 5.929688 L 13.867188 5.929688 L 17.113281 9.03125 L 17.113281 16.859375 C 17.113281 17.527344 16.539063 18.070313 15.835938 18.070313 Z "/>
        <path style={{stroke:"none",fillRule:"nonzero",fill:"#472B29",fillOpacity:1}} d="M 13.800781 6.097656 L 15.375 7.601563 L 16.945313 9.101563 L 16.945313 16.859375 C 16.945313 17.4375 16.449219 17.902344 15.835938 17.902344 L 8.644531 17.902344 C 8.03125 17.902344 7.535156 17.4375 7.535156 16.859375 L 7.535156 7.140625 C 7.535156 6.5625 8.03125 6.097656 8.644531 6.097656 L 13.800781 6.097656 M 13.933594 5.761719 L 8.644531 5.761719 C 7.847656 5.761719 7.199219 6.378906 7.199219 7.140625 L 7.199219 16.859375 C 7.199219 17.617188 7.847656 18.238281 8.644531 18.238281 L 15.835938 18.238281 C 16.628906 18.238281 17.28125 17.621094 17.28125 16.859375 L 17.28125 8.957031 C 15.980469 7.714844 15.234375 7.003906 13.933594 5.761719 Z "/>
        <path style={{stroke:"none",fillRule:"nonzero",fill:"#85CFCC",fillOpacity:1}} d="M 13.800781 6.050781 L 13.800781 7.96875 C 13.800781 8.667969 14.375 9.238281 15.078125 9.238281 L 17.039063 9.238281 "/>
        <path style={{stroke:"none",fillRule:"nonzero",fill:"#472B29",fillOpacity:1}} d="M 17.039063 9.359375 L 15.078125 9.359375 C 14.308594 9.359375 13.679688 8.734375 13.679688 7.96875 L 13.679688 6.050781 L 13.921875 6.050781 L 13.921875 7.96875 C 13.921875 8.605469 14.441406 9.121094 15.078125 9.121094 L 17.039063 9.121094 Z "/>
        <path style={{stroke:"none",fillRule:"nonzero",fill:"#472B29",fillOpacity:1}} d="M 13.320313 6.898438 L 10.019531 6.898438 C 9.988281 6.898438 9.960938 6.875 9.960938 6.839844 C 9.960938 6.808594 9.988281 6.78125 10.019531 6.78125 L 13.320313 6.78125 C 13.351563 6.78125 13.378906 6.808594 13.378906 6.839844 C 13.378906 6.875 13.351563 6.898438 13.320313 6.898438 Z "/>
        <path style={{stroke:"none",fillRule:"nonzero",fill:"#472B29",fillOpacity:1}} d="M 15.527344 17.21875 L 8.953125 17.21875 C 8.550781 17.21875 8.21875 16.894531 8.21875 16.492188 L 8.21875 7.507813 C 8.21875 7.105469 8.550781 6.78125 8.953125 6.78125 L 9.480469 6.78125 C 9.511719 6.78125 9.539063 6.808594 9.539063 6.839844 C 9.539063 6.875 9.511719 6.898438 9.480469 6.898438 L 8.953125 6.898438 C 8.617188 6.898438 8.339844 7.171875 8.339844 7.507813 L 8.339844 16.492188 C 8.339844 16.828125 8.613281 17.101563 8.953125 17.101563 L 15.527344 17.101563 C 15.863281 17.101563 16.140625 16.828125 16.140625 16.492188 L 16.140625 13.800781 C 16.140625 13.765625 16.167969 13.738281 16.199219 13.738281 C 16.234375 13.738281 16.261719 13.765625 16.261719 13.800781 L 16.261719 16.492188 C 16.261719 16.894531 15.929688 17.21875 15.527344 17.21875 Z "/>
        <path style={{stroke:"none",fillRule:"nonzero",fill:"#472B29",fillOpacity:1}} d="M 16.199219 13.140625 C 16.167969 13.140625 16.140625 13.113281 16.140625 13.078125 L 16.140625 11.878906 C 16.140625 11.847656 16.167969 11.820313 16.199219 11.820313 C 16.234375 11.820313 16.261719 11.847656 16.261719 11.878906 L 16.261719 13.078125 C 16.261719 13.113281 16.234375 13.140625 16.199219 13.140625 Z "/>
        <path style={{stroke:"none",fillRule:"nonzero",fill:"#472B29",fillOpacity:1}} d="M 16.199219 11.601563 C 16.167969 11.601563 16.140625 11.574219 16.140625 11.539063 L 16.140625 11 C 16.140625 10.96875 16.167969 10.941406 16.199219 10.941406 C 16.234375 10.941406 16.261719 10.96875 16.261719 11 L 16.261719 11.539063 C 16.261719 11.574219 16.234375 11.601563 16.199219 11.601563 Z "/>
        <path style={{stroke:"none",fillRule:"nonzero",fill:"#472B29",fillOpacity:1}} d="M 15 12.898438 L 9.480469 12.898438 C 9.445313 12.898438 9.421875 12.875 9.421875 12.839844 C 9.421875 12.808594 9.445313 12.78125 9.480469 12.78125 L 15 12.78125 C 15.03125 12.78125 15.058594 12.808594 15.058594 12.839844 C 15.058594 12.875 15.03125 12.898438 15 12.898438 Z "/>
        <path style={{stroke:"none",fillRule:"nonzero",fill:"#472B29",fillOpacity:1}} d="M 11.398438 13.621094 L 9.480469 13.621094 C 9.445313 13.621094 9.421875 13.59375 9.421875 13.558594 C 9.421875 13.527344 9.445313 13.5 9.480469 13.5 L 11.398438 13.5 C 11.433594 13.5 11.460938 13.527344 11.460938 13.558594 C 11.460938 13.59375 11.433594 13.621094 11.398438 13.621094 Z "/>
        <path style={{stroke:"none",fillRule:"nonzero",fill:"#472B29",fillOpacity:1}} d="M 12.359375 14.339844 L 9.480469 14.339844 C 9.445313 14.339844 9.421875 14.3125 9.421875 14.28125 C 9.421875 14.246094 9.445313 14.21875 9.480469 14.21875 L 12.359375 14.21875 C 12.394531 14.21875 12.421875 14.246094 12.421875 14.28125 C 12.421875 14.3125 12.394531 14.339844 12.359375 14.339844 Z "/>
        <path style={{stroke:"none",fillRule:"nonzero",fill:"#472B29",fillOpacity:1}} d="M 15 14.339844 L 13.078125 14.339844 C 13.046875 14.339844 13.019531 14.3125 13.019531 14.28125 C 13.019531 14.246094 13.046875 14.21875 13.078125 14.21875 L 15 14.21875 C 15.03125 14.21875 15.058594 14.246094 15.058594 14.28125 C 15.058594 14.3125 15.03125 14.339844 15 14.339844 Z "/>
        <path style={{stroke:"none",fillRule:"nonzero",fill:"#472B29",fillOpacity:1}} d="M 15 13.621094 L 11.878906 13.621094 C 11.847656 13.621094 11.820313 13.59375 11.820313 13.558594 C 11.820313 13.527344 11.847656 13.5 11.878906 13.5 L 15 13.5 C 15.03125 13.5 15.058594 13.527344 15.058594 13.558594 C 15.058594 13.59375 15.03125 13.621094 15 13.621094 Z "/>
        <path style={{stroke:"none",fillRule:"nonzero",fill:"#472B29",fillOpacity:1}} d="M 15 15.058594 L 9.480469 15.058594 C 9.445313 15.058594 9.421875 15.03125 9.421875 15 C 9.421875 14.96875 9.445313 14.941406 9.480469 14.941406 L 15 14.941406 C 15.03125 14.941406 15.058594 14.96875 15.058594 15 C 15.058594 15.03125 15.03125 15.058594 15 15.058594 Z "/>
        <path style={{stroke:"none",fillRule:"nonzero",fill:"#472B29",fillOpacity:1}} d="M 11.398438 15.78125 L 9.480469 15.78125 C 9.445313 15.78125 9.421875 15.753906 9.421875 15.71875 C 9.421875 15.6875 9.445313 15.660156 9.480469 15.660156 L 11.398438 15.660156 C 11.433594 15.660156 11.460938 15.6875 11.460938 15.71875 C 11.460938 15.753906 11.433594 15.78125 11.398438 15.78125 Z "/>
        <path style={{stroke:"none",fillRule:"nonzero",fill:"#472B29",fillOpacity:1}} d="M 15 15.78125 L 11.878906 15.78125 C 11.847656 15.78125 11.820313 15.753906 11.820313 15.71875 C 11.820313 15.6875 11.847656 15.660156 11.878906 15.660156 L 15 15.660156 C 15.03125 15.660156 15.058594 15.6875 15.058594 15.71875 C 15.058594 15.753906 15.03125 15.78125 15 15.78125 Z "/>
        <path style={{stroke:"none",fillRule:"nonzero",fill:"#FFFFFF",fillOpacity:1}} d="M 9.480469 7.800781 L 12.839844 7.800781 L 12.839844 11.878906 L 9.480469 11.878906 Z "/>
        <path style={{stroke:"none",fillRule:"nonzero",fill:"#472B29",fillOpacity:1}} d="M 12.898438 11.941406 L 9.421875 11.941406 L 9.421875 7.738281 L 12.898438 7.738281 Z M 9.539063 11.820313 L 12.78125 11.820313 L 12.78125 7.859375 L 9.539063 7.859375 Z "/>
        <path style={{stroke:"none",fillRule:"nonzero",fill:"#FED5B3",fillOpacity:1}} d="M 10.699219 10.210938 L 11.574219 10.210938 L 11.574219 11.28125 L 10.699219 11.28125 Z "/>
        <path style={{stroke:"none",fillRule:"nonzero",fill:"#472B29",fillOpacity:1}} d="M 11.636719 11.339844 L 10.636719 11.339844 L 10.636719 10.152344 L 11.636719 10.152344 Z M 10.757813 11.21875 L 11.515625 11.21875 L 11.515625 10.273438 L 10.757813 10.273438 Z "/>
        <path style={{stroke:"none",fillRule:"nonzero",fill:"#FAE8E6",fillOpacity:1}} d="M 12.003906 9.523438 C 12.003906 10.0625 11.617188 10.863281 11.140625 10.863281 C 10.664063 10.863281 10.277344 10.0625 10.277344 9.523438 C 10.277344 8.984375 10.65625 8.636719 11.136719 8.636719 C 11.613281 8.636719 12.003906 8.984375 12.003906 9.523438 Z "/>
        <path style={{stroke:"none",fillRule:"nonzero",fill:"#472B29",fillOpacity:1}} d="M 11.140625 10.925781 C 10.613281 10.925781 10.21875 10.074219 10.21875 9.523438 C 10.21875 8.972656 10.601563 8.574219 11.132813 8.574219 C 11.671875 8.574219 12.0625 8.972656 12.0625 9.523438 C 12.0625 10.074219 11.667969 10.925781 11.140625 10.925781 Z M 11.132813 8.695313 C 10.671875 8.695313 10.335938 9.042969 10.335938 9.523438 C 10.335938 10.027344 10.695313 10.804688 11.140625 10.804688 C 11.582031 10.804688 11.941406 10.027344 11.941406 9.523438 C 11.941406 9.042969 11.601563 8.695313 11.132813 8.695313 Z "/>
        <path style={{stroke:"none",fillRule:"nonzero",fill:"#D38B5D",fillOpacity:1}} d="M 10.390625 9.835938 C 10.390625 9.835938 9.734375 8.625 10.929688 8.234375 C 11.449219 8.066406 11.585938 8.507813 11.585938 8.507813 C 11.585938 8.507813 11.9375 8.511719 12.039063 8.773438 C 12.140625 9.035156 12.1875 9.4375 11.996094 9.765625 C 11.910156 9.59375 11.832031 9.472656 11.792969 9.152344 C 11.460938 9.253906 10.820313 9.164063 10.554688 8.90625 Z "/>
        <path style={{stroke:"none",fillRule:"nonzero",fill:"#472B29",fillOpacity:1}} d="M 10.417969 10.015625 L 10.335938 9.863281 C 10.324219 9.839844 10.015625 9.261719 10.21875 8.757813 C 10.324219 8.488281 10.558594 8.292969 10.910156 8.175781 C 11.09375 8.117188 11.253906 8.121094 11.390625 8.191406 C 11.53125 8.261719 11.601563 8.386719 11.628906 8.449219 C 11.730469 8.460938 12 8.507813 12.09375 8.75 C 12.203125 9.027344 12.25 9.449219 12.050781 9.792969 L 11.996094 9.890625 L 11.921875 9.75 C 11.847656 9.609375 11.78125 9.484375 11.742188 9.230469 C 11.410156 9.300781 10.890625 9.226563 10.59375 9.019531 Z M 11.84375 9.074219 L 11.851563 9.148438 C 11.882813 9.386719 11.933594 9.507813 11.996094 9.632813 C 12.113281 9.347656 12.070313 9.019531 11.984375 8.796875 C 11.894531 8.574219 11.589844 8.566406 11.585938 8.566406 L 11.542969 8.566406 L 11.53125 8.523438 C 11.527344 8.523438 11.476563 8.371094 11.332031 8.296875 C 11.230469 8.242188 11.097656 8.242188 10.949219 8.292969 C 10.632813 8.394531 10.421875 8.566406 10.328125 8.800781 C 10.210938 9.09375 10.292969 9.429688 10.367188 9.628906 L 10.515625 8.785156 L 10.59375 8.863281 C 10.839844 9.101563 11.460938 9.191406 11.777344 9.097656 Z "/>
        <path style={{stroke:"none",fillRule:"nonzero",fill:"#EF5390",fillOpacity:1}} d="M 12.078125 11.347656 L 11.613281 11.101563 C 11.390625 11.265625 10.917969 11.257813 10.703125 11.101563 L 10.210938 11.347656 C 9.953125 11.476563 9.640625 11.605469 9.640625 11.878906 L 12.660156 11.878906 C 12.660156 11.605469 12.378906 11.5 12.078125 11.347656 Z "/>
        <path style={{stroke:"none",fillRule:"nonzero",fill:"#472B29",fillOpacity:1}} d="M 12.71875 11.941406 L 9.582031 11.941406 L 9.582031 11.878906 C 9.582031 11.589844 9.867188 11.449219 10.117188 11.328125 L 10.710938 11.03125 L 10.738281 11.050781 C 10.9375 11.195313 11.382813 11.195313 11.574219 11.050781 L 11.605469 11.027344 L 12.199219 11.339844 C 12.46875 11.472656 12.71875 11.597656 12.71875 11.878906 Z M 9.707031 11.820313 L 12.59375 11.820313 C 12.5625 11.660156 12.398438 11.574219 12.148438 11.449219 L 12.050781 11.402344 L 11.617188 11.171875 C 11.382813 11.316406 10.9375 11.316406 10.699219 11.167969 L 10.171875 11.433594 C 9.960938 11.535156 9.746094 11.644531 9.707031 11.820313 Z "/>
    </SvgIcon>;
}

export default ResumeIcon;