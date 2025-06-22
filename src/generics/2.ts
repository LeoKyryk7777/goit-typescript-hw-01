type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

type AllTypeInfo = Pick<AllType, "name" | "color">;
type AllTypeInfoBottom = Pick<AllType, "position" | "weight">;

function compare(top: AllTypeInfo, bottom: AllTypeInfoBottom): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}
