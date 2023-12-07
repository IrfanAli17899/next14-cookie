'use server'
import { cookies } from 'next/headers';
export const saveCookie = async () => {
    cookies().set({
        name: 'token',
        value:'1234',
        secure: true,
        httpOnly: true,
        sameSite: 'lax',
      });
    return Promise.resolve();
}
export const deleteCookie = async () => {
    cookies().delete('token');
    return Promise.resolve();
} 