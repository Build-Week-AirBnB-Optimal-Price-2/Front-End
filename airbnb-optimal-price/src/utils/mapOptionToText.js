export const translatePropertyType = option => {
  switch (option) {
    case 0:
      return 'Guesthouse';
    case 1:
      return 'Apartment';
    case 2:
      return 'Condo';
    case 3:
      return 'House';
    case 4:
      return 'Other';
    default:
      return '';
  }
};

export const translateRoomType = option => {
  switch (option) {
    case 0:
      return 'Private Room';
    case 1:
      return 'Entire House/Apt';
    case 2:
      return 'Shared Room';
    default:
      return '';
  }
};

export const translateBedType = option => {
  switch (option) {
    case 0:
      return 'Real Bed';
    case 1:
      return 'Pullout Sofa';
    case 2:
      return 'Other';
    default:
      return '';
  }
};

export const translateCancellationPolicy = option => {
  switch (option) {
    case 0:
      return 'Strict - 14 day with Grace Period';
    case 1:
      return 'Flexible';
    case 2:
      return 'Moderate';
    case 3:
      return 'Super Strict - 30';
    case 4:
      return 'Super Strict - 30';
    default:
      return '';
  }
};

export const translateNeighbourhood = option => {
  switch (option) {
    case 0:
      return 'Friedrichshain';
    case 1:
      return 'Mitte';
    case 2:
      return 'Pankow';
    case 3:
      return 'Neukolln';
    case 4:
      return 'Charlottenburg-Wilm';
    case 5:
      return 'Tempelhof - Schoneberg';
    case 6:
      return 'Lichtenberg';
    case 7:
      return 'Treptow';
    case 8:
      return 'Steglitz - Zehlendorf';
    case 9:
      return 'Reinickendorf';
    case 10:
      return 'Marzahn - Hellersdorf';
    case 11:
      return 'Spandau';
    default:
      return '';
  }
};
