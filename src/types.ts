export interface Option {
  id: number;
  text: string;
}

export interface Exercise {
  id: string;
  question: string;
  options: Option[];
  correctAnswer: number; // Now references the Option.id
}

export interface Lesson {
  id: string;
  title: string;
  content: string;
  iconName: string;
  exercises: Exercise[];
}
