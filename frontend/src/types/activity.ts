export interface Activity {

  id: string;

  action: string;

  createdAt: string;

  user?: {

    id: string;

    name: string;

    email: string;

  };

}