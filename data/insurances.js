const DUMMY_DATA = [
    {
        title: 'بیمه آتش سوزی',
        link: '',
        icon: <svg version="1.1"
                   width="64" height="64" x="0" y="0" viewBox="0 0 512.001 512.001"><g><g><path d="m286.001 336.001h-60c-5.523 0-10 4.477-10 10v60c0 5.523 4.477 10 10 10h60c5.522 0 10-4.477 10-10v-60c0-5.523-4.478-10-10-10zm-10 60h-40v-40h40z" fill="#c2188f" data-original="#000000" className=""></path><circle
            cx="445.001" cy="193.001" r="10" fill="#c2188f" data-original="#000000" className=""></circle><path
            d="m469.703 233.095c-1.292-5.368-6.694-8.677-12.063-7.379-5.369 1.293-8.674 6.694-7.38 12.064 3.81 15.814 5.741 32.038 5.741 48.221 0 59.328-25.854 116.053-70 155.438v-98.632l13.753 11.002c4.298 3.439 10.595 2.766 14.056-1.562 3.45-4.313 2.751-10.605-1.562-14.056l-150-120c-3.652-2.922-8.842-2.922-12.494 0l-73.753 59.002v-21.194c0-5.523-4.477-10-10-10s-10 4.477-10 10v37.194l-56.247 44.998c-4.313 3.45-5.012 9.743-1.562 14.056 3.45 4.312 9.743 5.012 14.056 1.562l13.753-11.002v98.632c-44.146-39.387-70-96.111-70-155.438 0-44.66 14.353-88.157 40-122.844v13.474c0 29.669 29.005 50.577 57.155 41.196 26.21-8.745 37.33-39.26 23.354-63.703-11.41-19.936-13.95-40.59-7.61-61.586l29.794 36.978c6.275 7.79 35.53 13.134 52.271-7.823 20.506-25.676 30.33-59.06 22.875-91.626 30.763 21.477 46.188 62.871 34.491 100.568l-5.73 18.443c-5.632 18.144 1.181 37.456 16.956 48.057 13.113 8.805 29.92 9.661 43.856 2.23 14.144-7.54 22.588-21.612 22.588-37.643v-30.624c10.091 8.755 19.348 18.639 27.65 29.536 3.346 4.393 9.619 5.242 14.015 1.894 4.393-3.347 5.241-9.622 1.894-14.015-13.707-17.99-29.802-33.491-47.837-46.073-3.055-2.131-7.043-2.387-10.347-.665-3.304 1.724-5.375 5.14-5.375 8.866v51.08c0 8.515-4.484 15.989-11.996 19.994-7.52 4.006-16.228 3.563-23.296-1.184-8.379-5.63-11.998-15.889-9.008-25.523l5.73-18.444c17.286-55.708-13.144-117.676-68.269-136.05-3.838-1.28-8.066-.122-10.717 2.935-2.649 3.055-3.198 7.406-1.39 11.023 22.218 44.447-.794 81.06-11.719 94.738-5.314 6.653-14.549 8.971-22.58 5.883l-38.97-48.366c-2.136-2.651-5.474-4.032-8.857-3.668-3.384.364-6.351 2.425-7.874 5.469-16.042 32.074-15.317 65.108 2.093 95.527 7.552 13.207 2.218 29.948-12.32 34.799-15.185 5.059-30.829-6.222-30.829-22.223v-40.6c0-4.063-2.458-7.722-6.22-9.258-3.761-1.535-8.079-.643-10.922 2.259-39.947 40.765-62.857 97.978-62.857 156.969 0 121.788 98.646 226 220 226 121.289 0 220-104.143 220-226 .001-17.759-2.119-35.559-6.297-52.906zm-323.702 224.118v-130.406l110-88 110 88v130.405c-32.875 22.772-70.796 34.788-110 34.788-39.204.001-77.126-12.016-110-34.787z"
            fill="#c2188f" data-original="#000000" className=""></path></g></g></svg>,
    },
    {
        title: 'بیمه مسئولیت',
        link: '',
        icon: <svg version="1.1" width="64" height="64" x="0" y="0" viewBox="0 0 510.006 510.006"><g><g xmlns="http://www.w3.org/2000/svg"><path d="m509.216 329.787c-5.433-28.971-36.478-45.316-63.455-33.327l-.523.233-100.281 54.07c-.919-24.009-20.727-43.26-44.956-43.26-18.011 0-36.175-1.794-53.987-5.332-32.301-6.415-54.51-9.668-66.013-9.668-14.444 0-39.24 2.281-60 7.082v-37.082h-120.001v225h120v-28.971c23.275 3.166 37.595 12.346 41.459 13.972 19.628 9.812 41.6 14.999 63.541 14.999 70.569 0 140.32-21.959 198.962-64.204l63.215-45.541c16.787-9.695 25.626-28.841 22.039-47.971zm-479.216 127.716v-165h60v165zm441.862-105.55-.805.442-64.631 46.561c-53.165 38.302-115.902 58.547-181.426 58.547-17.309 0-34.642-4.092-50.124-11.832-3.676-1.504-23.547-14.009-54.876-17.364v-97.764c16.928-4.759 43.116-8.04 60-8.04 5.372 0 20.332 1.182 60.169 9.094 19.731 3.919 39.862 5.906 59.831 5.906 8.272 0 15 6.729 15 15 0 8.272-6.728 15-15 15h-90v30h90c12.021 0 23.704-2.424 34.729-7.205l.589-.255 123.067-66.357c9.16-3.746 19.506 1.839 21.344 11.631 1.253 6.68-1.908 13.366-7.867 16.636z" fill="#c2188f" data-original="#000000"></path><path
            d="m510 232.503v-30c0-29.904-17.597-55.767-42.976-67.802 8.113-10.233 12.976-23.155 12.976-37.198 0-33.084-26.916-60-60-60s-60 26.916-60 60c0 14.043 4.862 26.965 12.975 37.198-8.483 4.023-16.087 9.597-22.464 16.347-7.608-13.619-19.332-24.635-33.486-31.347 8.112-10.233 12.975-23.155 12.975-37.198 0-33.084-26.916-60-60-60s-60 26.916-60 60c0 14.043 4.862 26.965 12.975 37.198-14.153 6.712-25.878 17.728-33.486 31.347-6.377-6.75-13.98-12.324-22.464-16.347 8.112-10.233 12.975-23.155 12.975-37.198 0-33.084-26.916-60-60-60s-60 26.916-60 60c0 14.043 4.862 26.965 12.975 37.198-25.378 12.036-42.975 37.898-42.975 67.802v30zm-150-30c0-24.814 20.186-45 45-45h30c24.813 0 45 20.186 45 45zm60-135c16.542 0 30 13.458 30 30s-13.458 30-30 30-30-13.458-30-30 13.458-30 30-30zm-150-15c16.542 0 30 13.458 30 30s-13.458 30-30 30-30-13.458-30-30 13.458-30 30-30zm-60 135c0-24.814 20.186-45 45-45h30c24.813 0 45 20.186 45 45v15h-120zm-90-120c16.542 0 30 13.458 30 30s-13.458 30-30 30-30-13.458-30-30 13.458-30 30-30zm-60 135c0-24.814 20.187-45 45-45h30c24.813 0 45 20.186 45 45z"
            fill="#c2188f" data-original="#000000"></path></g></g></svg>,
    },
    {
        title: 'بیمه عمر سرمایه گذاری',
        link: '',
        icon: <svg width="64" height="64" x="0" y="0" viewBox="0 0 512 512"><g><g xmlns="http://www.w3.org/2000/svg"><path d="m196.069 263.953c2.63 0 5.069-1.378 6.425-3.632l13.531-22.475 17.93 28.492c1.402 2.229 3.852 3.552 6.505 3.504 2.633-.055 5.044-1.487 6.352-3.773l28.865-50.436 38.768 70.65c1.294 2.358 3.752 3.843 6.442 3.891.044 0 .089.001.133.001 2.639 0 5.089-1.389 6.443-3.662l24.153-40.546h58.242c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-62.504c-2.643 0-5.091 1.391-6.443 3.662l-19.624 32.942-38.897-70.886c-1.306-2.379-3.794-3.867-6.508-3.892-.023 0-.045 0-.068 0-2.688 0-5.172 1.439-6.509 3.774l-29.308 51.21-17.766-28.231c-1.374-2.183-3.771-3.505-6.348-3.505-.024 0-.049 0-.074 0-2.604.025-5.008 1.4-6.351 3.631l-17.628 29.281h-42.625c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5z" fill="#c2188f" data-original="#000000" className=""></path><path
            d="m423.096 55.795c-4.142 0-7.5 3.358-7.5 7.5v22.124h-22.122c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h22.122v22.125c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-22.125h22.122c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-22.122v-22.124c0-4.142-3.358-7.5-7.5-7.5z"
            fill="#c2188f" data-original="#000000" className=""></path><path
            d="m449.56 312.76c36.539-39.063 47.011-98.132 26.926-148.772 21.553-16.244 35.514-42.055 35.514-71.069 0-49.025-39.882-88.909-88.904-88.909-20.137 0-39.856 6.911-55.526 19.46-3.233 2.589-3.755 7.309-1.166 10.542 2.589 3.232 7.309 3.755 10.542 1.166 13.208-10.578 29.166-16.168 46.149-16.168 40.75 0 73.904 33.156 73.904 73.909 0 40.77-33.153 73.938-73.904 73.938-37.943 0-69.286-28.738-73.448-65.589-.008-.085-.022-.171-.033-.257-.291-2.659-.452-5.357-.452-8.092 0-11.576 2.601-22.646 7.729-32.904 1.852-3.705.35-8.21-3.354-10.063-3.708-1.851-8.21-.35-10.063 3.354-6.179 12.359-9.312 25.687-9.312 39.612 0 1.26.033 2.512.085 3.76-18.938 6.769-36.615 17.902-51.429 32.471l-8.29 8.15c-.04-.04-.07-.07-.11-.11l-8.15-8.03c-26.37-26-60.89-40.53-94.72-39.83-28.15.58-53.06 11.61-72.03 31.89-2.83 3.03-2.67 7.78.36 10.61 3.03 2.82 7.77 2.67 10.6-.36 16.14-17.26 37.36-26.65 61.38-27.14 29.8-.61 60.37 12.34 83.88 35.51l8.16 8.04c3.94 3.88 7.3 5.81 10.65 5.81 3.32 0 6.63-1.9 10.5-5.7l8.29-8.15c12.457-12.244 27.15-21.778 42.88-27.893 8.737 39.928 44.368 69.91 86.876 69.91 14.553 0 28.3-3.516 40.437-9.744 16.619 44.701 7.077 96.126-24.873 130.336l-107.668 110.212-8.91 1.74c-2.16.42-4.07.8-5.81 1.15-11.3 2.29-14 2.83-27.23.79l-64.15-11.73c-8.74-3.02-7.86-9.98-7.37-12.07.77-3.25 3.79-8.5 10.28-7.52.06.01.12.02.18.03 2.89.37 5.99.77 9.23 1.18 12.15 1.57 25.91 3.34 38.13 4.59 25 2.53 39.14-10.59 42.08-24.73 2.99-14.41-5.22-33.57-30.32-41.58-.3-.09-.61-.17-.93-.23l-41.31-7.58c-22.42-4.11-39.86-.94-66.26 3.86-6.98 1.27-14.9 2.7-23.72 4.15l-19.58 3.22-6.03-6.17-18.85-19.3c-35.23-37.77-43.04-96.93-18.96-143.9 1.89-3.68.43-8.2-3.25-10.09-3.69-1.89-8.21-.44-10.1 3.25-26.92 52.52-18.12 118.74 21.41 161.04.04.04.08.08.11.12l17.6 18.02-32.778 5.388v-.856c0-5.791-5.109-10.502-11.389-10.502h-61.703c-6.264 0-11.36 4.711-11.36 10.502v131.965c0 5.791 5.096 10.502 11.36 10.502h61.704c6.28 0 11.389-4.711 11.389-10.502v-.909l67.447 18.352 62.26 16.92c14.21 4.41 25.66 6.23 36.11 6.23 16.54 0 30.59-4.54 49.15-10.54 1.65-.53 3.34-1.08 5.08-1.64l122.69-39.34c14.22-4.56 24.34-14.8 27.06-27.39 2.11-9.76-.83-19.4-7.87-25.79-5.7-5.17-19.1-12.59-44.93-4.42l-44.54 8.71 92.54-94.7c.04-.04.07-.08.11-.12zm-434.56 150.139v-122.97h54.452v5.153c0 .016-.002.031-.002.047v111.54c0 .009.002.017.002.026v6.204zm390.6-49.609c13.84-4.44 25.03-4.04 30.71 1.11 3.06 2.78 4.26 6.98 3.28 11.5-1.58 7.29-7.93 13.38-16.98 16.28l-122.7 39.35c-1.75.56-3.45 1.11-5.11 1.65-29.35 9.48-44.08 14.25-76.32 4.22-.08-.03-.17-.05-.26-.08l-133.768-36.379v-99.451l72.858-11.97c8.94-1.47 16.93-2.93 23.98-4.21 25.65-4.66 41.14-7.47 60.86-3.85l40.83 7.49c15.92 5.23 21.41 16.12 19.75 24.09-1.91 9.21-12.07 14.26-25.87 12.86-12.02-1.23-25.68-2.99-37.73-4.54-3.22-.42-6.31-.82-9.18-1.18-14.34-2.12-24.45 7.91-27.03 18.94-.55 2.35-.77 4.85-.61 7.37.55 9.12 6 18.58 18.44 22.55.31.1 4.45.87 4.45.87l61.25 11.2c.06.01.13.02.2.03 12.64 1.97 18.11 1.8 25.86.43 2.03-.36 10.31-2.04 12.44-2.45l13.5-2.64s66.87-13.1 67.15-13.19z"
            fill="#c2188f" data-original="#000000"></path></g></g></svg>,
    },
    {
        title: 'بیمه مهندسی',
        link: '',
        icon: <svg
            width="64" height="64" x="0" y="0" viewBox="0 0 74 74"><g><path xmlns="http://www.w3.org/2000/svg" d="m37 41.849a14.578 14.578 0 0 1 -14.563-14.562v-4.912h29.123v4.913a14.578 14.578 0 0 1 -14.56 14.561zm-12.563-17.474v2.913a12.562 12.562 0 0 0 25.123 0v-2.913z" fill="#c2188f" data-original="#000000" className=""></path><path
            xmlns="http://www.w3.org/2000/svg"
            d="m47.961 45.655a6.46 6.46 0 0 1 -4.888-6.8l2 .059a4.457 4.457 0 0 0 3.382 4.805z"
            fill="#c2188f" data-original="#000000" className=""></path><path
            xmlns="http://www.w3.org/2000/svg"
            d="m26.021 45.656-.479-1.941a4.418 4.418 0 0 0 3.375-4.8l2-.062a6.415 6.415 0 0 1 -4.896 6.803z"
            fill="#c2188f" data-original="#000000" className=""></path><path
            xmlns="http://www.w3.org/2000/svg"
            d="m66.24 72h-58.457l.009-1.009a57.069 57.069 0 0 1 1.317-12.679 23.776 23.776 0 0 1 4.667-9.958l.167-.2 6.9-2.652.718 1.867-6.406 2.463a22.061 22.061 0 0 0 -4.1 8.943 53.161 53.161 0 0 0 -1.248 11.225h54.363c-.389-8.905-2.148-15.519-5.368-20.182l-6.358-2.449.719-1.866 6.923 2.667.174.245c3.69 5.185 5.64 12.56 5.948 22.554z"
            fill="#c2188f" data-original="#000000" className=""></path><path
            xmlns="http://www.w3.org/2000/svg"
            d="m56.763 72h-39.53v-15.937a3.083 3.083 0 0 1 3.08-3.08h33.37a3.083 3.083 0 0 1 3.08 3.08zm-37.53-2h35.53v-13.937a1.081 1.081 0 0 0 -1.08-1.08h-33.37a1.081 1.081 0 0 0 -1.08 1.08z"
            fill="#c2188f" data-original="#000000" className=""></path><path
            xmlns="http://www.w3.org/2000/svg"
            d="m53.8 54.984h-6.651v-10.064a1.507 1.507 0 0 1 1.982-1.43l3.636 1.21a1.5 1.5 0 0 1 1.031 1.43zm-4.648-2h2.648v-6.5l-2.651-.884z"
            fill="#c2188f" data-original="#000000" className=""></path><path
            xmlns="http://www.w3.org/2000/svg"
            d="m26.847 54.984h-6.647v-8.855a1.5 1.5 0 0 1 1.032-1.43l3.635-1.209a1.507 1.507 0 0 1 1.982 1.43zm-4.649-2h2.649v-7.384l-2.649.881z"
            fill="#c2188f" data-original="#000000" className=""></path><path
            xmlns="http://www.w3.org/2000/svg"
            d="m37.011 49.1c-3.216 0-6.463-1.648-9.651-4.9l1.428-1.4c2.824 2.88 5.656 4.329 8.295 4.3s5.306-1.468 7.965-4.287l1.452 1.37c-3.046 3.23-6.209 4.884-9.4 4.915z"
            fill="#c2188f" data-original="#000000" className=""></path><path
            xmlns="http://www.w3.org/2000/svg"
            d="m51.892 24.375h-29.784a1.418 1.418 0 0 1 -1.416-1.416v-3.743a1.417 1.417 0 0 1 1.416-1.416h29.784a1.417 1.417 0 0 1 1.416 1.416v3.742a1.418 1.418 0 0 1 -1.416 1.417zm-29.2-2h28.616v-2.575h-28.616z"
            fill="#c2188f" data-original="#000000" className=""></path><path
            xmlns="http://www.w3.org/2000/svg"
            d="m52.135 19.8h-30.526v-1.716a14.246 14.246 0 0 1 8.412-13.189l.795 1.835a12.231 12.231 0 0 0 -7.2 11.071h26.52a12.231 12.231 0 0 0 -7.2-11.071l.795-1.835a14.246 14.246 0 0 1 8.412 13.189z"
            fill="#c2188f" data-original="#000000" className=""></path><path
            xmlns="http://www.w3.org/2000/svg"
            d="m42.278 19.8h-10.812l-2.125-14.5a1.684 1.684 0 0 1 .946-1.76 14.885 14.885 0 0 1 13.175 0 1.687 1.687 0 0 1 .938 1.76zm-9.084-2h7.356l1.839-12.553a12.749 12.749 0 0 0 -11.033 0z"
            fill="#c2188f" data-original="#000000" className=""></path><path
            xmlns="http://www.w3.org/2000/svg"
            d="m49.842 60.718h-1.057a1 1 0 0 1 0-2h1.057a1 1 0 0 1 0 2z" fill="#c2188f"
            data-original="#000000" className=""></path><path xmlns="http://www.w3.org/2000/svg"
                                                              d="m25.215 60.718h-1.057a1 1 0 1 1 0-2h1.057a1 1 0 0 1 0 2z"
                                                              fill="#c2188f"
                                                              data-original="#000000"
                                                              className=""></path></g></svg>,
    },
    {
        title: 'بیمه خودرو',
        link: '',
        icon: <svg width="64" height="64" viewBox="0 0 85 70" fill="none"><path d="M81.4921 29.8362L81.5283 29.9092L81.5732 29.977C81.5981 30.0145 81.6387 30.0941 81.6929 30.2468C81.7187 30.3194 81.7436 30.3969 81.7717 30.4865C81.7971 30.568 81.8303 30.6762 81.8622 30.7725L81.8722 30.8026L81.8836 30.8321C82.603 32.6931 83.1125 35.2929 83.1125 36.8748V48.9002C83.1125 52.0428 81.0086 54.6265 78.0594 55.3683L77.0812 55.6143V56.6229V63.6837C77.0812 66.3813 74.9269 68.4578 72.3437 68.4578C69.6661 68.4578 67.6061 66.3967 67.6061 63.6837V56.8436V55.5498H66.3124H18.2814H16.9876V56.8436V63.6837C16.9876 66.3967 14.9277 68.4578 12.2501 68.4578C9.66682 68.4578 7.51254 66.3813 7.51254 63.6837V56.6229V55.6143L6.53436 55.3683C3.58516 54.6265 1.48125 52.0428 1.48125 48.9002V36.8748C1.48125 35.2929 1.9908 32.6931 2.71015 30.8321L2.72156 30.8026L2.73152 30.7725C2.75673 30.6964 2.78272 30.6129 2.80509 30.5411C2.81104 30.5219 2.81673 30.5036 2.82209 30.4865C2.85012 30.397 2.87504 30.3195 2.90082 30.2468C2.95504 30.0941 2.9957 30.0145 3.02052 29.977L3.0655 29.9092L3.10162 29.8362L15.5951 4.58747C15.9618 3.89829 16.6835 3.14712 17.5945 2.56392C18.5138 1.97538 19.4794 1.65105 20.2552 1.65105H64.3385C65.1143 1.65105 66.08 1.97538 66.9993 2.56392C67.9101 3.14709 68.6319 3.8982 68.9986 4.58735L81.4921 29.8362ZM18.4139 11.0876L18.4114 11.0932L11.7504 26.3636C11.2816 27.207 11.2841 28.1339 11.2852 28.5472C11.2853 28.566 11.2853 28.5838 11.2853 28.6004V29.8942H12.5791H72.0147H73.3084V28.6004C73.3084 28.5838 73.3085 28.566 73.3085 28.5472C73.3096 28.1339 73.3121 27.207 72.8433 26.3636L66.1823 11.0932L66.1799 11.0876C65.6167 9.81274 64.5445 8.70143 63.3731 7.91576C62.2056 7.13271 60.7786 6.56564 59.4038 6.56564H25.1899C23.8152 6.56564 22.3881 7.13271 21.2206 7.91576C20.0492 8.70143 18.9771 9.81274 18.4139 11.0876ZM16.6365 50.194C20.9108 50.194 24.1808 46.6946 24.1808 42.391C24.1808 38.1535 20.8675 34.8088 16.6365 34.8088C12.4641 34.8088 8.8728 38.096 8.8728 42.391C8.8728 46.7532 12.4197 50.194 16.6365 50.194ZM67.9573 50.194C72.174 50.194 75.721 46.7532 75.721 42.391C75.721 38.096 72.1297 34.8088 67.9573 34.8088C63.7263 34.8088 60.4129 38.1535 60.4129 42.391C60.4129 46.6946 63.683 50.194 67.9573 50.194Z" stroke="url(#paint0_linear_2_390)" strokeWidth="2.5875"></path><defs><linearGradient id="paint0_linear_2_390" x1="-26.6094" y1="80.5944" x2="119.67" y2="-21.4335" gradientUnits="userSpaceOnUse"><stop stopColor="#E40F7E"></stop><stop offset="1" stopColor="#8E24AA"></stop></linearGradient></defs></svg>,
    },
    {
        title: 'بیمه های خاص',
        link: '',
        icon:  <svg version="1.1"
                    width="64" height="64" x="0" y="0" viewBox="0 0 50 50"
        ><g><g><path d="m49.00978 26.90499c-.09286-8.94457.43715-5.37774-4.03906-13.12158-1.47467-2.39282-5.22266-1.35348-5.22266 1.48486 0 .75053.07137.58531 1.72168 5.48291v2.37109c-3.61647-1.10671-4.03599 3.40228-7.75879 6.45557-4.08414 3.34618-.62732 5.90683-2.01465 12.43847h-.25586c-1.10254 0-2 .89697-2 2v2.98389c0 1.10303.89746 2 2 2h10.83789c1.10254 0 2-.89697 2-2v-2.98389c0-.97314-.69922-1.78369-1.62085-1.96167.08984-2.1864.95508-3.99951 2.83179-5.86597 3.33842-3.72939 3.59822-1.6547 3.52051-9.28368zm-17.56933 20.09522v-2.98389h10.83789l.00098 2.98389zm12.59863-12.18799c-2.20801 2.19385-3.29199 4.49121-3.3916 7.2041h-6.90137c1.30313-6.70792-1.74174-8.45134 1.23242-10.89209 1.45885-1.19642 2.88989-3.13684 3.8584-4.57959.83496-1.24316 1.11328-1.55859 1.7207-1.55859.42773 0 .80957.23438 1.02344.62744.90681 1.84581-5.86516 6.51559-3.68652 7.92138.46484.29883 1.08398.16504 1.38184-.29834 2.82783-4.37857 5.25452-5.79082 4.19336-8.30029-.02165-5.62261.38186-3.5112-1.34766-8.43701-.37402-1.06494-.37402-1.07129-.37402-1.23096 0-.82908 1.10658-1.10873 1.50488-.46045 4.35638 7.54165 3.66948 3.66966 3.75684 12.11768.0672 6.60589.14691 4.39337-2.97071 7.88672z" fill="#c2188f" data-original="#000000" className=""></path><path
            d="m7.29396 42.05538c-.91846.18042-1.61426.98999-1.61426 1.96094v2.98389c0 1.10303.89746 2 2 2h10.8379c1.10254 0 2-.89697 2-2v-2.98389c0-1.10303-.89746-2-2-2h-.25537c-1.24494-5.9161 1.09652-7.58844-.47998-10.58203l-.00879.00439c-.33984-.80029-1.30566-1.75732-1.89649-2.15625-.74542-.50154-3.34069-4.22672-3.9209-5.00098-.81017-1.1023-2.19396-1.54546-3.4668-1.15967v-2.36718c.50221-2.50658 3.48138-6.39058.12402-8.01221-1.35352-.65283-2.84473-.22754-3.63965 1.06543-2.57618 4.45783-3.99414 5.49968-3.99414 8.09375v9.32471c.00001 3.56314 6.0607 4.89233 6.31446 10.8291zm11.22461 4.94483h-10.83886v-2.98389h10.83789zm-15.53906-25.09863c0-1.84503 1.27422-2.84592 3.71191-7.06983.5048-.8189 1.80506-.20268 1.47461.70996-2.02505 5.96073-1.72128 3.73747-1.67676 9.39453-1.06651 2.51551 1.36199 3.91017 4.19141 8.30029.2998.46338.91699.59668 1.38281.29834.46387-.29932.59766-.91846.29883-1.38232-2.75245-4.26603-4.58759-5.31317-3.98438-6.53906.19922-.36768.54199-.59473.94238-.62402.77698-.0555 1.03242.47874 1.65234 1.33936 1.51953 2.11035 2.95313 4.05078 3.78613 4.61182 3.08599 2.08513.25483 4.81066 1.45508 11.07568h-6.90331c-.24368-6.54165-6.33105-8.74097-6.33105-10.79004z"
            fill="#c2188f" data-original="#000000" className=""></path><path
            d="m27.85451 13.02804-3.95215 3.94434-1.5459-1.54297c-.39063-.38965-1.02344-.39014-1.41406.00146-.38965.39111-.38965 1.02442.00195 1.41455l2.25195 2.24756c.19531.19482.4502.29199.70605.29199s.51172-.09766.70605-.29199l4.6582-4.64893c.3916-.39014.3916-1.02344.00195-1.41455-.3906-.3916-1.02341-.39111-1.41404-.00146z"
            fill="#c2188f" data-original="#000000" className=""></path><path
            d="m38.83498 1.00802c-.00879.00146-.01758.00244-.02539.00391-.30664-.04785-.62402.04688-.8584.27979-3.33594 3.3252-8.76758 3.3252-12.10352 0-.375-.37305-1.07422-.37305-1.44922 0-3.42188 3.41016-8.99121 3.41211-12.41309 0-.1875-.18652-.47656-.2915-.74121-.2915-.50391 0-.92969.375-.99219.875-1.35938 10.80518 4.68359 26.49707 14.5127 30.53467.12207.05029.25098.0752.37988.0752.13086 0 .26074-.02539.38379-.07666 9.7959-4.0708 15.79785-19.75684 14.4248-30.53467-.06932-.54787-.57713-.93605-1.11815-.86574zm-13.69238 29.38721c-8.13379-3.67383-13.45215-16.77246-13.05664-26.43164 3.94336 2.70703 9.30957 2.49805 13.03809-.62695 3.72266 3.10938 9.11035 3.25635 12.98926.4375.4873 9.65478-4.81349 22.89599-12.97071 26.62109z"
            fill="#c2188f" data-original="#000000" className=""></path></g></g></svg>,
    },
    {
        title: 'بیمه انرژی',
        link: '',
        icon: <svg version="1.1"
                   width="64" height="64" x="0" y="0" viewBox="0 0 439 439.431"><g><path xmlns="http://www.w3.org/2000/svg" d="m364.402344 59.347656c-40.261719-38.273437-93.8125-59.347656-150.785156-59.347656-56.976563 0-110.523438 21.074219-150.785157 59.347656-40.378906 38.375-62.617187 89.46875-62.617187 143.878906.003906 4 2.957031 7.382813 6.921875 7.921876 3.964843.539062 7.71875-1.933594 8.789062-5.789063 1.324219-4.789063 6.476563-19.582031 12.667969-25.980469 8.53125-7.605468 19.585938-11.761718 31.011719-11.664062h.027343c11.398438-.148438 22.433594 4.011718 30.890626 11.652344 8.109374 8.242187 12.394531 18.140624 12.394531 28.839843.019531 4.417969 3.621093 7.984375 8.039062 7.960938 4.417969-.019531 7.980469-3.621094 7.960938-8.039063 0-10.6875 4.273437-20.488281 12.367187-28.726562 8.53125-7.613282 19.585938-11.78125 31.019532-11.6875h.027343c11.398438-.148438 22.429688 4.011718 30.890625 11.652344 8.109375 8.242187 12.394532 18.039062 12.394532 28.738281v196.210937c0 10.71875-9.019532 19.113282-20.53125 19.113282-11.507813 0-20.527344-8.398438-20.527344-19.113282 0-4.417968-3.578125-8-8-8-4.417969 0-8 3.582032-8 8 0 19.691406 16.046875 35.113282 36.53125 35.113282 20.480468 0 36.527344-15.421876 36.527344-35.113282v-196.210937c0-10.691407 4.273437-20.480469 12.367187-28.71875 8.53125-7.609375 19.585937-11.769531 31.019531-11.671875h.015625c11.402344-.152344 22.4375 4.011718 30.902344 11.648437 8.105469 8.246094 12.390625 18.148438 12.390625 28.84375.023438 4.417969 3.621094 7.984375 8.039062 7.960938 4.417969-.019531 7.984376-3.621094 7.960938-8.039063 0-10.6875 4.277344-20.492187 12.367188-28.726562 8.53125-7.613282 19.589843-11.78125 31.019531-11.6875h.027343c11.394532-.140625 22.421876 4.019531 30.890626 11.644531 6.199218 6.378906 11.257812 20.957031 12.6875 26.101563 1.09375 3.84375 4.859374 6.296874 8.820312 5.738281 3.957031-.558594 6.902344-3.953125 6.890625-7.953125 0-54.402344-22.238281-105.523438-62.613281-143.898438zm3.785156 92.160156c-.171875 0-.347656.207032-.523438.207032h-.035156c-15.460937-.085938-30.390625 5.609375-41.863281 15.972656-.101563.09375-.199219.085938-.300781.183594-3.5 3.496094-6.574219 7.398437-9.152344 11.621094-2.574219-4.25-5.644531-8.175782-9.148438-11.699219-.085937-.085938-.171874.027343-.257812-.054688-11.476562-10.589843-26.378906-17.023437-41.9375-16.023437h-.039062c-15.460938-.085938-30.390626 5.609375-41.863282 15.972656-.097656.09375-.199218.085938-.300781.1875-2.398437 2.40625-4.601563 5.003906-6.585937 7.765625-1.652344-.589844-3.460938-.605469-5.125-.039063-1.984376-2.78125-4.183594-5.398437-6.585938-7.824218-.085938-.085938-.171875.035156-.257812-.046875-11.480469-10.589844-26.363282-17.015625-41.941407-16.015625h-.039062c-15.457031-.085938-30.390625 5.609375-41.859375 15.972656-.097656.09375-.203125.085938-.300782.183594-3.5 3.496094-6.570312 7.398437-9.148437 11.621094-2.578125-4.25-5.648437-8.175782-9.152344-11.699219-.085937-.085938-.171875-.179688-.257812-.261719-11.289063-10.375-26.085938-16.097656-41.417969-16.015625-.175781 0-.347656.199219-.523438.199219h-.035156c-14.292968-.085938-28.171875 4.773437-39.289062 13.757812 7.65625-35.5 26.035156-68.222656 53.605468-94.425781 37.277344-35.429687 86.914063-54.996094 139.765626-54.996094 52.847656 0 102.484374 19.488281 139.761718 54.917969 27.558594 26.199219 45.9375 58.894531 53.597656 94.378906-10.921874-8.988281-24.640624-13.882812-38.789062-13.839844zm0 0" fill="#c2188f" data-original="#000000" className=""></path><path
            xmlns="http://www.w3.org/2000/svg"
            d="m377.332031 278.714844h-25.433593l14.535156-35.140625c1.019531-2.433594.738281-5.21875-.746094-7.398438-1.492188-2.199219-3.992188-3.496093-6.648438-3.460937h-67.613281c-4.117187-.027344-7.574219 3.09375-7.964843 7.195312l-8.238282 88.28125c-.210937 2.207032.539063 4.398438 2.050782 6.019532 1.527343 1.632812 3.675781 2.542968 5.914062 2.5h22.199219l-3.5 59.984374c-.242188 3.675782 2.050781 7.042969 5.558593 8.160157 3.511719 1.117187 7.328126-.304688 9.257813-3.441407l67.457031-110.398437c1.511719-2.484375 1.574219-5.589844.160156-8.132813-1.410156-2.546874-4.078124-4.136718-6.988281-4.167968zm-57.605469 87.007812 2.128907-36.386718c.128906-2.222657-.652344-4.402344-2.167969-6.03125-1.503906-1.625-3.605469-2.558594-5.820312-2.589844h-21.898438l6.746094-72h48.367187l-14.535156 35.144531c-1.019531 2.433594-.738281 5.214844.746094 7.398437 1.492187 2.195313 3.992187 3.496094 6.648437 3.457032h23.128906zm0 0"
            fill="#c2188f" data-original="#000000" className=""></path><path
            xmlns="http://www.w3.org/2000/svg"
            d="m161.628906 282.867188c-1.410156-2.539063-4.074218-4.125-6.976562-4.152344h-25.4375l14.535156-35.140625c1.015625-2.433594.734375-5.214844-.746094-7.398438-1.496094-2.195312-3.992187-3.492187-6.648437-3.453125h-67.613281c-4.117188-.03125-7.574219 3.089844-7.964844 7.191406l-8.238282 88.28125c-.207031 2.207032.539063 4.398438 2.050782 6.023438 1.53125 1.632812 3.679687 2.539062 5.914062 2.5h22.203125l-3.5 59.980469c-.242187 3.671875 2.050781 7.039062 5.558594 8.152343 3.507813 1.117188 7.324219-.300781 9.25-3.4375l67.457031-110.4375c1.511719-2.476562 1.570313-5.574218.15625-8.109374zm-64.585937 82.855468 2.128906-36.386718c.128906-2.222657-.652344-4.402344-2.164063-6.03125-1.503906-1.625-3.609374-2.558594-5.820312-2.589844h-21.902344l6.746094-72h48.367188l-14.53125 35.144531c-1.019532 2.433594-.738282 5.214844.742187 7.398437 1.496094 2.195313 3.996094 3.492188 6.652344 3.453126h23.125zm0 0"
            fill="#c2188f" data-original="#000000" className=""></path></g></svg>,
    },
    {
        title: 'بیمه کشتی و هواپیما',
        link: '',
        icon: <svg version="1.1"
                   width="64" height="64" x="0" y="0" viewBox="0 0 507.923 507"><g><path xmlns="http://www.w3.org/2000/svg" d="m8 445.78125c15.199219 0 22.40625 4.992188 30.753906 10.777344 9.128906 6.328125 19.484375 13.5 39.324219 13.5 20.199219 0 30.648437-7.238282 39.863281-13.628906 8.25-5.714844 15.375-10.652344 30.214844-10.652344 15.203125 0 22.40625 4.996094 30.753906 10.777344 9.132813 6.328124 19.484375 13.5 39.328125 13.5 20.199219 0 30.644531-7.238282 39.863281-13.625 8.25-5.714844 15.375-10.652344 30.214844-10.652344 15.152344 0 22.375 4.972656 30.742188 10.730468 9.226562 6.351563 19.6875 13.546876 39.8125 13.546876 20.128906 0 30.589844-7.199219 39.816406-13.546876 8.363281-5.757812 15.589844-10.730468 30.742188-10.730468 4.417968 0 8-3.582032 8-8 0-4.417969-3.582032-8-8-8-20.125 0-30.585938 7.199218-39.8125 13.546875-8.367188 5.757812-15.59375 10.730469-30.746094 10.730469-3.128906.019531-6.253906-.234376-9.339844-.757813l32.277344-110.890625c1.027344-3.167969-.046875-6.644531-2.691406-8.675781l-43.21875-32.007813v-54.488281c13 5.28125 28.871093 8.179687 44.671874 8.179687 70.289063 0 127.351563-57.1875 127.351563-127.476562s-57.40625-127.476562-127.695313-127.476562c-58.835937 0-108.328124 40.074218-123.328124 94.351562v-34.089844c0-4.417968-3.253907-8.460937-7.671876-8.460937h-61.027343c-4.5625.191406-8.195313 3.894531-8.300781 8.460937v104.539063h-69.878907c-4.496093.125-8.085937 3.789062-8.121093 8.289062v128.171875l-43.398438 32.007813c-2.695312 1.996093-3.855469 5.460937-2.90625 8.675781l32.265625 110.820312c-3.230469.578126-6.507813.855469-9.789063.832032-14.839843 0-21.960937-4.9375-30.210937-10.652344-9.214844-6.386719-19.660156-13.625-39.859375-13.625-4.417969 0-8 3.582031-8 8s3.582031 8 8 8zm326.539062 1.78125c-2.164062-1.3125-4.25-2.742188-6.410156-4.230469-9.226562-6.347656-19.6875-13.546875-39.8125-13.546875-19.84375 0-30.097656 7.171875-39.234375 13.5-6.617187 4.582032-12.183593 8.664063-22.183593 10.160156v-211.902343l94.644531 69.769531c.722656.828125 1.613281 1.492188 2.609375 1.957031l40.757812 30.03125zm45.785157-431.101562c61.566406 0 111.476562 49.910156 111.476562 111.476562 0 61.5625-49.90625 111.472656-111.472656 111.472656-61.566406.003906-111.476563-49.90625-111.476563-111.472656.066407-61.539062 49.9375-111.40625 111.472657-111.476562zm-123.425781 144.601562c1 1.503906 1.160156 3.199219 1.617187 4.199219h-1.617187zm-16-92.800781v28h-45v-28zm-45 44h45v53h-45zm-78 69h146.792968c11.644532 24.953125 31 45.507812 55.207032 58.628906v50.046875l-96.199219-70.660156c-2.886719-2.078125-6.78125-2.078125-9.671875 0l-96.128906 70.660156zm-45.261719 162.039062 138.261719-101.757812v212.03125c-10-1.375-16.066407-5.511719-22.785157-10.167969-9.214843-6.386719-19.714843-13.625-39.914062-13.625-19.839844 0-30.214844 7.171875-39.347657 13.5-2.03125 1.398438-3.957031 2.761719-5.984374 4.015625zm0 0" fill="#c2188f" data-original="#000000" className=""></path><path
            xmlns="http://www.w3.org/2000/svg"
            d="m309.054688 133.371094c.785156-2.929688 2.449218-7.035156 3.671874-8.488282 2.265626-2.121093 5.246094-3.308593 8.347657-3.335937 3.089843-.023437 6.066406 1.152344 8.304687 3.28125 2.183594 2.28125 3.417969 5.3125 3.445313 8.46875 0 4.417969 3.582031 8 8 8s8-3.582031 8-8c-.070313-3.136719 1.148437-6.164063 3.367187-8.382813s5.246094-3.433593 8.382813-3.367187c3.027343-.023437 5.9375 1.15625 8.09375 3.28125 2.113281 2.3125 3.265625 5.339844 3.230469 8.46875v59.285156c.078124.773438-.179688 1.539063-.710938 2.109375-.527344.570313-1.273438.882813-2.046875.863282-.785156.023437-1.546875-.285157-2.089844-.851563-.546875-.566406-.828125-1.335937-.777343-2.121094 0-4.394531-3.5625-7.957031-7.960938-7.957031-4.394531 0-7.957031 3.5625-7.957031 7.957031-.070313 6.753907 3.492187 13.023438 9.328125 16.421875 5.835937 3.398438 13.050781 3.398438 18.886718 0 5.835938-3.398437 9.398438-9.667968 9.328126-16.421875v-59.285156c.09375-3.144531 1.371093-6.140625 3.582031-8.382813 2.3125-2.136718 5.339843-3.335937 8.488281-3.367187 3.105469-.023437 6.101562 1.152344 8.359375 3.28125 2.195313 2.277344 3.4375 5.308594 3.472656 8.46875 0 4.425781 3.585938 8.011719 8.011719 8.011719 4.421875 0 8.007812-3.585938 8.007812-8.011719-.066406-3.136719 1.152344-6.164063 3.371094-8.382813s5.25-3.433593 8.386719-3.367187c3.078125-.023437 6.050781 1.144531 8.285156 3.261719 1.226563 1.390625 2.9375 5.582031 3.730469 8.550781 1.019531 3.890625 4.773438 6.414063 8.761719 5.898437 3.988281-.515624 6.972656-3.914062 6.972656-7.933593 0-48.050781-38.953125-87.003907-87.003906-87.003907-48.046875 0-87 38.953126-87 87.003907 0 4.019531 2.980469 7.410156 6.964843 7.929687 3.984376.519532 7.738282-1.996094 8.765626-5.882812zm71.269531-73.050782c29.632812.03125 56.136719 18.433594 66.527343 46.179688-9.53125-2.542969-19.695312.085938-26.800781 6.925781-.074219.074219-.148437.144531-.222656.21875-.015625-.015625-.03125-.03125-.046875-.046875-5.25-5.171875-12.328125-8.0625-19.699219-8.050781-7.277343.035156-14.265625 2.855469-19.53125 7.882813-.074219.070312-.148437.144531-.222656.21875-.015625-.019532-.03125-.035157-.046875-.050782-5.25-5.171875-12.328125-8.0625-19.699219-8.050781-7.277343.035156-14.265625 2.855469-19.53125 7.882813-.074219.070312-.148437.144531-.222656.214843l-.046875-.046875c-7.101562-6.984375-17.371094-9.679687-26.984375-7.078125 10.386719-27.753906 36.894531-46.164062 66.527344-46.199219zm0 0"
            fill="#c2188f" data-original="#000000" className=""></path></g></svg>,
    },
    {
        title: 'بیمه اشخاص',
        link: '',
        icon: <svg version="1.1"
                   width="64" height="64" x="0" y="0" viewBox="0 0 128 128"><g><g xmlns="http://www.w3.org/2000/svg" fill="rgb(0,0,0)"><path clipRule="evenodd" d="m66.0004 11.0002c.0001-1.10457-.8952-2.00009-1.9998-2.0002l-.016.00006c-1.0973.00838-1.9842.90044-1.9844 1.99974l-.0002 1.8957c-24.2949.8174-44.5449 16.4651-49.065 37.348-.564 2.6055.7289 4.7543 2.6249 5.8278 1.8356 1.0393 4.281 1.1261 6.365-.0973 2.2663-1.3304 4.6522-2.4753 6.6865-2.9495 2.3146-.5396 5.343.34 7.934 1.5181 1.2518.5693 2.5695.4479 3.6401-.0245 1.2092 1.112 3.1068 1.4015 4.6133.6766 1.2201-.5872 2.7292-1.2393 4.2745-1.729 1.5691-.4972 3.0492-.7857 4.2502-.7446 1.3515.0463 3.0494.5316 4.7591 1.2153 1.5359.6142 2.9484 1.3337 3.9174 1.8629v4.2007c0 1.1046.8954 2 2 2s2-.8954 2-2v-3.8952c.1318-.0584.2613-.1238.3877-.1963.9613-.5511 2.4831-1.3644 4.1501-2.0355 1.7057-.6867 3.38-1.1483 4.6989-1.1507 2.0741-.0039 4.913 1.1007 7.1167 2.1767 1.4989.7319 3.4452.4628 4.6621-.6843 1.0502.473 2.3424.6137 3.5893.0752 1.3813-.5965 2.96-1.1504 4.5137-1.4347 1.5713-.2876 2.9643-.271 4.0698.1118 2.2207.7689 4.8507 2.1371 7.2597 3.5485 2.043 1.1964 4.42 1.0975 6.203.052 1.834-1.0748 3.048-3.1792 2.545-5.6935-4.244-21.1971-24.6586-37.1526-49.1958-37.9785zm-15.2018 18.2891c4.2164-5.5458 9.3152-9.6918 13.1247-12.0547 3.6541 2.5912 8.4753 6.8734 12.5047 12.2654 3.8727 5.1822 6.9166 11.2565 7.6213 17.745.0755.6957.1242 1.3961.1441 2.1007.0066.2343.0101.469.0103.7041l.0001.0294c-.0001.4129-.0102.8272-.0306 1.2427-.0207-.0011-.0421-.0062-.0647-.0173-2.2141-1.0811-5.7927-2.5881-8.8793-2.5823-2.0852.0039-4.325.6912-6.1853 1.4401-1.899.7646-3.5952 1.6737-4.6456 2.2759-.0287.0165-.0646.0268-.104.0271-.0393.0004-.0735-.0094-.1001-.0241-1.05-.5835-2.7389-1.4642-4.6264-2.2189-1.8523-.7408-4.0617-1.4289-6.1074-1.499-1.8558-.0635-3.8343.3711-5.5954.9292-1.7849.5656-3.4777 1.301-4.8008 1.9377-.0254.0123-.0483.0163-.0707.0155l-.0056-.0002-.0049-.0005c-.2415-8.679 3.217-16.2672 7.8156-22.3158zm37.7272 21.2051c-.2592-.1735-.3176-.3671-.3219-.4395-.004-8.4497-3.6229-16.151-8.1367-22.3596-3.0152-4.1472-6.4825-7.7032-9.6867-10.4653 20.8678 2.4287 37.3245 16.6026 40.8935 34.4292.135.6774-.134 1.1573-.646 1.4575-.562.3295-1.392.3962-2.158-.0527-2.478-1.4515-5.377-2.978-7.973-3.8768-2.004-.6939-4.1633-.6208-6.0984-.2667-1.9528.3573-3.8346 1.03-5.3795 1.6971-.039.0169-.2243.0569-.4933-.1232zm-31.5845-33.1811c-20.3231 2.6251-36.3382 16.4113-40.0968 33.7764-.1483.6848.1186 1.1794.6862 1.5008.628.3556 1.55.4149 2.3692-.066 2.3805-1.3975 5.1793-2.7838 7.8034-3.3955 3.7005-.8627 7.7986.545 10.4978 1.7724.0472.0215.2277.0586.4797-.1013.2519-.1598.2912-.3355.2916-.3826.0906-9.5322 4.085-17.7022 9.0016-24.0167 2.8274-3.6314 5.9899-6.6895 8.9673-9.0875z" fillRule="evenodd" fill="#c2188f" data-original="#000000" className=""></path><path
            clipRule="evenodd"
            d="m21.5455 83.8097c0-6.532 5.2952-11.8273 11.8272-11.8273s11.8273 5.2953 11.8273 11.8273v1.7091c0 6.532-5.2953 11.8273-11.8273 11.8273s-11.8272-5.2953-11.8272-11.8273zm11.8272-7.8273c-4.3229 0-7.8272 3.5044-7.8272 7.8273v1.7091c0 4.3229 3.5043 7.8273 7.8272 7.8273s7.8273-3.5044 7.8273-7.8273v-1.7091c0-4.3229-3.5044-7.8273-7.8273-7.8273z"
            fillRule="evenodd" fill="#c2188f" data-original="#000000" className=""></path><path
            d="m27.3909 97.6188c-7.9479 0-14.3909 6.4432-14.3909 14.3912 0 1.104.8954 2 2 2s2-.896 2-2c0-5.739 4.6522-10.391 10.3909-10.391h10.2546c2.4387 0 4.6763.837 6.4485 2.242.0911.072.1866.135.2853.189-.4002 1.301-.6156 2.682-.6156 4.114v6.836c0 1.105.8954 2 2 2 1.1045 0 2-.895 2-2v-6.836c0-5.503 4.4608-9.964 9.9636-9.964h11.9636c5.5028 0 9.9637 4.461 9.9637 9.964v6.836c0 1.105.8954 2 2 2 1.1045 0 2-.895 2-2v-6.836c0-1.521-.243-2.984-.6921-4.354 1.7617-1.374 3.9744-2.191 6.3833-2.191h10.2545c5.7387 0 10.3907 4.652 10.3907 10.391 0 1.104.896 2 2 2 1.105 0 2-.896 2-2 0-7.948-6.443-14.3912-14.3907-14.3912h-10.2545c-3.0438 0-5.871.947-8.1971 2.5612-2.5236-3.615-6.7145-5.98-11.4578-5.98h-11.9636c-4.8321 0-9.0909 2.4544-11.5978 6.185-2.3788-1.739-5.3139-2.7662-8.484-2.7662z"
            fill="#c2188f" data-original="#000000" className=""></path><g clipRule="evenodd"
                                                                          fillRule="evenodd"><path d="m105.446 83.8097c0-6.532-5.295-11.8273-11.8275-11.8273-6.532 0-11.8273 5.2953-11.8273 11.8273v1.7091c0 6.532 5.2953 11.8273 11.8273 11.8273 6.5325 0 11.8275-5.2953 11.8275-11.8273zm-11.8275-7.8273c4.3229 0 7.8275 3.5044 7.8275 7.8273v1.7091c0 4.3229-3.5046 7.8273-7.8275 7.8273s-7.8273-3.5044-7.8273-7.8273v-1.7091c0-4.3229 3.5044-7.8273 7.8273-7.8273z" fill="#c2188f" data-original="#000000" className=""></path><path
            d="m51.2017 78.5193c0-6.9142 5.6051-12.5193 12.5194-12.5193 6.9142 0 12.5193 5.6051 12.5193 12.5193v1.8295c0 6.9142-5.6051 12.5193-12.5193 12.5193-6.9143 0-12.5194-5.6051-12.5194-12.5193zm12.5194-8.5193c-4.7051 0-8.5194 3.8142-8.5194 8.5193v1.8295c0 4.7051 3.8143 8.5193 8.5194 8.5193s8.5193-3.8142 8.5193-8.5193v-1.8295c0-4.7051-3.8142-8.5193-8.5193-8.5193z"
            fill="#c2188f" data-original="#000000" className=""></path></g></g></g></svg>,
    },
];

export const allInsurances = () => {
    return DUMMY_DATA;
};