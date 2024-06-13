export function getAspectRatio(aspectRatio: string): number {
  const dimensions = aspectRatio.split(/:|x/);
  const widthAspectRatio = Number(dimensions[0]);
  const heightAspectRatio = Number(dimensions[1]);

  return widthAspectRatio / heightAspectRatio;
}
