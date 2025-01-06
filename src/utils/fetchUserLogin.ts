import { User } from "@/@types/User";

export async function fetchUserLogin(username: string, password: string): Promise<User | null> {
  try {
    const res = await fetch(`https://mdgp.dev.id360.net/api/areaClienteLogin?username=${username}&password=${password}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store', // Evita o uso de cache
    });

    if (!res.ok) {
      throw new Error('Failed to log in');
    }

    const response = await res.json();

    return response.user || null;
  } catch (error) {
    console.error('Error fetching user login:', error);
    return null;
  }
}
