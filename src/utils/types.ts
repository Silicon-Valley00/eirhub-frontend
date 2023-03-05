export interface AppRoute {
   path: string;
   protected?: boolean;
   requiresProfile?: boolean;
   icon?: (props: React.ImgHTMLAttributes<{}>) => JSX.Element;
   name?: string;
   exact?: boolean;
   component: React.ComponentType;
}
