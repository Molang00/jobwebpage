import axios from 'axios';
import { parse } from 'cookie';
import { PopupSchema } from '@postech-ses/job-core';

import { REACT_APP_API_URL } from '../config';

export const loadPopups = async () => {
  await axios(`${REACT_APP_API_URL}/popup/today`, {
    method: 'GET'
  })
    .then(res => {
      const popups: PopupSchema[] = res.data;

      const cookie = parse(document.cookie);

      popups.forEach(popup => {
        const { id, title, imageName } = popup;

        const isClosePopUpToday = cookie[`popup#${id}`];

        if (!isClosePopUpToday) {
          window.open(
            `/popup?id=${id}&imageName=${imageName}&title=${title}`,
            title,
            'resizable=yes,toolbar=no,location=no'
          );
        }
      });
    })
    .catch(() => null);
};
