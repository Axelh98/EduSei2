// Permite importar archivos CSS sin errores de TypeScript
declare module "*.css" {
  const content: Record<string, string>
  export default content
}