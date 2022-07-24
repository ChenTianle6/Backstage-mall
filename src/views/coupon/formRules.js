export const formRules = {
  name: {
    label: '优惠券名称',
    clearable: true,
    type: 'text',
    maxlength: 60,
    placeholder: '请输入优惠券名称',
    showLabel: true
  },
  type: {
    label: '类型',
    type: 'radio',
    showLabel: true,
    options: [
      {
        label: '满减',
        value: 0
      },
      {
        label: '折扣',
        value: 1
      }
    ]
  },
  value: {
    label: '面值',
    type: 'text',
    maxlength: 10,
    showLabel: true,
    slotName: 'append',
    slot_cnt: '元'
  },
  total: {
    label: '发行量',
    type: 'number',
    showLabel: true
  },
  min_price: {
    label: '最低使用价格',
    clearable: true,
    type: 'text',
    maxlength: 60,
    placeholder: '最低使用价格',
    showLabel: true
  },
  order: {
    label: '排序',
    type: 'number',
    showLabel: true
  },
  start_time: {
    label: '开始时间',
    type: 'date',
    showLabel: true

  },
  end_time: {
    label: '结束时间',
    type: 'date',
    showLabel: true

  },
  desc: {
    label: '描述',
    clearable: true,
    type: 'textarea',
    maxlength: 60,
    placeholder: '请输入优惠券描述',
    showLabel: true
  }
}
