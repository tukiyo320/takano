interface Convention {
  id: string,
  title: string,
  type: string,
  versions: Array<string>,
  hold_date: Date,
  start_at: Date,
  area: string,
  site: string,
  site_address_first: string,
  site_address_second?: string,
  fee: number,
  capacity: number,
  a_day_entry: string,
  reserve_description?: string,
  comment?: string
}