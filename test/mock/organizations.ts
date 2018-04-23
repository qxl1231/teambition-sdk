import { OrganizationSchema } from '../unit'

export const organizations: OrganizationSchema[] = [
  {
    _id: '5ab48cb599d4ad00010e06cc',
    name: 'Google',
    _creatorId: '569ee653f87e2d3e6ece85b8',
    logo: 'http://project.ci/api/images/organizations/3.jpg',
    description: '',
    category: '',
    pinyin: 'google',
    py: 'g',
    isPublic: false,
    dividers: [],
    projectIds: ['5ab48ccbceffcc001241e006', '5abc543eb262170012cfc031'],
    created: '2018-03-23T05:12:21.217Z',
    background: '',
    plan: {
      status: 'paid',
      expired: '2018-04-21T07:04:22.000Z',
      payType: 'trial',
      paidCount: 3,
      membersCount: 10000,
      trialType: 'org',
      trialExpired: '2018-04-28T07:04:22.000Z',
      days: -1,
      objectType: 'organization',
      _objectId: '5ab48cb599d4ad00010e06cc',
      isExpired: true,
      isTrialExpired: false
    },
    _defaultRoleId: null,
    _defaultOrgRoleId: null,
    _defaultTeamId: '5ab48cb599d4ad00010e06cd',
    staffTypes: [],
    positions: [],
    okrProgressMode: 'okrkeyresult',
    hasRight: 2,
    _roleId: 2
  },
  {
    _id: '5acf0425d9bd1500017f5e03',
    name: 'Alphabet',
    _creatorId: '569ee653f87e2d3e6ece85b8',
    logo: 'http://project.ci/api/images/organizations/5.jpg',
    description: '',
    category: '',
    pinyin: 'alphabet',
    py: 'a',
    isPublic: false,
    dividers: [],
    projectIds: ['5add9399ec560d0012893747'],
    created: '2018-04-12T07:00:53.070Z',
    background: '',
    plan: {
      status: 'trial',
      expired: '2018-04-11T07:02:15.000Z',
      payType: 'trial',
      paidCount: 0,
      membersCount: 10000,
      trialType: 'org',
      trialExpired: '2018-04-26T07:00:53.000Z',
      days: -11,
      objectType: 'organization',
      _objectId: '5acf0425d9bd1500017f5e03',
      isExpired: true,
      isTrialExpired: false
    },
    _defaultRoleId: null,
    _defaultOrgRoleId: null,
    _defaultTeamId: '5acf0425d9bd1500017f5e04',
    staffTypes: [],
    positions: [],
    okrProgressMode: 'okrkeyresult',
    hasRight: 2,
    _roleId: 2
  }
]
