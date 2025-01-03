import type React from "react";

const Frame = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen w-full absolute -z-100">
      <svg
        viewBox="0 0 760 435"
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute z-[1] w-full h-full p-2"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M751 64.9087V278.794L734.718 295.071V410.216L717.866 427H261.212L249.491 415.346H77.6755L43.021 380.765V276.641L9 242.629V59.7151L53.7278 15H701.077L751 64.9087ZM54.488 16.8367L10.9006 60.4752V241.806L44.3514 275.247L44.9216 275.817V379.941L78.3724 413.383H250.251L250.822 413.953L261.972 425.1H717.042L732.754 409.393V294.248L733.324 293.741L749.099 277.971V65.6687L700.254 16.8367H54.488Z"
          fill="#EF428C"
          fillOpacity="0.5"
        />
        <path
          d="M741 57V287L750 278.62V65.3163C750 65.3163 741 57.3174 741 57Z"
          fill="#EF428C"
          fillOpacity="0.5"
        />
        <path
          d="M749 296L740 304.341V314L748.932 305.721L749 296Z"
          fill="#EF428C"
          fillOpacity="0.5"
        />
        <path
          d="M749 311L740 319.805V330L748.932 321.261L749 311Z"
          fill="#EF428C"
          fillOpacity="0.5"
        />
        <path
          d="M749 326L740 334.313V344L748.932 335.687L749 326Z"
          fill="#EF428C"
          fillOpacity="0.5"
        />
        <path
          d="M749 341L740 349.341V359L748.932 350.721L749 341Z"
          fill="#EF428C"
          fillOpacity="0.5"
        />
        <path
          d="M749 356L740 364.341V374L748.932 365.721L749 356Z"
          fill="#EF428C"
          fillOpacity="0.5"
        />
        <path
          d="M749 371L740 379.279V389L748.932 380.721L749 371Z"
          fill="#EF428C"
          fillOpacity="0.5"
        />
        <path
          d="M749 386L740 394.341V404L748.932 395.721L749 386Z"
          fill="#EF428C"
          fillOpacity="0.5"
        />
        <path
          d="M10.0635 265L34 288.563V305L10 281.375L10.0635 265Z"
          fill="#EF428C"
          fillOpacity="0.5"
        />
        <path
          d="M10.0635 290L34 314.152V331L10 306.848L10.0635 290Z"
          fill="#EF428C"
          fillOpacity="0.5"
        />
        <path
          d="M10.0635 317L34 340.563V357L10 333.375C10 333.375 10.0635 316.938 10.0635 317Z"
          fill="#EF428C"
          fillOpacity="0.5"
        />
        <path
          d="M10.0635 342L34 366.152V383L10 358.784L10.0635 342Z"
          fill="#EF428C"
          fillOpacity="0.5"
        />
        <path
          d="M45.2522 426H207L203.973 422.966H74.8902L45 393L45.2522 426Z"
          fill="#EF428C"
          fillOpacity="0.5"
        />
        <path
          opacity="0.1"
          d="M42.4445 323.967L56.5123 309.826V238.615L21.7865 203.802V80.4653L84.7745 17.3704H673.022L729.229 73.6168V275.584L719.027 285.73V348.381L731.637 361V288.583L749 271.209V58.715L699.319 9H54.3577L10 53.3884V236.078L43.0148 269.116C43.0148 269.116 42.4445 323.65 42.4445 323.967Z"
          fill="#EF428C"
          fillOpacity="0.5"
        />
        <path
          d="M355 15.3946L362.223 8H618.206L626 15.9784C626 15.9784 355 16.173 355 15.3946Z"
          fill="#EF428C"
          fillOpacity="0.5"
        />
      </svg>
      {children}
    </div>
  );
};

export default Frame;
