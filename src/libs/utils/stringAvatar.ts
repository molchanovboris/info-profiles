import { stringToColor } from "./stringToColor";

export const stringAvatar = (name: string) => {
    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: `${name.slice(0, 1)}`,
    };
}