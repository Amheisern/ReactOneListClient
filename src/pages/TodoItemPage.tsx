import React from "react";
import { useParams } from "react-router";

export function TodoItemPage() {
  const params = useParams<{ id: string }>()
  return <p>This would be the details of item {params.id}!</p>
}
