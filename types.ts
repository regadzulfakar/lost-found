
export interface User {
  id: number;
  username: string;
  nama_lengkap: string;
  email: string;
  no_telepon?: string;
}

export enum PostStatus {
  Hilang = 'Hilang',
  Temuan = 'Temuan',
}

export enum Category {
  Elektronik = 'Elektronik',
  Buku = 'Buku',
  Pakaian = 'Pakaian',
  Lainnya = 'Lainnya',
}

export enum ContactType {
    WhatsApp = 'WhatsApp',
    Telegram = 'Telegram',
    Email = 'Email',
    Telepon = 'Telepon',
    Instagram = 'Instagram',
    Line = 'Line',
    Lainnya = 'Lainnya',
}

export interface Post {
  id: number;
  user_id: number;
  user: User;
  judul: string;
  deskripsi: string;
  kategori: Category;
  status: PostStatus;
  lokasi: string;
  tanggal: string; // ISO format string e.g., "2023-10-27"
  tipe_kontak: ContactType;
  kontak: string;
  foto: string;
  created_at: string;
}
