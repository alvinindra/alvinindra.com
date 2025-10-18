export function AIPMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 576 256"
      {...props}
    >
      <path
        fill="currentColor"
        d="M64 256H0V0h64v256ZM192 256h-64V0h64v256ZM128 64H64V0h64v64ZM128 192H64v-64h64v64Z M320 256H256V0h64v256Z M448 256H384V0h64v256Z M576 64H448V0h128v64Z M576 128H512V64h64v64Z M576 192H448v-64h128v64Z"
      />
    </svg>
  );
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 288 128"><path fill="${color}" d="M32 128H0V0h32v128ZM96 128H64V0h32v128ZM64 32H32V0h32v32ZM64 96H32v-32h32v32Z M160 128h-32V0h32v128Z M224 128h-32V0h32v128Z M288 32H224V0h64v32Z M288 64h-32V32h32v32Z M288 96H224v-32h64v32Z"/></svg>`;
}