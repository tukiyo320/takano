interface Convention {
  id: string,
  title: string,
  type: string,
  versions: Array<string>,
  tags: string,
  hold_date: Date,
  start_at: Date,
  area: string,
  site: string,
  site_address: string,
  fee: number,
  capacity: number,
  a_day_entry: string,
  reserve_description?: string,
  comment?: string
}
