import axios, { AxiosRequestConfig } from "axios";

axios.defaults.withCredentials = true;

export const apiUrl = "http://127.0.0.1:3001/";//https://fictional-guide-gw56694qrqpcwwrv-3001.app.github.dev/

export const getBase = async <T,>(url: string, config?: AxiosRequestConfig<any>, params?: any): Promise<T> => {
  let res = (await axios.get(url, { ...config, withCredentials: true, params: params }))
  return res.data;
};
export const postBase = async <T,>(url: string, data?: any, config?: AxiosRequestConfig<any>): Promise<T> => await (await axios.post(url, data, { ...config, withCredentials: true })).data;
export const deleteBase = async <T,>(url: string, config?: AxiosRequestConfig<any>): Promise<T> => await (await axios.delete(url, { ...config, withCredentials: true })).data;

export const get = <T,>(name: string, params?: any, url?: string, config?: AxiosRequestConfig<any> ) => (dispatch: (data: T) => void) => {
  getBase<T>(`${url ?? apiUrl}${name}`, config, params).then(
    (data) => { dispatch(data); },
    (err) => { console.log(err); });
};

export const post = <T,>(name: string, data?: any, url?: string, config?: AxiosRequestConfig) => (dispatch: (data: T) => void) => {
  postBase<T>(`${url ?? apiUrl}${name}`, data, config).then(
    (data) => { dispatch(data); },
    (err) => { console.log(err); });
};

export const remove = <T,>(name: string, url?: string, config?: AxiosRequestConfig) => (dispatch: (data: T) => void) => {
  deleteBase<T>(`${url ?? apiUrl}${name}`, config).then(
    (data) => { dispatch(data); },
    (err) => { console.log(err); });
}

export const postAsync = <T,>(name: string, data?: any, url?: string) => postBase<T>(`${url ?? apiUrl}${name}`, data);
export const getAsync = <T,>(name: string, url?: string) => getBase<T>(`${url ?? apiUrl}${name}`);

export const getProcedure = <T,>(name: string, params?: any) => getBase<T>(`${apiUrl}${name}`, params).then((data) => data, (err) => {
  throw err;
});

export const postProcedure = <T,>(name: string, params?: any) => postBase<T>(`${apiUrl}${name}`, params).then((data) => data, (err) => { 
  throw err;
});

export const deleteProcedure = <T,>(name: string) => deleteBase<T>(`${apiUrl}${name}`).then((data) => data, (err) => {
  throw err;
});