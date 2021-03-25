import React, { useReducer, FC, ReactNode, createContext } from 'react';
import en from '../languageText/en.json';
import da from '../languageText/da.json';
enum LangActionType {
    SET_LANGUAGE = 'SET_LANGUAGE',
}

interface LangState {
    language: string;
}

interface LangStateProps {
    children: ReactNode;
}

interface SetLanguageAction {
    type: typeof LangActionType.SET_LANGUAGE;
    payload: string;
}
interface ContextProps {
    state: LangState;
    dispatch: {
        setLanguage: (lang: string) => void;
        translate: (key: string) => string;
    };
}
const langReducer = (state: LangState, action: SetLanguageAction): LangState => {
    switch (action.type) {
        case LangActionType.SET_LANGUAGE:
            return {
                language: action.payload,
            };
        default:
            return state;
    }
};
const localStorageLang = localStorage.getItem('language');
const initialState = {
    language: localStorageLang ? localStorageLang : 'EN',
};
//Language Context Here
export const LanguageContext = createContext({} as ContextProps);

// eslint-disable-next-line react/prop-types
const LangState: FC<LangStateProps> = ({ children }) => {
    const [state, dispatch] = useReducer(langReducer, initialState);

    const setLanguage = (lang: string) => {
        localStorage.setItem('language', lang);
        dispatch({
            type: LangActionType.SET_LANGUAGE,
            payload: lang,
        });
    };
    const translate = (key: string): string => {
        const { language } = state;
        let langData: { [key: string]: string } = {};

        if (language === 'EN') {
            langData = en;
        } else if (language === 'DA') {
            langData = da;
        }

        return langData[key];
    };

    return (
        <LanguageContext.Provider value={{ state, dispatch: { setLanguage, translate } }}>
            {children}
        </LanguageContext.Provider>
    );
};
export default LangState;
