

type PositionObj = {
  latitude: number; 
  longitude: number; 
}

export interface Position {
  coords: PositionObj;
}


export type UserInitState  = {
  username: string;
  status: "idle" | "loading" | "error"
  position: PositionObj;
  address: string,
  error: string | undefined;
}