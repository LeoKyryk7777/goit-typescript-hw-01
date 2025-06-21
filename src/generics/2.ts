type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

type AllTypeInfo = Pick<AllType, "name" | "position" | "color" | "weight">;

function compare(top: AllTypeInfo, bottom: AllTypeInfo): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}
